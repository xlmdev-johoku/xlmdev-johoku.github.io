// ゼータ関数と級数の関係を、スライダーで動かして見る図（2つ）
// 数値計算は Euler–Maclaurin の公式で行う（臨界帯の中でも、t ≦ 60 程度なら 1e-8 より良い精度）

const ZetaMath = (() => {
  // 複素数は [実部, 虚部] で表す
  const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
  const mul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
  const div = (a, b) => {
    const d = b[0] * b[0] + b[1] * b[1];
    return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d];
  };
  const scale = (a, k) => [a[0] * k, a[1] * k];
  const abs = (a) => Math.hypot(a[0], a[1]);

  // n^(-s) = n^(-σ) (cos(t log n) - i sin(t log n))
  const powNeg = (n, s) => {
    const ln = Math.log(n);
    const r = Math.exp(-s[0] * ln);
    return [r * Math.cos(s[1] * ln), -r * Math.sin(s[1] * ln)];
  };

  // ベルヌーイ数 B_2, B_4, …, B_16
  const B = [1 / 6, -1 / 30, 1 / 42, -1 / 30, 5 / 66, -691 / 2730, 7 / 6, -3617 / 510];

  // ζ(s)（s ≠ 1）
  const zeta = (s) => {
    const N = Math.max(12, Math.ceil(Math.abs(s[1]) / 2) + 12);
    let sum = [0, 0];
    for (let n = 1; n < N; n++) sum = add(sum, powNeg(n, s));
    const Ns = powNeg(N, s); // N^(-s)
    sum = add(sum, scale(Ns, 0.5));
    // N^(1-s) / (s-1)
    sum = add(sum, div(scale(Ns, N), sub(s, [1, 0])));
    // Σ B_2k/(2k)! · s(s+1)…(s+2k-2) · N^(-s-2k+1)
    let poch = s;
    let fact = 2; // (2k)!
    let Npow = 1 / N; // N^(-(2k-1))
    for (let k = 1; k <= B.length; k++) {
      if (k > 1) {
        poch = mul(poch, mul(add(s, [2 * k - 3, 0]), add(s, [2 * k - 2, 0])));
        fact *= (2 * k - 1) * (2 * k);
        Npow /= N * N;
      }
      sum = add(sum, scale(mul(poch, Ns), (B[k - 1] / fact) * Npow));
    }
    return sum;
  };

  // 級数の部分和 S_1, …, S_N と、補正した和 S_n - n^(1-s)/(1-s)
  const partialSums = (s, N) => {
    const raw = [];
    const corrected = [];
    const oneMinusS = sub([1, 0], s);
    let sum = [0, 0];
    for (let n = 1; n <= N; n++) {
      sum = add(sum, powNeg(n, s));
      raw.push(sum);
      const nPow = scale(powNeg(n, s), n); // n^(1-s)
      corrected.push(sub(sum, div(nPow, oneMinusS)));
    }
    return { raw, corrected };
  };

  return { zeta, partialSums, abs, powNeg };
})();

if (typeof module !== 'undefined') module.exports = ZetaMath;

if (typeof document !== 'undefined') {
  const fmt = (x, d = 4) => (Number.isFinite(x) ? x.toFixed(d).replace('-', '−') : '—');
  const fmtC = (z, d = 4) => `${fmt(z[0], d)} ${z[1] < 0 ? '−' : '+'} ${fmt(Math.abs(z[1]), d)}i`;

  const colors = (el) => {
    const cs = getComputedStyle(el);
    const v = (name) => cs.getPropertyValue(name).trim();
    return {
      ink: v('--ink'), soft: v('--ink-soft'), muted: v('--muted'), line: v('--line'),
      accent: v('--accent-ink'), hot: v('--hot-ink'), surface: v('--surface'), tint: v('--green-tint'),
    };
  };

  // キャンバスを要素の幅に合わせ、高精細画面でもにじまないようにする
  const fitCanvas = (canvas, aspect) => {
    const w = canvas.clientWidth;
    const h = Math.round(w * aspect);
    const dpr = window.devicePixelRatio || 1;
    canvas.style.height = `${h}px`;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, w, h };
  };

  const font = (px, weight = 400) => `${weight} ${px}px "Noto Sans JP", system-ui, sans-serif`;

  // ---------- 図1：実数の s で、級数の和が ζ(s) に近づく ----------
  const initReal = (root) => {
    const canvas = root.querySelector('canvas');
    const sIn = root.querySelector('[name="s"]');
    const nIn = root.querySelector('[name="n"]');
    const sOut = root.querySelector('[data-out="s"]');
    const nOut = root.querySelector('[data-out="n"]');
    const sumOut = root.querySelector('[data-out="sum"]');
    const zetaOut = root.querySelector('[data-out="zeta"]');
    const diffOut = root.querySelector('[data-out="diff"]');
    const note = root.querySelector('[data-out="note"]');

    const draw = () => {
      const s = Number(sIn.value);
      const N = Number(nIn.value);
      sOut.textContent = s.toFixed(2);
      nOut.textContent = N;

      const sums = [];
      let acc = 0;
      for (let n = 1; n <= N; n++) { acc += Math.pow(n, -s); sums.push(acc); }
      const converges = s > 1;
      const z = Math.abs(s - 1) < 1e-9 ? NaN : ZetaMath.zeta([s, 0])[0];

      sumOut.textContent = fmt(acc);
      zetaOut.textContent = Math.abs(s - 1) < 1e-9 ? '定義されない（s = 1）' : fmt(z);
      diffOut.textContent = converges ? fmt(z - acc) : '—';
      if (converges) {
        note.textContent = Math.abs(s - 2) < 1e-9
          ? 's = 2 のとき、和は π²/6 = 1.6449… に近づく。'
          : '項を足すほど、和は ζ(s) に近づく（収束する）。';
      } else if (Math.abs(s - 1) < 1e-9) {
        note.textContent = 's = 1 の級数（調和級数）は、ゆっくりだが限りなく大きくなる（発散する）。';
      } else {
        note.textContent = 's ≦ 1 では級数は発散する。それでも解析接続で決まる ζ(s) の値はある（上の「ζ(s)」）。';
      }

      const c = colors(root);
      const { ctx, w, h } = fitCanvas(canvas, 0.56);
      const pad = { l: 44, r: 14, t: 14, b: 30 };
      const yMax = Math.max(converges ? z : 0, acc) * 1.12 || 1;
      const X = (n) => pad.l + ((n - 1) / Math.max(1, N - 1)) * (w - pad.l - pad.r);
      const Y = (v) => h - pad.b - (v / yMax) * (h - pad.t - pad.b);

      ctx.clearRect(0, 0, w, h);
      // 目盛り
      ctx.strokeStyle = c.line; ctx.fillStyle = c.muted; ctx.lineWidth = 1; ctx.font = font(11);
      const step = yMax > 8 ? 2 : yMax > 3 ? 1 : 0.5;
      for (let v = 0; v <= yMax; v += step) {
        ctx.beginPath(); ctx.moveTo(pad.l, Y(v)); ctx.lineTo(w - pad.r, Y(v)); ctx.stroke();
        ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText(v.toFixed(step < 1 ? 1 : 0), pad.l - 6, Y(v));
      }
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillText('1', X(1), h - pad.b + 6);
      if (N > 1) ctx.fillText(String(N), X(N), h - pad.b + 6);
      ctx.fillText('足した項の数 n →', (pad.l + w - pad.r) / 2, h - pad.b + 6);

      // ζ(s) の線
      if (converges) {
        ctx.strokeStyle = c.hot; ctx.lineWidth = 2; ctx.setLineDash([6, 5]);
        ctx.beginPath(); ctx.moveTo(pad.l, Y(z)); ctx.lineTo(w - pad.r, Y(z)); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = c.hot; ctx.font = font(12, 700); ctx.textAlign = 'right'; ctx.textBaseline = 'bottom';
        ctx.fillText(`ζ(${s.toFixed(2)}) = ${fmt(z)}`, w - pad.r, Y(z) - 4);
      }
      // 部分和
      ctx.strokeStyle = c.accent; ctx.lineWidth = 2;
      ctx.beginPath();
      sums.forEach((v, i) => { const x = X(i + 1); const y = Y(v); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
      ctx.stroke();
      if (N <= 40) {
        ctx.fillStyle = c.accent;
        sums.forEach((v, i) => { ctx.beginPath(); ctx.arc(X(i + 1), Y(v), 3, 0, Math.PI * 2); ctx.fill(); });
      }
      canvas.setAttribute('aria-label', `s = ${s.toFixed(2)}、${N} 項までの和は ${fmt(acc)}。${note.textContent}`);
    };

    sIn.addEventListener('input', draw);
    nIn.addEventListener('input', draw);
    root.querySelectorAll('[data-s]').forEach((b) => b.addEventListener('click', () => { sIn.value = b.dataset.s; draw(); }));
    new ResizeObserver(draw).observe(canvas);
    draw();
  };

  // ---------- 図3：臨界帯の中で、級数から ζ(s) を求めて零点を探す ----------
  const initComplex = (root) => {
    const plane = root.querySelector('canvas[data-role="plane"]');
    const strip = root.querySelector('canvas[data-role="strip"]');
    const sigIn = root.querySelector('[name="sigma"]');
    const tIn = root.querySelector('[name="t"]');
    const nIn = root.querySelector('[name="n"]');
    const rawIn = root.querySelector('[name="raw"]');
    const out = (k) => root.querySelector(`[data-out="${k}"]`);
    const T_MAX = Number(tIn.max);
    let stripCache = { sigma: null, vals: [] };

    const drawStrip = (sigma, t, c) => {
      if (stripCache.sigma !== sigma) {
        const vals = [];
        for (let i = 0; i <= 600; i++) {
          const tt = (i / 600) * T_MAX;
          vals.push(Math.abs(sigma - 1) < 1e-9 && tt < 1e-9 ? Infinity : ZetaMath.abs(ZetaMath.zeta([sigma, tt])));
        }
        stripCache = { sigma, vals };
      }
      const { ctx, w, h } = fitCanvas(strip, strip.clientWidth < 520 ? 0.5 : 0.24);
      const pad = { l: 36, r: 10, t: 10, b: 22 };
      const yMax = 3;
      const X = (tt) => pad.l + (tt / T_MAX) * (w - pad.l - pad.r);
      const Y = (v) => h - pad.b - (Math.min(v, yMax) / yMax) * (h - pad.t - pad.b);
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = c.line; ctx.lineWidth = 1; ctx.fillStyle = c.muted; ctx.font = font(11);
      [0, 1, 2, 3].forEach((v) => {
        ctx.beginPath(); ctx.moveTo(pad.l, Y(v)); ctx.lineTo(w - pad.r, Y(v)); ctx.stroke();
        ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText(String(v), pad.l - 6, Y(v));
      });
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      for (let tt = 0; tt <= T_MAX; tt += 10) ctx.fillText(String(tt), X(tt), h - pad.b + 5);
      ctx.strokeStyle = c.accent; ctx.lineWidth = 1.8; ctx.beginPath();
      stripCache.vals.forEach((v, i) => { const x = X((i / 600) * T_MAX); const y = Y(v); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
      ctx.stroke();
      ctx.strokeStyle = c.hot; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(X(t), pad.t); ctx.lineTo(X(t), h - pad.b); ctx.stroke();
      ctx.fillStyle = c.soft; ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.font = font(11, 700);
      ctx.fillText(`|ζ(${sigma.toFixed(2)} + it)|`, pad.l + 4, pad.t);
    };

    const draw = () => {
      const sigma = Number(sigIn.value);
      const t = Number(tIn.value);
      const N = Number(nIn.value);
      out('sigma').textContent = sigma.toFixed(2);
      out('t').textContent = t.toFixed(2);
      out('n').textContent = N;
      const s = [sigma, t];
      const z = ZetaMath.zeta(s);
      const { raw, corrected } = ZetaMath.partialSums(s, N);
      const last = corrected[corrected.length - 1];
      out('zeta').textContent = fmtC(z);
      out('abs').textContent = fmt(ZetaMath.abs(z));
      out('last').textContent = fmtC(last);
      out('note').textContent = ZetaMath.abs(z) < 0.02
        ? (Math.abs(sigma - 0.5) < 0.005 ? 'ζ(s) がほぼ 0：ここは零点のすぐ近く。' : 'ζ(s) が小さい。')
        : '';

      const c = colors(root);
      const { ctx, w, h } = fitCanvas(plane, 0.82);
      let R = 1.5;
      corrected.forEach((p) => { R = Math.max(R, Math.abs(p[0]), Math.abs(p[1])); });
      R = Math.min(R * 1.12, 6);
      const cx = w / 2; const cy = h / 2;
      const k = Math.min(w, h) / 2 / R;
      const P = (p) => [cx + p[0] * k, cy - p[1] * k];

      ctx.clearRect(0, 0, w, h);
      // 軸と目盛り
      ctx.strokeStyle = c.line; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.moveTo(cx, 0); ctx.lineTo(cx, h); ctx.stroke();
      ctx.fillStyle = c.muted; ctx.font = font(11);
      const tick = R > 3 ? 2 : 1;
      for (let v = -Math.floor(R); v <= R; v += tick) {
        if (v === 0) continue;
        const [x] = P([v, 0]); const [, y] = P([0, v]);
        ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillText(String(v), x, cy + 4);
        ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(`${v}i`, cx + 4, y);
      }
      ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; ctx.fillText('実部 →', w - 6, cy - 4);
      ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText('↑ 虚部', cx + 6, 4);

      const path = (pts, color, width) => {
        ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineJoin = 'round'; ctx.beginPath();
        pts.forEach((p, i) => { const [x, y] = P(p); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
        ctx.stroke();
      };
      if (rawIn.checked) { ctx.globalAlpha = 0.55; path(raw, c.muted, 1.2); ctx.globalAlpha = 1; }
      path(corrected, c.accent, 1.8);
      // ζ(s) の点
      const [zx, zy] = P(z);
      ctx.fillStyle = c.hot; ctx.beginPath(); ctx.arc(zx, zy, 6, 0, Math.PI * 2); ctx.fill();
      ctx.font = font(12, 700); ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
      ctx.fillText('ζ(s)', zx + 8, zy - 4);
      // 原点
      ctx.strokeStyle = c.ink; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.stroke();

      drawStrip(sigma, t, c);
      plane.setAttribute('aria-label', `s = ${sigma.toFixed(2)} + ${t.toFixed(2)}i で、ζ(s) = ${fmtC(z, 3)}、絶対値は ${fmt(ZetaMath.abs(z), 3)}。`);
    };

    [sigIn, tIn, nIn, rawIn].forEach((el) => el.addEventListener('input', draw));
    root.querySelectorAll('[data-t]').forEach((b) => b.addEventListener('click', () => {
      tIn.value = b.dataset.t; if (b.dataset.sigma) sigIn.value = b.dataset.sigma; draw();
    }));
    strip.addEventListener('click', (e) => {
      const r = strip.getBoundingClientRect();
      const tt = ((e.clientX - r.left - 36) / (r.width - 46)) * T_MAX;
      tIn.value = Math.max(0, Math.min(T_MAX, tt)).toFixed(2); draw();
    });
    new ResizeObserver(draw).observe(plane);
    draw();
  };

  document.querySelectorAll('[data-viz="zeta-real"]').forEach(initReal);
  document.querySelectorAll('[data-viz="zeta-complex"]').forEach(initComplex);
}
