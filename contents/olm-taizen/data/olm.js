/*
  〇LM大全のデータ（/contents/olm-taizen/）。
  番号・分類・同じ綴りで別の意味があるか（clash）・展開形・訳・解説・出典。checked は一次資料を確かめた日。
*/
window.OLM_TAIZEN = {
 "checked": "2026-11-05",
 "categories": [
  {
   "name": "規模",
   "desc": "モデルの大きさや位置づけを表す呼び名"
  },
  {
   "name": "学習法",
   "desc": "事前学習の目的や、文章を生成する方式"
  },
  {
   "name": "入出力",
   "desc": "テキスト以外の画像や音も扱うモデル"
  },
  {
   "name": "科学",
   "desc": "科学分野の配列データを学ぶモデル"
  },
  {
   "name": "検索",
   "desc": "外部の情報を検索して使うしくみ"
  },
  {
   "name": "多言語",
   "desc": "複数の言語をまたいで扱うモデル"
  },
  {
   "name": "古典",
   "desc": "ニューラルネット以前の統計的な言語モデルと、ニューラル言語モデルの初期の形"
  },
  {
   "name": "固有名",
   "desc": "特定のモデルやソフトウェアの名前"
  },
  {
   "name": "親戚",
   "desc": "末尾が LM ではないが、よく並んで出てくる仲間"
  }
 ],
 "terms": [
  {
   "no": 1,
   "cat": "規模",
   "abbr": "LLM",
   "clash": true,
   "en": "Large Language Model",
   "ja": "大規模言語モデル",
   "title": "Large Language Model（大規模言語モデル）",
   "body": [
    "数百億から数千億のパラメータを持つ、大きな事前学習済み言語モデル（→3）の呼び名です。Zhao らのサーベイによると、GPT-3 や PaLM のような大きなモデルを、BERT や GPT-2 のような小さなモデルと区別するために研究コミュニティが使い始めました。区別の理由には、小さなモデルには見られない文脈内学習などの能力が挙げられています。"
   ],
   "same": "法学修士の LL.M.（Master of Laws）。こちらはピリオドが入ります。",
   "sources": [
    "Zhao ほか, A Survey of Large Language Models, arXiv:2303.18223",
    "Harvard Law School, LL.M. Program"
   ]
  },
  {
   "no": 2,
   "cat": "規模",
   "abbr": "SLM",
   "clash": true,
   "en": "Small Language Model",
   "ja": "小規模言語モデル",
   "title": "Small Language Model（小規模言語モデル）",
   "body": [
    "LLM より小さく、手元の機器でも動かせる言語モデルです。Microsoft は Phi-3 を small language models（SLMs）と呼び、端末上での実行やオフラインでの動作に向くと説明しています。NVIDIA の研究者らの論文は、一般の消費者向け機器に載り、実用的な遅延で推論できる言語モデルを SLM と定義しました。2025年時点では、おおむね10B（100億パラメータ）未満が目安だとしています。"
   ],
   "same": "最も意味の多い略語の1つです。統計的言語モデル（Statistical LM。n-gram など）や、構造化言語モデル（Structured LM）も SLM です。話し言葉や音声の言語モデル（Spoken LM、Speech LM）も SLM と略され、SpeechLM とも書かれます。分野の外では、金属3Dプリントの選択的レーザー溶融（Selective Laser Melting）も SLM と略されます。",
   "sources": [
    "Microsoft, Tiny but mighty: The Phi-3 small language models with big potential, 2024",
    "Belcak ほか, arXiv:2506.02153",
    "Zhao ほか, arXiv:2303.18223",
    "Chelba, Jelinek, arXiv:cs/0001023",
    "Arora ほか, arXiv:2504.08528",
    "Yap ほか, Applied Physics Reviews 2(4), 2015",
    "Cuervo, Marxer, Scaling Properties of Speech Language Models, EMNLP 2024, arXiv:2404.00685",
    "Cui ほか, Recent Advances in Speech Language Models: A Survey, ACL 2025, arXiv:2410.03751"
   ]
  },
  {
   "no": 3,
   "cat": "規模",
   "abbr": "PLM",
   "clash": true,
   "en": "Pre-trained Language Model",
   "ja": "事前学習済み LM",
   "title": "Pre-trained Language Model（事前学習済み言語モデル）",
   "body": [
    "大量のラベルなしテキストで先に学習しておき、目的のタスクに合わせて微調整（fine-tuning）して使う言語モデルです。Zhao らのサーベイは、ELMo に始まり BERT で広がった流れとして PLM を説明しています。同じサーベイでは、LLM は「大規模な PLM」と位置づけられています。"
   ],
   "same": "タンパク質言語モデル（protein LM。→17）や、Meta の画像理解モデル PerceptionLM（Perception Language Model）も PLM と略されます。XLNet の順列言語モデリング（permuted language modeling）を PLM と略す論文（MPNet）もあります。",
   "sources": [
    "Zhao ほか, arXiv:2303.18223",
    "Wang ほか, A Comprehensive Review of Protein Language Models, arXiv:2502.06881",
    "Cho ほか, PerceptionLM, arXiv:2504.13180",
    "Song ほか, MPNet, NeurIPS 2020, arXiv:2004.09297"
   ]
  },
  {
   "no": 4,
   "cat": "学習法",
   "abbr": "MLM",
   "clash": true,
   "en": "Masked Language Modeling",
   "ja": "マスク言語モデル",
   "title": "Masked Language Model（マスク言語モデル）",
   "body": [
    "入力の一部の単語を隠し（マスクし）、前後の文脈から元の単語を当てる学習方法です。BERT が事前学習の目的として導入し、穴埋め問題（Cloze task）に着想を得たと書いています。BERT は、全トークンの15%を予測の対象に選びます。左右両方の文脈を使えるのが特徴です。ELECTRA（2020年）は MLM に代わる方法として、置換トークン検出（replaced token detection）を提案しました。小さな生成器が入れ替えた単語を、本体のモデルが見分けます。DeBERTaV3 は、これを RTD と略しています。"
   ],
   "same": "マルチ商法（Multi-Level Marketing）。米国の消費者行政を担う FTC（Federal Trade Commission）も、この意味で MLM と書いています。",
   "sources": [
    "Devlin ほか, BERT, NAACL-HLT 2019, arXiv:1810.04805",
    "Liu ほか, RoBERTa, arXiv:1907.11692",
    "FTC, Multi-Level Marketing Businesses and Pyramid Schemes",
    "Clark ほか, ELECTRA, ICLR 2020, arXiv:2003.10555",
    "He ほか, DeBERTaV3, arXiv:2111.09543"
   ]
  },
  {
   "no": 5,
   "cat": "学習法",
   "abbr": "CLM",
   "clash": true,
   "en": "Causal Language Modeling",
   "ja": "因果言語モデリング",
   "title": "Causal Language Modeling（因果言語モデリング）",
   "body": [
    "それまでの単語だけを見て、次の単語を予測する学習方法です。先の単語を見ないので「因果的（causal）」と呼びます。GPT 系をはじめ、現在の多くの LLM がこの方式をとっています。XLM の論文（→24）は、CLM を MLM や TLM と並べて定義しました。"
   ],
   "same": "化学言語モデル（chemical language model）も CLM と略されます。新しい分子を設計するための生成モデルとして使われています。小文字で cLM と書く論文もあり、1本の論文の中で両方の書き方が混ざる例もあります。",
   "sources": [
    "Lample, Conneau, arXiv:1901.07291",
    "Hugging Face Transformers, Causal language modeling",
    "Zhao ほか, arXiv:2303.18223",
    "Moret ほか, Nature Communications 14, 2023",
    "Singh ほか, Chem42, arXiv:2503.16563"
   ]
  },
  {
   "no": 6,
   "cat": "学習法",
   "abbr": "TLM",
   "clash": true,
   "en": "Translation Language Modeling",
   "ja": "翻訳言語モデリング",
   "title": "Translation Language Modeling（翻訳言語モデリング）",
   "body": [
    "対訳の文の組を使い、複数の言語をまたいで事前学習する方法です。Lample と Conneau（2019年）が XLM の論文（→24）で、MLM（→4）を広げた学習目的として導入しました。英語の文とそのフランス語訳をつなげて1つの入力にし、両方の単語をランダムに隠して当てさせます。英語の文脈だけでは当てにくい単語も、フランス語訳を手がかりにできます。"
   ],
   "same": "表形式のデータを扱う言語モデル（Tabular Language Model）も TLM と略されます。この分野では TaLM と書く論文もあります。",
   "sources": [
    "Lample, Conneau, Cross-lingual Language Model Pretraining, NeurIPS 2019, arXiv:1901.07291",
    "Gorla, Puduppully, The Illusion of Generalization in Tabular Language Models, ICML 2026（PMLR 306）",
    "Zheng ほか, Chain-of-Thought Reasoning in Tabular Language Models, Findings of EMNLP 2023"
   ]
  },
  {
   "no": 7,
   "cat": "学習法",
   "abbr": "PrefixLM",
   "clash": false,
   "en": "Prefix Language Modeling",
   "ja": "接頭辞つき LM",
   "title": "Prefix Language Modeling（接頭辞つき言語モデリング）",
   "body": [
    "入力の前半（接頭辞、prefix）は前後を自由に見て、続きの部分は左から順に予測する方式です。Transformer の自己注意のマスクを変え、接頭辞の中だけはどの位置どうしも見えるようにします。T5 の論文は、この prefix LM を比較するモデル構造の1つに入れました。画像と文章を扱う SimVLM は、PrefixLM だけを学習目的にしています。UL2 は複数の学習目的を混ぜる方法の中で、これを S-denoiser として使いました。"
   ],
   "same": null,
   "sources": [
    "Raffel ほか, T5, JMLR 21, 2020, arXiv:1910.10683",
    "Wang ほか, SimVLM, ICLR 2022, arXiv:2108.10904",
    "Tay ほか, UL2: Unifying Language Learning Paradigms, arXiv:2205.05131"
   ]
  },
  {
   "no": 8,
   "cat": "学習法",
   "abbr": "biLM",
   "clash": false,
   "en": "bidirectional Language Model",
   "ja": "双方向言語モデル",
   "title": "bidirectional Language Model（双方向言語モデル）",
   "body": [
    "文を前から読む言語モデルと、後ろから読む言語モデルを組み合わせたものです。Allen Institute for AI とワシントン大学の Peters ら（2018年）が、ELMo（Embeddings from Language Models）の土台として使いました。前向きと後ろ向きの LSTM（→28）で、両方向の予測の対数尤度を合わせて最大化します。ELMo は biLM の各層の出力を課題ごとに重みづけして足し、単語の表現にします。"
   ],
   "same": null,
   "sources": [
    "Peters ほか, Deep Contextualized Word Representations, NAACL-HLT 2018, arXiv:1802.05365"
   ]
  },
  {
   "no": 9,
   "cat": "学習法",
   "abbr": "FIM",
   "clash": false,
   "en": "Fill-in-the-Middle",
   "ja": "中間の穴埋め",
   "title": "Fill-in-the-Middle（中間の穴埋め）",
   "body": [
    "文書の途中を穴埋めできるようにする学習方法です。OpenAI の Bavarian らは、文書を前・中・後ろの3つに分け、中の部分を末尾に移して並べ替えました。このデータ変換だけで、左から右へ生成するモデルが穴埋めを学べます。コード生成モデルの StarCoder や Code Llama（一部のサイズ）も、この方式で穴埋めを学習しています。"
   ],
   "same": null,
   "sources": [
    "Bavarian ほか, Efficient Training of Language Models to Fill in the Middle, arXiv:2207.14255",
    "StarCoder, arXiv:2305.06161",
    "Code Llama, arXiv:2308.12950"
   ]
  },
  {
   "no": 10,
   "cat": "学習法",
   "abbr": "ILM",
   "clash": true,
   "en": "Infilling by Language Modeling",
   "ja": "LM で穴埋め",
   "title": "Infilling by Language Modeling（言語モデルによる穴埋め）",
   "body": [
    "文書の途中の欠けた部分を、前後の文脈から埋めるための学習の枠組みです。Stanford 大学の Donahue ら（2020年）が提案しました。文の一部を [blank] に置き換え、その後ろに区切りと正解の部分をつなげた学習例を作ります。この例でふつうの言語モデル（GPT-2）を学習するだけで、穴埋めができるようになります。FIM の論文（→9）は、自分たちのデータ変換がこの方法などに似ていると述べています。"
   ],
   "same": "音声認識では、音声から文字列を直接出す End-to-End モデルが暗に身につける内部言語モデル（internal language model）も ILM です。",
   "sources": [
    "Donahue ほか, Enabling Language Models to Fill in the Blanks, ACL 2020, arXiv:2005.05339",
    "Bavarian ほか, arXiv:2207.14255",
    "Zeineldeen ほか, Interspeech 2021, arXiv:2104.05544"
   ]
  },
  {
   "no": 11,
   "cat": "学習法",
   "abbr": "DLM",
   "clash": true,
   "en": "Diffusion Language Model",
   "ja": "拡散言語モデル",
   "title": "Diffusion Language Model（拡散言語モデル）",
   "body": [
    "拡散モデルの考え方で文章を生成する言語モデルです。1語ずつ左から順に出すのではなく、ノイズやマスクの状態から文全体を少しずつ復元します。Stanford 大学の Li らの Diffusion-LM（2022年）は、ノイズのベクトル列を少しずつ単語へ戻す方式です。マスクから復元する方式は MDLM（Masked Diffusion Language Model）とも呼ばれます。Sahoo ら（2024年）は、その学習の目的がマスク言語モデル（→4）の損失の混合になると説明しました。LLaDA（Large Language Diffusion with mAsking、2025年）は、マスク型の拡散モデルを一から学習しました。8B 版の文脈内学習の性能は、LLaMA3 8B に匹敵すると報告しています。LLM の規模の拡散言語モデルは、dLLM とも略されます。"
   ],
   "same": "音声認識の誤りを直すモデル Denoising LM も、DLM と略されています（2024年の論文の初版）。",
   "sources": [
    "Li ほか, Diffusion-LM, NeurIPS 2022, arXiv:2205.14217",
    "Sahoo ほか, Simple and Effective Masked Diffusion Language Models, NeurIPS 2024, arXiv:2406.07524",
    "Nie ほか, Large Language Diffusion Models, NeurIPS 2025, arXiv:2502.09992",
    "Zhao ほか, d1, arXiv:2504.12216",
    "Li ほか, A Survey on Diffusion Language Models, arXiv:2508.10875",
    "Gu ほか, Denoising LM, arXiv:2405.15216v1"
   ]
  },
  {
   "no": 12,
   "cat": "学習法",
   "abbr": "RLM",
   "clash": true,
   "en": "Recursive Language Model",
   "ja": "再帰言語モデル",
   "title": "Recursive Language Model（再帰言語モデル）",
   "body": [
    "長いプロンプトを一度にモデルへ入れず、外部の環境の一部として扱う推論の方式です。Zhang、Kraska、Khattab が2025年12月に提案しました。LLM はプロンプトをプログラムで調べて分け、その断片に対して自分自身を再帰的に呼び出します。論文は、文脈窓（一度に読める長さ）より2桁長い入力まで処理できたと報告しています。"
   ],
   "same": "推論言語モデル（Reasoning Language Model）も RLM と略されます。Besta ら（2025年）は、LRM（→49）の別名として RLM を使っています。",
   "sources": [
    "Zhang, Kraska, Khattab, Recursive Language Models, arXiv:2512.24601",
    "Besta ほか, Reasoning Language Models: A Blueprint, arXiv:2501.11223"
   ]
  },
  {
   "no": 13,
   "cat": "入出力",
   "abbr": "VLM",
   "clash": false,
   "en": "Vision-Language Model",
   "ja": "視覚言語モデル",
   "title": "Vision-Language Model（視覚言語モデル）",
   "body": [
    "画像と言葉の両方を扱うモデルです。Web 上の大量の画像と説明文の組から、見た目と言葉の対応を学びます。こうして学んだモデルは、1つでさまざまな画像認識を追加の学習なしにこなせます。CLIP（2021年）は、サーベイで VLM の代表的な手法として扱われています。LLM を組み込んだ大きな VLM は、LVLM（Large Vision-Language Model）とも呼ばれます。"
   ],
   "same": null,
   "sources": [
    "Zhang ほか, Vision-Language Models for Vision Tasks: A Survey, arXiv:2304.00685",
    "Bordes ほか, An Introduction to Vision-Language Modeling, arXiv:2405.17247",
    "Radford ほか, CLIP, ICML 2021, arXiv:2103.00020",
    "Li ほか, Evaluating Object Hallucination in Large Vision-Language Models, EMNLP 2023, arXiv:2305.10355"
   ]
  },
  {
   "no": 14,
   "cat": "入出力",
   "abbr": "MLLM",
   "clash": true,
   "en": "Multimodal Large Language Model",
   "ja": "マルチモーダル LLM",
   "title": "Multimodal Large Language Model（マルチモーダル LLM）",
   "body": [
    "LLM を土台に、画像や音声など複数の種類（モダリティ）の情報を受け取り、推論して出力するモデルです。Yin らのサーベイは、LLM を「頭脳」にしてマルチモーダルなタスクをこなすモデルと説明し、代表に GPT-4V を挙げています。文章で推論できても目の見えない LLM と、見えても推論の弱い視覚モデルが、補い合って生まれた分野だとしています。LLaVA-1.5 の論文（CVPR 2024）などは、同じ種類のモデルを LMM（Large Multimodal Model）と呼んでいます。"
   ],
   "same": "多言語の LLM（Multilingual Large Language Model）も MLLM と略されます。別名の LMM は、統計学の線形混合モデル（Linear Mixed Model）の略でもあります。",
   "sources": [
    "Yin ほか, A Survey on Multimodal Large Language Models, National Science Review 11, 2024, arXiv:2306.13549",
    "Qin ほか, Multilingual Large Language Model: A Survey, arXiv:2404.04925",
    "Liu ほか, Improved Baselines with Visual Instruction Tuning, CVPR 2024, arXiv:2310.03744",
    "Listgarten ほか, Nature Methods 9, 2012"
   ]
  },
  {
   "no": 15,
   "cat": "入出力",
   "abbr": "LALM",
   "clash": false,
   "en": "Large Audio-Language Model",
   "ja": "音を扱う大規模 LM",
   "title": "Large Audio-Language Model（音を扱う大規模言語モデル）",
   "body": [
    "音を聞いて理解し、指示に従って文章で答える大規模モデルです。対象は人の話し声だけでなく、環境音や音楽も含みます。評価用のベンチマーク AIR-Bench は、SALMONN や Qwen-Audio をこの種類のモデルとして評価しています。SALMONN は、テキストの LLM に、話し声と音響のエンコーダを組み合わせたモデルです。"
   ],
   "same": null,
   "sources": [
    "Yang ほか, AIR-Bench, ACL 2024, arXiv:2402.07729",
    "SALMONN, ICLR 2024, arXiv:2310.13289",
    "Qwen-Audio, arXiv:2311.07919"
   ]
  },
  {
   "no": 16,
   "cat": "入出力",
   "abbr": "GSLM",
   "clash": false,
   "en": "Generative Spoken Language Modeling",
   "ja": "文字なしの音声 LM",
   "title": "Generative Spoken Language Modeling（文字を使わない音声の言語モデリング）",
   "body": [
    "文字起こしを使わず、生の音声だけから言語の音と中身を学ぶ課題です。Facebook AI Research の Lakhotia ら（2021年）が提案しました。音声を離散的な単位（疑似テキスト）に変え、その列で言語モデルを学び、また音声に戻して生成します。原論文は略語を使っていません。韻律も扱う後続の pGSLM（2022年）の論文が、これを GSLM と略しています。"
   ],
   "same": null,
   "sources": [
    "Lakhotia ほか, On Generative Spoken Language Modeling from Raw Audio, TACL 9, 2021, arXiv:2102.01192",
    "Kharitonov ほか, Text-Free Prosody-Aware Generative Spoken Language Modeling, ACL 2022, arXiv:2109.03264"
   ]
  },
  {
   "no": 17,
   "cat": "科学",
   "abbr": "pLM",
   "clash": true,
   "en": "protein Language Model",
   "ja": "タンパク質の LM",
   "title": "protein Language Model（タンパク質言語モデル）",
   "body": [
    "アミノ酸の配列を、文章のように扱って学習する言語モデルです。Meta の ESM-2 は汎用のタンパク質言語モデルで、これを使う ESMFold は配列から立体構造を予測します。ほかに ProtBERT（ProtTrans）や、タンパク質の設計に使う ProtGPT2 があります。"
   ],
   "same": "小文字の p で pLM と書く文献と、大文字で PLM と書く文献があります。大文字の PLM は、事前学習済み言語モデル（→3）の略とぶつかります。",
   "sources": [
    "Lin ほか, Science 379, 2023（ESM-2/ESMFold）",
    "Elnaggar ほか, ProtTrans, IEEE TPAMI 44, 2022",
    "Ferruz ほか, ProtGPT2, Nature Communications 13, 2022"
   ]
  },
  {
   "no": 18,
   "cat": "科学",
   "abbr": "gLM",
   "clash": true,
   "en": "genomic Language Model",
   "ja": "ゲノムの LM",
   "title": "genomic Language Model（ゲノム言語モデル）",
   "body": [
    "ゲノム（生物の DNA 全体）の配列を、文章のように扱って学習する言語モデルです。Benegas らの総説は、DNA の配列で学習した LLM を gLM と呼びました。Hwang ら（2024年）が gLM と名づけたモデルは、遺伝子を単語のように並べて学習します。Arc Institute の Evo 2 は自らを DNA 言語モデルと呼び、40B（400億パラメータ）の版があります。RNA の配列を学ぶものは RNA LM と呼ばれます。"
   ],
   "same": "大文字の GLM は、汎用言語モデル（→31）や、統計学の一般化線形モデルの略です。",
   "sources": [
    "Benegas ほか, Genomic language models: opportunities and challenges, Trends in Genetics 41(4), 2025, arXiv:2407.11435",
    "Hwang ほか, Genomic language model predicts protein co-regulation and function, Nature Communications 15, 2024",
    "Arc Institute, Evo 2（GitHub）",
    "Penić ほか, RiNALMo, Nature Communications 16, 2025, arXiv:2403.00043"
   ]
  },
  {
   "no": 19,
   "cat": "検索",
   "abbr": "RAG",
   "clash": false,
   "en": "Retrieval-Augmented Generation",
   "ja": "検索拡張生成",
   "title": "Retrieval-Augmented Generation（検索拡張生成）",
   "body": [
    "外部の文書を検索し、その結果を参照しながら文章を生成するしくみです。代表的な原典は Lewis ら（2020年）の論文です。検索を事前学習に組み込む REALM（→21）も参照してください。この論文は、パラメータに覚えた知識だけでは、正確に引き出す・出典を示す・更新することが難しいと指摘しました。そこで、生成モデルと、Wikipedia を検索する検索器を組み合わせました。検索した文書を入力の前に付けるだけの方式は、In-Context RALM（検索拡張言語モデリング）と呼ばれます。"
   ],
   "same": null,
   "sources": [
    "Lewis ほか, NeurIPS 2020, arXiv:2005.11401",
    "Guu ほか, REALM, ICML 2020, arXiv:2002.08909",
    "Ram ほか, In-Context Retrieval-Augmented Language Models, TACL 11, 2023, arXiv:2302.00083"
   ]
  },
  {
   "no": 20,
   "cat": "検索",
   "abbr": "ALM",
   "clash": true,
   "en": "Augmented Language Model",
   "ja": "拡張された LM",
   "title": "Augmented Language Model（拡張された言語モデル）",
   "body": [
    "推論の力や外部の道具（ツール）で強化した言語モデルの総称です。Meta AI の Mialon らのサーベイ（2023年）が、こうしたモデルを Augmented Language Models（ALMs）と呼びました。ここでの推論は、複雑な課題を簡単な小問に分けることです。ツールの利用は、コードの実行器などの外部モジュールを呼び出すことを指します。同じサーベイは、文書の検索（→19）もツールの1つとして扱っています。"
   ],
   "same": "音を扱う Audio Language Model も ALM と略されます。Microsoft などの研究者による Pengi（NeurIPS 2023）は、自らを ALM と呼んでいます。",
   "sources": [
    "Mialon ほか, Augmented Language Models: a Survey, TMLR 2023, arXiv:2302.07842",
    "Deshmukh ほか, Pengi: An Audio Language Model for Audio Tasks, NeurIPS 2023, arXiv:2305.11834"
   ]
  },
  {
   "no": 21,
   "cat": "検索",
   "abbr": "REALM",
   "clash": false,
   "en": "Retrieval-Augmented Language Model Pre-Training",
   "ja": "検索つき事前学習",
   "title": "Retrieval-Augmented Language Model Pre-Training（検索を組み込んだ事前学習）",
   "body": [
    "文書を探す部品（検索器）を、言語モデルの事前学習に組み込んだ手法です。Google Research の Guu ら（2020年）が提案しました。モデルは Wikipedia などの大きなコーパスから文書を取り出し、それを参照して穴埋め（→4）を解きます。著者らは、こうした検索器を教師なしで事前学習する方法を初めて示したと述べています。オープンドメインの質問応答では、従来の手法を正解率で4〜16ポイント上回りました。"
   ],
   "same": null,
   "sources": [
    "Guu ほか, REALM: Retrieval-Augmented Language Model Pre-Training, ICML 2020（PMLR 119）, arXiv:2002.08909"
   ]
  },
  {
   "no": 22,
   "cat": "検索",
   "abbr": "kNN-LM",
   "clash": false,
   "en": "k-Nearest Neighbor Language Model",
   "ja": "k 近傍の LM",
   "title": "k-Nearest Neighbor Language Model（k 近傍言語モデル）",
   "body": [
    "学習済みの言語モデルに、k 近傍法（似た例を k 個探す方法）を組み合わせたものです。Stanford 大学と Facebook AI Research の Khandelwal ら（ICLR 2020）が提案しました。学習データの各トークンについて、それより前の文脈をベクトルにして蓄えておきます。予測のときは似た文脈を探し、その次に来た単語の分布を元のモデルの予測と線形に混ぜます。Wikitext-103 では、追加の学習なしで perplexity を2.9下げ、15.79 にしました。"
   ],
   "same": null,
   "sources": [
    "Khandelwal ほか, Generalization through Memorization: Nearest Neighbor Language Models, ICLR 2020, arXiv:1911.00172"
   ]
  },
  {
   "no": 23,
   "cat": "検索",
   "abbr": "RETRO",
   "clash": false,
   "en": "Retrieval-Enhanced Transformer",
   "ja": "検索つき Transformer",
   "title": "Retrieval-Enhanced Transformer（検索で強化した Transformer）",
   "body": [
    "大きな文書データベースから検索した断片を参照しながら、文章を生成する言語モデルです。DeepMind の Borgeaud ら（2021年）が発表しました。検索には学習済みのまま固定した BERT を使い、取り出した断片を chunked cross-attention という仕組みで読み込みます。データベースは2兆トークンの規模です。公開テキスト集 Pile での性能は GPT-3 や Jurassic-1 と同程度で、パラメータは25分の1でした。"
   ],
   "same": null,
   "sources": [
    "Borgeaud ほか, Improving Language Models by Retrieving from Trillions of Tokens, ICML 2022（PMLR 162）, arXiv:2112.04426",
    "Google DeepMind Blog, 2021年12月8日"
   ]
  },
  {
   "no": 24,
   "cat": "多言語",
   "abbr": "XLM",
   "clash": false,
   "en": "Cross-lingual Language Model",
   "ja": "言語横断言語モデル",
   "title": "Cross-lingual Language Model（言語横断言語モデル）",
   "body": [
    "複数の言語をまたいで学習する言語モデルです。Lample と Conneau（2019年）は、英語で成功した事前学習を多言語に広げました。単言語のデータだけで学ぶ方法と、対訳データを使う TLM（→6）を加える方法の2つを提案しています。後継には、100言語で学習した XLM-R（XLM-RoBERTa）があります。サークル名の XLM とは綴りが同じです（サークル名の由来は「サークル・著者紹介」を参照）。"
   ],
   "same": null,
   "sources": [
    "Lample, Conneau, Cross-lingual Language Model Pretraining, NeurIPS 2019, arXiv:1901.07291",
    "Conneau ほか, Unsupervised Cross-lingual Representation Learning at Scale, ACL 2020"
   ]
  },
  {
   "no": 25,
   "cat": "古典",
   "abbr": "MaxEnt LM",
   "clash": false,
   "en": "Maximum Entropy Language Model",
   "ja": "最大エントロピー LM",
   "title": "Maximum Entropy Language Model（最大エントロピー言語モデル）",
   "body": [
    "最大エントロピー原理で作る、統計的な言語モデルです。Rosenfeld（1996年）は、遠く離れた単語の手がかりなど複数の情報源を、線形補間ではなく1つのモデルに統合しました。各情報源を制約とし、それを全部満たす分布のうちエントロピーが最大のものを選びます。perplexity は基準のモデルより32〜39%、音声認識の誤り率は10〜14%下がりました。MaxEnt LM という略は、後の論文が使っています。"
   ],
   "same": null,
   "sources": [
    "Rosenfeld, A maximum entropy approach to adaptive statistical language modelling, Computer Speech and Language 10(3), 1996",
    "Biadsy ほか, Effectively Building Tera Scale MaxEnt Language Models Incorporating Non-Linguistic Signals, Interspeech 2017"
   ]
  },
  {
   "no": 26,
   "cat": "古典",
   "abbr": "FLM",
   "clash": false,
   "en": "Factored Language Model",
   "ja": "素性分解の LM",
   "title": "Factored Language Model（素性分解言語モデル）",
   "body": [
    "単語を、語幹や形態のクラスのような複数の素性（factor）の組として扱う言語モデルです。ワシントン大学の Bilmes と Kirchhoff（2003年）が提案しました。アラビア語のように語形の変化が多い言語では、語幹や語根などを素性に使います。データが足りないときに短い文脈へ退避するバックオフ（backoff）も、素性の組に合わせて広げました。"
   ],
   "same": null,
   "sources": [
    "Bilmes, Kirchhoff, Factored Language Models and Generalized Parallel Backoff, HLT-NAACL 2003 Short Papers"
   ]
  },
  {
   "no": 27,
   "cat": "古典",
   "abbr": "NNLM",
   "clash": false,
   "en": "Neural Network Language Model",
   "ja": "ニューラル言語モデル",
   "title": "Neural Network Language Model（ニューラル言語モデル）",
   "body": [
    "順伝播型（feedforward）のニューラルネットワークで作る言語モデルです。Bengio ら（2003年）は、単語ごとの分散表現（埋め込みベクトル）と、単語の並びの確率を同時に学習しました。perplexity は最良の n-gram より、Brown コーパスで約24%下がりました。NNLM という略は、Mikolov ら（2013年）の word2vec の論文などが使っています。Schwenk は同じ方式を連続空間言語モデル（Continuous Space LM、CSLM）と呼びました。"
   ],
   "same": null,
   "sources": [
    "Bengio ほか, A Neural Probabilistic Language Model, JMLR 3, 2003",
    "Mikolov ほか, Efficient Estimation of Word Representations in Vector Space, arXiv:1301.3781",
    "Schwenk, Continuous-Space Language Models for Statistical Machine Translation, The Prague Bulletin of Mathematical Linguistics 93, 2010"
   ]
  },
  {
   "no": 28,
   "cat": "古典",
   "abbr": "RNNLM",
   "clash": false,
   "en": "Recurrent Neural Network LM",
   "ja": "RNN の言語モデル",
   "title": "Recurrent Neural Network Language Model（RNN の言語モデル）",
   "body": [
    "再帰型ニューラルネットワーク（RNN）で作る言語モデルです。Mikolov ら（2010年）は、それまでのニューラル言語モデル（→27）が直前の数語という固定長の文脈しか見られない点を、再帰結合で解決しようとしました。複数の RNN を組み合わせた音声認識の実験では、強い n-gram モデルに比べて perplexity（予測の難しさの指標）がおよそ半分になったと報告しています。この論文は、千葉・幕張で開かれた Interspeech 2010 で発表されました。"
   ],
   "same": null,
   "sources": [
    "Mikolov ほか, Recurrent neural network based language model, Interspeech 2010, pp.1045–1048",
    "Mikolov, RNNLM Toolkit"
   ]
  },
  {
   "no": 29,
   "cat": "古典",
   "abbr": "ULM",
   "clash": false,
   "en": "Unigram Language Model",
   "ja": "ユニグラム言語モデル",
   "title": "Unigram Language Model（ユニグラム言語モデル）",
   "body": [
    "文を単語より小さなサブワードに分けるための、ユニグラム言語モデルです。Kudo（2018年）が提案しました。大きめの語彙から始め、消しても尤度があまり下がらないサブワードを削って語彙を絞ります。分け方の候補を確率つきで複数出せるのが特徴です。SentencePiece はこの方式を実装し、既定にしています。ULM という略は、Wang ら（2021年）などが使っています。",
    "名前の似た ULMFiT（Universal Language Model Fine-tuning）は、別の転移学習の手法です。"
   ],
   "same": null,
   "sources": [
    "Kudo, Subword Regularization, ACL 2018, arXiv:1804.10959",
    "Wang, Ruder, Neubig, Multi-view Subword Regularization, NAACL 2021, arXiv:2103.08490",
    "Google, SentencePiece（GitHub）",
    "Howard, Ruder, ULMFiT, ACL 2018"
   ]
  },
  {
   "no": 30,
   "cat": "固有名",
   "abbr": "PaLM",
   "clash": false,
   "en": "Pathways Language Model",
   "ja": "Google の LLM",
   "title": "Pathways Language Model",
   "body": [
    "Google が2022年に発表した、5400億（540B）パラメータの大規模言語モデルです。名前の Pathways は、多数のアクセラレータに計算を割り振る Google のシステムの名前です。PaLM はこのシステムを大規模に使った最初の例で、6144個のチップで学習しました。後継に PaLM 2（2023年）があります。"
   ],
   "same": null,
   "sources": [
    "Chowdhery ほか, PaLM, arXiv:2204.02311（JMLR 24, 2023）",
    "Google Research Blog, 2022年4月4日",
    "Anil ほか, PaLM 2 Technical Report, arXiv:2305.10403"
   ]
  },
  {
   "no": 31,
   "cat": "固有名",
   "abbr": "GLM",
   "clash": true,
   "en": "General Language Model",
   "ja": "汎用言語モデル",
   "title": "General Language Model（汎用言語モデル）",
   "body": [
    "清華大学などの研究者が提案した、事前学習の方式とモデルです。それまでの BERT 型、GPT 型、T5 型は、どれも文の理解と生成のすべてで最良にはなりませんでした。GLM は、隠した部分を自己回帰で埋める「自己回帰的な穴埋め」で、これらを1つにまとめようとしました。その後、英語と中国語の GLM-130B、さらに ChatGLM と GLM-4 へと続いています。"
   ],
   "same": "統計学の一般化線形モデル（Generalized Linear Model）とぶつかります。グラフを扱う Graph Language Model（2024年）も GLM と略されています。",
   "sources": [
    "Du ほか, GLM, ACL 2022, arXiv:2103.10360",
    "Zeng ほか, GLM-130B, arXiv:2210.02414",
    "Team GLM, ChatGLM, arXiv:2406.12793",
    "Nelder, Wedderburn, Generalized Linear Models, 1972",
    "Plenz, Frank, Graph Language Models, ACL 2024, arXiv:2401.07105"
   ]
  },
  {
   "no": 32,
   "cat": "固有名",
   "abbr": "LLaMA",
   "clash": false,
   "en": "Large Language Model Meta AI",
   "ja": "Meta の LLM",
   "title": "Large Language Model Meta AI",
   "body": [
    "Meta が2023年2月に公開した LLM です。名前は Large Language Model Meta AI の略だと、Meta の公式ブログが説明しています。7B から 65B までの4つのサイズがあり、公開されているデータだけで学習しました。論文は、13B 版がほとんどのベンチマークで GPT-3（175B）を上回ったと報告しています。2023年7月の Llama 2 からは、表記が Llama に変わりました。"
   ],
   "same": null,
   "sources": [
    "Meta AI, Introducing LLaMA: A foundational, 65-billion-parameter large language model, 2023年2月24日",
    "Touvron ほか, LLaMA: Open and Efficient Foundation Language Models, arXiv:2302.13971",
    "Touvron ほか, Llama 2, arXiv:2307.09288"
   ]
  },
  {
   "no": 33,
   "cat": "固有名",
   "abbr": "UniLM",
   "clash": false,
   "en": "Unified Language Model",
   "ja": "理解と生成を統合",
   "title": "Unified Language Model（理解と生成の統合モデル）",
   "body": [
    "Microsoft の研究者らが2019年に発表した、文の理解と生成の両方に使える事前学習モデルです。1つの Transformer を、一方向・双方向・系列から系列（sequence-to-sequence）の3つの目的で学習します。どの文脈を見るかは、自己注意のマスクを変えるだけで切り替えます。後継に UniLMv2（2020年）があります。"
   ],
   "same": null,
   "sources": [
    "Dong ほか, Unified Language Model Pre-training for Natural Language Understanding and Generation, NeurIPS 2019, arXiv:1905.03197",
    "Bao ほか, UniLMv2, ICML 2020, arXiv:2002.12804"
   ]
  },
  {
   "no": 34,
   "cat": "固有名",
   "abbr": "MiniLM",
   "clash": false,
   "en": "（固有名）",
   "ja": "蒸留した小型モデル",
   "title": null,
   "body": [
    "Microsoft Research の研究者らが2020年に発表した、事前学習済みの Transformer を小さくする手法とそのモデルです。大きなモデル（教師）の最終層の自己注意（self-attention）を、小さなモデル（生徒）にまねさせます。論文はこれを深い自己注意蒸留と呼びました。6層の版は BERT-Base の2倍の速さで、SQuAD 2.0 などで99%を超える精度を保ったと報告しています。後継に MiniLMv2（2021年）があります。"
   ],
   "same": null,
   "sources": [
    "Wang ほか, MiniLM: Deep Self-Attention Distillation for Task-Agnostic Compression of Pre-Trained Transformers, NeurIPS 2020, arXiv:2002.10957",
    "Wang ほか, MiniLMv2, Findings of ACL-IJCNLP 2021, arXiv:2012.15828"
   ]
  },
  {
   "no": 35,
   "cat": "固有名",
   "abbr": "SmolLM",
   "clash": false,
   "en": "（固有名）",
   "ja": "小型 LM のシリーズ",
   "title": null,
   "body": [
    "Hugging Face が2024年に公開した、小型の言語モデル（→2）のシリーズです。最初の SmolLM は135M・360M・1.7B の3つの大きさで、学習データの SmolLM-Corpus も公開しました。SmolLM2（2025年）は、1.7B のモデルを約11兆トークンのデータで学習しています。SmolLM3（2025年）は3B のモデルで、6つの言語と最長128k トークンの文脈に対応します。"
   ],
   "same": null,
   "sources": [
    "Hugging Face, SmolLM - blazingly fast and remarkably powerful, 2024",
    "Ben Allal ほか, SmolLM2: When Smol Goes Big, arXiv:2502.02737",
    "Hugging Face, SmolLM3: smol, multilingual, long-context reasoner, 2025"
   ]
  },
  {
   "no": 36,
   "cat": "固有名",
   "abbr": "ToolLLM",
   "clash": false,
   "en": "（固有名）",
   "ja": "API を使う LLM",
   "title": null,
   "body": [
    "LLM に実在の API（外部のサービスを呼び出す窓口）を使わせるための枠組みです。清華大学などの Qin ら（ICLR 2024）が発表し、データの作成と学習と評価をまとめて扱います。RapidAPI Hub から49分類で16,464個の REST API を集め、ChatGPT で指示データ ToolBench を作りました。これで LLaMA（→32）を微調整したモデルが ToolLLaMA です。"
   ],
   "same": null,
   "sources": [
    "Qin ほか, ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs, ICLR 2024, arXiv:2307.16789"
   ]
  },
  {
   "no": 37,
   "cat": "固有名",
   "abbr": "CALM",
   "clash": true,
   "en": "Confident Adaptive Language Modeling",
   "ja": "計算を省いて高速化",
   "title": "Confident Adaptive Language Modeling（確信度に応じた適応的な言語モデリング）",
   "body": [
    "Google Research の Schuster ら（NeurIPS 2022）が提案した、文章の生成を速くする手法です。トークンごとに、途中の層の予測が十分に確かなら残りの層の計算を省きます（早期終了）。省いても文全体の品質が保たれるよう、打ち切りの基準を統計的に調整します。論文は、最大で3倍の高速化が見込めると報告しています。"
   ],
   "same": "Google の Bansal ら（ICLR 2024）の Composition to Augment Language Models も CALM です。既存の LLM の重みは変えずに、別のモデルとの間にクロスアテンション（互いの内部表現を参照する層）を足して組み合わせます。",
   "sources": [
    "Schuster ほか, Confident Adaptive Language Modeling, NeurIPS 2022, arXiv:2207.07061",
    "Bansal ほか, LLM Augmented LLMs: Expanding Capabilities through Composition, ICLR 2024, arXiv:2401.02412"
   ]
  },
  {
   "no": 38,
   "cat": "固有名",
   "abbr": "AudioLM",
   "clash": false,
   "en": "（固有名）",
   "ja": "音声の続きを生成",
   "title": null,
   "body": [
    "Google Research の Borsos ら（2022年）による、音を生成するしくみです。音を離散的なトークンの列に変え、生成を言語モデルの問題として解きます。長い構造には自己教師ありモデル w2v-BERT 由来の意味トークンを、音質には音声コーデック SoundStream の音響トークンを使います。文字起こしなしで学び、音声の続きを同じ話者の声で生成できたと報告しています。MusicLM（→39）はこの方式を使っています。"
   ],
   "same": null,
   "sources": [
    "Borsos ほか, AudioLM: A Language Modeling Approach to Audio Generation, IEEE/ACM TASLP 31, 2023, arXiv:2209.03143"
   ]
  },
  {
   "no": 39,
   "cat": "固有名",
   "abbr": "MusicLM",
   "clash": false,
   "en": "（固有名）",
   "ja": "文章から音楽を生成",
   "title": null,
   "body": [
    "Google の研究者らが2023年に発表した、文章の説明から音楽を生成するモデルです。数分にわたって一貫した、24kHz の音楽を生成できると報告しています。生成には AudioLM（→38）の多段の自己回帰モデルを使い、文章と音楽の橋渡しには MuLan を使っています。論文は MusicLM という名前を展開していないので、一覧では固有名として扱いました。"
   ],
   "same": null,
   "sources": [
    "Agostinelli ほか, MusicLM: Generating Music From Text, arXiv:2301.11325"
   ]
  },
  {
   "no": 40,
   "cat": "固有名",
   "abbr": "WavLM",
   "clash": false,
   "en": "（固有名）",
   "ja": "音声の事前学習モデル",
   "title": null,
   "body": [
    "Microsoft の研究者らが2021年に発表した、音声の事前学習モデルです。音声には、話者や話の中身など多くの情報が含まれます。WavLM は、これらを扱うさまざまなタスクに使える表現を、ラベルなしの音声から学びます。音声の一部を隠して当てる学習に、雑音を取り除く学習（denoising）を組み合わせました。学習データは9万4千時間です。"
   ],
   "same": null,
   "sources": [
    "Chen ほか, WavLM: Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing, IEEE JSTSP 16(6), 2022, arXiv:2110.13900"
   ]
  },
  {
   "no": 41,
   "cat": "固有名",
   "abbr": "SpiRit-LM",
   "clash": false,
   "en": "（固有名）",
   "ja": "音声と文字を混ぜる LM",
   "title": null,
   "body": [
    "Meta AI などの研究者らが2024年に発表した、テキストと音声を混ぜて扱う基盤モデルです。7B の Llama 2 を土台に、テキストと音声の単位を単語の境目ごとに入れ替えた列を使い、学習を続けました。音の単位だけを使う Base 版と、声の高さと話し方の単位も加えた Expressive 版があります。題名の表記は、TACL（2025年）の版が SpiRit-LM、arXiv の改訂版と公式リポジトリが Spirit LM です。"
   ],
   "same": null,
   "sources": [
    "Nguyen ほか, SpiRit-LM: Interleaved Spoken and Written Language Model, TACL 13, 2025, arXiv:2402.05755",
    "facebookresearch/spiritlm（GitHub）"
   ]
  },
  {
   "no": 42,
   "cat": "固有名",
   "abbr": "SALM",
   "clash": false,
   "en": "Speech-Augmented Language Model",
   "ja": "音声を足した LM",
   "title": "Speech-Augmented Language Model（音声で拡張した言語モデル）",
   "body": [
    "NVIDIA の Chen ら（2023年）が発表した、音声を入力できるようにした言語モデルです。学習で更新しない（凍結した）テキストの LLM に、音声のエンコーダ、アダプタ、LoRA の層を足しています。LoRA は、少しのパラメータだけを学ぶ微調整の方法です。1つのモデルで音声認識と音声翻訳をこなし、それぞれ専用のモデルに並ぶ性能だったと報告しています。"
   ],
   "same": null,
   "sources": [
    "Chen ほか, SALM: Speech-Augmented Language Model with In-Context Learning for Speech Recognition and Translation, ICASSP 2024, arXiv:2310.09424"
   ]
  },
  {
   "no": 43,
   "cat": "固有名",
   "abbr": "LSLM",
   "clash": false,
   "en": "Listening-while-Speaking Language Model",
   "ja": "話しながら聞く LM",
   "title": "Listening-while-Speaking Language Model（話しながら聞く言語モデル）",
   "body": [
    "上海交通大学と ByteDance の研究者らが提案した、話しながら同時に聞ける音声の言語モデルです。論文は、それまでの音声の言語モデル（→2）が交代で話す会話に限られていた点を課題にしました。LSLM は、音声を作る「話す」経路と、実時間で音を受け取る「聞く」経路を持ちます。相手が割り込むと、それを検出して話すのをやめます。"
   ],
   "same": null,
   "sources": [
    "Ma ほか, Language Model Can Listen While Speaking, AAAI 2025, arXiv:2408.02622"
   ]
  },
  {
   "no": 44,
   "cat": "固有名",
   "abbr": "MedLM",
   "clash": false,
   "en": "（固有名）",
   "ja": "Google の医療モデル",
   "title": null,
   "body": [
    "Google Cloud が2023年12月に発表した、医療向けに調整した基盤モデルのファミリーです。Google Research の医療向け LLM、Med-PaLM 2 をもとにしています。用途は質問への回答と文書の要約の下書きで、診断や治療には使えないとされていました。公式ドキュメントによると、2025年9月29日以降は利用できません。"
   ],
   "same": null,
   "sources": [
    "Google Cloud Blog, MedLM: generative AI fine-tuned for the healthcare industry, 2023年12月13日",
    "Google Cloud, MedLM models overview"
   ]
  },
  {
   "no": 45,
   "cat": "固有名",
   "abbr": "vLLM",
   "clash": false,
   "en": "（固有名）",
   "ja": "LLM の推論エンジン",
   "title": null,
   "body": [
    "LLM の推論を高速に提供するためのオープンソースのライブラリで、UC Berkeley で開発が始まりました。中核の PagedAttention は、OS の仮想メモリとページングに着想を得た注意機構です。v の意味を尋ねた GitHub の issue に、開発チームのメンバーは「もとは vCPU と同じ virtual（仮想）の v」と答えました。論文は、同じ遅延で既存のシステムの2〜4倍のスループットを報告しています。"
   ],
   "same": null,
   "sources": [
    "Kwon ほか, Efficient Memory Management for Large Language Model Serving with PagedAttention, arXiv:2309.06180",
    "vllm-project/vllm, README",
    "vllm-project/vllm, Issue #835 \"vLLM full name\", 2023"
   ]
  },
  {
   "no": 46,
   "cat": "親戚",
   "abbr": "RM",
   "clash": false,
   "en": "Reward Model",
   "ja": "報酬モデル",
   "title": "Reward Model（報酬モデル）",
   "body": [
    "応答の良し悪しを点数にするモデルです。人間の好みに合わせて LLM を調整する RLHF（人間のフィードバックによる強化学習）で使います。InstructGPT では、人が複数の応答を比べた結果から RM を学習しました。その点数を報酬にして、LLM を強化学習で微調整しています。源流には、人の比較から報酬を推定した Christiano ら（2017年）の研究があります。"
   ],
   "same": null,
   "sources": [
    "Ouyang ほか, Training language models to follow instructions with human feedback, NeurIPS 2022, arXiv:2203.02155",
    "Christiano ほか, Deep Reinforcement Learning from Human Preferences, NIPS 2017, arXiv:1706.03741"
   ]
  },
  {
   "no": 47,
   "cat": "親戚",
   "abbr": "PRM",
   "clash": false,
   "en": "Process Reward Model",
   "ja": "過程報酬モデル",
   "title": "Process Reward Model（過程報酬モデル）",
   "body": [
    "推論の途中の各ステップが正しいかを採点する報酬モデル（→46）です。元の論文では、process-supervised reward model（過程を監督する報酬モデル）と呼ばれています。Lightman ら（2023年）は数学の問題集 MATH で、過程を監督する方法が、結果だけを監督する方法（→48）を大きく上回ったと報告しました。学習に使った、80万件のステップごとの正誤ラベル PRM800K も公開しています。"
   ],
   "same": null,
   "sources": [
    "Lightman ほか, Let's Verify Step by Step, ICLR 2024, arXiv:2305.20050",
    "Uesato ほか, arXiv:2211.14275"
   ]
  },
  {
   "no": 48,
   "cat": "親戚",
   "abbr": "ORM",
   "clash": true,
   "en": "Outcome Reward Model",
   "ja": "結果報酬モデル",
   "title": "Outcome Reward Model（結果報酬モデル）",
   "body": [
    "推論の最終結果だけを見て採点する報酬モデルで、PRM（→47）と対になります。ORM という略語は、Uesato ら（2022年）が outcome-supervised RM の略として使っています。原型は、解答の正しさを判定する verifier を学習した Cobbe ら（2021年）の研究です。"
   ],
   "same": "ソフトウェア開発のオブジェクト関係マッピング（Object-Relational Mapping）とぶつかります。",
   "sources": [
    "Uesato ほか, Solving math word problems with process- and outcome-based feedback, arXiv:2211.14275",
    "Cobbe ほか, Training Verifiers to Solve Math Word Problems, arXiv:2110.14168",
    "Hibernate ORM"
   ]
  },
  {
   "no": 49,
   "cat": "親戚",
   "abbr": "LRM",
   "clash": true,
   "en": "Large Reasoning Model",
   "ja": "大規模推論モデル",
   "title": "Large Reasoning Model（大規模推論モデル）",
   "body": [
    "答える前に長い思考の連鎖（chain of thought）を生成して推論する LLM の呼び名です。OpenAI o1 は、思考の連鎖で推論するよう、大規模な強化学習で訓練されています。DeepSeek-R1 も同じ種類のモデルです。ただし両社は自社のモデルを reasoning model と呼んでおり、LRM は主に研究者側の呼び方です。"
   ],
   "same": "1枚の画像から3次元の形を復元する Large Reconstruction Model（2024年）も LRM です。",
   "sources": [
    "OpenAI o1 System Card, arXiv:2412.16720",
    "DeepSeek-R1, arXiv:2501.12948（Nature 645, 2025）",
    "Valmeekam ほか, arXiv:2409.13373",
    "Hong ほか, LRM: Large Reconstruction Model for Single Image to 3D, ICLR 2024, arXiv:2311.04400"
   ]
  },
  {
   "no": 50,
   "cat": "親戚",
   "abbr": "VLA",
   "clash": false,
   "en": "Vision-Language-Action Model",
   "ja": "視覚・言語・行動",
   "title": "Vision-Language-Action Model（視覚・言語・行動モデル）",
   "body": [
    "カメラの映像と言葉の指示を受け取り、ロボットの行動を出力するモデルです。Google DeepMind の RT-2（2023年）の論文は、このような種類のモデルを VLA（vision-language-action model）と名づけて定義しました。視覚言語モデル（→13）を、ロボットの制御に転用できることを示しています。その後、7B のオープンな OpenVLA や、Physical Intelligence の π0 が続きました。"
   ],
   "same": null,
   "sources": [
    "Brohan ほか, RT-2, CoRL 2023, arXiv:2307.15818",
    "Google DeepMind Blog, 2023年7月28日",
    "Kim ほか, OpenVLA, arXiv:2406.09246",
    "Black ほか, π0, arXiv:2410.24164"
   ]
  },
  {
   "no": 51,
   "cat": "親戚",
   "abbr": "LAM",
   "clash": true,
   "en": "Large Action Model",
   "ja": "大規模行動モデル",
   "title": "Large Action Model（大規模行動モデル）",
   "body": [
    "文章を返すだけでなく、操作や行動を生成して実行するためのモデルです。Rabbit は2024年に発表した端末 r1 の OS を、LAM の上に作ったと説明しました。Rabbit 自身の説明では、人がインターフェースを操作する様子から学ぶモデルです。研究の側でも、AI エージェント向けの Salesforce の xLAM などが発表されています。"
   ],
   "same": "音を扱う大規模モデル（Large Audio Model）も LAM と略されます。",
   "sources": [
    "Rabbit, Introducing r1, 2024",
    "Zhang ほか, xLAM, arXiv:2409.03215",
    "Wang ほか, Large Action Models: From Inception to Implementation, arXiv:2412.10047",
    "Li ほか, Mind the Gap! Static and Interactive Evaluations of Large Audio Models, arXiv:2502.15919"
   ]
  },
  {
   "no": 52,
   "cat": "親戚",
   "abbr": "LBM",
   "clash": true,
   "en": "Large Behavior Model",
   "ja": "ロボットの行動モデル",
   "title": "Large Behavior Model（ロボットの大規模な行動モデル）",
   "body": [
    "ロボットの動作を生み出す大規模なモデルを指す、Toyota Research Institute（TRI）の呼び名です。TRI 自身の説明では、大規模言語モデル（→1）のロボット版にあたります。TRI は2023年、人の実演から動作を学ぶ Diffusion Policy を、LBM への一歩として発表しました。2025年の論文は、多くのタスクをこなす方策（動作を決めるモデル）を LBM と呼んで評価しています。"
   ],
   "same": "流体の数値計算に使う格子ボルツマン法（Lattice Boltzmann Method）も LBM と略されます。",
   "sources": [
    "TRI, Toyota Research Institute Unveils Breakthrough in Teaching Robots New Behaviors, 2023",
    "TRI LBM Team ほか, A Careful Examination of Large Behavior Models for Multitask Dexterous Manipulation, arXiv:2507.05331",
    "Kummerländer ほか, OpenLB User Guide, arXiv:2307.11752"
   ]
  },
  {
   "no": 53,
   "cat": "親戚",
   "abbr": "LCM",
   "clash": true,
   "en": "Large Concept Model",
   "ja": "大規模概念モデル",
   "title": "Large Concept Model（大規模概念モデル）",
   "body": [
    "Meta の FAIR の研究者らが2024年に発表した、単語ではなく文の単位で次を予測するモデルです。論文は、言語や音声・文字の区別によらない高い水準の意味を「概念（concept）」と呼び、実装では1つの文を1つの概念として扱いました。文は、200言語に対応する文埋め込みの空間 SONAR のベクトルで表します。"
   ],
   "same": "画像生成を速くする Latent Consistency Model（潜在一貫性モデル）も LCM です。拡散モデル（→57）の生成を2〜4ステップに縮めます。分野の外では、最小公倍数（Least Common Multiple）が LCM です。",
   "sources": [
    "LCM team ほか, Large Concept Models: Language Modeling in a Sentence Representation Space, arXiv:2412.08821",
    "Luo ほか, Latent Consistency Models, arXiv:2310.04378"
   ]
  },
  {
   "no": 54,
   "cat": "親戚",
   "abbr": "LWM",
   "clash": true,
   "en": "Large World Model",
   "ja": "大規模世界モデル",
   "title": "Large World Model（大規模世界モデル）",
   "body": [
    "UC Berkeley の研究者らが2024年に発表した、長い動画と文章を扱うモデルです。言語モデル LLaMA-2 7B を土台に、扱える文脈を段階的に100万（1M）トークンまで広げました。長い系列の計算には、Blockwise RingAttention という手法を使っています。論文は、先行の世界モデル（world model）の研究にならって名づけたと書いています。"
   ],
   "same": "無線通信の Large Wireless Model も LWM と略されます。電波の伝わり方（チャネル）のデータで事前学習した基盤モデルです。",
   "sources": [
    "Liu ほか, World Model on Million-Length Video And Language With Blockwise RingAttention, ICLR 2025, arXiv:2402.08268",
    "Alikhani ほか, Large Wireless Model (LWM), arXiv:2411.08872"
   ]
  },
  {
   "no": 55,
   "cat": "親戚",
   "abbr": "LVM",
   "clash": true,
   "en": "Large Vision Model",
   "ja": "大規模視覚モデル",
   "title": "Large Vision Model（大規模視覚モデル）",
   "body": [
    "言葉のデータを使わずに、画像だけから学ぶ大規模な視覚モデルです。UC Berkeley などの Bai ら（2023年）は、画像や動画と、セグメンテーションや深度の注釈を「視覚の文（visual sentences）」という共通の形にしました。各画像をトークンに変え、言語モデルと同じく次のトークンを予測して学びます。データは4200億トークン、モデルは最大3B パラメータです。"
   ],
   "same": "Linux でディスクの領域をまとめて管理する Logical Volume Manager も LVM です。",
   "sources": [
    "Bai ほか, Sequential Modeling Enables Scalable Learning for Large Vision Models, CVPR 2024, arXiv:2312.00785",
    "Red Hat, Configuring and managing logical volumes（RHEL 9）"
   ]
  },
  {
   "no": 56,
   "cat": "親戚",
   "abbr": "SSM",
   "clash": false,
   "en": "State Space Model",
   "ja": "状態空間モデル",
   "title": "State Space Model（状態空間モデル）",
   "body": [
    "長い系列で重くなる Transformer の計算を補う候補として研究されてきた、系列モデルの一種です。Gu と Dao の Mamba（2023年）は、入力に応じてパラメータが変わる selective SSM を提案しました。計算量は系列の長さに比例し、推論のスループットは Transformer の5倍だと報告しています。Transformer と Mamba の層を交互に重ねた Jamba のような混成モデルもあります。"
   ],
   "same": null,
   "sources": [
    "Gu, Dao, Mamba: Linear-Time Sequence Modeling with Selective State Spaces, arXiv:2312.00752",
    "Lieber ほか, Jamba: A Hybrid Transformer-Mamba Language Model, arXiv:2403.19887"
   ]
  },
  {
   "no": 57,
   "cat": "親戚",
   "abbr": "LDM",
   "clash": false,
   "en": "Latent Diffusion Model",
   "ja": "潜在拡散モデル",
   "title": "Latent Diffusion Model（潜在拡散モデル）",
   "body": [
    "拡散モデルを、画像そのものではなく潜在空間で動かす方式です。潜在空間とは、学習済みのオートエンコーダが画像を圧縮した表現の空間です。Rombach ら（CVPR 2022）は、限られた計算資源でも品質を保って学習できるよう、この方式を提案しました。画像生成の Stable Diffusion は、公式リポジトリで latent diffusion model と説明されています。"
   ],
   "same": null,
   "sources": [
    "Rombach ほか, High-Resolution Image Synthesis with Latent Diffusion Models, CVPR 2022, arXiv:2112.10752",
    "CompVis/stable-diffusion（GitHub）"
   ]
  }
 ]
};
