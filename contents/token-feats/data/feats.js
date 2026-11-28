/* 「何トークンで何ができたか」のデータ（正本）。調査の記録は research/token-feats-2026.md。
   points の kind: out=出力 / in=キャッシュ以外の入力（そう明記されたもの） / cache=キャッシュ読み出し /
   total=合計（キャッシュ読み出しを含むと明記） / unk=合計や入力でキャッシュの扱いが書かれていないもの。
   公表された数字を足し合わせたり換算したりはしない。quote は出典の原文。 */
window.TOKEN_FEATS = {
 "asOf": "2026-11-27",
 "groups": [
  {
   "id": "math-new",
   "name": "数学（新しい結果の主張）"
  },
  {
   "id": "math-formal",
   "name": "数学（形式化・既知の問題）"
  },
  {
   "id": "science",
   "name": "科学"
  },
  {
   "id": "software",
   "name": "ソフトウェア"
  },
  {
   "id": "agent",
   "name": "エージェント・ベンチマーク"
  },
  {
   "id": "security",
   "name": "セキュリティ"
  }
 ],
 "tokens": [
  {
   "id": "anthropic-zeta-two-thirds",
   "group": "math-new",
   "date": "2026-08-10",
   "title": "ゼータ関数の零点の3分の2が臨界線上にあることの証明",
   "who": "Anthropic（Claude）、確認は L. Alpöge・R. Furman",
   "model": "研究用の未公開の Claude（Claude Code）",
   "points": [
    {
     "kind": "out",
     "value": 31000000,
     "label": "出力 約3,100万"
    }
   ],
   "outcome": "単純で臨界線上にある非自明な零点の割合を、約41.6%から3分の2以上に引き上げた。リーマン予想の証明ではない",
   "check": "Lean で形式化。Alpöge・Furman が確認。arXiv の論文は査読前",
   "note": "Claude Code の2セッション、サブエージェント約60。入力とキャッシュは書かれていない",
   "scope": "",
   "quote": "An unreleased research version of Claude found the new lower bound over two sessions in Claude Code, using a total of 31 million output tokens.",
   "url": "https://www.anthropic.com/research/riemann-zeta",
   "tier": "primary"
  },
  {
   "id": "anthropic-eth-3sat",
   "group": "math-new",
   "date": "2026-10-27",
   "title": "3-SAT の速いアルゴリズムで指数時間仮説（ETH）を反証",
   "who": "Anthropic（Claude）",
   "model": "研究用の Claude",
   "points": [
    {
     "kind": "out",
     "value": 14000000,
     "label": "出力 約1,400万"
    }
   ],
   "outcome": "3-SAT を 2^o(n) 時間で解くアルゴリズムを示し、指数時間仮説が誤りだと主張",
   "check": "AI が書いた Lean の形式化を Comparator と独立の kernel で検査。査読の記載なし",
   "note": "数えたのは、核心のアルゴリズムを見つけた10月16日の分だけ",
   "scope": "",
   "quote": "The core algorithm was found on October 16 by an internal Claude research model with 14M output tokens and no human input.",
   "url": "https://github.com/anthropics/formal-math/blob/main/eth/paper.pdf",
   "tier": "primary"
  },
  {
   "id": "openai-navier-stokes",
   "group": "math-new",
   "date": "2026-09-08",
   "title": "Navier–Stokes 方程式の解が有限時間で爆発することの証明",
   "who": "OpenAI",
   "model": "名前を出していない社内モデル（Lean 化は GPT-6 Astra）",
   "points": [
    {
     "kind": "out",
     "value": 130000000000,
     "label": "出力 約1,300億"
    }
   ],
   "outcome": "外力つきの3次元 Navier–Stokes 方程式で、なめらかな初期値から有限時間で特異点ができると主張（ミレニアム問題の C と D）",
   "check": "Lean の形式化を公開。人間による査読の記載なし",
   "note": "約1万のエージェントが約88時間。Lean 化にさらに17時間。全問題の合計では出力約3,000億",
   "scope": "",
   "quote": "the agents sent 2.7 million messages and used approximately 130 billion output tokens",
   "url": "https://openai.com/index/navier-stokes-solution/",
   "tier": "primary"
  },
  {
   "id": "anthropic-aes-attack",
   "group": "math-new",
   "date": "2026-07-28",
   "title": "7ラウンド AES-128 への攻撃の改良",
   "who": "Anthropic（Claude Mythos Preview）",
   "model": "Claude Mythos Preview",
   "points": [
    {
     "kind": "out",
     "value": 1000000000,
     "label": "出力 約10億"
    }
   ],
   "outcome": "7ラウンドに縮めた AES-128 への攻撃を、従来より200〜800倍速くした。完全な AES が破られたわけではない",
   "check": "Anthropic の研究者2人が約1か月かけて確認。査読や外部の確認の記載なし",
   "note": "約1週間。HAWK への攻撃と合わせて2つの結果があり、API 費用はそれぞれ約10万ドル",
   "scope": "",
   "cost": 100000,
   "costNote": "API 料金で約10万ドル",
   "quote": "after Claude output a total of one billion output tokens, it had refined the attack",
   "url": "https://www.anthropic.com/research/discovering-cryptographic-weaknesses",
   "tier": "primary"
  },
  {
   "id": "anthropic-flt-formalization",
   "group": "math-formal",
   "date": "2026-09-04",
   "title": "フェルマーの最終定理の証明を Lean で形式化",
   "who": "Anthropic",
   "model": "社内の汎用研究モデル（Claude Fable 5.1 と同程度）",
   "points": [
    {
     "kind": "out",
     "value": 6000000000,
     "label": "出力 約60億"
    }
   ],
   "outcome": "既知の証明を、約1,300万行の Lean で計算機が検査できる形にした。新しい定理ではない",
   "check": "Lean で検査済み。主張が Mathlib の FLT と一致することを Comparator で確認。Kevin Buzzard がレビュー",
   "note": "数十のエージェントで11日",
   "scope": "",
   "quote": "a team of agents completed the proof in a little under two weeks, consuming about six billion output tokens from a general-purpose internal research model",
   "url": "https://www.anthropic.com/research/formalizing-fermats-last-theorem",
   "tier": "primary"
  },
  {
   "id": "formalflow-mipstar-lidt",
   "group": "math-formal",
   "date": "2026-09-17",
   "title": "MIP* = RE の中核の定理（低次数テストの健全性）を Lean で形式化",
   "who": "S. Lu、R. Deng、Y. Zhu、Z. Ji",
   "model": "GPT-5.4〜5.6、Claude Opus 4.6・4.7 などの混在",
   "points": [
    {
     "kind": "total",
     "value": 30121000000,
     "label": "合計 約301億（キャッシュ込み）"
    },
    {
     "kind": "out",
     "value": 85676000,
     "label": "出力 約8,568万"
    }
   ],
   "outcome": "公表済みの証明を12.6万行の Lean で形式化し、証明の条件の誤りも直した",
   "check": "Lean で検査済み。arXiv の論文",
   "note": "63日。入力の90.7%がキャッシュ",
   "scope": "",
   "cost": 10181.77,
   "costNote": "従量課金の一部（TeXRA の分）だけで約1万ドル",
   "quote": "These records total 30.121 billion tokens, comprising 30.035 billion input tokens and 85.676 million output tokens.",
   "url": "https://arxiv.org/abs/2609.19814",
   "tier": "primary"
  },
  {
   "id": "formalflow-mipstar-qpbt",
   "group": "math-formal",
   "date": "2026-09-17",
   "title": "MIP* = RE のパウリ基底テストの健全性を Lean で形式化",
   "who": "S. Lu、R. Deng、Y. Zhu、Z. Ji",
   "model": "GPT-6 Astra、GPT-5.6 Sol、Claude Opus 5",
   "points": [
    {
     "kind": "unk",
     "value": 13700000000,
     "label": "合計 約137億（内訳なし）"
    }
   ],
   "outcome": "パウリ基底テストの健全性と関連する3つの結果を、11.9万行の Lean ライブラリにした",
   "check": "Lean で検査済み。arXiv の論文",
   "note": "作業時間 298.5時間。モデル別の内訳はあるが、入力と出力の内訳はない",
   "scope": "",
   "quote": "It merged 261 pull requests and used 13.7 billion tokens (Section E.10).",
   "url": "https://arxiv.org/abs/2609.19814",
   "tier": "primary"
  },
  {
   "id": "econcslib",
   "group": "math-formal",
   "date": "2026-06-11",
   "title": "経済学と計算の論文13本を Lean で形式化（EconCSLib）",
   "who": "Nikhil Garg",
   "model": "OpenAI Codex",
   "points": [
    {
     "kind": "total",
     "value": 22788000000,
     "label": "合計 約228億（キャッシュ込み）"
    },
    {
     "kind": "cache",
     "value": 22054000000,
     "label": "キャッシュ読み出し 約221億"
    },
    {
     "kind": "in",
     "value": 665000000,
     "label": "キャッシュ以外の入力 約6.7億"
    },
    {
     "kind": "out",
     "value": 68770000,
     "label": "出力 約6,877万（推論を含む）"
    }
   ],
   "outcome": "数え上げの時点で13本の論文を形式化（その後20本と一部4本に増えた）",
   "check": "Lean でコンパイル。主張の忠実さは LLM による判定。人間の確認はわずか",
   "note": "Codex 自身のログから集計",
   "scope": "",
   "cost": 16416,
   "costNote": "API 料金に換算して約1.6万ドル（実際は月200ドルのサブスクリプション）",
   "quote": "For the first 13 fully formalized papers (and about 5 in progress), this added up to about $16,000",
   "url": "https://arxiv.org/abs/2606.13306",
   "tier": "primary"
  },
  {
   "id": "putnam2025-rocq-opus46",
   "group": "math-formal",
   "date": "2026-03-20",
   "title": "Putnam 2025 の12問中10問を Rocq で証明",
   "who": "G. Baudart、M. Lelarge、T. Stérin、J. Viennot",
   "model": "Claude Opus 4.6",
   "points": [
    {
     "kind": "total",
     "value": 1897000000,
     "label": "合計 約19億（キャッシュ込み）"
    },
    {
     "kind": "cache",
     "value": 1809000000,
     "label": "キャッシュ読み出し 約18億"
    },
    {
     "kind": "out",
     "value": 16000000,
     "label": "出力 約1,600万"
    }
   ],
   "outcome": "大学生向けの数学競技 Putnam 2025 の12問中10問を、自律的に Rocq で証明した",
   "check": "証明支援系 Rocq で検査済み。証明は公開",
   "note": "サブエージェント141。出力は量の0.9%だが費用の23.1%",
   "scope": "",
   "cost": 1760,
   "costNote": "API 料金で約1,760ドル",
   "quote": "The experiment consumed approximately 1.9 billion tokens at an estimated API cost of $1,760 (Table 4).",
   "url": "https://arxiv.org/abs/2603.20405",
   "tier": "primary"
  },
  {
   "id": "ansatz-first-proof",
   "group": "math-formal",
   "date": "2026-10-02",
   "title": "研究レベルの問題集 First Proof 第2弾の10問中9問を解決",
   "who": "Eric Hanchen Jiang ほか",
   "model": "GPT-5.6 Sol",
   "points": [
    {
     "kind": "unk",
     "value": 922000000,
     "label": "合計 約9.2億（内訳なし）"
    }
   ],
   "outcome": "10問中9問を完全に、1問を部分的に解いた",
   "check": "判定はモデルによる検証で、専門家の検証ではないと論文自身が書く",
   "note": "4つの役割のエージェントの記録の合計",
   "scope": "",
   "quote": "Summing recorded tokens across the initial and continuation phases gives 922,003,391 tokens.",
   "url": "https://arxiv.org/abs/2610.02945",
   "tier": "primary"
  },
  {
   "id": "chandrasekaran-null-cone-gravity",
   "group": "science",
   "date": "2026-11-25",
   "title": "光円錐から重力を量子化する提案",
   "who": "V. Chandrasekaran（Stanford）",
   "model": "GPT-6 Astra",
   "points": [
    {
     "kind": "unk",
     "value": 400000000,
     "label": "合計 約4億（内訳なし）"
    }
   ],
   "outcome": "物質を含まない4次元の一般相対論を量子化する方法を提案し、ブラックホールのエントロピーの対数補正などを導いた",
   "check": "arXiv の論文で査読前。形式化はない",
   "note": "何か月にもわたるやりとり。「total tokens spent」とだけ書かれ、何を足したかは不明",
   "scope": "",
   "quote": "Several of the calculations and proofs in this paper were developed through detailed, back and forth collaboration with GPT-6 Astra over the course of many months, amounting to ∼400M total tokens spent",
   "url": "https://arxiv.org/abs/2611.34924",
   "tier": "primary"
  },
  {
   "id": "ai-theorist-rucl3",
   "group": "science",
   "date": "2026-10-01",
   "title": "α-RuCl3 の光学スペクトルから励起子の構造を読み解く",
   "who": "Hongjian Zhou ほか",
   "model": "Claude Opus 4.6 と Qwen3.5-27B（手元で実行）",
   "points": [
    {
     "kind": "unk",
     "value": 153980000,
     "label": "合計 約1.5億（キャッシュの扱い不明）"
    },
    {
     "kind": "out",
     "value": 680000,
     "label": "出力 約68万"
    }
   ],
   "outcome": "物質 α-RuCl3 の光学・光電流スペクトルに、異なる励起子の状態があるという新しい解釈を示した",
   "check": "arXiv の論文で査読前。実験は人間のチーム",
   "note": "2つのモデルの合計",
   "scope": "",
   "cost": 334.75,
   "costNote": "Claude の分だけで約335ドル",
   "quote": "Total model usage was 153.30 million input tokens and 0.68 million output tokens across the two models, for 153.98 million tokens in total.",
   "url": "https://arxiv.org/abs/2610.02417",
   "tier": "primary"
  },
  {
   "id": "anthropic-c-compiler",
   "group": "software",
   "date": "2026-02-05",
   "title": "16体の Claude が並行して C コンパイラを作る",
   "who": "Anthropic（Nicholas Carlini）",
   "model": "Claude Opus 4.6",
   "points": [
    {
     "kind": "unk",
     "value": 2000000000,
     "label": "入力 20億（キャッシュの扱い不明）"
    },
    {
     "kind": "out",
     "value": 140000000,
     "label": "出力 1.4億"
    }
   ],
   "outcome": "Rust で書かれた10万行の C コンパイラ。x86・ARM・RISC-V で Linux 6.9 をビルドでき、Doom も動く",
   "check": "GCC torture テストなどで99%合格（作者の報告）",
   "note": "約2,000セッション、2週間",
   "scope": "",
   "cost": 20000,
   "costNote": "2万ドル弱",
   "quote": "Over nearly 2,000 Claude Code sessions across two weeks, Opus 4.6 consumed 2 billion input tokens and generated 140 million output tokens, a total cost just under $20,000.",
   "url": "https://www.anthropic.com/engineering/building-c-compiler",
   "tier": "primary"
  },
  {
   "id": "openai-sora-android",
   "group": "software",
   "date": "2025-12-12",
   "title": "Android 版 Sora を28日で出荷",
   "who": "OpenAI",
   "model": "GPT-5.1-Codex の初期版",
   "points": [
    {
     "kind": "unk",
     "value": 5000000000,
     "label": "合計 約50億（内訳なし）"
    }
   ],
   "outcome": "4人のチームと Codex で、試作から世界公開まで28日。コードの約85%を Codex が書いた",
   "check": "クラッシュなしの割合99.9%（作者の報告）。Sora は2026年4月26日にサービス終了",
   "note": "",
   "scope": "",
   "quote": "From October 8 to November 5, 2025, a lean engineering team working alongside Codex and consuming roughly 5 billion tokens",
   "url": "https://openai.com/index/shipping-sora-for-android-with-codex",
   "tier": "primary"
  },
  {
   "id": "openai-codex-design-desk",
   "group": "software",
   "date": "2026-02-23",
   "title": "Codex が25時間続けてデザインツールを作る",
   "who": "OpenAI",
   "model": "GPT-5.3-Codex（Extra High）",
   "points": [
    {
     "kind": "unk",
     "value": 13000000,
     "label": "合計 約1,300万（内訳なし）"
    }
   ],
   "outcome": "空のリポジトリから約3万行。キャンバス編集、共同編集、レイヤー、履歴、React への書き出しなど",
   "check": "節目ごとにテスト・lint・型検査。作者いわく「本番向けではないが本物で試せる」",
   "note": "1セッションで約25時間",
   "scope": "",
   "quote": "Codex ran for about 25 hours uninterrupted, used about 13M tokens, and generated about 30k lines of code.",
   "url": "https://developers.openai.com/blog/run-long-horizon-tasks-with-codex",
   "tier": "primary"
  },
  {
   "id": "openai-codex-voxel-velocity",
   "group": "software",
   "date": "2026-02-02",
   "title": "Codex が1つの指示からレースゲームを作る",
   "who": "OpenAI",
   "model": "Codex",
   "points": [
    {
     "kind": "unk",
     "value": 7000000,
     "label": "合計 700万超（内訳なし）"
    }
   ],
   "outcome": "8つのコースとアイテムのあるレースゲーム",
   "check": "製品発表のデモ。第三者の計測はない",
   "note": "",
   "scope": "",
   "quote": "Codex built the game by working independently using more than 7 million tokens with just one initial user prompt.",
   "url": "https://openai.com/index/introducing-the-codex-app/",
   "tier": "primary"
  },
  {
   "id": "simonw-justhtml-js-port",
   "group": "software",
   "date": "2025-12-15",
   "title": "HTML パーサー JustHTML を Python から JavaScript へ移植",
   "who": "Simon Willison",
   "model": "GPT-5.2（Codex CLI）",
   "points": [
    {
     "kind": "in",
     "value": 1464000,
     "label": "キャッシュ以外の入力 約146万"
    },
    {
     "kind": "out",
     "value": 626000,
     "label": "出力 約63万"
    },
    {
     "kind": "cache",
     "value": 97100000,
     "label": "キャッシュ読み出し 約9,700万"
    }
   ],
   "outcome": "約9,000行の JavaScript",
   "check": "html5lib-tests の9,200件に合格",
   "note": "約4時間",
   "scope": "",
   "cost": 29.41,
   "costNote": "API 料金での推定約29ドル（実際は月20ドルのプラン）",
   "quote": "Token usage: total=2,089,858 input=1,464,295 (+ 97,122,176 cached) output=625,563 (reasoning 437,010)",
   "url": "https://simonwillison.net/2025/Dec/15/porting-justhtml/",
   "tier": "primary-individual"
  },
  {
   "id": "simonw-moonlight-mayhem",
   "group": "software",
   "date": "2026-08-07",
   "title": "Codex が1つの指示からブラウザの3Dゲームを作る",
   "who": "Simon Willison",
   "model": "GPT-5.6 Sol Ultra（Codex Desktop）",
   "points": [
    {
     "kind": "in",
     "value": 700700,
     "label": "キャッシュ以外の入力 約70万"
    },
    {
     "kind": "out",
     "value": 148000,
     "label": "出力 約15万"
    },
    {
     "kind": "cache",
     "value": 32500000,
     "label": "キャッシュ読み出し 約3,250万"
    }
   ],
   "outcome": "遊べる Three.js のゲーム（アライグマ一味の美術館強盗）",
   "check": "作者が遊んで確認。小さな不具合を追加の指示で修正",
   "note": "52分",
   "scope": "",
   "cost": 23.28,
   "costNote": "API 料金での推定約23ドル（実際はサブスクリプション）",
   "quote": "Total Cost: $23.28. Input Tokens: 700.7K, plus 32.5M cached tokens. Output Tokens: 148K",
   "url": "https://simonwillison.net/2026/aug/7/moonlight-mayhem",
   "tier": "primary-individual"
  },
  {
   "id": "anthropic-krieger-python-to-ts",
   "group": "software",
   "date": "2026-07-16",
   "title": "社内ツールを Python から TypeScript 16.5万行へ移植",
   "who": "Mike Krieger（Anthropic）",
   "model": "Claude Sonnet・Claude Fable",
   "points": [
    {
     "kind": "unk",
     "value": 27000000,
     "label": "約2,700万（内訳なし）"
    }
   ],
   "outcome": "16.5万行の TypeScript。コンパイルが約8分から約2秒に、起動が6倍速く",
   "check": "7つの実シナリオで旧版と出力を突き合わせ、すべて一致するまで回した",
   "note": "週末で完了。数えたのは移植の主要部分だけ",
   "scope": "",
   "quote": "The main portion of Mike’s port was 27 million tokens.",
   "url": "https://claude.com/resources/articles/ai-code-migration",
   "tier": "primary"
  },
  {
   "id": "factory-missions-slack-clone",
   "group": "software",
   "date": "2026-04-10",
   "title": "1回の Mission で Slack のクローンを作る",
   "who": "Factory",
   "model": "名前の記載なし",
   "points": [
    {
     "kind": "total",
     "value": 778500000,
     "label": "合計 約7.8億（キャッシュ込み）"
    },
    {
     "kind": "cache",
     "value": 744900000,
     "label": "キャッシュ読み出し 約7.4億"
    },
    {
     "kind": "in",
     "value": 30300000,
     "label": "キャッシュ以外の入力 約3,030万"
    },
    {
     "kind": "out",
     "value": 3400000,
     "label": "出力 約340万"
    }
   ],
   "outcome": "認証、チャンネル、リアルタイムのメッセージ、検索などを備えた3.88万行（約半分はテスト）",
   "check": "命令網羅率89.25%。検証役が81件の問題を見つけて修正",
   "note": "16.5時間",
   "scope": "",
   "quote": "778.5M total tokens",
   "url": "https://factory.com/news/missions-architecture",
   "tier": "primary"
  },
  {
   "id": "google-antigravity-os",
   "group": "software",
   "date": "2026-05-19",
   "title": "Doom が動く OS をエージェントが作る",
   "who": "Google Antigravity チーム",
   "model": "Gemini 3.5 Flash",
   "points": [
    {
     "kind": "in",
     "value": 339000000,
     "label": "キャッシュ以外の入力 3.39億超"
    },
    {
     "kind": "total",
     "value": 2600000000,
     "label": "合計 26億超（キャッシュ・推論込み）"
    }
   ],
   "outcome": "カーネル、メモリ管理、ファイルシステム、ドライバを備え、Doom が遊べる OS",
   "check": "チームが Doom を遊んで確認。浮動小数点演算などは未対応と自ら書く",
   "note": "サブエージェント93、モデル呼び出し15,314回",
   "scope": "",
   "cost": 916.92,
   "costNote": "約917ドル",
   "quote": "It took 93 subagents, 15,314 model calls, and over 339M input tokens (with cache reads, output, and thinking, that number goes to over 2.6B tokens).",
   "url": "https://antigravity.google/blog/google-antigravity-built-an-os",
   "tier": "primary"
  },
  {
   "id": "bun-zig-to-rust",
   "group": "software",
   "date": "2026-07-08",
   "title": "JavaScript ランタイム Bun を Zig から Rust へ移植",
   "who": "Bun（Jarred Sumner）",
   "model": "Claude Fable 5（公開前の版）",
   "points": [
    {
     "kind": "in",
     "value": 5900000000,
     "label": "キャッシュ以外の入力 59億"
    },
    {
     "kind": "out",
     "value": 690000000,
     "label": "出力 6.9億"
    },
    {
     "kind": "cache",
     "value": 72000000000,
     "label": "キャッシュ読み出し 720億"
    }
   ],
   "outcome": "53.5万行の Zig を Rust に移植し、Claude Code に組み込んで出荷",
   "check": "全プラットフォームでテスト100%合格。マージ後に見つかった19件の不具合はすべて修正",
   "note": "11日、最大約64体が並行",
   "scope": "",
   "cost": 165000,
   "costNote": "API 料金で約16.5万ドル",
   "quote": "Pre-merge, this took 5.9 billion uncached input tokens, 690 million output tokens, and 72 billion cached input token reads — around $165,000 at API pricing.",
   "url": "https://bun.com/blog/bun-in-rust",
   "tier": "primary"
  },
  {
   "id": "github-copilot-runtime-rust",
   "group": "software",
   "date": "2026-09-16",
   "title": "GitHub Copilot のランタイムを Rust 83万行へ移植",
   "who": "Stephen Toub（GitHub）",
   "model": "GPT-5.6 Sol、Claude Opus 4.8・5 などの混在",
   "points": [
    {
     "kind": "total",
     "value": 136300000000,
     "label": "合計 約1,363億（キャッシュ込み）"
    },
    {
     "kind": "cache",
     "value": 130600000000,
     "label": "キャッシュ読み出し 約1,306億"
    },
    {
     "kind": "in",
     "value": 900000000,
     "label": "キャッシュ以外の入力 約9億"
    },
    {
     "kind": "out",
     "value": 600000000,
     "label": "出力 約6億"
    }
   ],
   "outcome": "本番の Rust 83万行と単体テスト47万行。メモリ使用量が約10分の1に",
   "check": "既存の E2E テストをすべて通しながら段階的に本番へ出した",
   "note": "2026年5月〜8月。作者自身の時間は約3週間",
   "scope": "",
   "cost": 120000,
   "costNote": "約12万ドル",
   "quote": "My token spend for all of the porting work was ~136.3 billion total tokens, including ~130.6 billion cached input read tokens, ~4.2 billion cached input write tokens, ~900 million fresh input tokens, and ~600 million output tokens. The monetary bill for all those tokens came to ~$120,000.",
   "url": "https://github.blog/ai-and-ml/migrating-the-github-copilot-runtime-to-rust-using-copilot/",
   "tier": "primary"
  },
  {
   "id": "arc-o3-preview-high-eff",
   "group": "agent",
   "date": "2024-12-20",
   "title": "o3（プレビュー）が ARC-AGI-1 で75.7%（高効率設定）",
   "who": "ARC Prize（OpenAI o3 を検証）",
   "model": "OpenAI o3（プレビュー）",
   "points": [
    {
     "kind": "unk",
     "value": 33500000,
     "label": "100問で 約3,350万（内訳なし）"
    }
   ],
   "outcome": "ARC-AGI-1 の準非公開100問で75.7%",
   "check": "ARC Prize が自らの問題で検証",
   "note": "1問あたり6回試行",
   "scope": "100問の合計",
   "cost": 2680,
   "costNote": "100問で2,680ドル（2025年12月に改定後の価格）",
   "quote": "| Semi-Private | 100 | High | 75.7% | $2,680 | 6 | 33.5M | $26 | 1.3 |",
   "url": "https://arcprize.org/blog/oai-o3-pub-breakthrough",
   "tier": "primary"
  },
  {
   "id": "arc-o3-preview-low-eff",
   "group": "agent",
   "date": "2024-12-20",
   "title": "o3（プレビュー）が ARC-AGI-1 で87.5%（低効率設定）",
   "who": "ARC Prize（OpenAI o3 を検証）",
   "model": "OpenAI o3（プレビュー）",
   "points": [
    {
     "kind": "unk",
     "value": 5700000000,
     "label": "100問で 約57億（内訳なし）"
    }
   ],
   "outcome": "ARC-AGI-1 の準非公開100問で87.5%",
   "check": "ARC Prize が検証。計算量の上限を超えたので賞の対象外",
   "note": "1問あたり1,024回試行",
   "scope": "100問の合計",
   "cost": 456000,
   "costNote": "100問で45.6万ドル（改定後の価格）",
   "quote": "| Semi-Private | 100 | Low | 87.5% | $456,000 | 1024 | 5.7B | $4,560 | 13.8 |",
   "url": "https://arcprize.org/blog/oai-o3-pub-breakthrough",
   "tier": "primary"
  },
  {
   "id": "vending-bench-1",
   "group": "agent",
   "date": "2025-02-20",
   "title": "自販機の経営を模擬する Vending-Bench",
   "who": "Andon Labs",
   "model": "Claude 3.5 Sonnet ほか",
   "points": [
    {
     "kind": "unk",
     "value": 25000000,
     "label": "1回 約2,500万（内訳なし）"
    }
   ],
   "outcome": "Claude 3.5 Sonnet の平均の純資産 2,217.93ドル（人間 844.05ドル）。どのモデルも完全に失敗する回があった",
   "check": "シミュレーションのベンチマーク（arXiv）",
   "note": "1回あたり2,000メッセージ",
   "scope": "1回あたり",
   "quote": "Most runs consume around 25 million tokens and take 5-10 real world hours of continuous simulation.",
   "url": "https://arxiv.org/html/2502.15840v1",
   "tier": "primary"
  },
  {
   "id": "mle-bench-o1-aide",
   "group": "agent",
   "date": "2024-10-09",
   "title": "MLE-bench：Kaggle の75コンペにエージェントが挑む",
   "who": "OpenAI",
   "model": "o1-preview（AIDE）",
   "points": [
    {
     "kind": "unk",
     "value": 127500000,
     "label": "入力 約1.3億（キャッシュの扱い不明）"
    },
    {
     "kind": "out",
     "value": 15000000,
     "label": "出力 約1,500万"
    }
   ],
   "outcome": "16.9%のコンペで銅メダル以上の成績",
   "check": "Kaggle の順位表と照らして採点",
   "note": "1コンペあたり24時間",
   "scope": "75コンペ1回分の平均",
   "quote": "o1-preview with AIDE used 127.5M input tokens and 15.0M output tokens on average for one seed of 75 competitions.",
   "url": "https://arxiv.org/html/2410.07095",
   "tier": "primary"
  },
  {
   "id": "metr-re-bench",
   "group": "agent",
   "date": "2024-11-22",
   "title": "RE-Bench：機械学習の研究開発の課題でエージェントと専門家を比べる",
   "who": "METR",
   "model": "Claude 3.5 Sonnet、o1-preview",
   "points": [
    {
     "kind": "unk",
     "value": 29000000,
     "label": "入力 約2,900万（キャッシュの扱い不明）"
    },
    {
     "kind": "out",
     "value": 499000,
     "label": "出力 約50万"
    }
   ],
   "outcome": "2時間の予算では最良のエージェントが人間の専門家の4倍のスコア。8時間では人間がわずかに上回る",
   "check": "7つの環境、61人の専門家と比較",
   "note": "8時間の実行1回の平均",
   "scope": "8時間の実行1回あたり",
   "cost": 123,
   "costNote": "1回あたり約123ドル",
   "quote": "On average, our agents use ~29M input tokens and ~499K output tokens in each 8-hour run, at a cost of approximately $123.",
   "url": "https://arxiv.org/html/2411.15114",
   "tier": "primary"
  }
 ],
 "costs": [
  {
   "id": "anthropic-hawk-attack",
   "group": "math-new",
   "date": "2026-07-28",
   "title": "耐量子署名 HAWK への鍵回復攻撃",
   "who": "Anthropic（Claude Mythos Preview）",
   "costText": "約10万ドル（API 料金）",
   "outcome": "HAWK-256 の実質的な鍵の強さを約2^64から2^38に下げた",
   "note": "",
   "quote": "Each of the results cost roughly $100,000 in API cost to develop.",
   "url": "https://www.anthropic.com/research/discovering-cryptographic-weaknesses",
   "tier": "primary"
  },
  {
   "id": "deepmind-formal-proof-search-erdos",
   "group": "math-new",
   "date": "2026-05-21",
   "title": "Erdős の未解決問題353問のうち9問を形式証明で解決",
   "who": "Google DeepMind",
   "costText": "1問あたり数百ドル（AlphaProof は約60ドル）",
   "outcome": "56年未解決だった2問を含む9問を Lean で証明",
   "note": "全353問を回した費用は含まない",
   "quote": "Our most capable agent autonomously resolved 9 of 353 open Erdős problems at the per-problem cost of a few hundred dollars",
   "url": "https://arxiv.org/abs/2605.22763",
   "tier": "primary"
  },
  {
   "id": "gusev-agent-swarms",
   "group": "science",
   "date": "2026-09-28",
   "title": "エージェントの群れで最適化理論や物理を研究",
   "who": "S. Gusev、D. E. Bernal Neira",
   "costText": "従量課金換算で1.5万ドル超（4週間）",
   "outcome": "5つの分野で研究ノート・論文草稿・一部の Lean 証明",
   "note": "実際の支払いは月200ドルのサブスクリプション4つ",
   "quote": "a usage tracker that prices our session logs at the providers' metered rates puts the usage behind the corpus at more than 15,000 US dollars in the first four weeks",
   "url": "https://arxiv.org/abs/2609.35719",
   "tier": "primary"
  },
  {
   "id": "sakana-ai-scientist",
   "group": "science",
   "date": "2024-08-12",
   "title": "The AI Scientist が機械学習の論文を自動で書く",
   "who": "Sakana AI ほか",
   "costText": "論文1本あたり15ドル未満",
   "outcome": "着想から実験・執筆までを自動化した論文",
   "note": "評価は LLM による自動の査読",
   "quote": "Each idea is implemented and developed into a full paper at a meager cost of less than $15 per paper",
   "url": "https://arxiv.org/abs/2408.06292",
   "tier": "primary"
  },
  {
   "id": "denario",
   "group": "science",
   "date": "2025-10-30",
   "title": "Denario が分野をまたいで研究論文を書く",
   "who": "Denario プロジェクト",
   "costText": "論文1本あたり約4ドル",
   "outcome": "AI が書いた研究論文（作者いわく良い学部生〜大学院初期の水準）",
   "note": "",
   "quote": "it took Denario around 30 minutes per paper and a cost of around $4",
   "url": "https://arxiv.org/abs/2510.26887",
   "tier": "primary"
  },
  {
   "id": "agent-laboratory",
   "group": "science",
   "date": "2025-01-08",
   "title": "Agent Laboratory が着想から研究報告までを行う",
   "who": "AMD・Johns Hopkins 大学",
   "costText": "1回あたり2.33ドル（gpt-4o）",
   "outcome": "研究報告を一通り作成",
   "note": "",
   "quote": "Monetary costs per workflow were also substantially lower for gpt-4o, which averaged just $2.33 for the entire process.",
   "url": "https://arxiv.org/html/2501.04227v1",
   "tier": "primary"
  },
  {
   "id": "cloudflare-vinext",
   "group": "software",
   "date": "2026-02-24",
   "title": "Next.js の API を Vite 上に再実装（vinext）",
   "who": "Cloudflare",
   "costText": "約1,100ドル",
   "outcome": "Next.js 16 の API の94%を再現。テスト1,700件超",
   "note": "モデルは「Claude」とだけ記載",
   "quote": "The whole thing cost about $1,100 in tokens.",
   "url": "https://blog.cloudflare.com/vinext",
   "tier": "primary"
  },
  {
   "id": "ts-rust-opus",
   "group": "software",
   "date": "2026-10-07",
   "title": "TypeScript コンパイラを Go から Rust へ移植（ts-rust）",
   "who": "Theo Browne",
   "costText": "API 料金換算で約2.4万ドル",
   "outcome": "テスト186,890件に合格。型検査が Go 版の約半分の時間",
   "note": "Claude Opus 5.5。実際はサブスクリプション",
   "quote": "Total token spend was **~$24,047 of API spend over 2 weeks**.",
   "url": "https://github.com/pingdotgg/ts-rust",
   "tier": "primary-individual"
  },
  {
   "id": "ts-rust-gpt-failed",
   "group": "software",
   "date": "2026",
   "title": "同じ移植を別のモデルで試みた失敗例",
   "who": "Theo Browne",
   "costText": "API 料金換算で40万ドル超",
   "outcome": "130万行を書いたが互換性は約84%止まり",
   "note": "GPT-5.6 Sol と GPT-6 Astra",
   "quote": "In total I did **over $400,000 in API priced tokens with GPT-5.6 Sol and GPT 6 Astra**.",
   "url": "https://github.com/pingdotgg/ts-rust",
   "tier": "primary-individual"
  },
  {
   "id": "codescene-sf3-refactor",
   "group": "software",
   "date": "2026-09-24",
   "title": "30万行の C コードをエージェントでリファクタリング",
   "who": "CodeScene",
   "costText": "約4,000ドル",
   "outcome": "25万行を修正し、コードの健全性の指標を5.6から10.0に",
   "note": "Claude Opus",
   "quote": "completed in three weeks of part-time work for roughly $4,000 in AI costs",
   "url": "https://codescene.com/blog/case-study-refactoring-at-scale-with-agents",
   "tier": "primary"
  },
  {
   "id": "huntley-cursed-lang",
   "group": "software",
   "date": "2025-09-09",
   "title": "プログラミング言語 cursed とそのコンパイラ",
   "who": "Geoffrey Huntley",
   "costText": "3回の実装で約1.4万ドル",
   "outcome": "C・Rust・Zig で3回実装し、LLVM でネイティブのバイナリを出す",
   "note": "API 料金かどうかは明言されていない",
   "quote": "Technically it costs about 5k usd to build your own compiler now because cursed was implemented first in c, then rust, now zig. So yeah, it’s not one compiler it’s three editions of it. For a total of $14k USD.",
   "url": "https://x.com/GeoffreyHuntley/status/1965295152962097550",
   "tier": "primary-individual"
  },
  {
   "id": "arxiv-717k-ts-refactor",
   "group": "software",
   "date": "2026-08-12",
   "title": "71.8万行の TypeScript アプリの設計を作り替える",
   "who": "Joel Abenhaim",
   "costText": "2,430ドル",
   "outcome": "189ファイルにまたがる設計上の前提を取り除いた",
   "note": "モデルの利用料と確かめられたのは二次情報だけ",
   "quote": "Elapsed: three days; cost: USD 2,430.",
   "url": "https://arxiv.org/abs/2608.12440",
   "tier": "secondary"
  },
  {
   "id": "anthropic-scone-zero-days",
   "group": "security",
   "date": "2025-12-01",
   "title": "稼働中のスマートコントラクト2,849件からゼロデイを探す",
   "who": "Anthropic",
   "costText": "3,476ドル（GPT-5 での1回の走査）",
   "outcome": "未知の脆弱性2件を発見",
   "note": "",
   "quote": "The cost of running the GPT-5 agent once against all 2,849 candidate contracts was $3,476.",
   "url": "https://red.anthropic.com/2025/smart-contracts/",
   "tier": "primary"
  },
  {
   "id": "mythos-openbsd",
   "group": "security",
   "date": "2026-04-07",
   "title": "OpenBSD の27年前からのバグを見つける",
   "who": "Anthropic（Claude Mythos Preview）",
   "costText": "約1,000回の実行で2万ドル未満",
   "outcome": "リモートからクラッシュさせられる TCP のバグ（修正済み）",
   "note": "成功した1回は50ドル未満",
   "quote": "Across a thousand runs through our scaffold, the total cost was under $20,000 and found several dozen more findings.",
   "url": "https://red.anthropic.com/2026/mythos-preview/",
   "tier": "primary"
  },
  {
   "id": "mythos-ffmpeg",
   "group": "security",
   "date": "2026-04-07",
   "title": "FFmpeg の16年前からの脆弱性などを見つける",
   "who": "Anthropic（Claude Mythos Preview）",
   "costText": "約1万ドル",
   "outcome": "H.264・H.265・AV1 の処理の脆弱性",
   "note": "",
   "quote": "Mythos Preview identified several other important vulnerabilities in FFmpeg after several hundred runs over the repository, at a cost of roughly ten thousand dollars.",
   "url": "https://red.anthropic.com/2026/mythos-preview/",
   "tier": "primary"
  },
  {
   "id": "mythos-linux-nday-exploit",
   "group": "security",
   "date": "2026-04-07",
   "title": "既知のバグ報告から Linux の root 権限を取るエクスプロイトを書く",
   "who": "Anthropic（Claude Mythos Preview）",
   "costText": "1,000ドル未満",
   "outcome": "動くエクスプロイト",
   "note": "",
   "quote": "Creating this exploit (starting from the syzkaller report) cost under $1000 at API pricing, and took half a day to complete.",
   "url": "https://red.anthropic.com/2026/mythos-preview/",
   "tier": "primary"
  },
  {
   "id": "aixcc-buttercup",
   "group": "security",
   "date": "2025-08-09",
   "title": "DARPA の AI サイバーチャレンジ決勝で2位",
   "who": "Trail of Bits",
   "costText": "LLM 費 約2.1万ドル（計算機費は別に約1.9万ドル）",
   "outcome": "決勝2位",
   "note": "",
   "quote": "| Trail of Bits | $21.1k | $18.5k | $39.6k | $181 |",
   "url": "https://blog.trailofbits.com/2025/08/09/trail-of-bits-buttercup-wins-2nd-place-in-aixcc-challenge/",
   "tier": "primary"
  },
  {
   "id": "aixcc-team-atlanta",
   "group": "security",
   "date": "2025-08-08",
   "title": "DARPA の AI サイバーチャレンジ決勝で優勝",
   "who": "Team Atlanta",
   "costText": "LLM 費 約2.9万ドル（計算機費は別に約7.4万ドル）",
   "outcome": "決勝1位（賞金400万ドル）",
   "note": "数字は2位の Trail of Bits が公表したもの",
   "quote": "| Team Atlanta | $29.4k | $73.9k | $103.3k | $263 |",
   "url": "https://blog.trailofbits.com/2025/08/09/trail-of-bits-buttercup-wins-2nd-place-in-aixcc-challenge/",
   "tier": "secondary"
  },
  {
   "id": "sakana-ale-agent-ahc058",
   "group": "agent",
   "date": "2026-01-05",
   "title": "AtCoder Heuristic Contest 058 で804人中1位",
   "who": "Sakana AI",
   "costText": "約1,300ドル（うち API 約1,000ドル）",
   "outcome": "804人中1位",
   "note": "GPT-5.2 と Gemini 3 Pro",
   "quote": "Total Cost: Approximately $1,300 (including about $1,000 in API fees and infrastructure costs like AWS).",
   "url": "https://sakana.ai/ahc058/",
   "tier": "primary"
  },
  {
   "id": "arc2-gpt62-astra-xhigh",
   "group": "agent",
   "date": "2026-11-17",
   "title": "ARC-AGI-2 で95.8%",
   "who": "ARC Prize（GPT-6.2 Astra を検証）",
   "costText": "1問あたり0.50ドル",
   "outcome": "ARC-AGI-2 の準非公開問題で95.8%",
   "note": "2026年11月27日時点の首位",
   "quote": "leaderboard data: score 95.8%, costPerTask $0.5",
   "url": "https://arcprize.org/leaderboard",
   "tier": "primary"
  },
  {
   "id": "arc2-gemini3-deepthink",
   "group": "agent",
   "date": "2026-02-12",
   "title": "ARC-AGI-2 で84.6%",
   "who": "ARC Prize（Gemini 3 Deep Think を検証）",
   "costText": "1問あたり13.62ドル",
   "outcome": "ARC-AGI-2 の準非公開問題で84.6%",
   "note": "",
   "quote": "leaderboard data: score 84.6%, costPerTask $13.62",
   "url": "https://arcprize.org/leaderboard",
   "tier": "primary"
  },
  {
   "id": "arc2-gpt52-pro-high",
   "group": "agent",
   "date": "2025-12-11",
   "title": "ARC-AGI-2 で54.2%",
   "who": "ARC Prize（GPT-5.2 Pro を検証）",
   "costText": "1問あたり15.59ドル",
   "outcome": "ARC-AGI-2 の準非公開問題で54.2%",
   "note": "",
   "quote": "leaderboard data: score 54.2%, costPerTask $15.59",
   "url": "https://arcprize.org/leaderboard",
   "tier": "primary"
  },
  {
   "id": "arc-prize-2025-nvarc",
   "group": "agent",
   "date": "2026-01",
   "title": "ARC Prize 2025 の Kaggle 部門で優勝",
   "who": "NVARC（NVIDIA）",
   "costText": "1問あたり0.20ドル（計算機費）",
   "outcome": "ARC-AGI-2 の非公開問題で24.03%",
   "note": "API ではなく Kaggle の計算機の費用",
   "quote": "The top competition score reached a new state-of-the-art on the ARC-AGI-2 private dataset of 24% at a compute cost of $0.20 per task.",
   "url": "https://arxiv.org/html/2601.10904v1",
   "tier": "primary"
  },
  {
   "id": "swebench-verified-opus45-bash",
   "group": "agent",
   "date": "2026-02-17",
   "title": "SWE-bench Verified で76.8%",
   "who": "SWE-bench（Claude Opus 4.5）",
   "costText": "500問で376.95ドル",
   "outcome": "実在の GitHub の課題500件の76.8%を解決",
   "note": "",
   "quote": "\"resolved\": 76.8, \"cost\": 376.95 (leaderboards.json, Verified)",
   "url": "https://github.com/SWE-bench/swe-bench.github.io/blob/master/data/leaderboards.json",
   "tier": "primary"
  },
  {
   "id": "swebench-verified-minimax-bash",
   "group": "agent",
   "date": "2026-02-17",
   "title": "SWE-bench Verified で75.8%",
   "who": "SWE-bench（MiniMax M2.5）",
   "costText": "500問で36.64ドル",
   "outcome": "500件の75.8%を解決",
   "note": "Claude Opus 4.5 より1点低く、費用は約10分の1",
   "quote": "\"resolved\": 75.8, \"cost\": 36.64 (leaderboards.json, Verified)",
   "url": "https://github.com/SWE-bench/swe-bench.github.io/blob/master/data/leaderboards.json",
   "tier": "primary"
  },
  {
   "id": "theagentcompany",
   "group": "agent",
   "date": "2025-09-10",
   "title": "模擬のソフトウェア会社で業務をこなす TheAgentCompany",
   "who": "Carnegie Mellon 大学ほか",
   "costText": "1課題あたり約4.2ドル（Gemini 2.5 Pro）",
   "outcome": "課題の30.3%を完了",
   "note": "1課題あたりかは本文からの読み取り",
   "quote": "OpenHands 0.28.1 Gemini-2.5-Pro 30.3% 39.3% 27.2 $4.2",
   "url": "https://arxiv.org/html/2412.14161",
   "tier": "primary"
  },
  {
   "id": "ai-village-season1",
   "group": "agent",
   "date": "2025-05-22",
   "title": "AI Village：4体のエージェントが慈善の募金をする",
   "who": "AI Digest",
   "costText": "推論と設備で月約3,700ドル",
   "outcome": "約2,000ドルを2つの団体のために集めた",
   "note": "モデルの利用料だけではない",
   "quote": "Inference and infrastructure costs are about $3700 a month, and then there is a variable amount of dev cost on top of that.",
   "url": "https://www.lesswrong.com/posts/jyrcdykz6qPTpw7FX/season-recap-of-the-village-agents-raise-usd2-000",
   "tier": "primary"
  }
 ],
 "none": [
  {
   "id": "openai-math-manuscripts",
   "title": "OpenAI の数学の原稿約730本（準リーマン予想など）",
   "date": "2026-10",
   "note": "1件あたり平均「ChatGPT Pro の思考3時間」とだけ書かれている",
   "url": "https://github.com/openai/math"
  },
  {
   "id": "openai-eth",
   "title": "OpenAI の指数時間仮説の反証",
   "date": "2026-10-26",
   "note": "トークン数も費用もない。Lean で形式化、独立の検証中",
   "url": "https://openai.com/index/building-scientific-understanding-with-academic-communities/"
  },
  {
   "id": "openai-local-smoothing-yang-mills",
   "title": "OpenAI の局所平滑化・掛谷予想・Yang–Mills の存在など",
   "date": "2026-10",
   "note": "トークン数も計算量もない",
   "url": "https://openai.com/index/building-scientific-understanding-with-academic-communities/"
  },
  {
   "id": "craig-lattice-chiral",
   "title": "Craig の格子カイラルフェルミオンの論文（GPT-6 Astra）",
   "date": "2026-10-06",
   "note": "謝辞は Astra の主導を書くが数字はない",
   "url": "https://arxiv.org/abs/2610.09093"
  },
  {
   "id": "anthropic-vp-vnp",
   "title": "Claude の VP ≠ VNP の証明",
   "date": "2026-11-23",
   "note": "論文にも README にも数字はない",
   "url": "https://github.com/anthropics/formal-math/tree/main/vp-vnp"
  },
  {
   "id": "alpoge-rh-claim",
   "title": "Alpöge と Claude のリーマン予想の証明の主張",
   "date": "2026-11-20",
   "note": "数字は見つからない（本人の覚え書きは未確認）",
   "url": "https://thenextweb.com/news/anthropic-researcher-claims-claude-helped-him-prove-the-riemann-hypothesis"
  },
  {
   "id": "alpoge-jacobian",
   "title": "Alpöge と Claude Fable 5 のヤコビアン予想の反例",
   "date": "2026-07",
   "note": "数字は見つからない",
   "url": "https://isa-afp.org/browser_info/current/AFP/Jacobian_Counterexample/document.pdf"
  },
  {
   "id": "buckmaster-alpoge-euler",
   "title": "Buckmaster・Alpöge の Euler 方程式などの爆発",
   "date": "2026-09-08",
   "note": "「OpenAI に大きな請求を払った」とあるが数字はない",
   "url": "https://cims.nyu.edu/~tristanb/statement.pdf"
  },
  {
   "id": "anthropic-fable52-flt",
   "title": "Claude Fable 5.2 の1,000体によるフェルマーの最終定理の再形式化",
   "date": "2026-11-09",
   "note": "最初の形式化の「3分の1の行動トークン」という比だけ",
   "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2"
  },
  {
   "id": "gpt5-science-acceleration",
   "title": "GPT-5 による科学の加速の実験（論文）",
   "date": "2025-11",
   "note": "推論の時間（「16分19秒考えた」など）だけ",
   "url": "https://arxiv.org/abs/2511.16072"
  },
  {
   "id": "hsu-nonlinear-qm",
   "title": "Hsu の GPT-5 の着想による物理の論文",
   "date": "2025",
   "note": "数字は見つからない",
   "url": "https://stevehsu.substack.com/p/theoretical-physics-with-generative"
  },
  {
   "id": "alphaevolve",
   "title": "AlphaEvolve と Tao らの数学の論文",
   "date": "2025",
   "note": "相対的な計算量と価格の比だけ",
   "url": "https://arxiv.org/abs/2511.02864"
  },
  {
   "id": "ai-co-scientist",
   "title": "Google の AI co-scientist",
   "date": "2025",
   "note": "数字は見つからない",
   "url": "https://arxiv.org/abs/2502.18864"
  },
  {
   "id": "aletheia",
   "title": "DeepMind の Aletheia と FirstProof",
   "date": "2026",
   "note": "相対的な計算量だけ",
   "url": "https://arxiv.org/abs/2602.21201"
  },
  {
   "id": "gpt52-erdos-728",
   "title": "GPT-5.2 Pro と Aristotle による Erdős 問題728番の解決",
   "date": "2026-01",
   "note": "数字は見つからない",
   "url": "https://the-decoder.com/terence-tao-says-gpt-5-2-pro-cracked-an-erdos-problem-but-warns-the-win-says-more-about-speed-than-difficulty/"
  },
  {
   "id": "mathinc-gauss-pnt",
   "title": "Math Inc の Gauss による強い素数定理の形式化",
   "date": "2025-09",
   "note": "3週間・約2.5万行とあるが数字はない",
   "url": "https://math-inc.github.io/strongpnt"
  },
  {
   "id": "kosmos",
   "title": "Edison Scientific の AI 科学者 Kosmos",
   "date": "2025-11",
   "note": "1回12時間などとあるが、トークン数はない（1回200ドルは製品の価格）",
   "url": "https://arxiv.org/abs/2511.02824"
  },
  {
   "id": "cursor-fastrender-browser",
   "title": "Cursor のエージェントがウェブブラウザを一から作る",
   "date": "2026-01-14",
   "note": "「trillions of tokens（数兆トークン）」とだけ書かれ、ブラウザ単体の値かもわからない",
   "url": "https://cursor.com/blog/scaling-agents"
  }
 ]
};
