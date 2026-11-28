/*
  AI サービスのトークン単価（/contents/token-pricing/）
  data/pricing.js の window.TOKEN_PRICING を読み、表と推移の図を描く。
  データ由来の文字列は textContent で入れる（innerHTML に連結しない）。
*/
(function () {
  "use strict";
  var D = window.TOKEN_PRICING;
  if (!D) return;

  var TIER = { flagship: "上位", mid: "中位", small: "軽量", reasoning: "推論", open: "オープンウェイト", other: "旧世代・その他" };
  var EVENT = { launch: "発表", price_cut: "値下げ", price_change: "価格改定", retired: "提供終了", snapshot: "その時点の単価" };

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  var SVGNS = "http://www.w3.org/2000/svg";
  function sv(tag, attrs) {
    var n = document.createElementNS(SVGNS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  // 金額は丸めずにデータの値をそのまま出す。小数は2桁以上にそろえる
  function usd(v) {
    if (v == null) return null;
    var s = String(Number(Number(v).toPrecision(8)));
    if (s.indexOf("e") >= 0) s = Number(v).toFixed(6).replace(/0+$/, "");
    var dot = s.indexOf(".");
    if (dot < 0) s += ".00";
    else if (s.length - dot - 1 < 2) s += "0";
    var parts = s.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "$" + parts.join(".");
  }
  function dateLabel(s) { return s ? s.replace(/-/g, ".") : ""; }
  function toTime(s) {
    var p = s.split("-");
    return Date.UTC(+p[0], (p[1] ? +p[1] : 1) - 1, p[2] ? +p[2] : 1);
  }
  function providerName(id) {
    for (var i = 0; i < D.providers.length; i++) if (D.providers[i].id === id) return D.providers[i].name;
    return id;
  }
  function providerOrder(id) {
    for (var i = 0; i < D.providers.length; i++) if (D.providers[i].id === id) return i;
    return 999;
  }
  function priceCell(td, v) {
    var s = usd(v);
    if (s == null) td.appendChild(el("span", "tp-dash", "—"));
    else td.textContent = s;
  }
  // 注記は最初の1文だけを見せ、残りと出典は「続き」の中に入れる（表の行が高くなりすぎないように）
  function notesCell(td, notes, source, verified, extra) {
    var text = ((extra || "") + (extra && notes ? " " : "") + (notes || "")).trim();
    var cut = text.indexOf("。");
    var head = cut >= 0 && cut < text.length - 1 ? text.slice(0, cut + 1) : text;
    var rest = head.length < text.length ? text.slice(head.length).trim() : "";
    if (head) td.appendChild(document.createTextNode(head));
    if (verified === false) td.appendChild(el("span", "tp-badge", "未確認"));
    var list = (Array.isArray(source) ? source : (source ? [source] : [])).filter(function (u) { return /^https?:\/\//.test(u); });
    function links(parent) {
      list.forEach(function (u, i) {
        parent.appendChild(document.createTextNode(" "));
        var a = el("a", null, list.length > 1 ? "出典" + (i + 1) : "出典");
        a.href = u; a.rel = "noopener"; a.target = "_blank";
        parent.appendChild(a);
      });
    }
    if (rest) {
      var d = el("details", "tp-more");
      d.appendChild(el("summary", null, "続き"));
      var body = el("div", "tp-more-body", rest);
      links(body);
      d.appendChild(body);
      td.appendChild(d);
    } else {
      links(td);
    }
  }

  // ---------- 数字のまとめ ----------
  var provInCurrent = {};
  D.current.forEach(function (r) { provInCurrent[r.provider] = 1; });
  $("kfModels").firstChild.textContent = String(D.current.length);
  $("kfProviders").firstChild.textContent = String(Object.keys(provInCurrent).length);
  $("kfHistory").firstChild.textContent = String(D.history.length);
  $("kfAsOf").textContent = dateLabel(D.asOf);
  var asOfParts = D.asOf.split("-");
  $("asOfNote").textContent = asOfParts[0] + "年" + (+asOfParts[1]) + "月" + (+asOfParts[2]) + "日時点の情報です。";

  // ---------- 現在の単価の表 ----------
  var fProvider = $("fProvider"), fTier = $("fTier"), fSort = $("fSort"), fQ = $("fQ");
  D.providers.forEach(function (p) {
    if (!provInCurrent[p.id]) return;
    var o = el("option", null, p.name); o.value = p.id; fProvider.appendChild(o);
  });
  var tiersUsed = {};
  D.current.forEach(function (r) { tiersUsed[r.tier] = 1; });
  Object.keys(TIER).forEach(function (t) {
    if (!tiersUsed[t]) return;
    var o = el("option", null, TIER[t]); o.value = t; fTier.appendChild(o);
  });

  function renderCurrent() {
    var q = fQ.value.trim().toLowerCase();
    var rows = D.current.filter(function (r) {
      if (fProvider.value && r.provider !== fProvider.value) return false;
      if (fTier.value && r.tier !== fTier.value) return false;
      if (q) {
        var hay = (providerName(r.provider) + " " + r.model + " " + (r.id || "") + " " + (r.notes || "")).toLowerCase();
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });
    var sort = fSort.value;
    var idx = new Map(D.current.map(function (r, i) { return [r, i]; }));
    rows.sort(function (a, b) {
      if (sort === "provider") return providerOrder(a.provider) - providerOrder(b.provider) || idx.get(a) - idx.get(b);
      var key = sort.split("-")[0], dir = sort.split("-")[1] === "asc" ? 1 : -1;
      var av = a[key], bv = b[key];
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      return (av - bv) * dir || idx.get(a) - idx.get(b);
    });
    var tb = $("currentTable").tBodies[0];
    tb.textContent = "";
    var prev = null;
    rows.forEach(function (r) {
      var tr = el("tr");
      if (sort === "provider" && prev !== null && prev !== r.provider) tr.className = "group-start";
      prev = r.provider;
      tr.appendChild(el("td", "prov", providerName(r.provider)));
      var tdm = el("td", "model", r.model);
      if (r.id) tdm.appendChild(el("span", "mid", r.id));
      tr.appendChild(tdm);
      var tdt = el("td"); tdt.appendChild(el("span", "tp-tier", TIER[r.tier] || r.tier)); tr.appendChild(tdt);
      ["input", "cachedInput", "output"].forEach(function (k) { var td = el("td", "num"); priceCell(td, r[k]); tr.appendChild(td); });
      var tdn = el("td", "notes"); notesCell(tdn, r.notes, r.source, r.verified); tr.appendChild(tdn);
      tb.appendChild(tr);
    });
    $("currentCount").textContent = rows.length + " / " + D.current.length + " 本";
    $("currentEmpty").hidden = rows.length > 0;
  }
  [fProvider, fTier, fSort].forEach(function (c) { c.addEventListener("change", renderCurrent); });
  fQ.addEventListener("input", renderCurrent);
  renderCurrent();

  // ---------- 推移の表 ----------
  var hist = D.history.slice().sort(function (a, b) { return toTime(a.date) - toTime(b.date) || providerOrder(a.provider) - providerOrder(b.provider); });
  (function () {
    var tb = $("historyTable").tBodies[0];
    hist.forEach(function (r) {
      var tr = el("tr");
      tr.appendChild(el("td", "num", dateLabel(r.date)));
      tr.appendChild(el("td", "prov", providerName(r.provider)));
      tr.appendChild(el("td", "model", r.model));
      tr.appendChild(el("td", null, EVENT[r.event] || r.event));
      ["input", "output"].forEach(function (k) { var td = el("td", "num"); priceCell(td, r[k]); tr.appendChild(td); });
      var tdn = el("td", "notes");
      notesCell(tdn, r.notes, r.source, r.verified, r.original ? "元の表記: " + r.original + "。" : "");
      tr.appendChild(tdn);
      tb.appendChild(tr);
    });
    $("historyCount").textContent = String(hist.length);
  })();

  // ---------- クラウドと国内の表 ----------
  (function () {
    var tb = $("cloudTable").tBodies[0];
    (D.cloud || []).forEach(function (r) {
      var tr = el("tr");
      tr.appendChild(el("td", "prov", r.platform));
      var tdm = el("td", "model", r.model);
      if (r.vendor) tdm.appendChild(el("span", "mid", r.vendor));
      tr.appendChild(tdm);
      tr.appendChild(el("td", null, r.region || "—"));
      ["input", "output"].forEach(function (k) { var td = el("td", "num"); priceCell(td, r[k]); tr.appendChild(td); });
      tr.appendChild(el("td", null, r.vsDirect || "—"));
      var tdn = el("td", "notes"); notesCell(tdn, r.notes, r.source, r.verified); tr.appendChild(tdn);
      tb.appendChild(tr);
    });
    var tj = $("japanTable").tBodies[0];
    (D.japan || []).forEach(function (r) {
      var tr = el("tr");
      tr.appendChild(el("td", "prov", r.provider));
      var tdm = el("td", "model", r.service);
      if (r.model && r.model !== r.service) tdm.appendChild(el("span", "mid", r.model));
      tr.appendChild(tdm);
      tr.appendChild(el("td", null, r.original || "—"));
      var tdn = el("td", "notes"); notesCell(tdn, r.notes, r.source, r.verified); tr.appendChild(tdn);
      tj.appendChild(tr);
    });
  })();

  // ---------- 推移でわかること（データに書いた文） ----------
  (D.findings || []).forEach(function (f) {
    var box = el("section", "tp-finding");
    box.appendChild(el("h3", null, f.title));
    box.appendChild(el("p", null, f.text));
    $("findings").appendChild(box);
  });

  // ---------- サブスクリプションとの比べ方 ----------
  (function () {
    var S = D.subscriptions;
    if (!S) return;
    // 月額が API で何トークン分にあたるか（入力:出力 = ratio の平均単価で割る）
    var be = S.breakEven, ri = be.ratio[0], ro = be.ratio[1];
    function findModel(pid, id) {
      for (var i = 0; i < D.current.length; i++) if (D.current[i].provider === pid && D.current[i].id === id) return D.current[i];
      return null;
    }
    function tokensLabel(n) {
      if (n >= 1e8) return String(Number((n / 1e8).toPrecision(3))) + "億";
      return Math.round(n / 1e4).toLocaleString("ja-JP") + "万";
    }
    var models = be.models.map(function (m) { return findModel(m[0], m[1]); }).filter(function (m) { return m && m.input != null && m.output != null; });
    var head = $("beTable").tHead.rows[0], tb = $("beTable").tBodies[0];
    var th0 = el("th", null, "月額"); th0.scope = "col"; head.appendChild(th0);
    models.forEach(function (m) {
      var th = el("th", "num"); th.scope = "col";
      th.appendChild(el("span", "be-model", m.model));
      th.appendChild(el("span", "be-price", "平均 " + usd((ri * m.input + ro * m.output) / (ri + ro))));
      th.appendChild(el("span", "be-price", usd(m.input) + " / " + usd(m.output)));
      head.appendChild(th);
    });
    be.prices.forEach(function (price) {
      var tr = el("tr");
      var th = el("th", "num", "$" + price); th.scope = "row"; tr.appendChild(th);
      models.forEach(function (m) {
        var avg = (ri * m.input + ro * m.output) / (ri + ro);
        tr.appendChild(el("td", "num", tokensLabel(price / avg * 1e6)));
      });
      tb.appendChild(tr);
    });
    $("beLead").textContent = "入力と出力の比を " + ri + ":" + ro + " と仮定した平均の単価で割っています。月にこれより多く使うならサブスクリプションが、少ないなら API が割安という目安です。";

    // プランの表
    var sel = $("fPlanProvider"), seen = {};
    S.plans.forEach(function (p) {
      if (seen[p.provider]) return;
      seen[p.provider] = 1;
      var o = el("option", null, p.provider); o.value = p.provider; sel.appendChild(o);
    });
    function renderPlans() {
      var rows = S.plans.filter(function (p) { return !sel.value || p.provider === sel.value; });
      var body = $("planTable").tBodies[0];
      body.textContent = "";
      var prev = null;
      rows.forEach(function (p) {
        var tr = el("tr");
        if (prev !== null && prev !== p.provider) tr.className = "group-start";
        prev = p.provider;
        var td1 = el("td", "prov", p.provider);
        td1.appendChild(el("span", "mid", p.product));
        tr.appendChild(td1);
        tr.appendChild(el("td", "model", p.plan));
        var td3 = el("td", "num", usd(p.usd));
        if (p.jpy) td3.appendChild(el("span", "mid", p.jpy));
        tr.appendChild(td3);
        tr.appendChild(el("td", "notes", p.limits));
        var td5 = el("td", "notes");
        notesCell(td5, p.api, p.source, p.verified);
        tr.appendChild(td5);
        body.appendChild(tr);
      });
      $("planCount").textContent = rows.length + " / " + S.plans.length + " プラン";
    }
    sel.addEventListener("change", renderPlans);
    renderPlans();
  })();

  // ---------- 参照先 ----------
  (D.sources || []).forEach(function (s) {
    var li = el("li"), a = el("a", null, s.title);
    a.href = s.url; a.rel = "noopener"; a.target = "_blank";
    li.appendChild(a); $("refs").appendChild(li);
  });

  // ---------- 図1：推移 ----------
  var svg = $("chart"), box = $("chartBox"), tip = $("tip");
  var state = { metric: "output", provider: "", active: -1 };
  var pts = [];      // 描いた点（ホバーとキー操作の対象）
  var hoverable = [];

  var chipsBox = $("providerChips");
  var provInHist = {};
  D.history.forEach(function (r) { provInHist[r.provider] = 1; });
  function addChip(id, label) {
    var b = el("button", "tp-chip", label);
    b.type = "button"; b.dataset.provider = id;
    b.setAttribute("aria-pressed", id === state.provider ? "true" : "false");
    b.addEventListener("click", function () {
      state.provider = id; state.active = -1;
      Array.prototype.forEach.call(chipsBox.children, function (c) { c.setAttribute("aria-pressed", c.dataset.provider === id ? "true" : "false"); });
      drawChart();
    });
    chipsBox.appendChild(b);
  }
  addChip("", "すべて");
  D.providers.forEach(function (p) { if (provInHist[p.id]) addChip(p.id, p.name); });

  Array.prototype.forEach.call(document.querySelectorAll(".tp-seg-btn"), function (b) {
    b.addEventListener("click", function () {
      state.metric = b.dataset.metric; state.active = -1;
      Array.prototype.forEach.call(document.querySelectorAll(".tp-seg-btn"), function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
      drawChart();
    });
  });

  // 凡例（図の上）
  (function () {
    var lg = el("div", "tp-chart-legend");
    lg.setAttribute("aria-hidden", "true");
    var a = el("span"); a.appendChild(el("i", "tp-key-dot")); a.appendChild(document.createTextNode("一次情報で確かめた単価")); lg.appendChild(a);
    var b = el("span"); b.appendChild(el("i", "tp-key-dot hollow")); b.appendChild(document.createTextNode("未確認の単価")); lg.appendChild(b);
    var c = el("span"); c.appendChild(el("i", "tp-key-dot dim")); c.appendChild(document.createTextNode("選んでいない提供元")); lg.appendChild(c);
    box.parentNode.insertBefore(lg, box);
  })();

  function drawChart() {
    var W = box.clientWidth, H = svg.clientHeight || 360;
    if (!W) return;
    var m = { l: W < 520 ? 50 : 60, r: 14, t: 12, b: 30 };
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.textContent = "";
    var key = state.metric;
    var data = hist.filter(function (r) { return r[key] != null && r[key] > 0; });
    if (!data.length) return;

    var x0 = Date.UTC(2020, 0, 1);
    var x1 = Math.max(toTime(D.asOf), toTime(data[data.length - 1].date)) + 60 * 864e5;
    var lo = Math.floor(Math.log10(Math.min.apply(null, data.map(function (r) { return r[key]; }))));
    var hi = Math.ceil(Math.log10(Math.max.apply(null, data.map(function (r) { return r[key]; }))));
    if (hi === lo) hi = lo + 1;
    function X(t) { return m.l + (t - x0) / (x1 - x0) * (W - m.l - m.r); }
    function Y(v) { return m.t + (hi - Math.log10(v)) / (hi - lo) * (H - m.t - m.b); }

    // 罫線と目盛
    for (var e = lo; e <= hi; e++) {
      var y = Y(Math.pow(10, e));
      svg.appendChild(sv("line", { x1: m.l, x2: W - m.r, y1: y, y2: y, class: "tp-grid" }));
      var t = sv("text", { x: m.l - 8, y: y + 4, "text-anchor": "end", class: "tp-axis-text" });
      t.textContent = usd(Math.pow(10, e)).replace(/\.00$/, "");
      svg.appendChild(t);
    }
    var y0 = new Date(x0).getUTCFullYear(), y1 = new Date(x1).getUTCFullYear();
    for (var yr = y0; yr <= y1; yr++) {
      var tx = X(Date.UTC(yr, 0, 1));
      if (tx > W - m.r) break;
      svg.appendChild(sv("line", { x1: tx, x2: tx, y1: H - m.b, y2: H - m.b + 5, class: "tp-grid" }));
      if ((W >= 520 || yr % 2 === 0) && tx + 34 <= W) {
        var tt = sv("text", { x: tx + 3, y: H - m.b + 18, class: "tp-axis-text" });
        tt.textContent = String(yr);
        svg.appendChild(tt);
      }
    }
    svg.appendChild(sv("line", { x1: m.l, x2: W - m.r, y1: H - m.b, y2: H - m.b, class: "tp-grid" }));

    // 同じモデルの改定を階段状の線でつなぐ。選んだ提供元を後から描いて上に重ねる
    var groups = {};
    data.forEach(function (r) { var g = r.provider + "|" + r.model; (groups[g] = groups[g] || []).push(r); });
    var dimLayer = sv("g", {}), hiLayer = sv("g", {});
    Object.keys(groups).forEach(function (g) {
      var arr = groups[g];
      if (arr.length < 2) return;
      var d = "M" + X(toTime(arr[0].date)).toFixed(1) + " " + Y(arr[0][key]).toFixed(1);
      for (var i = 1; i < arr.length; i++) {
        d += " H" + X(toTime(arr[i].date)).toFixed(1) + " V" + Y(arr[i][key]).toFixed(1);
      }
      var on = !state.provider || state.provider === arr[0].provider;
      (on ? hiLayer : dimLayer).appendChild(sv("path", { d: d, class: "tp-step" + (on ? "" : " dim") }));
    });
    svg.appendChild(dimLayer); svg.appendChild(hiLayer);

    var cross = sv("line", { class: "tp-cross", y1: m.t, y2: H - m.b, visibility: "hidden" });
    svg.appendChild(cross);

    pts = []; hoverable = [];
    var dotsDim = sv("g", {}), dotsHi = sv("g", {});
    data.forEach(function (r) {
      var on = !state.provider || state.provider === r.provider;
      var c = sv("circle", {
        cx: X(toTime(r.date)).toFixed(1), cy: Y(r[key]).toFixed(1), r: on ? 4.5 : 3.5,
        class: "tp-dot" + (on ? "" : " dim") + (r.verified === false ? " unverified" : "")
      });
      (on ? dotsHi : dotsDim).appendChild(c);
      var p = { r: r, x: +c.getAttribute("cx"), y: +c.getAttribute("cy"), node: c };
      pts.push(p);
      if (on) hoverable.push(p);
    });
    svg.appendChild(dotsDim); svg.appendChild(dotsHi);
    hoverable.sort(function (a, b) { return a.x - b.x || a.y - b.y; });
    svg._cross = cross;
    if (state.active >= 0 && hoverable[state.active]) showTip(state.active);
    else hideTip();
  }

  function showTip(i) {
    var p = hoverable[i];
    if (!p) return;
    state.active = i;
    hoverable.forEach(function (q) { q.node.classList.toggle("active", q === p); });
    var r = p.r, key = state.metric;
    $("tipVal").textContent = usd(r[key]) + (key === "output" ? "（出力）" : "（入力）");
    $("tipModel").textContent = providerName(r.provider) + " " + r.model;
    var other = key === "output" ? r.input : r.output;
    $("tipMeta").textContent = dateLabel(r.date) + " " + (EVENT[r.event] || r.event) +
      (other != null ? "／" + (key === "output" ? "入力 " : "出力 ") + usd(other) : "") +
      (r.verified === false ? "／未確認" : "");
    tip.hidden = false;
    var bw = box.clientWidth, tw = tip.offsetWidth, th = tip.offsetHeight;
    var left = p.x + 12, top = p.y - th - 10;
    if (left + tw > bw - 4) left = p.x - tw - 12;
    if (left < 4) left = 4;
    if (top < 0) top = p.y + 14;
    tip.style.left = left + "px"; tip.style.top = top + "px";
    var cr = svg._cross;
    if (cr) { cr.setAttribute("x1", p.x); cr.setAttribute("x2", p.x); cr.setAttribute("visibility", "visible"); }
  }
  function hideTip() {
    tip.hidden = true;
    hoverable.forEach(function (q) { q.node.classList.remove("active"); });
    if (svg._cross) svg._cross.setAttribute("visibility", "hidden");
  }

  // いちばん近い点を探す（点そのものより広い 24px 以上の範囲で反応させる）
  svg.addEventListener("pointermove", function (ev) {
    var rect = svg.getBoundingClientRect();
    var px = ev.clientX - rect.left, py = ev.clientY - rect.top;
    var best = -1, bd = 28 * 28;
    hoverable.forEach(function (p, i) {
      var d = (p.x - px) * (p.x - px) + (p.y - py) * (p.y - py);
      if (d < bd) { bd = d; best = i; }
    });
    if (best >= 0) showTip(best); else { state.active = -1; hideTip(); }
  });
  svg.addEventListener("pointerleave", function () { state.active = -1; hideTip(); });
  svg.addEventListener("keydown", function (ev) {
    if (!hoverable.length) return;
    if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") {
      ev.preventDefault();
      var i = state.active < 0 ? (ev.key === "ArrowRight" ? 0 : hoverable.length - 1)
        : Math.max(0, Math.min(hoverable.length - 1, state.active + (ev.key === "ArrowRight" ? 1 : -1)));
      showTip(i);
    } else if (ev.key === "Escape") { state.active = -1; hideTip(); }
  });
  svg.addEventListener("blur", function () { state.active = -1; hideTip(); });

  var rt;
  window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(drawChart, 120); });
  drawChart();
})();
