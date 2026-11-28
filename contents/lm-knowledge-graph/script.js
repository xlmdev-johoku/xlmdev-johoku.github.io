/*
  〇LM知識グラフ：描画・ズーム・選択・検索。
  データは data/graph.js（window.LM_GRAPH）。描画に d3 v7 を使う。
*/
(function(){
"use strict";
const KG = window.LM_GRAPH;
if (!KG || !window.d3) return;
const {cats, types, nodes, edges, layouts, hubs} = KG;

const KIND_TEXT = {
  has:'A は B を部品や工程として含む', kind:'B は A の一種・具体例', variant:'A は B を改良・変形したもの',
  uses:'A は B を利用する', flow:'A の出力が B に渡る', produces:'A の結果として B ができる',
  speeds:'A は B を速く・安くする', mitigates:'A は B の問題を抑える', risk:'A は B に悪影響を及ぼしうる',
  evaluates:'A は B を測る・検証する', limits:'A が B の上限を決める', alt:'A と B は代わりになる、または対比される（向きなし）',
  signature:'モデル A が技術 B を提唱・採用した'
};
const ORDER = ['has:out','has:in','kind:out','kind:in','variant:in','variant:out','uses:out','uses:in','flow:in','flow:out',
  'produces:in','produces:out','speeds:in','speeds:out','mitigates:in','mitigates:out','risk:in','risk:out',
  'evaluates:in','evaluates:out','limits:in','limits:out','alt:out','signature:in','signature:out'];

const $ = (s, r) => (r || document).querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wideMQ = window.matchMedia('(min-width: 960px)');
const coarse = window.matchMedia('(pointer: coarse)').matches;
const DUR = reduceMotion ? 0 : 600;
const FAR_K = 0.56, READ_K = 0.66;
const FS = {normal:15, hub:17, model:15};

const catById = Object.fromEntries(cats.map(c => [c.id, c]));
const HUB = new Set(hubs);
const N = nodes.map(n => Object.assign({}, n, {
  kind: n.cat === 'core' ? 'core' : n.cat === 'model' ? 'model' : HUB.has(n.id) ? 'hub' : 'normal',
  abbr: !!n.olm && n.cat !== 'core' && n.cat !== 'model' && /^[A-Za-z]/.test(n.label), x:0, y:0, w:0, h:0, s:1 }));
const byId = Object.fromEntries(N.map(n => [n.id, n]));
const E = edges.map(([s, t, ty, note], i) => ({ i, s: byId[s], t: byId[t], ty, note,
  sym: !!types[ty].sym, warn: ty === 'risk' || ty === 'limits', g: null }));
const adj = Object.fromEntries(N.map(n => [n.id, []]));
E.forEach(e => { adj[e.s.id].push({ e, o: e.t, dir: 'out' }); adj[e.t.id].push({ e, o: e.s, dir: 'in' }); });
const T = cats.map(c => ({ id: c.id, name: c.name, x:0, y:0, w:0, h:0, s:1 }));

const state = { mode: null, sel: null, cat: null, on: new Set(), onE: new Set(), k: 1, kFit: 0.5, touched: false, bounds: [0,0,1,1], far: null };

/* ---------- static text ---------- */
$('#kfN').textContent = N.length;
$('#kfE').textContent = E.length;
$('#kfO').textContent = N.filter(n => n.olm).length;
$('#kfC').textContent = cats.length;
if (!coarse) $('#hint').textContent = 'ドラッグで移動・ホイールで拡大・クリックで選択';

function catName(id){ return id === 'core' ? '中心' : catById[id].name; }
function chip(n, extra){
  return `<button type="button" class="chip ${n.kind}${n.abbr ? ' olm' : ''} c-${n.cat}" data-id="${n.id}"${extra || ''}><span class="sw" aria-hidden="true"></span>${esc(n.label)}</button>`;
}

const legend = $('#legend');
legend.insertAdjacentHTML('beforeend', cats.map(c => {
  const count = N.filter(n => n.cat === c.id).length;
  return `<button type="button" class="chip c-${c.id}${c.id === 'model' ? ' model' : ''}" data-cat="${c.id}" aria-pressed="false"><span class="sw" aria-hidden="true"></span>${esc(c.name)}<span class="n">${count}</span></button>`;
}).join(''));

$('#ix').innerHTML = [{ id:'core', name:'中心' }, ...cats].map(c => {
  const list = N.filter(n => n.cat === c.id);
  return `<section class="c-${c.id}"><h3><span class="sw" aria-hidden="true"></span>${esc(c.name)}<span>${list.length}</span></h3><div class="chips">${list.map(n => chip(n)).join('')}</div></section>`;
}).join('');

$('#kinds').innerHTML = Object.entries(types).map(([k, t]) =>
  `<li><span class="tag${k === 'risk' || k === 'limits' ? ' warn' : ''}${t.sym ? ' alt' : ''}">${esc(t.tag)}</span><span><span class="ab">${t.sym ? 'A — B' : 'A → B'}</span>${esc(KIND_TEXT[k])}</span></li>`).join('');

/* ---------- SVG scaffold ---------- */
const svgEl = $('#graph');
const svg = d3.select(svgEl);
const vp = svg.select('#vp');
const bg = vp.append('rect').attr('fill', 'url(#dots)');
const hullSel = vp.append('g').selectAll('path').data(cats).join('path').attr('class', c => 'hull c-' + c.id);
const edgeSel = vp.append('g').selectAll('line').data(E).join('line')
  .attr('class', e => 'edge' + (e.sym ? ' alt' : '') + (e.warn ? ' warn' : ''));
const nodeSel = vp.append('g').selectAll('g').data(N).join('g')
  .attr('class', d => `node ${d.kind}${d.abbr ? ' olm' : ''} c-${d.cat}`).each(function(d){ d.el = this; });
nodeSel.append('rect').attr('class', 'pill');
nodeSel.filter(d => d.kind !== 'core').append('text').attr('dy', '0.36em').text(d => d.label);
const coreSel = nodeSel.filter(d => d.kind === 'core');
coreSel.append('text').attr('class', 'big').attr('y', -7).attr('dy', '0.36em').text('LLM');
coreSel.append('text').attr('class', 'sub').attr('y', 21).attr('dy', '0.36em').text(d => d.label);
const titleSel = vp.append('g').selectAll('g').data(T).join('g')
  .attr('class', d => 'ctitle c-' + d.id).each(function(d){ d.el = this; });
titleSel.append('text').attr('dy', '0.36em').text(d => d.name);
const focusG = vp.append('g');
const ringSel = focusG.append('rect').attr('class', 'ring').style('display', 'none');
const labelG = focusG.append('g');

const tf = d => `translate(${d.x},${d.y})` + (d.s !== 1 ? ` scale(${d.s.toFixed(3)})` : '');

function corners(n, pts){ const hw = n.w / 2, hh = n.h / 2; pts.push([n.x-hw, n.y-hh], [n.x+hw, n.y-hh], [n.x+hw, n.y+hh], [n.x-hw, n.y+hh]); }
function drawNodes(){
  nodeSel.attr('transform', tf);
  nodeSel.select('rect.pill').attr('x', d => -d.w/2).attr('y', d => -d.h/2).attr('width', d => d.w).attr('height', d => d.h)
    .attr('rx', d => d.kind === 'model' ? 5 : d.h / 2);
}
function drawHulls(){
  hullSel.attr('d', c => {
    const pts = []; N.forEach(n => { if (n.cat === c.id) corners(n, pts); });
    const t = T.find(t => t.id === c.id); corners(t, pts);
    const h = d3.polygonHull(pts);
    return h ? 'M' + h.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join('L') + 'Z' : null;
  });
}
function drawEdgesAll(){
  edgeSel.each(function(e){ this.setAttribute('x1', e.s.x); this.setAttribute('y1', e.s.y); this.setAttribute('x2', e.t.x); this.setAttribute('y2', e.t.y); e.g = [e.s.x, e.s.y, e.t.x, e.t.y]; });
}
function applyLayout(mode){
  state.mode = mode;
  const L = layouts[mode];
  N.forEach(n => { const p = L.pos[n.id]; n.x = p[0]; n.y = p[1]; if (!n.measured){ n.w = p[2]; n.h = p[3]; } });
  T.forEach(t => { const p = L.titles[t.id]; t.x = p[0]; t.y = p[1]; t.w = p[2]; t.h = p[3]; });
  const [bx, by, bw, bh] = L.bounds;
  state.bounds = [bx, by, bx + bw, by + bh];
  bg.attr('x', bx - 3000).attr('y', by - 3000).attr('width', bw + 6000).attr('height', bh + 6000);
  drawNodes(); drawHulls(); drawEdgesAll();
  titleSel.attr('transform', tf);
}

/* ---------- zoom-dependent drawing ---------- */
function exitPt(n, dx, dy, pad){
  const hw = n.w * n.s / 2 + pad, hh = n.h * n.s / 2 + pad;
  const t = Math.min(dx ? hw / Math.abs(dx) : Infinity, dy ? hh / Math.abs(dy) : Infinity);
  return [n.x + dx * t, n.y + dy * t];
}
function onZoom(k){
  const far = k < FAR_K;
  if (far !== state.far){ state.far = far; svg.classed('far', far); }
  N.forEach(n => {
    let s = 1, lift = false;
    if (n.kind === 'core') s = Math.min(1.8, Math.max(1, 0.5 / k));
    else if (state.on.has(n.id) && far){ s = Math.min(2.2, Math.max(1, 11 / (FS[n.kind] * k))); lift = true; }
    if (Math.abs(s - n.s) > 0.002){ n.s = s; n.el.setAttribute('transform', tf(n)); }
    if (lift !== !!n.lift){ n.lift = lift; n.el.classList.toggle('lift', lift); }
  });
  T.forEach(t => {
    const s = Math.min(3, Math.max(1, 12 / (22 * k)));
    if (Math.abs(s - t.s) > 0.002){ t.s = s; t.el.setAttribute('transform', tf(t)); }
  });
  // highlighted edges end at the box edges so the arrowheads stay visible
  const pad = 2.5 / k;
  edgeSel.filter(e => state.onE.has(e.i)).each(function(e){
    const dx = e.t.x - e.s.x, dy = e.t.y - e.s.y;
    const a = exitPt(e.s, dx, dy, pad), b = exitPt(e.t, -dx, -dy, pad);
    e.g = ((b[0]-a[0]) * dx + (b[1]-a[1]) * dy > 0) ? [a[0], a[1], b[0], b[1]] : [e.s.x, e.s.y, e.t.x, e.t.y];
    this.setAttribute('x1', e.g[0]); this.setAttribute('y1', e.g[1]); this.setAttribute('x2', e.g[2]); this.setAttribute('y2', e.g[3]);
  });
  const onNodes = [...state.on].map(id => byId[id]);
  labelG.selectAll('g.elab').each(function(e){
    const [x1, y1, x2, y2] = e.g;
    const ang = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    this.firstChild.setAttribute('transform', `translate(${x2},${y2}) rotate(${ang.toFixed(1)}) scale(${(1/k).toFixed(4)})`);
    const len = Math.hypot(x2 - x1, y2 - y1) * k;
    const tag = this.lastChild, hw = (e.lw || 30) / 2 / k + 3 / k, hh = 9 / k + 2 / k;
    let px = (x1 + x2) / 2, py = (y1 + y2) / 2;
    for (const f of [0.5, 0.38, 0.62, 0.28, 0.72]){
      const cx = x1 + (x2 - x1) * f, cy = y1 + (y2 - y1) * f;
      const hit = onNodes.some(n => Math.abs(n.x - cx) < n.w * n.s / 2 + hw && Math.abs(n.y - cy) < n.h * n.s / 2 + hh);
      if (!hit){ px = cx; py = cy; break; }
    }
    tag.setAttribute('transform', `translate(${px},${py}) scale(${(1/k).toFixed(4)})`);
    tag.style.display = len < 52 ? 'none' : '';
  });
  if (state.sel){
    const n = byId[state.sel], p = 5 / k, w = n.w * n.s, h = n.h * n.s;
    ringSel.style('display', null).attr('x', n.x - w/2 - p).attr('y', n.y - h/2 - p).attr('width', w + 2*p).attr('height', h + 2*p)
      .attr('rx', n.kind === 'model' ? 5 * n.s + p : h / 2 + p);
  } else ringSel.style('display', 'none');
}
function buildEdgeLabels(){
  const data = E.filter(e => state.onE.has(e.i));
  const g = labelG.selectAll('g.elab').data(data, e => e.i).join(enter => {
    const g = enter.append('g').attr('class', e => 'elab' + (e.warn ? ' warn' : ''));
    g.append('path').attr('class', 'arrow').attr('d', 'M0,0L-9,-4.5L-9,4.5Z').style('display', e => e.sym ? 'none' : null);
    const tag = g.append('g');
    tag.append('rect');
    tag.append('text').attr('dy', '0.36em').text(e => types[e.ty].tag);
    return g;
  });
  g.select('g rect').each(function(){
    let w = 30; try { w = this.nextSibling.getComputedTextLength() + 12; } catch (err) {}
    d3.select(this.parentNode.parentNode).datum().lw = w;
    this.setAttribute('x', -w/2); this.setAttribute('y', -8.5); this.setAttribute('width', w); this.setAttribute('height', 17); this.setAttribute('rx', 4);
  });
}

/* ---------- focus: one node or one region ---------- */
function setFocus(){
  const on = new Set(), onE = new Set();
  if (state.sel){
    on.add(state.sel);
    adj[state.sel].forEach(a => { on.add(a.o.id); onE.add(a.e.i); });
  } else if (state.cat){
    N.forEach(n => { if (n.cat === state.cat) on.add(n.id); });
    E.forEach(e => { if (on.has(e.s.id) && on.has(e.t.id)) onE.add(e.i); });
  }
  state.on = on; state.onE = onE;
  svg.classed('focus', on.size > 0);
  nodeSel.classed('on', d => on.has(d.id));
  edgeSel.classed('on', e => onE.has(e.i));
  titleSel.classed('on', d => state.cat === d.id);
  // reset scales and edge ends, then let onZoom re-apply them
  N.forEach(n => { if (n.kind !== 'core' && n.s !== 1){ n.s = 1; n.el.setAttribute('transform', tf(n)); } });
  drawEdgesAll();
  buildEdgeLabels();
  legend.querySelectorAll('[data-cat]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.cat === state.cat)));
  onZoom(state.k);
}

/* ---------- zoom ---------- */
const zoom = d3.zoom().scaleExtent([0.15, 3]).on('zoom', ev => {
  state.k = ev.transform.k;
  vp.attr('transform', ev.transform);
  onZoom(ev.transform.k);
  if (ev.sourceEvent) touched();
});
svg.call(zoom).on('dblclick.zoom', null);

function go(t, dur){ if (dur) svg.transition().duration(dur).ease(d3.easeCubicInOut).call(zoom.transform, t); else svg.call(zoom.transform, t); }
function size(){ return [svgEl.clientWidth || 1, svgEl.clientHeight || 1]; }
function fitT(b, pad, maxK, bottom){
  const [W, Hc] = size(), H = Math.max(120, Hc - (bottom || 0));
  const k = Math.min(maxK || 4, (W - 2*pad) / (b[2] - b[0]), (H - 2*pad) / (b[3] - b[1]));
  return d3.zoomIdentity.translate(W/2 - k * (b[0] + b[2]) / 2, H/2 - k * (b[1] + b[3]) / 2).scale(k);
}
function fitAll(dur){
  const t = fitT(state.bounds, 6);
  state.kFit = t.k;
  zoom.scaleExtent([t.k * 0.7, 3]);
  go(t, dur);
}
function peekShown(){ return !wideMQ.matches && !$('#peek').hidden; }
function zoomToFocus(dur){
  if (!state.on.size) return;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const add = n => { x0 = Math.min(x0, n.x - n.w/2); y0 = Math.min(y0, n.y - n.h/2); x1 = Math.max(x1, n.x + n.w/2); y1 = Math.max(y1, n.y + n.h/2); };
  state.on.forEach(id => add(byId[id]));
  if (state.cat) add(T.find(t => t.id === state.cat));
  const bottom = peekShown() ? $('#peek').offsetHeight + 14 : 0;
  let t = fitT([x0 - 24, y0 - 24, x1 + 24, y1 + 24], 12, 1.15, bottom);
  if (state.sel && t.k < READ_K){
    // neighbourhood too spread out to read at once: centre on the chosen node at a readable scale
    const n = byId[state.sel], [W, Hc] = size(), H = Hc - bottom, k = Math.max(READ_K, state.kFit);
    t = d3.zoomIdentity.translate(W/2 - k * n.x, H/2 - k * n.y).scale(k);
  }
  go(t, dur);
}
$('#z-in').addEventListener('click', () => { touched(); svg.transition().duration(reduceMotion ? 0 : 250).call(zoom.scaleBy, 1.45); });
$('#z-out').addEventListener('click', () => { touched(); svg.transition().duration(reduceMotion ? 0 : 250).call(zoom.scaleBy, 1 / 1.45); });
$('#z-fit').addEventListener('click', () => { touched(); fitAll(DUR); });

function touched(){ if (!state.touched){ state.touched = true; $('#hint').classList.add('gone'); } }

/* ---------- detail + peek ---------- */
function renderDetail(id){
  const n = byId[id];
  const groups = new Map();
  adj[id].forEach(({ e, o, dir }) => {
    const key = e.ty + ':' + (types[e.ty].sym ? 'out' : dir);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({ o, note: e.note });
  });
  const heading = key => { const [ty, dir] = key.split(':'); return types[ty][dir]; };
  const rels = ORDER.filter(k => groups.has(k)).map(k =>
    `<div class="rel"><dt>${esc(heading(k))}</dt><dd><ul${groups.get(k).some(g => g.note) ? '' : ' class="inline"'}>${groups.get(k).map(g =>
      `<li>${chip(g.o)}${g.note ? `<span class="note">${esc(g.note)}</span>` : ''}</li>`).join('')}</ul></dd></div>`).join('');
  $('#detail').innerHTML = `
    <p class="d-kicker c-${n.cat}"><span class="sw" aria-hidden="true"></span>${esc(catName(n.cat))}${n.olm ? `<span class="d-olm">〇LM：${esc(n.olm)}</span>` : ''}</p>
    <h2 class="d-title">${esc(n.label)}</h2>
    <p class="d-en">${esc(n.en)}</p>
    <p class="d-desc">${esc(n.desc)}</p>
    ${n.ref ? `<p class="d-ref"><b>文献・出来事</b>${esc(n.ref)}</p>` : ''}
    ${n.clash ? `<p class="d-clash"><b>同じ綴りの別物</b>${esc(n.clash)}</p>` : ''}
    <h3 class="d-h">つながり<span>${adj[id].length}</span></h3>
    <dl class="rels">${rels}</dl>`;
}
function renderPeek(id){
  const p = $('#peek');
  if (!id){ p.hidden = true; return; }
  const n = byId[id];
  $('#pk-cat').innerHTML = `<span class="sw c-${n.cat}" aria-hidden="true"></span>${esc(catName(n.cat))}`;
  $('#pk-cat').className = 'pk-cat c-' + n.cat;
  $('#pk-title').textContent = n.label;
  $('#pk-desc').textContent = n.desc;
  $('#pk-more').textContent = `解説とつながり ${adj[id].length} 件を読む ↓`;
  p.hidden = false;
}
function setHash(id){ try { history.replaceState(null, '', id ? '#' + id : location.pathname + location.search); } catch (err) {} }

function select(id, opts){
  opts = opts || {};
  if (!byId[id]) return;
  state.sel = id; state.cat = null;
  renderDetail(id);
  renderPeek(id);
  setFocus();
  setHash(id);
  if (opts.zoom !== false) zoomToFocus(opts.dur === undefined ? DUR : opts.dur);
}
function focusCat(id){
  if (state.cat === id){ clearFocus(); return; }
  state.cat = id; state.sel = null;
  renderPeek(null);
  setFocus();
  setHash(null);
  zoomToFocus(DUR);
}
function clearFocus(){
  if (!state.sel && !state.cat) return;
  state.sel = null; state.cat = null;
  renderPeek(null);
  setFocus();
  setHash(null);
}
function scrollToEl(el){ el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); }
function detailOffscreen(){ const r = $('#detail').getBoundingClientRect(); return r.top < 0 || r.top > window.innerHeight - 80; }

nodeSel.on('click', (ev, d) => {
  ev.stopPropagation(); touched();
  select(d.id);
  if (wideMQ.matches && detailOffscreen()) scrollToEl($('#detail'));
});
titleSel.on('click', (ev, d) => { ev.stopPropagation(); touched(); focusCat(d.id); });
svg.on('click', () => clearFocus());

legend.addEventListener('click', ev => {
  const b = ev.target.closest('[data-cat]'); if (!b) return;
  touched(); focusCat(b.dataset.cat);
  if (!wideMQ.matches) scrollToEl($('#stage'));
});
$('#detail').addEventListener('click', ev => {
  const b = ev.target.closest('[data-id]'); if (!b) return;
  touched(); select(b.dataset.id);
  if ($('#detail').getBoundingClientRect().top < 0) scrollToEl($('#detail'));
});
$('#ix').addEventListener('click', ev => {
  const b = ev.target.closest('[data-id]'); if (!b) return;
  touched(); select(b.dataset.id);
  scrollToEl(wideMQ.matches ? $('#detail') : $('#stage'));
});
$('#pk-close').addEventListener('click', ev => { ev.stopPropagation(); clearFocus(); });
$('#pk-more').addEventListener('click', () => scrollToEl($('#detail')));
document.addEventListener('keydown', ev => {
  const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement && document.activeElement.tagName);
  if (ev.key === 'Escape' && !typing) clearFocus();
  if (ev.key === '/' && !typing){ ev.preventDefault(); $('#q').focus(); }
});

/* ---------- search ---------- */
const q = $('#q'), list = $('#suggest');
const norm = s => String(s).normalize('NFKC').toLowerCase().replace(/[ぁ-ゖ]/g, c => String.fromCharCode(c.charCodeAt(0) + 0x60)).replace(/[\s・\-]/g, '');
const hay = N.map(n => ({ n, a: norm(n.label), b: norm(n.en + ' ' + n.id) }));
let hits = [], cur = 0;
function closeList(){ list.hidden = true; q.setAttribute('aria-expanded', 'false'); q.removeAttribute('aria-activedescendant'); }
function paint(){
  list.querySelectorAll('li[role=option]').forEach((li, i) => li.setAttribute('aria-selected', String(i === cur)));
  const li = list.querySelector(`#opt-${cur}`); if (li){ q.setAttribute('aria-activedescendant', li.id); li.scrollIntoView({ block: 'nearest' }); }
}
q.addEventListener('input', () => {
  const v = norm(q.value.trim());
  if (!v){ closeList(); return; }
  hits = hay.map(h => ({ n: h.n, r: h.a.startsWith(v) ? 0 : h.a.includes(v) ? 1 : h.b.includes(v) ? 2 : 9 }))
    .filter(h => h.r < 9).sort((x, y) => x.r - y.r || x.n.label.length - y.n.label.length).slice(0, 8).map(h => h.n);
  cur = 0;
  list.innerHTML = hits.length ? hits.map((n, i) => `<li role="option" id="opt-${i}" data-id="${n.id}" class="c-${n.cat}"><span class="sw" aria-hidden="true"></span><span class="s-label">${esc(n.label)}</span><span class="s-en">${esc(n.en)}</span></li>`).join('')
    : '<li class="empty">見つかりませんでした。別の言い方で試してください。</li>';
  list.hidden = false; q.setAttribute('aria-expanded', 'true'); paint();
});
function pick(id){
  q.value = ''; closeList(); q.blur(); touched();
  select(id);
  if (!wideMQ.matches) scrollToEl($('#stage'));
}
q.addEventListener('keydown', ev => {
  if (list.hidden || !hits.length){ if (ev.key === 'Escape') closeList(); return; }
  if (ev.key === 'ArrowDown'){ ev.preventDefault(); cur = (cur + 1) % hits.length; paint(); }
  else if (ev.key === 'ArrowUp'){ ev.preventDefault(); cur = (cur - 1 + hits.length) % hits.length; paint(); }
  else if (ev.key === 'Enter'){ ev.preventDefault(); pick(hits[cur].id); }
  else if (ev.key === 'Escape'){ closeList(); }
});
list.addEventListener('mousedown', ev => ev.preventDefault());
list.addEventListener('click', ev => { const li = ev.target.closest('[data-id]'); if (li) pick(li.dataset.id); });
q.addEventListener('blur', () => setTimeout(closeList, 120));


/* ---------- 〇LM早見表 ---------- */
$('#olmGroups').innerHTML = [{ id:'core', name:'中心' }, ...cats].map(c => {
  const list = N.filter(n => n.cat === c.id && n.olm);
  if (!list.length) return '';
  return `<section class="olm-group c-${c.id}"><h3><span class="sw" aria-hidden="true"></span>${esc(c.name)}</h3><ul class="olm-list">${list.map(n =>
    `<li class="c-${n.cat}"><button type="button" class="olm-item" data-id="${n.id}"><span class="olm-ab">${esc(n.olm)}</span>` +
    `<span class="olm-ex">${esc(n.abbr ? n.en : n.label + '（' + n.en + '）')}</span>` +
    (n.clash ? `<span class="olm-clash"><b>同じ綴りの別物</b>${esc(n.clash)}</span>` : '') + `</button></li>`).join('')}</ul></section>`;
}).join('');
$('#olmGroups').addEventListener('click', ev => {
  const b = ev.target.closest('[data-id]'); if (!b) return;
  touched(); select(b.dataset.id);
  scrollToEl($('#stage'));
});

/* サイト共通ヘッダーも上に固定されるので、図を固定する位置をその高さだけ下げる */
const siteHeader = document.getElementById('siteHeader');
function syncSiteH(){ document.documentElement.style.setProperty('--site-h', siteHeader.offsetHeight + 'px'); }
syncSiteH();
if (window.ResizeObserver) new ResizeObserver(syncSiteH).observe(siteHeader);

/* ---------- start ---------- */
function modeFor(){ const [w, h] = size(); return w / h < 0.95 ? 'port' : 'land'; }
applyLayout(modeFor());
renderDetail('llm');
fitAll(0);
const start = decodeURIComponent((location.hash || '').slice(1));
if (byId[start]) select(start, { dur: 0 });

new ResizeObserver(() => {
  const [w, h] = size(); if (w < 2 || h < 2) return;
  const m = modeFor();
  if (m !== state.mode){ applyLayout(m); setFocus(); fitAll(0); if (state.on.size) zoomToFocus(0); }
  else if (!state.touched){ fitAll(0); if (state.on.size) zoomToFocus(0); }
}).observe(svgEl);
wideMQ.addEventListener && wideMQ.addEventListener('change', () => renderPeek(state.sel));

if (document.fonts && document.fonts.ready){
  document.fonts.ready.then(() => {
    let changed = false;
    nodeSel.each(function(d){
      if (d.kind === 'core') return;
      let w; try { w = this.querySelector('text').getComputedTextLength(); } catch (err) { return; }
      if (!w) return;
      w = Math.round(w + (d.kind === 'hub' ? 26 : 22));
      if (Math.abs(w - d.w) > 1.5){ d.w = w; d.measured = true; changed = true; }
    });
    if (changed){ drawNodes(); drawHulls(); setFocus(); }
    buildEdgeLabels(); onZoom(state.k);
  });
}
})();
