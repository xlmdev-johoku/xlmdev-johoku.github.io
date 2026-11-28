/*
  未来技術ロードマップ：図1・工程表・技術別シート・年表ビュー。
  データは data/roadmap.js（window.FT_ROADMAP）。
*/
(function () {
  'use strict';
  const D = window.FT_ROADMAP;
  if (!D) return;

  const NOW = D.now, CATS = D.cats, ST = D.statuses, STAGES = D.stages, COLS = D.cols, T = D.techs, LM = D.lm;
  const LV = D.lmLevels, LST = D.lmStages, LV_ORDER = ['core', 'support', 'peripheral'];

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const host = u => { try { return new URL(u).hostname.replace(/^www\d?\./, ''); } catch (e) { return 'リンク'; } };
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = id => document.getElementById(id);

  T.forEach(t => t.ev.sort((a, b) => a.y - b.y));

  /* 表示の状態（見る人のブラウザにだけ保存する） */
  let state = { view: 'tech', cat: 'all', st: { done: true, plan: true, fc: true } };
  try {
    const s = JSON.parse(localStorage.getItem('ftr-v1') || 'null');
    if (s && typeof s === 'object') {
      if (s.view === 'tech' || s.view === 'year') state.view = s.view;
      if (s.cat === 'all' || CATS.some(c => c.k === s.cat)) state.cat = s.cat;
      if (s.st && typeof s.st === 'object') Object.keys(state.st).forEach(k => { if (typeof s.st[k] === 'boolean') state.st[k] = s.st[k]; });
      if (!Object.values(state.st).some(Boolean)) state.st = { done: true, plan: true, fc: true };
    }
  } catch (e) {}
  const save = () => { try { localStorage.setItem('ftr-v1', JSON.stringify(state)); } catch (e) {} };

  const visTech = t => state.cat === 'all' || t.cat === state.cat;
  const visEv = e => !!state.st[e.s];
  const mk = s => '<i class="mk ' + s + '" aria-hidden="true"></i>';
  const wasTag = e => e.was ? '<span class="was">△ 当初 ' + esc(e.was) + '</span>' : '';
  const lapseTag = e => (e.s !== 'done' && e.y < NOW) ? '<span class="lapse">期限経過</span>' : '';
  const txt = e => '<p class="tx"><span class="sr">' + ST[e.s] + '：</span>' + esc(e.t) + wasTag(e) + lapseTag(e) + '</p>';
  const lvBadge = lv => '<span class="lv ' + lv + '">' + esc(LV[lv]) + '</span>';
  function meta(e) {
    const p = [];
    if (e.w) p.push('<span>' + esc(e.w) + '</span>');
    if (e.u) p.push('<a class="src" href="' + esc(e.u) + '" target="_blank" rel="noopener">出典 ' + esc(host(e.u)) + '</a>');
    return p.length ? '<div class="meta">' + p.join('') + '</div>' : '';
  }
  const catName = k => (CATS.find(c => c.k === k) || {}).name || '';

  function stageHtml(n) {
    return '<div class="stage"><p>段階（目安）</p><ol>' + STAGES.map((s, i) => {
      const step = i + 1;
      const cls = step < n ? 'past' : step === n ? 'cur' : '';
      return '<li class="' + cls + '"' + (step === n ? ' aria-current="step"' : '') + '>' + s + '</li>';
    }).join('') + '</ol></div>';
  }

  /* ---------- 数字のまとめ ---------- */
  const total = T.reduce((n, t) => n + t.ev.length, 0);
  const delays = T.reduce((n, t) => n + t.ev.filter(e => e.was).length, 0);
  const lmTotal = T.reduce((n, t) => n + (LM[t.id] ? LM[t.id].items.length : 0), 0);
  function setFig(id, num, unit) {
    const el = $(id); el.textContent = num;
    if (unit) { const u = document.createElement('span'); u.className = 'unit'; u.textContent = unit; el.appendChild(u); }
  }
  setFig('kfTech', T.length, '技術');
  setFig('kfEv', total, '項目');
  setFig('kfLm', lmTotal, '件');
  setFig('kfDelay', delays, '件');
  $('kfAsOf').textContent = D.asOfLabel;
  $('n-delay').textContent = String(delays);

  /* ---------- 図1：実現段階 × LM の関わり ---------- */
  (function renderGrid() {
    const lvNote = { core: 'LM そのものが中心', support: '開発・運用の道具', peripheral: '論文・試作が中心' };
    let h = '<thead><tr><th scope="col"><span class="sr">LM の関わり</span></th>' +
      STAGES.map((s, i) => '<th scope="col">' + esc(s) + '<small>段階 ' + (i + 1) + '</small></th>').join('') + '</tr></thead><tbody>';
    LV_ORDER.forEach(lv => {
      h += '<tr class="lv-' + lv + '"><th scope="row">' + esc(LV[lv]) + '<span>' + esc(lvNote[lv]) + '</span></th>';
      STAGES.forEach((s, i) => {
        const ts = T.filter(t => LM[t.id] && LM[t.id].level === lv && t.stage === i + 1);
        h += '<td>' + ts.map(t => '<button type="button" class="rm-chip" data-goto="' + t.id + '"><i class="sw c-' + t.cat + '" aria-hidden="true"></i>' + esc(t.sh) + '</button>').join('') + '</td>';
      });
      h += '</tr>';
    });
    $('lmGrid').innerHTML = h + '</tbody>';
  })();

  /* ---------- 工程表 ---------- */
  function renderMatrix() {
    const order = { done: 0, plan: 1, fc: 2 };
    let h = '<thead><tr><th scope="col" class="nm">技術</th><th scope="col" class="lmc">LM</th>' + COLS.map(c =>
      '<th scope="col"' + (c.now ? ' class="now"' : '') + '>' + esc(c.label) + (c.now ? '<small>いま</small>' : '') + '</th>').join('') + '</tr></thead><tbody>';
    T.filter(visTech).forEach(t => {
      h += '<tr><th scope="row" class="nm"><button type="button" data-goto="' + t.id + '"><i class="sw c-' + t.cat + '" aria-hidden="true"></i><span class="cd">' + esc(t.code) + '</span><span>' + esc(t.sh) + '</span></button></th>';
      h += '<td class="lmc">' + (LM[t.id] ? lvBadge(LM[t.id].level) : '') + '</td>';
      COLS.forEach(c => {
        const evs = t.ev.filter(e => visEv(e) && e.y >= c.lo && e.y < c.hi).sort((a, b) => order[a.s] - order[b.s]);
        if (!evs.length) { h += '<td' + (c.now ? ' class="now"' : '') + '></td>'; return; }
        const lim = evs.length > 4 ? 3 : 4;
        let cell = '<span class="mks" aria-hidden="true">' + evs.slice(0, lim).map(e => mk(e.s)).join('') +
          (evs.length > lim ? '<span class="more">+' + (evs.length - lim) + '</span>' : '') +
          (evs.some(e => e.was) ? '<b class="tri">△</b>' : '') + '</span>';
        const n = { done: 0, plan: 0, fc: 0 };
        evs.forEach(e => n[e.s]++);
        const sum = Object.keys(n).filter(k => n[k]).map(k => ST[k] + n[k] + '件').join('、');
        cell += '<span class="sr">' + esc(c.label + '：' + sum) + '</span>';
        h += '<td' + (c.now ? ' class="now"' : '') + ' title="' + esc(c.label + '：' + sum) + '">' + cell + '</td>';
      });
      h += '</tr>';
    });
    $('mx').innerHTML = h + '</tbody>';
  }

  /* ---------- 技術別シート ---------- */
  function lmSide(t) {
    const L = LM[t.id];
    if (!L) return '';
    return '<div class="lmbox ' + L.level + '"><p class="lmbox-h">LM との関わり' + lvBadge(L.level) + '</p><p class="sum">' + esc(L.summary) + '</p></div>';
  }
  function lmList(t) {
    const L = LM[t.id];
    if (!L || !L.items.length) return '';
    const c = {};
    L.items.forEach(i => { c[i.s] = (c[i.s] || 0) + 1; });
    const sum = ['use', 'demo', 'research', 'plan'].filter(k => c[k]).map(k => LST[k] + ' ' + c[k]).join('・');
    return '<section class="lmsec" aria-label="' + esc(t.sh) + 'での LM の事例"><h4 class="lmsec-h">LM の関わりの事例<small>' + esc(sum) + '</small></h4><ol class="lml">' +
      L.items.map(i => '<li><span class="yr">' + esc(i.d) + '</span><span class="lst ' + i.s + '">' + esc(LST[i.s]) + '</span><div class="lbody"><p class="tx">' + esc(i.t) + '</p>' + meta(i) + '</div></li>').join('') +
      '</ol></section>';
  }
  function nowRow() { return '<li class="nowline"><span class="yr">いま</span><span class="rail"></span><div class="body"><span>2026.11</span></div></li>'; }

  function renderTech() {
    let shown = 0;
    const parts = T.filter(visTech).map(t => {
      const evs = t.ev.filter(visEv);
      shown += evs.length;
      const dl = t.ev.filter(e => e.was).length;
      let list = '', placed = false;
      evs.forEach(e => {
        if (!placed && e.y >= NOW) { list += nowRow(); placed = true; }
        list += '<li class="ev ' + e.s + (e.y >= NOW ? ' fut' : '') + '"><span class="yr">' + esc(e.d) + '</span><span class="rail">' + mk(e.s) + '</span><div class="body">' + txt(e) + meta(e) + '</div></li>';
      });
      if (!placed && evs.length) list += nowRow();
      return '<article class="sheet" id="t-' + t.id + '" tabindex="-1" aria-labelledby="h-' + t.id + '">' +
        '<div class="side"><p class="code"><i class="sw c-' + t.cat + '" aria-hidden="true"></i>' + esc(t.code) + '<span>' + esc(t.en) + '</span></p>' +
        '<h3 id="h-' + t.id + '">' + esc(t.name) + '</h3>' +
        '<p class="cat">' + esc(catName(t.cat)) + ' · ' + t.ev.length + '項目' + (dl ? ' · <span class="dl">延期 ' + dl + '</span>' : '') + '</p>' +
        '<dl class="facts"><div><dt>現在地</dt><dd>' + esc(t.now) + '</dd></div><div><dt>見通し</dt><dd>' + esc(t.out) + '</dd></div></dl>' +
        stageHtml(t.stage) + lmSide(t) + '</div>' +
        '<div class="main-col"><ol class="tl">' + (evs.length ? list : '<li class="empty">選んだ種類の項目はありません</li>') + '</ol>' + lmList(t) + '</div></article>';
    });
    return { html: parts.join('') || '<p class="empty">該当する技術はありません</p>', shown };
  }

  /* ---------- 年表ビュー ---------- */
  const groupKey = y => y < 2031 ? String(Math.floor(y)) : y < 2036 ? '2031–2035' : y < 2041 ? '2036–2040' : '2041–2050';
  function renderYear() {
    const all = [];
    T.filter(visTech).forEach(t => t.ev.filter(visEv).forEach(e => all.push({ e, t })));
    all.sort((a, b) => a.e.y - b.e.y);
    const groups = [];
    all.forEach(it => {
      const k = groupKey(it.e.y);
      let g = groups[groups.length - 1];
      if (!g || g.k !== k) { g = { k, items: [] }; groups.push(g); }
      g.items.push(it);
    });
    let placed = false;
    const html = groups.map(g => {
      let list = '';
      g.items.forEach(({ e, t }) => {
        if (!placed && e.y >= NOW) { list += '<li class="nowline"><span class="rail"></span><div class="body"><b>いま</b><span>2026.11</span></div></li>'; placed = true; }
        list += '<li class="ev ' + e.s + (e.y >= NOW ? ' fut' : '') + '"><span class="rail">' + mk(e.s) + '</span><div class="body"><div class="tagline"><button type="button" class="tag" data-goto="' + t.id + '"><i class="sw c-' + t.cat + '" aria-hidden="true"></i><b>' + esc(t.code) + '</b>' + esc(t.sh) + '</button><span class="when">' + esc(e.d) + '</span></div>' + txt(e) + meta(e) + '</div></li>';
      });
      return '<section class="yg' + (g.k === '2026' ? ' cur' : '') + '"><h3 class="yg-h">' + esc(g.k) + '<small>' + g.items.length + '項目</small></h3><ol class="tl yl">' + list + '</ol></section>';
    }).join('');
    return { html: html || '<p class="empty">該当する項目はありません</p>', shown: all.length };
  }

  function render() {
    document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.view === state.view)));
    document.querySelectorAll('[data-cat]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.cat === state.cat)));
    document.querySelectorAll('[data-st]').forEach(b => b.setAttribute('aria-pressed', String(!!state.st[b.dataset.st])));
    renderMatrix();
    const r = state.view === 'tech' ? renderTech() : renderYear();
    $('main').innerHTML = r.html;
    $('shown').textContent = r.shown + '項目を表示';
  }

  function goTo(id) {
    const t = T.find(x => x.id === id);
    if (!t) return;
    state.view = 'tech';
    if (!visTech(t)) state.cat = 'all';
    save(); render();
    const el = $('t-' + id);
    if (el) { el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); el.focus({ preventScroll: true }); }
  }

  $('cats').innerHTML = '<button type="button" data-cat="all">すべて</button>' + CATS.map(c =>
    '<button type="button" data-cat="' + c.k + '"><i class="sw c-' + c.k + '" aria-hidden="true"></i>' + esc(c.name) + '</button>').join('');

  document.addEventListener('click', ev => {
    const b = ev.target.closest('button');
    if (!b) return;
    if (b.dataset.view) { state.view = b.dataset.view; save(); render(); }
    else if (b.dataset.cat) { state.cat = b.dataset.cat; save(); render(); }
    else if (b.dataset.st) {
      const k = b.dataset.st;
      if (state.st[k] && Object.values(state.st).filter(Boolean).length === 1) return;
      state.st[k] = !state.st[k]; save(); render();
    }
    else if (b.dataset.goto) { goTo(b.dataset.goto); }
  });

  /* サイト共通ヘッダーと切り替えバーの高さを CSS 変数に渡す（固定表示とジャンプ先の位置に使う） */
  const siteHeader = $('siteHeader'), bar = $('bar');
  function syncHeights() {
    const r = document.documentElement.style;
    r.setProperty('--site-h', siteHeader.offsetHeight + 'px');
    r.setProperty('--bar-h', bar.offsetHeight + 'px');
  }
  syncHeights();
  if (window.ResizeObserver) { const ro = new ResizeObserver(syncHeights); ro.observe(siteHeader); ro.observe(bar); }

  render();
  const h = (location.hash || '').replace('#t-', '');
  if (h && h !== location.hash) setTimeout(() => goTo(h), 0);
})();
