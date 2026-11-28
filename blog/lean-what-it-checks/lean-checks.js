// 図3：よくある問題を選ぶと、どの検査で見つかるかを表示する
// 中身は記事内の「表ですべて見る」の表と同じ。表は JavaScript がなくても読める
(() => {
  const CHECKS = ['blue double check marks', '#print axioms', 'comparator', '--paranoid', '人が主張を読む'];
  // ok = 見つかる, ng = 見逃す, na = 対象外, mid = 読む場所しだい
  const CASES = [
    { r: ['ok', 'ok', 'ok', 'ok', 'na'],
      text: 'sorry を使った定理では、エディタが警告を出し、blue double check marks も付きません。#print axioms には sorryAx が出ます。' },
    { r: ['ng', 'ok', 'ok', 'ok', 'na'],
      text: 'blue double check marks は、いま見ている定理しか見ません。依存している別の定理の sorry は、#print axioms で sorryAx として初めて見つかります。' },
    { r: ['ng', 'ng', 'ng', 'ng', 'ok'],
      text: '前提に False があると何でも証明できますが、証明としては正しいので、機械の検査はすべて通ります。主張を読む人だけが気づけます。' },
    { r: ['ng', 'ng', 'ng', 'ng', 'ok'],
      text: '定義が間違っていても、その定義の下での証明は正しく通ります。1 が「素数」になる定義のような誤りは、人が定義を読んで初めて見つかります。' },
    { r: ['ng', 'ng', 'ok', 'ok', 'mid'],
      text: '名前は同じでも中身が違う定理を証明していた場合です。comparator が challenge file の主張と照合して見つけます。人が読むなら、challenge file ではなく実際に証明された主張を読む必要があります。' },
    { r: ['ng', 'ok', 'ok', 'ok', 'na'],
      text: 'native_decide は計算をコンパイラに任せ、専用の公理を1つ足します。間違いとは限りませんが、kernel 以外も信頼する前提が増えます。#print axioms に _native を含む公理として出ます。' },
    { r: ['ng', 'ng', 'ng', 'ok', 'na'],
      text: '2026年7月のコラッツ予想の「反証」がこの例です。公式の kernel が受理してしまうので、--paranoid で別に作った複数の kernel で検査し直して初めて見つかります。' },
  ];
  const LABEL = { ok: '見つかる', ng: '見逃す', na: '対象外', mid: '読む場所しだい' };

  document.querySelectorAll('[data-viz="lean-checks"]').forEach((root) => {
    const buttons = [...root.querySelectorAll('[data-case]')];
    const list = root.querySelector('.lc-checks');
    const explain = root.querySelector('.lc-explain');
    const select = (i) => {
      buttons.forEach((b, j) => {
        b.setAttribute('aria-selected', String(i === j));
        b.tabIndex = i === j ? 0 : -1;
      });
      const c = CASES[i];
      list.innerHTML = '';
      CHECKS.forEach((name, k) => {
        const li = document.createElement('li');
        li.className = `lc-check is-${c.r[k]}`;
        const n = document.createElement('span');
        n.className = 'lc-name';
        n.textContent = name;
        const v = document.createElement('span');
        v.className = 'lc-val';
        v.textContent = LABEL[c.r[k]];
        li.append(n, v);
        list.append(li);
      });
      explain.textContent = c.text;
    };
    buttons.forEach((b, i) => {
      b.addEventListener('click', () => select(i));
      b.addEventListener('keydown', (e) => {
        const d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        const j = (i + d + buttons.length) % buttons.length;
        select(j);
        buttons[j].focus();
      });
    });
    root.classList.add('is-ready');
    const details = root.querySelector('.lc-table');
    if (details) details.open = false;
    select(0);
  });
})();
