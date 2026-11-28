# XLM開発会議 城北支部

技術同人誌サークル「XLM開発会議 城北支部」の公式サイトです。出展情報、頒布物、言語モデルやAIに関するWebコンテンツを掲載しています。[公開サイト](https://xlmdev-johoku.github.io/) · [サークルのX](https://x.com/xlm_dev)

## サイト構成

- `index.html` — サークルのトップページ。出展情報、頒布物、〇LM大全の紹介、サークル情報を掲載します。
- `style.css` — 共通の配色、書体、ヘッダー、フッター、セクションなどのスタイルです。
- `home.css` — トップページの冒頭とカルーセルのスタイルです。
- `images/` — 書影や紹介画像など、複数のページから参照する公開用画像を置きます。
- `contents/index.html` — Webコンテンツの一覧です。各コンテンツは `contents/<slug>/` にあります。
- `.nojekyll` — GitHub Pages に静的ファイルをそのまま配信させるためのファイルです。

### Webコンテンツ

- [〇LM大全](contents/olm-taizen/index.html)
- [AI・機械学習の歴史年表](contents/ai-ml-timeline/index.html)
- [〇LM知識グラフ](contents/lm-knowledge-graph/index.html)
- [未来技術ロードマップ](contents/future-tech-roadmap/index.html)

## ローカルで確認する

HTML・CSS・JavaScriptで構成しており、ビルドやパッケージのインストールは不要です。Python 3 が使える環境では、リポジトリ直下で次を実行し、ブラウザーで `http://localhost:8000/` を開きます。

```sh
python -m http.server 8000
```

環境に応じて `python` を `python3` または `py -3` に置き換えられます。Google Fonts と、〇LM知識グラフで使用する D3.js は外部から読み込みます。

## 更新と公開

トップページの案内を更新するときは `index.html`、コンテンツ一覧を更新するときは `contents/index.html` を編集します。文章と画像を更新したら、該当ページのリンク、画像、スマートフォン表示をブラウザーで確認します。公開先は GitHub Pages です。公開元のブランチとフォルダーはリポジトリの GitHub Pages 設定で確認できます。

### コンテンツページを追加する

`contents/<slug>/index.html` を作り、既存の [コンテンツページ](contents/olm-taizen/index.html) を手本に、共通フォントの参照、ヘッダー、フッターを引き継ぎます。`../../style.css` を読み込むと、深緑の配色、書体、共通レイアウトが適用されます。左上のロゴには `../../images/circle-logo-dark.svg`、ファビコンには `../../images/favicon.svg` を参照します。

図表や入力部品など、ページ固有のスタイルは同じフォルダーのCSSに置き、共通スタイルの後に読み込みます。ページを作ったら、[コンテンツ一覧](contents/index.html) にリンクを追加します。
