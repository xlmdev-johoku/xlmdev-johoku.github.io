/* 何トークンで何ができたか：図1（対数目盛の点図）と3つの表を data/feats.js から描く */
(() => {
  const D = window.TOKEN_FEATS;
  if (!D) return;
  const $ = (s) => document.querySelector(s);
  const SVGNS = "http://www.w3.org/2000/svg";
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const groupName = Object.fromEntries(D.groups.map((g) => [g.id, g.name]));
  const groupOrder = Object.fromEntries(D.groups.map((g, i) => [g.id, i]));

  const KINDS = [
    { id: "out", name: "出力" },
    { id: "in", name: "キャッシュ以外の入力" },
    { id: "cache", name: "キャッシュの読み出し" },
    { id: "total", name: "合計（キャッシュ込み）" },
    { id: "unk", name: "合計・入力（キャッシュの扱い不明）" },
  ];

  const fmtDate = (s) => String(s).replace(/-/g, ".");
  const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u; } };

  // 点の形（図・凡例・表で共通）
  function marker(kind, x, y, s = 1) {
    x = Math.round(Number(x) * 10) / 10; y = Math.round(Number(y) * 10) / 10;
    if (kind === "out") return `<circle class="mk-out" cx="${x}" cy="${y}" r="${5.5 * s}"/>`;
    if (kind === "in") return `<circle class="mk-in" cx="${x}" cy="${y}" r="${4.5 * s}"/>`;
    if (kind === "cache") { const h = 3.8 * s; return `<rect class="mk-cache" x="${x - h}" y="${y - h}" width="${2 * h}" height="${2 * h}"/>`; }
    const r = (kind === "total" ? 8.5 : 6.5) * s;
    const pts = `${x},${y - r} ${x + r},${y} ${x},${y + r} ${x - r},${y}`;
    return `<polygon class="mk-${kind}" points="${pts}"/>`;
  }
  const icon = (kind) => `<svg viewBox="-8 -8 16 16" aria-hidden="true">${marker(kind, 0, 0, 0.95)}</svg>`;

  // ---------- 数字のまとめ ----------
  $("#kfTokens").firstChild.nodeValue = D.tokens.length;
  $("#kfCosts").firstChild.nodeValue = D.costs.length;
  $("#kfNone").firstChild.nodeValue = D.none.length;
  const [y, m, d] = D.asOf.split("-").map(Number);
  $("#kfAsOf").textContent = `${y}年${m}月${d}日`;
  $("#asOfNote").textContent = `${y}年${m}月${d}日時点の情報です。`;

  // ---------- 図1 ----------
  const state = { sort: "group", kinds: new Set(KINDS.map((k) => k.id)) };
  const legend = $("#legend");
  legend.innerHTML = KINDS.map((k) => `<button type="button" class="tf-key" data-kind="${k.id}" aria-pressed="true">${icon(k.id)}${esc(k.name)}</button>`).join("");
  legend.addEventListener("click", (e) => {
    const b = e.target.closest(".tf-key");
    if (!b) return;
    const on = b.getAttribute("aria-pressed") !== "true";
    b.setAttribute("aria-pressed", String(on));
    if (on) state.kinds.add(b.dataset.kind); else state.kinds.delete(b.dataset.kind);
    draw();
  });
  document.querySelectorAll(".tf-seg-btn").forEach((b) => b.addEventListener("click", () => {
    state.sort = b.dataset.sort;
    document.querySelectorAll(".tf-seg-btn").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    draw();
  }));

  const maxOf = (t) => Math.max(...t.points.map((p) => p.value));
  function ordered() {
    const a = D.tokens.slice();
    if (state.sort === "size") a.sort((p, q) => maxOf(q) - maxOf(p));
    else if (state.sort === "date") a.sort((p, q) => String(p.date).localeCompare(String(q.date)));
    else a.sort((p, q) => groupOrder[p.group] - groupOrder[q.group] || maxOf(q) - maxOf(p));
    return a;
  }

  const LO = 5, HI = 12; // 10万〜1兆
  const TICKS = ["10万", "100万", "1,000万", "1億", "10億", "100億", "1,000億", "1兆"];
  const box = $("#chartBox");
  const svg = $("#chart");
  const tip = document.createElement("div");
  tip.className = "tf-tip";
  tip.hidden = true;
  box.appendChild(tip);

  function draw() {
    const W = Math.max(340, box.clientWidth - 8);
    const wide = W >= 760;
    const labelW = wide ? 300 : 0;
    const rowH = wide ? 30 : 46;
    const x0 = labelW + (wide ? 16 : 14), x1 = W - 18;
    const X = (v) => x0 + ((Math.log10(v) - LO) / (HI - LO)) * (x1 - x0);
    const rows = [];
    let prev = null;
    for (const t of ordered()) {
      if (state.sort === "group" && t.group !== prev) { rows.push({ head: groupName[t.group] }); prev = t.group; }
      rows.push({ t });
    }
    let yy = 34;
    const parts = [];
    const chars = Math.floor((wide ? labelW - 8 : W - 28) / 12.5);
    rows.forEach((r, i) => {
      if (r.head) {
        parts.push(`<text class="tf-group-text" x="8" y="${yy + 18}">${esc(r.head)}</text>`);
        yy += 28;
        return;
      }
      const t = r.t;
      const top = yy;
      const cy = wide ? top + rowH / 2 : top + 30;
      if (i % 2) parts.push(`<rect class="tf-row-band" x="0" y="${top}" width="${W}" height="${rowH}"/>`);
      let title = t.title;
      if (title.length > chars) title = title.slice(0, Math.max(1, chars - 1)) + "…";
      const ly = wide ? cy + 4 : top + 14;
      parts.push(`<a class="tf-row-link" href="#feat-${esc(t.id)}"><text class="tf-row-label" x="8" y="${ly}">${esc(title)}<title>${esc(t.title)}</title></text></a>`);
      const vis = t.points.filter((p) => state.kinds.has(p.kind));
      if (vis.length > 1) {
        const xs = vis.map((p) => X(p.value));
        parts.push(`<line class="tf-range" x1="${Math.min(...xs)}" x2="${Math.max(...xs)}" y1="${cy}" y2="${cy}"/>`);
      }
      // 大きい形を先に描き、小さい形を上に重ねる
      const order = { total: 0, unk: 1, cache: 2, in: 3, out: 4 };
      vis.slice().sort((p, q) => order[p.kind] - order[q.kind]).forEach((p) => {
        const idx = t.points.indexOf(p);
        parts.push(`<g class="tf-pt" data-id="${esc(t.id)}" data-p="${idx}" tabindex="0">${marker(p.kind, X(p.value), cy)}</g>`);
      });
      yy += rowH;
    });
    const H = yy + 8;
    const grid = [];
    for (let k = LO; k <= HI; k++) {
      const gx = X(10 ** k).toFixed(1);
      grid.push(`<line class="tf-grid" x1="${gx}" x2="${gx}" y1="24" y2="${H - 4}"/>`);
      if (wide || (k - LO) % 2 === 0) grid.push(`<text class="tf-axis-text" x="${gx}" y="16" text-anchor="middle">${TICKS[k - LO]}</text>`);
    }
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.setAttribute("height", H);
    svg.innerHTML = grid.join("") + parts.join("");
  }

  const byId = Object.fromEntries(D.tokens.map((t) => [t.id, t]));
  function showTip(g) {
    const t = byId[g.dataset.id];
    const p = t.points[Number(g.dataset.p)];
    tip.innerHTML = `<b>${esc(p.label)}</b><span>${esc(t.title)}</span><span>${esc(fmtDate(t.date))}${t.scope ? "・" + esc(t.scope) : ""}</span>`;
    tip.hidden = false;
    const br = box.getBoundingClientRect();
    const r = g.getBoundingClientRect();
    let left = r.left - br.left + box.scrollLeft + 12;
    const maxLeft = box.scrollLeft + box.clientWidth - tip.offsetWidth - 4;
    if (left > maxLeft) left = Math.max(4, r.left - br.left + box.scrollLeft - tip.offsetWidth - 12);
    tip.style.left = left + "px";
    tip.style.top = (r.top - br.top + box.scrollTop - 8) + "px";
  }
  svg.addEventListener("pointerover", (e) => { const g = e.target.closest(".tf-pt"); if (g) showTip(g); });
  svg.addEventListener("pointerout", (e) => { if (e.target.closest(".tf-pt")) tip.hidden = true; });
  svg.addEventListener("focusin", (e) => { const g = e.target.closest(".tf-pt"); if (g) showTip(g); });
  svg.addEventListener("focusout", () => { tip.hidden = true; });

  let rt;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(draw, 120); });
  draw();

  // ---------- 表 ----------
  const tierBadge = (tier) => tier === "secondary" ? '<span class="tf-badge">二次情報</span>' : tier === "primary-individual" ? '<span class="tf-badge">個人の発表</span>' : "";
  const srcCell = (x) => `<a href="${esc(x.url)}" rel="noopener" target="_blank">${esc(host(x.url))}</a>${tierBadge(x.tier)}${x.quote ? `<details class="tf-more"><summary>原文</summary><blockquote lang="en">${esc(x.quote)}</blockquote></details>` : ""}`;
  const sortGroup = (a) => a.slice().sort((p, q) => groupOrder[p.group] - groupOrder[q.group] || String(p.date).localeCompare(String(q.date)));

  const fGroup = $("#fGroup"), fQ = $("#fQ");
  D.groups.forEach((g) => { if (D.tokens.some((t) => t.group === g.id)) fGroup.insertAdjacentHTML("beforeend", `<option value="${g.id}">${esc(g.name)}</option>`); });

  function renderTokens() {
    const q = fQ.value.trim().toLowerCase();
    const list = sortGroup(D.tokens).filter((t) => (!fGroup.value || t.group === fGroup.value) &&
      (!q || [t.title, t.outcome, t.who, t.model, t.note, t.check].join(" ").toLowerCase().includes(q)));
    let prev = null;
    const html = [];
    for (const t of list) {
      if (t.group !== prev) { html.push(`<tr><td class="tf-group-cell" colspan="7">${esc(groupName[t.group])}</td></tr>`); prev = t.group; }
      const pts = t.points.map((p) => `<li>${icon(p.kind)}${esc(p.label)}</li>`).join("");
      html.push(`<tr id="feat-${esc(t.id)}">
        <td class="ttl"><b>${esc(t.title)}</b><span>${esc(t.outcome)}</span></td>
        <td class="date">${esc(fmtDate(t.date))}</td>
        <td class="who">${esc(t.who)}<span>${esc(t.model)}</span></td>
        <td class="pts"><ul>${pts}</ul>${t.scope ? `<span class="scope">${esc(t.scope)}</span>` : ""}${t.note ? `<span class="scope">${esc(t.note)}</span>` : ""}</td>
        <td class="cost">${t.costNote ? esc(t.costNote) : '<span class="tf-dash">—</span>'}</td>
        <td class="chk">${esc(t.check)}</td>
        <td class="src">${srcCell(t)}</td>
      </tr>`);
    }
    $("#tokenTable tbody").innerHTML = html.join("");
    $("#tokenCount").textContent = `${list.length}件`;
    $("#tokenEmpty").hidden = list.length > 0;
  }
  fGroup.addEventListener("change", renderTokens);
  fQ.addEventListener("input", renderTokens);
  renderTokens();
  // 図から表の行へ移ったとき、絞り込みで隠れていたら戻す
  window.addEventListener("hashchange", () => {
    if (location.hash.startsWith("#feat-") && !document.querySelector(location.hash)) { fGroup.value = ""; fQ.value = ""; renderTokens(); document.querySelector(location.hash)?.scrollIntoView(); }
  });

  {
    let prev = null;
    const html = [];
    for (const c of sortGroup(D.costs)) {
      if (c.group !== prev) { html.push(`<tr><td class="tf-group-cell" colspan="6">${esc(groupName[c.group])}</td></tr>`); prev = c.group; }
      html.push(`<tr>
        <td class="ttl"><b>${esc(c.title)}</b></td>
        <td class="date">${esc(fmtDate(c.date))}</td>
        <td class="who">${esc(c.who)}</td>
        <td class="cost">${esc(c.costText)}</td>
        <td class="chk">${esc(c.outcome)}${c.note ? `<em>${esc(c.note)}</em>` : ""}</td>
        <td class="src">${srcCell(c)}</td>
      </tr>`);
    }
    $("#costTable tbody").innerHTML = html.join("");
  }

  $("#noneList").innerHTML = D.none.map((n) => `<li><a href="${esc(n.url)}" rel="noopener" target="_blank">${esc(n.title)}</a><time>${esc(fmtDate(n.date))}</time><p>${esc(n.note)}</p></li>`).join("");
})();
