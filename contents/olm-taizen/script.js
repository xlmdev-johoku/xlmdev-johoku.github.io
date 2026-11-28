/*
  〇LM大全（/contents/olm-taizen/）。data/olm.js の window.OLM_TAIZEN から、
  一覧（周期表のようなマス）と解説を組み立て、分類・検索・＊で絞り込む。
  データの文字列は textContent で入れ、HTML としては解釈しない。
*/
(function () {
  'use strict';
  var data = window.OLM_TAIZEN;
  if (!data) return;
  var terms = data.terms;
  var byNo = {};
  terms.forEach(function (t) { byNo[t.no] = t; });

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (key) {
      if (key === 'text') node.textContent = attrs[key];
      else node.setAttribute(key, attrs[key]);
    });
    (children || []).forEach(function (child) {
      if (child) node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
    });
    return node;
  }

  function formatDate(iso) {
    var p = iso.split('-');
    return p[0] + '年' + Number(p[1]) + '月' + Number(p[2]) + '日';
  }

  // 「→3」を、その番号の解説へのリンク「→3 PLM」にする
  function withRefs(text) {
    var frag = document.createDocumentFragment();
    var re = /→(\d+)/g, last = 0, m;
    while ((m = re.exec(text))) {
      frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      var target = byNo[Number(m[1])];
      frag.appendChild(target
        ? el('a', { class: 'olm-ref', href: '#olm-' + target.no, text: '→' + target.no + ' ' + target.abbr })
        : document.createTextNode(m[0]));
      last = re.lastIndex;
    }
    frag.appendChild(document.createTextNode(text.slice(last)));
    return frag;
  }

  // ---------- 見出しの数字 ----------
  document.getElementById('figTerms').textContent = String(terms.length);
  document.getElementById('figCats').textContent = String(data.categories.length);
  document.getElementById('figClash').textContent = String(terms.filter(function (t) { return t.clash; }).length);
  document.getElementById('figChecked').textContent = formatDate(data.checked).replace(/\d+日$/, '');
  document.getElementById('checkedText').textContent = formatDate(data.checked);

  // ---------- 一覧 ----------
  var grid = document.getElementById('olmGrid');
  var cells = terms.map(function (t) {
    var abbr = el('span', { class: 'olm-abbr' }, [t.abbr]);
    if (t.clash) abbr.appendChild(el('span', { class: 'olm-clash', title: '同じ綴りで別の意味もある', text: '＊' }));
    var item = el('li', { class: 'olm-cell', 'data-cat': t.cat }, [
      el('a', { href: '#olm-' + t.no }, [
        el('span', { class: 'olm-cell-top' }, [
          el('span', { class: 'olm-no', text: String(t.no) }),
          el('span', { class: 'olm-cat', text: t.cat })
        ]),
        abbr,
        el('span', { class: 'olm-en', text: t.en }),
        el('span', { class: 'olm-ja', text: t.ja })
      ])
    ]);
    item.searchText = [t.abbr, t.en, t.ja].join(' ').toLowerCase();
    item.term = t;
    grid.appendChild(item);
    return item;
  });
  var empty = el('li', { class: 'olm-empty', text: '当てはまる語がありません。' });
  empty.hidden = true;
  grid.appendChild(empty);

  // ---------- 絞り込み ----------
  var filters = document.getElementById('olmFilters');
  var search = document.getElementById('olmSearch');
  var clashOnly = document.getElementById('olmClashOnly');
  var count = document.getElementById('olmCount');
  var current = '';
  var buttons = [el('button', { type: 'button', class: 'olm-filter', 'aria-pressed': 'true', text: 'すべて' })];
  data.categories.forEach(function (c) {
    buttons.push(el('button', { type: 'button', class: 'olm-filter', 'data-cat': c.name, 'aria-pressed': 'false', title: c.desc, text: c.name }));
  });
  buttons.forEach(function (b) {
    filters.appendChild(b);
    b.addEventListener('click', function () {
      current = b.getAttribute('data-cat') || '';
      buttons.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      apply();
    });
  });

  function apply() {
    var q = search.value.trim().toLowerCase();
    var shown = 0;
    cells.forEach(function (cell) {
      var t = cell.term;
      var ok = (!current || t.cat === current) && (!clashOnly.checked || t.clash) && (!q || cell.searchText.indexOf(q) !== -1);
      cell.hidden = !ok;
      if (ok) shown += 1;
    });
    empty.hidden = shown !== 0;
    count.textContent = shown === terms.length ? '全' + terms.length + '語' : terms.length + '語中 ' + shown + '語';
  }
  search.addEventListener('input', apply);
  clashOnly.addEventListener('change', apply);
  apply();

  // ---------- 分類の意味 ----------
  var catList = document.getElementById('olmCats');
  data.categories.forEach(function (c) {
    catList.appendChild(el('div', { 'data-cat': c.name }, [el('dt', { text: c.name }), el('dd', { text: c.desc })]));
  });

  // ---------- 解説 ----------
  var entries = document.getElementById('olmEntries');
  terms.forEach(function (t) {
    var head = el('div', { class: 'olm-entry-head' }, [
      el('span', { class: 'olm-no', text: 'No.' + t.no }),
      el('h3', {}, [t.abbr]),
      t.title ? el('span', { class: 'olm-entry-title', text: t.title }) : null,
      el('span', { class: 'olm-entry-cat', text: t.cat })
    ]);
    var article = el('article', { class: 'olm-entry', id: 'olm-' + t.no, 'data-cat': t.cat }, [head]);
    t.body.forEach(function (p) { article.appendChild(el('p', {}, [withRefs(p)])); });
    if (t.same) article.appendChild(el('p', { class: 'olm-same' }, [el('b', { text: '同じ綴り' }), withRefs(t.same)]));
    if (t.sources && t.sources.length) {
      var list = el('ul');
      t.sources.forEach(function (s) { list.appendChild(el('li', { text: s })); });
      article.appendChild(el('div', { class: 'olm-sources' }, [el('span', { class: 'olm-sources-label', text: '出典' }), list]));
    }
    article.appendChild(el('a', { class: 'olm-back', href: '#olmGrid', text: '一覧へ戻る' }));
    entries.appendChild(article);
  });

  // 解説を描いたあとで、URL の #olm-N へ移る
  if (/^#olm-\d+$/.test(location.hash)) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
})();
