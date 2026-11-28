/* LLM の学習と推論のコストを下げる手法：内訳のカード、アプローチの表、手法の一覧を data/costs.js から描く */
(() => {
  const D = window.LLM_COST;
  if (!D) return;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u; } };
  const secName = Object.fromEntries(D.sections.map((s) => [s.id, s.name]));
  const groupName = {};
  for (const [sec, gs] of Object.entries(D.groups)) for (const g of gs) groupName[`${sec}/${g.id}`] = g.name;
  const stageName = Object.fromEntries(D.stages.map((s) => [s.id, s.name]));
  const reduceName = Object.fromEntries(D.reduces.map((r) => [r.id, r.name]));
  const tierBadge = (t) => t === "secondary" ? '<span class="lc-badge">推定値</span>' : "";

  // ---------- 数字のまとめ ----------
  $("#kfMethods").firstChild.nodeValue = D.methods.length;
  $("#kfEffects").firstChild.nodeValue = D.methods.reduce((n, m) => n + m.effects.length, 0);
  $("#kfFacts").firstChild.nodeValue = D.anatomy.length;
  const [y, mo, d] = D.asOf.split("-").map(Number);
  $("#kfAsOf").textContent = `${y}年${mo}月${d}日`;
  $("#asOfNote").textContent = `${y}年${mo}月${d}日時点の情報です。`;

  // ---------- 内訳のカード ----------
  $("#anatomy").innerHTML = D.places.map((p, i) => {
    const facts = D.anatomy.filter((a) => a.place === p.id);
    if (!facts.length) return "";
    return `<details class="lc-place"${i === 0 ? " open" : ""}><summary><span class="lc-place-name">${esc(p.name)}</span><span class="lc-place-n">${facts.length}件</span></summary><div class="lc-facts">${facts.map((a) => `
      <article class="lc-fact">
        <h4>${esc(a.title)}${tierBadge(a.tier)}</h4>
        <p>${esc(a.body)}</p>
        ${a.numbers ? `<p class="num">${esc(a.numbers)}</p>` : ""}
        ${a.caveat ? `<p class="cav">${esc(a.caveat)}</p>` : ""}
        <details class="lc-more"><summary>出典：${esc(host(a.url))}</summary>${a.quote ? `<blockquote lang="en">${esc(a.quote)}</blockquote>` : ""}<p class="cav"><a href="${esc(a.url)}" rel="noopener" target="_blank">${esc(a.source || a.url)}</a></p></details>
      </article>`).join("")}</div></details>`;
  }).join("");

  // ---------- アプローチの表 ----------
  const rows = [];
  for (const s of D.sections) {
    rows.push(`<tr class="sec"><td colspan="${D.reduces.length + 2}">${esc(s.name)}</td></tr>`);
    for (const g of D.groups[s.id]) {
      const ms = D.methods.filter((m) => m.section === s.id && m.group === g.id);
      if (!ms.length) continue;
      const cells = D.reduces.map((r) => {
        const n = ms.filter((m) => m.reduces.includes(r.id)).length;
        if (!n) return '<td class="n"><span class="lc-zero">·</span></td>';
        const pct = Math.min(70, 12 + n * 9);
        return `<td class="n"><button type="button" class="lc-cell" data-s="${s.id}" data-g="${g.id}" data-r="${r.id}" style="background: color-mix(in srgb, var(--accent) ${pct}%, var(--surface)); color: ${pct > 40 ? "var(--on-accent)" : "var(--ink)"}" aria-label="${esc(g.name)}で${esc(r.name)}を減らす手法 ${n}件">${n}</button></td>`;
      }).join("");
      rows.push(`<tr><td class="g"><button type="button" data-s="${s.id}" data-g="${g.id}">${esc(g.name)}</button></td>${cells}<td class="n">${ms.length}</td></tr>`);
    }
  }
  $("#matrix").innerHTML = `<thead><tr><th scope="col">分類</th>${D.reduces.map((r) => `<th scope="col" class="n">${esc(r.name)}</th>`).join("")}<th scope="col" class="n">手法</th></tr></thead><tbody>${rows.join("")}</tbody>`;
  $("#matrix").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-s]");
    if (!b) return;
    fSection.value = b.dataset.s;
    fillGroups();
    fGroup.value = b.dataset.g;
    fReduce.value = b.dataset.r || "";
    fStage.value = ""; fQ.value = "";
    render();
    $("#listH").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // ---------- 絞り込みと一覧 ----------
  const fSection = $("#fSection"), fGroup = $("#fGroup"), fStage = $("#fStage"), fReduce = $("#fReduce"), fQ = $("#fQ");
  D.sections.forEach((s) => fSection.insertAdjacentHTML("beforeend", `<option value="${s.id}">${esc(s.name)}</option>`));
  D.stages.forEach((s) => fStage.insertAdjacentHTML("beforeend", `<option value="${s.id}">${esc(s.name)}</option>`));
  D.reduces.forEach((r) => fReduce.insertAdjacentHTML("beforeend", `<option value="${r.id}">${esc(r.name)}</option>`));
  function fillGroups() {
    const sec = fSection.value;
    fGroup.innerHTML = '<option value="">すべて</option>' + (sec ? D.groups[sec].filter((g) => D.methods.some((m) => m.section === sec && m.group === g.id)).map((g) => `<option value="${g.id}">${esc(g.name)}</option>`).join("") : "");
    fGroup.disabled = !sec;
  }
  fillGroups();

  function card(m) {
    const chips = m.stages.map((s) => `<span class="lc-stage-chip">${esc(stageName[s])}</span>`).join("") +
      m.reduces.map((r) => `<span class="lc-res res-${r}">${esc(reduceName[r])}</span>`).join("");
    const effs = m.effects.map((e) => `<li>${esc(e.text)}</li>`).join("");
    const quotes = m.effects.filter((e) => e.quote).map((e) => `<blockquote lang="en">${esc(e.quote)}<br><a href="${esc(e.url)}" rel="noopener" target="_blank">${esc(host(e.url))}</a></blockquote>`).join("");
    return `<article class="lc-card" id="m-${esc(m.id)}">
      <h4>${esc(m.name)}${tierBadge(m.tier)}</h4>
      <p class="en">${esc(m.nameEn)}${m.year ? `・${esc(m.year)}` : ""}</p>
      <p class="chips">${chips}</p>
      <p class="what">${esc(m.what)}</p>
      ${effs ? `<ul class="eff">${effs}</ul>` : ""}
      ${m.tradeoffs ? `<p class="trade"><b>注意</b>　${esc(m.tradeoffs)}</p>` : ""}
      <details class="lc-more"><summary>原文と出典（${esc(host(m.url))}）</summary>${quotes || `<p class="src"><a href="${esc(m.url)}" rel="noopener" target="_blank">${esc(m.url)}</a></p>`}</details>
    </article>`;
  }

  function render() {
    const q = fQ.value.trim().toLowerCase();
    const list = D.methods.filter((m) =>
      (!fSection.value || m.section === fSection.value) &&
      (!fGroup.value || m.group === fGroup.value) &&
      (!fStage.value || m.stages.includes(fStage.value)) &&
      (!fReduce.value || m.reduces.includes(fReduce.value)) &&
      (!q || [m.name, m.nameEn, m.what, m.tradeoffs, ...m.effects.map((e) => e.text)].join(" ").toLowerCase().includes(q)));
    const html = [];
    for (const s of D.sections) {
      const inSec = list.filter((m) => m.section === s.id);
      if (!inSec.length) continue;
      html.push(`<h3 class="lc-sec-h">${esc(s.name)}</h3>`);
      for (const g of D.groups[s.id]) {
        const inG = inSec.filter((m) => m.group === g.id);
        if (!inG.length) continue;
        html.push(`<p class="lc-grp-h">${esc(g.name)}（${inG.length}）</p><div class="lc-cards">${inG.map(card).join("")}</div>`);
      }
    }
    $("#list").innerHTML = html.join("");
    $("#count").textContent = `${list.length}件`;
    $("#empty").hidden = list.length > 0;
  }
  fSection.addEventListener("change", () => { fillGroups(); render(); });
  [fGroup, fStage, fReduce].forEach((el) => el.addEventListener("change", render));
  fQ.addEventListener("input", render);
  $("#fReset").addEventListener("click", () => { fSection.value = ""; fillGroups(); fStage.value = ""; fReduce.value = ""; fQ.value = ""; render(); });
  render();
})();
