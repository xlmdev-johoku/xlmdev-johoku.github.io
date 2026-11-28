/*
  AI・機械学習の歴史年表：描画・絞り込み・ブームと冬の波の図。
  データは data/timeline.js（window.AIML_TIMELINE）。
*/
(function () {
  "use strict";

  var DATA = window.AIML_TIMELINE;
  if (!DATA) return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function $(id) { return document.getElementById(id); }
  function norm(s) { return String(s).normalize("NFKC").toLowerCase(); }

  /* ---------- 分類と印 ---------- */
  var CATS = DATA.cats, CAT = {};
  CATS.forEach(function (c) { CAT[c.id] = c; });

  function shapeSVG(shape) {
    var inner = {
      circle:   '<circle class="tl-shp" cx="8" cy="8" r="6"/>',
      square:   '<rect class="tl-shp" x="2.4" y="2.4" width="11.2" height="11.2" rx="1.2"/>',
      diamond:  '<path class="tl-shp" d="M8 1.2 14.8 8 8 14.8 1.2 8Z"/>',
      triangle: '<path class="tl-shp" d="M8 1.8 14.8 13.6H1.2Z"/>',
      ring:     '<circle class="tl-halo" cx="8" cy="8" r="7.6"/><circle class="tl-shp-ring" cx="8" cy="8" r="5"/>'
    }[shape];
    return '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">' + inner + '</svg>';
  }

  /* ---------- 時代 ---------- */
  var ERAS = DATA.eras, ERA_INDEX = {}, eraById = {};
  ERAS.forEach(function (e, i) { ERA_INDEX[e.id] = i; eraById[e.id] = e; });

  /* ---------- 数字のまとめ・注記・参照先 ---------- */
  var EV = DATA.events.map(function (e, i) { e.i = i; return e; });
  var keyTotal = EV.filter(function (e) { return e.k; }).length;

  function setFig(id, num, unit) {
    var el = $(id);
    el.textContent = num;
    if (unit) {
      var u = document.createElement("span");
      u.className = "unit";
      u.textContent = unit;
      el.appendChild(u);
    }
  }
  setFig("kfTotal", EV.length, "件");
  setFig("kfKey", keyTotal, "件");
  setFig("kfEras", ERAS.length, "の時代");
  setFig("kfRange", DATA.range[0] + "–" + DATA.range[1]);
  $("kfAsOf").textContent = DATA.asOfLabel + "時点";
  $("asOfNote").textContent = "2025〜2026年の項目は、" + DATA.asOfLabel + "時点の各社の発表と報道をもとにまとめました。";

  var refs = $("refs");
  DATA.sources.forEach(function (s) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = s.title;
    li.appendChild(a);
    refs.appendChild(li);
  });

  /* ---------- 印の見方 ---------- */
  var howto = $("howtoList");
  CATS.forEach(function (c) {
    var li = document.createElement("li");
    li.innerHTML = shapeSVG(c.shape);
    li.appendChild(document.createTextNode(c.label));
    howto.appendChild(li);
  });
  (function () {
    var li = document.createElement("li");
    li.className = "k";
    li.innerHTML = shapeSVG("circle");
    li.appendChild(document.createTextNode("大きいオレンジの印は主要な出来事"));
    howto.appendChild(li);
  })();

  /* ---------- 時代のセクションと時代チップ ---------- */
  var main = $("timeline"), nav = $("eraNav");
  ERAS.forEach(function (era) {
    var sec = document.createElement("section");
    sec.className = "tl-era";
    sec.id = "era-" + era.id;
    sec.dataset.type = era.type;
    sec.setAttribute("aria-labelledby", "h-" + era.id);
    sec.innerHTML =
      '<div class="wrap"><header class="tl-era-head">' +
        '<div class="tl-era-meta"><span class="tl-era-period"></span>' +
        '<span class="tl-badge"><i class="tl-t ' + era.type + '" aria-hidden="true"></i><span class="tl-badge-l"></span></span></div>' +
        '<h2 id="h-' + era.id + '"></h2><p class="tl-era-sum"></p>' +
      '</header><ol class="tl-ev-list"></ol></div>';
    sec.querySelector(".tl-era-period").textContent = era.period;
    sec.querySelector(".tl-badge-l").textContent = era.badge;
    var h2 = sec.querySelector("h2");
    h2.textContent = era.name;
    if (era.sub) {
      var sub = document.createElement("span");
      sub.className = "tl-era-sub";
      sub.textContent = era.sub;
      h2.appendChild(sub);
    }
    sec.querySelector(".tl-era-sum").textContent = era.summary;
    era.el = sec;
    era.list = sec.querySelector(".tl-ev-list");
    era.events = [];
    main.appendChild(sec);

    var a = document.createElement("a");
    a.className = "tl-era-chip";
    a.href = "#era-" + era.id;
    a.innerHTML = '<i class="tl-t ' + era.type + '" aria-hidden="true"></i>';
    a.appendChild(document.createTextNode(era.short));
    nav.appendChild(a);
    era.chip = a;
  });

  /* ---------- 出来事 ---------- */
  EV.sort(function (a, b) {
    return (ERA_INDEX[a.e] - ERA_INDEX[b.e]) || (a.y - b.y) || ((a.m || 0) - (b.m || 0)) || (a.i - b.i);
  });
  var byYear = {};
  EV.forEach(function (ev) {
    var era = eraById[ev.e];
    var li = document.createElement("li");
    li.className = "tl-ev" + (ev.k ? " key" : "");
    li.innerHTML =
      '<div class="tl-ev-when"><span class="tl-ev-year"></span>' + (ev.m ? '<span class="tl-ev-month"></span>' : '') + '</div>' +
      '<div class="tl-ev-mark">' + shapeSVG(CAT[ev.c].shape) + '</div>' +
      '<div class="tl-ev-body"><h3 class="tl-ev-title"></h3>' + (ev.w ? '<p class="tl-ev-who"></p>' : '') +
      '<p class="tl-ev-desc"></p>' +
      '<p class="tl-ev-tags"><span class="cat">' + shapeSVG(CAT[ev.c].shape) + '<span class="cat-l"></span></span>' +
      (ev.k ? '<span class="tl-key-tag">主要</span>' : '') + '</p></div>';
    li.querySelector(".tl-ev-year").textContent = ev.y;
    if (ev.m) li.querySelector(".tl-ev-month").textContent = ev.m + "月";
    li.querySelector(".cat-l").textContent = CAT[ev.c].label;
    ev.titleEl = li.querySelector(".tl-ev-title");
    ev.whoEl = li.querySelector(".tl-ev-who");
    ev.descEl = li.querySelector(".tl-ev-desc");
    ev.titleEl.textContent = ev.t;
    if (ev.whoEl) ev.whoEl.textContent = ev.w;
    ev.descEl.textContent = ev.d;
    ev.hay = norm([ev.t, ev.w || "", ev.d, CAT[ev.c].label, ev.y].join(" "));
    ev.el = li;
    era.list.appendChild(li);
    era.events.push(ev);
    (byYear[ev.y] = byYear[ev.y] || []).push(ev);
  });

  /* ---------- 絞り込み ---------- */
  var state = { cats: new Set(CATS.map(function (c) { return c.id; })), key: false, compact: false, q: "" };
  var catBtns = $("catBtns");
  CATS.forEach(function (c) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "tl-cat-btn";
    b.setAttribute("aria-pressed", "true");
    b.innerHTML = shapeSVG(c.shape);
    b.appendChild(document.createTextNode(c.label));
    b.addEventListener("click", function () {
      if (state.cats.has(c.id)) state.cats.delete(c.id); else state.cats.add(c.id);
      b.setAttribute("aria-pressed", state.cats.has(c.id) ? "true" : "false");
      apply();
    });
    catBtns.appendChild(b);
  });

  // キーワードに当たった箇所を <mark> で囲む
  function setText(el, text, q) {
    if (!el) return;
    if (!q) {
      if (el.dataset.hl) { el.textContent = text; delete el.dataset.hl; }
      return;
    }
    var n = norm(text);
    var low = n.length === text.length ? n : text.toLowerCase();
    var idx = low.indexOf(q);
    if (idx < 0) {
      if (el.dataset.hl) { el.textContent = text; delete el.dataset.hl; }
      return;
    }
    el.textContent = "";
    var pos = 0;
    while (idx >= 0) {
      if (idx > pos) el.appendChild(document.createTextNode(text.slice(pos, idx)));
      var m = document.createElement("mark");
      m.textContent = text.slice(idx, idx + q.length);
      el.appendChild(m);
      pos = idx + q.length;
      idx = low.indexOf(q, pos);
    }
    if (pos < text.length) el.appendChild(document.createTextNode(text.slice(pos)));
    el.dataset.hl = "1";
  }

  function filterConditions() {
    return (state.cats.size < CATS.length ? 1 : 0) + (state.key ? 1 : 0) + (state.q ? 1 : 0);
  }

  function apply() {
    var q = state.q, shown = 0, active = filterConditions() > 0;
    ERAS.forEach(function (era) {
      var prevYear = null, count = 0;
      era.events.forEach(function (ev) {
        var vis = state.cats.has(ev.c) && (!state.key || ev.k) && (!q || ev.hay.indexOf(q) >= 0);
        ev.el.hidden = !vis;
        if (vis) {
          count++;
          ev.el.classList.toggle("same-year", ev.y === prevYear);
          prevYear = ev.y;
        }
        setText(ev.titleEl, ev.t, vis ? q : "");
        setText(ev.whoEl, ev.w, vis ? q : "");
        setText(ev.descEl, ev.d, vis ? q : "");
      });
      shown += count;
      var hide = active && count === 0;
      era.el.hidden = hide;
      era.chip.classList.toggle("off", hide);
      if (hide) { era.chip.setAttribute("aria-disabled", "true"); era.chip.tabIndex = -1; }
      else { era.chip.removeAttribute("aria-disabled"); era.chip.removeAttribute("tabindex"); }
    });
    document.body.classList.toggle("compact", state.compact);
    $("resultCount").textContent = EV.length + " 件中 " + shown + " 件を表示";
    $("empty").hidden = shown > 0;
    var n = filterConditions();
    $("filterCount").textContent = n ? "（" + n + "）" : "";
    $("filterBtn").classList.toggle("active", n > 0);
    updateActiveEra();
  }

  $("keyOnly").addEventListener("change", function (e) { state.key = e.target.checked; apply(); });
  $("compact").addEventListener("change", function (e) { state.compact = e.target.checked; apply(); });
  var qTimer = null;
  $("q").addEventListener("input", function (e) {
    clearTimeout(qTimer);
    var v = e.target.value;
    qTimer = setTimeout(function () { state.q = norm(v.trim()); apply(); }, 120);
  });
  function resetAll() {
    state.cats = new Set(CATS.map(function (c) { return c.id; }));
    state.key = false; state.compact = false; state.q = "";
    $("keyOnly").checked = false; $("compact").checked = false; $("q").value = "";
    catBtns.querySelectorAll(".tl-cat-btn").forEach(function (b) { b.setAttribute("aria-pressed", "true"); });
    apply();
  }
  $("resetBtn").addEventListener("click", resetAll);
  $("emptyReset").addEventListener("click", resetAll);

  var bar = $("bar"), panel = $("filterPanel"), filterBtn = $("filterBtn"), siteHeader = $("siteHeader");
  filterBtn.addEventListener("click", function () {
    var open = panel.hidden;
    panel.hidden = !open;
    filterBtn.setAttribute("aria-expanded", open ? "true" : "false");
    syncHeights();
  });

  /* サイト共通ヘッダーと時代の帯がどちらも上に固定されるので、両方の高さを CSS 変数に渡す */
  function syncHeights() {
    var root = document.documentElement.style;
    root.setProperty("--site-h", siteHeader.offsetHeight + "px");
    root.setProperty("--bar-h", bar.offsetHeight + "px");
  }
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(syncHeights);
    ro.observe(bar);
    ro.observe(siteHeader);
  }
  syncHeights();

  /* ---------- いま読んでいる時代をチップで示す ---------- */
  var lastActive = null, ticking = false;
  function updateActiveEra() {
    var limit = bar.getBoundingClientRect().bottom + 8;
    var cur = null;
    for (var i = 0; i < ERAS.length; i++) {
      var era = ERAS[i];
      if (era.el.hidden) continue;
      if (era.el.getBoundingClientRect().top <= limit) cur = era; else break;
    }
    ERAS.forEach(function (e) {
      if (e === cur) e.chip.setAttribute("aria-current", "location");
      else e.chip.removeAttribute("aria-current");
    });
    if (cur && cur !== lastActive) {
      var chip = cur.chip;
      var left = chip.offsetLeft - (nav.clientWidth - chip.offsetWidth) / 2;
      try { nav.scrollTo({ left: Math.max(0, left), behavior: reduceMotion ? "auto" : "smooth" }); }
      catch (err) { nav.scrollLeft = Math.max(0, left); }
    }
    lastActive = cur;
  }
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; updateActiveEra(); });
  }, { passive: true });

  function goEra(era) {
    if (!era || era.el.hidden) return;
    era.el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  /* ---------- 図1：ブームと冬の波 ---------- */
  var W = DATA.wave, X0 = W.x0, X1 = W.x1, XN = W.now;

  // 単調な3次エルミート補間（山や谷を行き過ぎない曲線）
  function monotone(xs, ys) {
    var n = xs.length, d = [], m = new Array(n), i;
    for (i = 0; i < n - 1; i++) d.push((ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]));
    m[0] = d[0]; m[n - 1] = d[n - 2];
    for (i = 1; i < n - 1; i++) m[i] = (d[i - 1] * d[i] <= 0) ? 0 : (d[i - 1] + d[i]) / 2;
    for (i = 0; i < n - 1; i++) {
      if (d[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; }
      var a = m[i] / d[i], b = m[i + 1] / d[i], s = a * a + b * b;
      if (s > 9) { var t = 3 / Math.sqrt(s); m[i] = t * a * d[i]; m[i + 1] = t * b * d[i]; }
    }
    return function (x) {
      if (x <= xs[0]) return ys[0];
      if (x >= xs[n - 1]) return ys[n - 1];
      var k = 0;
      while (x > xs[k + 1]) k++;
      var h = xs[k + 1] - xs[k], u = (x - xs[k]) / h, u2 = u * u, u3 = u2 * u;
      return (2 * u3 - 3 * u2 + 1) * ys[k] + (u3 - 2 * u2 + u) * h * m[k] + (-2 * u3 + 3 * u2) * ys[k + 1] + (u3 - u2) * h * m[k + 1];
    };
  }
  var curve = monotone(W.points.map(function (p) { return p[0]; }), W.points.map(function (p) { return p[1]; }));
  function X(yr) { return (yr - X0) / (X1 - X0) * 1000; }
  function Y(lv) { return 14 + (1 - lv) * 76; }

  var wave = $("wave"), waveBox = $("waveBox"), svg = wave.querySelector("svg");
  (function drawWave() {
    var s = "", yy;
    W.bands.forEach(function (b) {
      s += '<rect class="tl-band ' + b[2] + '" x="' + X(b[0]).toFixed(1) + '" y="0" width="' + (X(b[1]) - X(b[0])).toFixed(1) + '" height="100"/>';
    });
    for (yy = 1950; yy <= 2020; yy += 10) {
      s += '<line class="tl-grid" x1="' + X(yy).toFixed(1) + '" x2="' + X(yy).toFixed(1) + '" y1="0" y2="100"/>';
    }
    var pts = [];
    for (var t = X0; t < XN; t += 0.25) pts.push(X(t).toFixed(1) + " " + Y(curve(t)).toFixed(2));
    pts.push(X(XN).toFixed(1) + " " + Y(curve(XN)).toFixed(2));
    var d = "M" + pts.join("L");
    s += '<path class="tl-area" d="' + d + 'L' + X(XN).toFixed(1) + ' 100L0 100Z"/>';
    s += '<path class="tl-curve" d="' + d + '"/>';
    svg.innerHTML = s;

    var axis = $("waveAxis");
    for (yy = 1950; yy <= 2020; yy += 10) {
      var sp = document.createElement("span");
      sp.textContent = yy;
      sp.style.left = (X(yy) / 10) + "%";
      if (yy % 20 === 0) sp.className = "minor";
      axis.appendChild(sp);
    }

    var nowDot = document.createElement("span");
    nowDot.className = "tl-now-dot";
    nowDot.style.left = (X(XN) / 10) + "%";
    nowDot.style.top = Y(curve(XN)) + "%";
    wave.appendChild(nowDot);

    W.labels.forEach(function (l) {
      var x = l.x === "now" ? XN : l.x;
      var el = document.createElement("span");
      el.className = "tl-wave-lab " + l.p;
      el.textContent = l.t;
      el.style.left = (X(x) / 10) + "%";
      var top = (l.top != null) ? l.top
        : l.x === "now" ? Y(curve(XN))
        : Y(curve(x)) + (l.p === "above" ? -5 : 5);
      el.style.top = top + "%";
      wave.appendChild(el);
    });
  })();

  // 狭い画面で重なったラベルや、図からはみ出すラベルを隠す
  function declutter() {
    var labs = Array.prototype.slice.call(wave.querySelectorAll(".tl-wave-lab"));
    labs.forEach(function (l) { l.style.visibility = ""; });
    var box = wave.getBoundingClientRect();
    var rs = labs.map(function (l) { return l.getBoundingClientRect(); });
    var hidden = labs.map(function () { return false; });
    var i, j;
    for (i = 0; i < labs.length; i++) {
      if (rs[i].left < box.left - 2 || rs[i].right > box.right + 2) hidden[i] = true;
    }
    for (i = 0; i < labs.length; i++) {
      if (hidden[i]) continue;
      for (j = i + 1; j < labs.length; j++) {
        if (hidden[j]) continue;
        var a = rs[i], b = rs[j];
        if (a.left < b.right + 4 && b.left < a.right + 4 && a.top < b.bottom + 2 && b.top < a.bottom + 2) hidden[j] = true;
      }
    }
    labs.forEach(function (l, k) { if (hidden[k]) l.style.visibility = "hidden"; });
  }

  var cross = $("cross"), crossDot = $("crossDot"), tip = $("tip");
  var curYear = null, curEra = null, lastPointer = "mouse";
  var Y_MIN = DATA.range[0], Y_MAX = DATA.range[1];
  function eraAt(yr) {
    for (var i = 0; i < ERAS.length; i++) { if (yr >= ERAS[i].from && yr < ERAS[i].to) return ERAS[i]; }
    return ERAS[ERAS.length - 1];
  }
  function showAt(yr) {
    yr = Math.max(Y_MIN, Math.min(Y_MAX, Math.round(yr)));
    curYear = yr;
    curEra = eraAt(yr);
    var xp = X(yr) / 10;
    cross.style.left = xp + "%";
    crossDot.style.left = xp + "%";
    crossDot.style.top = Y(curve(Math.min(yr, XN))) + "%";
    cross.hidden = false;
    crossDot.hidden = false;

    $("tipYear").textContent = yr + "年";
    $("tipEra").textContent = curEra.name + (curEra.sub ? "（" + curEra.sub + "）" : "");
    var evs = (byYear[yr] || []).slice().sort(function (a, b) { return (b.k || 0) - (a.k || 0); });
    var names = evs.slice(0, 2).map(function (e) { return e.t; });
    $("tipEv").textContent = names.length ? "主な出来事：" + names.join("、") + (evs.length > 2 ? " ほか" : "") : "";
    $("tipEv").hidden = !names.length;
    tip.hidden = false;

    var w = waveBox.clientWidth, tw = tip.offsetWidth;
    var left = xp / 100 * w - tw / 2;
    tip.style.left = Math.max(0, Math.min(w - tw, left)) + "px";

    wave.setAttribute("aria-valuenow", String(yr));
    wave.setAttribute("aria-valuetext", yr + "年、" + curEra.name);
  }
  function hideTip() {
    tip.hidden = true; cross.hidden = true; crossDot.hidden = true;
  }
  function yearFromEvent(e) {
    var r = wave.getBoundingClientRect();
    return X0 + (e.clientX - r.left) / r.width * (X1 - X0);
  }
  wave.addEventListener("pointerdown", function (e) { lastPointer = e.pointerType || "mouse"; showAt(yearFromEvent(e)); });
  wave.addEventListener("pointermove", function (e) { showAt(yearFromEvent(e)); });
  wave.addEventListener("pointerleave", function (e) {
    if (e.pointerType === "mouse" && !(e.relatedTarget && tip.contains(e.relatedTarget))) hideTip();
  });
  tip.addEventListener("pointerleave", function (e) {
    if (e.pointerType === "mouse" && !(e.relatedTarget && wave.contains(e.relatedTarget))) hideTip();
  });
  wave.addEventListener("click", function () { if (lastPointer === "mouse" && curEra) goEra(curEra); });
  $("tipGo").addEventListener("click", function () { goEra(curEra); });
  wave.addEventListener("keydown", function (e) {
    var yr = curYear == null ? Y_MAX : curYear;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") yr -= e.shiftKey ? 10 : 1;
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") yr += e.shiftKey ? 10 : 1;
    else if (e.key === "Home") yr = Y_MIN;
    else if (e.key === "End") yr = Y_MAX;
    else if (e.key === "Enter") { e.preventDefault(); goEra(curEra || eraAt(yr)); return; }
    else if (e.key === "Escape") { hideTip(); return; }
    else return;
    e.preventDefault();
    showAt(yr);
  });
  wave.addEventListener("focus", function () { if (wave.matches(":focus-visible")) showAt(curYear == null ? Y_MAX : curYear); });
  wave.addEventListener("blur", function (e) { if (!(e.relatedTarget && tip.contains(e.relatedTarget))) hideTip(); });
  document.addEventListener("pointerdown", function (e) {
    if (!waveBox.contains(e.target)) hideTip();
  });

  var rT = null;
  window.addEventListener("resize", function () {
    clearTimeout(rT);
    rT = setTimeout(function () { declutter(); syncHeights(); if (!tip.hidden && curYear != null) showAt(curYear); updateActiveEra(); }, 100);
  });

  apply();
  declutter();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { declutter(); syncHeights(); });

  // #era-xxx で開かれたら、その時代へ移る
  if (location.hash && location.hash.indexOf("#era-") === 0) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) requestAnimationFrame(function () { target.scrollIntoView({ block: "start" }); });
  }
})();
