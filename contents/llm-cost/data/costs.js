/* LLM の学習と推論のコストを下げる手法のデータ（正本）。
   research/llm-cost-2026/build_costs.py が sources/*.json と ja/*.json から生成する。直接編集しない。 */
window.LLM_COST = {
 "asOf": "2026-11-27",
 "sections": [
  {
   "id": "train",
   "name": "学習のコストを下げる"
  },
  {
   "id": "model",
   "name": "推論のためにモデルを軽くする"
  },
  {
   "id": "serve",
   "name": "推論の配信と使い方を工夫する"
  }
 ],
 "groups": {
  "train": [
   {
    "id": "precision",
    "name": "数値の精度を下げる"
   },
   {
    "id": "memory",
    "name": "メモリを節約する"
   },
   {
    "id": "parallelism",
    "name": "並列化と通信を工夫する"
   },
   {
    "id": "kernel",
    "name": "計算カーネルを速くする"
   },
   {
    "id": "architecture",
    "name": "モデルの形を変える"
   },
   {
    "id": "data",
    "name": "データと規模の決め方を工夫する"
   },
   {
    "id": "distillation",
    "name": "大きいモデルから知識を移す"
   },
   {
    "id": "peft",
    "name": "一部の重みだけを学習する"
   },
   {
    "id": "rl",
    "name": "事後学習のやり方を変える"
   },
   {
    "id": "optimizer",
    "name": "最適化手法を変える"
   },
   {
    "id": "other",
    "name": "その他"
   }
  ],
  "model": [
   {
    "id": "quantization",
    "name": "量子化で数値を小さくする"
   },
   {
    "id": "pruning",
    "name": "重みを間引く"
   },
   {
    "id": "distillation",
    "name": "小さいモデルに知識を移す"
   },
   {
    "id": "attention",
    "name": "注意機構と KV キャッシュを小さくする"
   },
   {
    "id": "architecture",
    "name": "モデルの形を変える"
   },
   {
    "id": "other",
    "name": "その他"
   }
  ],
  "serve": [
   {
    "id": "memory",
    "name": "KV キャッシュを管理する"
   },
   {
    "id": "batching",
    "name": "まとめて処理する"
   },
   {
    "id": "kernel",
    "name": "計算カーネルを速くする"
   },
   {
    "id": "speculative",
    "name": "先読みで生成を速くする"
   },
   {
    "id": "caching",
    "name": "計算結果を使い回す"
   },
   {
    "id": "disaggregation",
    "name": "処理を分けて配置する"
   },
   {
    "id": "api",
    "name": "API の割引を使う"
   },
   {
    "id": "routing",
    "name": "モデルを振り分ける"
   },
   {
    "id": "prompt",
    "name": "入力を減らす"
   },
   {
    "id": "reasoning",
    "name": "思考量を調整する"
   },
   {
    "id": "trend",
    "name": "価格の推移"
   },
   {
    "id": "other",
    "name": "その他"
   }
  ]
 },
 "stages": [
  {
   "id": "pretrain",
   "name": "事前学習"
  },
  {
   "id": "finetune",
   "name": "追加学習"
  },
  {
   "id": "inference",
   "name": "推論"
  }
 ],
 "reduces": [
  {
   "id": "compute",
   "name": "計算"
  },
  {
   "id": "memory",
   "name": "メモリ"
  },
  {
   "id": "comm",
   "name": "通信・帯域"
  },
  {
   "id": "time",
   "name": "時間"
  },
  {
   "id": "tokens",
   "name": "トークン"
  },
  {
   "id": "cost",
   "name": "費用"
  }
 ],
 "places": [
  {
   "id": "pretrain-compute",
   "name": "学習の計算量"
  },
  {
   "id": "pretrain-memory",
   "name": "学習のメモリ"
  },
  {
   "id": "pretrain-comm",
   "name": "分散学習の通信"
  },
  {
   "id": "pretrain-ops",
   "name": "大規模な学習の実際（事前学習と事後学習）"
  },
  {
   "id": "inference-prefill-decode",
   "name": "推論の2つの段階"
  },
  {
   "id": "inference-kv",
   "name": "KV キャッシュ"
  },
  {
   "id": "inference-attention",
   "name": "注意機構の計算"
  },
  {
   "id": "inference-tokens",
   "name": "推論モデルとトークン"
  },
  {
   "id": "energy",
   "name": "電力と環境"
  }
 ],
 "anatomy": [
  {
   "id": "A01",
   "place": "pretrain-compute",
   "title": "学習の計算量はパラメータ数とトークン数の積の6倍",
   "body": "密な Transformer の事前学習では、1トークンあたりの計算量を 6N FLOPs（浮動小数点演算の回数、N はパラメータ数）と見積もる。逆伝播（誤差から勾配を求める計算）が順伝播（入力から出力を計算する処理）の約2倍かかるためだ。",
   "numbers": "C ≈ 6N FLOPs／トークン（学習全体では 6ND、D は学習トークン数）・逆伝播 ≈ 順伝播の2倍",
   "caveat": "N は埋め込み層のパラメータを含まない。文脈長に依存するアテンションの項は省いており、d_model ≫ n_ctx/12 のときに成り立つ。Kaplan らは C = 6NBS（バッチ × ステップ数 ＝ トークン数）と書く。",
   "quote": "Accounting for the backwards pass (approximately twice the compute as the forwards pass), we then deﬁne the estimated non-embedding compute as C ≈6N ﬂoating point operators per training token.",
   "url": "https://arxiv.org/abs/2001.08361",
   "source": "Scaling Laws for Neural Language Models (Kaplan et al.)",
   "tier": "primary"
  },
  {
   "id": "A02",
   "place": "pretrain-compute",
   "title": "順伝播1回の計算量は1トークンあたり約 2N",
   "body": "順伝播の計算量は1トークンあたり約 2N FLOPs に、文脈長に比例するアテンションの項を足したものだ。2倍になるのは行列積が積和演算（掛け算と足し算の組）でできているためだ。",
   "numbers": "C_forward ≈ 2N + 2·n_layer·n_ctx·d_model",
   "caveat": "この 2N は推論で1トークンを処理または生成するときの計算量の基礎にもなる。アテンションの項は文脈長とともに増える。",
   "quote": "Evaluating a forward pass of the Transformer involves roughly Cforward ≈2N + 2nlayernctxdmodel (2.2) add-multiply operations, where the factor of two comes from the multiply-accumulate operation used in matrix multiplication.",
   "url": "https://arxiv.org/abs/2001.08361",
   "source": "Scaling Laws for Neural Language Models (Kaplan et al.)",
   "tier": "primary"
  },
  {
   "id": "A03",
   "place": "pretrain-compute",
   "title": "最適な学習ではモデルとデータを同じ割合で増やす",
   "body": "Chinchilla の研究は、計算量に対して最適に学習するにはモデルサイズと学習トークン数を同じ割合で増やすべきだと示した。700億パラメータの Chinchilla は1.4兆トークンで学習した。",
   "numbers": "700億パラメータ・1.4兆トークン（1パラメータあたり約20トークン）",
   "caveat": "「1パラメータあたり20トークン」は論文の標語ではなく 1.4兆 ÷ 700億 で求めた値だ。最近のモデルは推論コストを下げるため、あえてこれより多いトークンで学習する（例：Llama 3 8B は15兆トークン）。",
   "quote": "for compute-optimal training, the model size and the number of training tokens should be scaled equally: for every doubling of model size the number of training tokens should also be doubled.",
   "url": "https://arxiv.org/abs/2203.15556",
   "source": "Training Compute-Optimal Large Language Models (Hoffmann et al., Chinchilla)",
   "tier": "primary"
  },
  {
   "id": "A04",
   "place": "pretrain-memory",
   "title": "Adam による混合精度学習は1パラメータに16バイトを使う",
   "body": "混合精度学習（重みと勾配を16ビット、更新用の値を32ビットで持つ方式）で Adam を使うと、モデル状態だけで1パラメータあたり16バイト必要だ。内訳は fp16 の重み2バイト・fp16 の勾配2バイト・fp32 のオプティマイザ状態（マスター重み・モーメンタム・分散）12バイトである。",
   "numbers": "2Ψ + 2Ψ + 12Ψ ＝ 16Ψ バイト（Ψ はパラメータ数）・GPT-2（15億パラメータ）で 24 GB 以上（fp16 の重みだけなら 3 GB）",
   "caveat": "混合精度の Adam では K ＝ 12。アクティベーションや一時バッファ・メモリの断片化は含まない。700億パラメータのモデルならモデル状態だけで約 1.1 TB になる（70e9 × 16 バイトからの計算値）。",
   "quote": "In total, this results in 2Ψ + 2Ψ + KΨ = 16Ψ bytes of memory requirement. For a model such as GPT-2 with 1.5 Billion parameters, this leads to a memory requirement of at least 24 GB",
   "url": "https://arxiv.org/abs/1910.02054",
   "source": "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models (Rajbhandari et al.)",
   "tier": "primary"
  },
  {
   "id": "A05",
   "place": "pretrain-memory",
   "title": "アクティベーションのメモリはモデル状態を上回ることがある",
   "body": "アクティベーション（逆伝播のために保存しておく各層の中間計算結果）はモデル状態より大きくなりうる。15億パラメータの GPT-2 を系列長 1K・バッチサイズ32で学習すると約 60 GB が必要だ。",
   "numbers": "約 60 GB（GPT-2 15億パラメータ・系列長 1K・バッチ 32）",
   "caveat": "アクティベーションのチェックポイント（保存せずに再計算する方法）を使わない場合の値。ZeRO の論文は一時的な結合バッファ（15億パラメータで fp32 の 6 GB）やメモリの断片化も消費要因に挙げる。",
   "quote": "the 1.5B parameter GPT-2 model trained with sequence length of 1K and batch size of 32 requires about 60 GB of memory",
   "url": "https://arxiv.org/abs/1910.02054",
   "source": "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models (Rajbhandari et al.)",
   "tier": "primary"
  },
  {
   "id": "A06",
   "place": "pretrain-memory",
   "title": "1層分のアクティベーションには系列長の2乗で増える項がある",
   "body": "Transformer の1層あたりのアクティベーションは sbh(34 + 5as/h) バイトになる。アテンションスコア（トークン同士の関連度の表）にあたる 5as/h の項は系列長の2乗で増える。",
   "numbers": "1層あたり s·b·h·(34 + 5·a·s/h) バイト（s：系列長・b：マイクロバッチ（1回に流す小分けのバッチ）の大きさ・h：隠れ次元・a：ヘッド数）",
   "caveat": "16ビットのアクティベーションでモデル並列なしを仮定する。テンソル並列とシーケンス並列を併用すると t（テンソル並列の数）で割った値になる。",
   "quote": "the memory required to store the activations for a single layer of a transformer network is: Activations memory per layer = sbh  34 + 5as h  .",
   "url": "https://arxiv.org/abs/2205.05198",
   "source": "Reducing Activation Recomputation in Large Transformer Models (Korthikanti et al.)",
   "tier": "primary"
  },
  {
   "id": "A07",
   "place": "pretrain-memory",
   "title": "再計算はメモリを減らす代わりに実行時間を30〜40%延ばす",
   "body": "アクティベーションを保存せず逆伝播のときに計算し直す完全な再計算は、実行時間を30〜40%増やす。選択的な再計算とシーケンス並列を組み合わせると、アクティベーションのメモリは5分の1になり余分な時間の90%超を削れる。",
   "numbers": "完全な再計算で実行時間30〜40%増・アクティベーションのメモリ5分の1・余分な時間を90%超削減・5,300億パラメータ（A100 2,240基）で MFU（理論性能のうち学習に使えた割合）54.2%（従来 42.1%）",
   "caveat": "要旨では「アクティベーションのメモリを5分の1にし、再計算による余分な実行時間を90%超減らす」とする。5,300億と1兆パラメータの例では、完全な再計算の余分な時間36%に対し提案手法では2%だった。",
   "quote": "In our training runs, we observe 30 −40% execution time overhead when full activation recomputation is used.",
   "url": "https://arxiv.org/abs/2205.05198",
   "source": "Reducing Activation Recomputation in Large Transformer Models (Korthikanti et al.)",
   "tier": "primary"
  },
  {
   "id": "A08",
   "place": "pretrain-ops",
   "title": "PaLM はハードウェア性能の46.2%を学習に使えた",
   "body": "PaLM（5,400億パラメータ）は TPU v4（Google の機械学習用チップ）6,144基で MFU 46.2% を達成した。MFU（ハードウェアの理論性能のうち実際に学習に使えた割合）は、それ以前の大規模モデルでは21〜33%にとどまっていた。",
   "numbers": "PaLM：MFU 46.2%（HFU 57.8%）・GPT-3：21.3%・Gopher：32.5%・MT-NLG：30.2%",
   "caveat": "MFU は再計算の FLOPs を含まず、HFU（再計算分も含めたハードウェアの利用率）は含む。GPT-3・Gopher・MT-NLG の値は PaLM の著者が計算したもの（Table 3）。",
   "quote": "achieving very high eﬃciency of 46.2% in model FLOPs utilization (observed throughput relative to theoretical max throughput) and 57.8% in hardware FLOPs utilization.",
   "url": "https://arxiv.org/abs/2204.02311",
   "source": "PaLM: Scaling Language Modeling with Pathways (Chowdhery et al.)",
   "tier": "primary"
  },
  {
   "id": "A09",
   "place": "pretrain-compute",
   "title": "Llama 3 405B は 3.8×10^25 FLOPs で事前学習した",
   "body": "Meta の Llama 3 405B（4,050億パラメータ）は15.6兆トークンで事前学習し、計算量は 3.8×10^25 FLOPs だった。Llama 2 の最大モデルのほぼ50倍にあたり、最大 16K 基の H100 を使った。",
   "numbers": "3.8×10^25 FLOPs・4,050億パラメータ・15.6兆トークン・H100（700 W・80 GB HBM3）最大 16K 基",
   "caveat": "6 × 4,050億 × 15.6兆 ≈ 3.79×10^25 となり 6ND の見積もりと一致する（換算による確認）。",
   "quote": "our flagship language model was pre-trained using 3.8 × 1025 FLOPs, almost 50× more than the largest version of Llama 2. Specifically, we pre-trained a flagship model with 405B trainable parameters on 15.6T text tokens.",
   "url": "https://arxiv.org/abs/2407.21783",
   "source": "The Llama 3 Herd of Models (Llama Team, AI @ Meta)",
   "tier": "primary"
  },
  {
   "id": "A10",
   "place": "pretrain-ops",
   "title": "Llama 3 405B の MFU は並列構成によって38〜43%",
   "body": "Llama 3 405B の BF16 での MFU は並列の構成によって38〜43%だった。系列長 131K の学習ではコンテキスト並列（1本の長い系列を複数の GPU に分ける方式）を使い38%に下がった。",
   "numbers": "43%（8,192 GPU）・41%（16,384 GPU・DP ＝ 128）・38%（16,384 GPU・系列長 131,072・CP ＝ 16）・1 GPU あたり 380〜430 TFLOPs",
   "caveat": "DP はデータ並列（モデルの複製ごとに別のデータを処理する方式）の数で、CP はコンテキスト並列の数。値は論文の Table 4 による。43%から41%への低下は DP グループあたりのバッチサイズが小さくなったためだと論文は説明する。",
   "quote": "we achieve an overall BF16 Model FLOPs Utilization (MFU; Chowdhery et al. (2023)) of 38-43% for the configurations shown in Table 4.",
   "url": "https://arxiv.org/abs/2407.21783",
   "source": "The Llama 3 Herd of Models (Llama Team, AI @ Meta)",
   "tier": "primary"
  },
  {
   "id": "A11",
   "place": "pretrain-ops",
   "title": "54日間の事前学習で466回のジョブ中断が起きた",
   "body": "Llama 3 405B の事前学習では、54日間に466回のジョブ中断があり419回は予期しないものだった。約78%はハードウェアが原因だったが、実際に学習が進んだ時間は90%を超えた。",
   "numbers": "54日間に中断466回（計画的47回・予期しない419回）・約78%がハードウェア起因・GPU の問題 58.7%・実効学習時間 90%超",
   "caveat": "同期型の学習では GPU が1基故障しただけでジョブ全体の再起動が必要になりうると論文は述べる。",
   "quote": "During a 54-day snapshot period of pre-training, we experienced a total of 466 job interruptions. Of these, 47 were planned interruptions",
   "url": "https://arxiv.org/abs/2407.21783",
   "source": "The Llama 3 Herd of Models (Llama Team, AI @ Meta)",
   "tier": "primary"
  },
  {
   "id": "A12",
   "place": "energy",
   "title": "学習の一斉停止で電力が数十メガワット揺れる",
   "body": "16K GPU 規模の学習では、チェックポイント保存や集団通信（全 GPU が一斉に行うデータのやり取り）・ジョブの開始と停止で全体が同時に止まる。そのたびにデータセンターの消費電力が数十メガワット単位で瞬時に変動し、電力網の限界に迫る。",
   "numbers": "数十 MW 規模の電力変動",
   "caveat": "運用上のコストを定性的に示した記述で、消費エネルギーの総量ではない。",
   "quote": "it can result in instant fluctuations of power consumption across the data center on the order of tens of megawatts, stretching the limits of the power grid.",
   "url": "https://arxiv.org/abs/2407.21783",
   "source": "The Llama 3 Herd of Models (Llama Team, AI @ Meta)",
   "tier": "primary"
  },
  {
   "id": "A13",
   "place": "pretrain-ops",
   "title": "Llama 3.1 の学習は合計3,930万 GPU 時間",
   "body": "Llama 3.1 の学習には H100-80GB で累計3,930万 GPU 時間を使った。内訳は 405B が3,084万・70B が700万・8B が146万で、ロケーション基準の排出量は 11,390 tCO2eq（CO2 換算トン）だった。",
   "numbers": "合計 3,930万 GPU 時間（405B：3,084万・70B：700万・8B：146万）・11,390 tCO2eq（ロケーション基準）・0 tCO2eq（マーケット基準）",
   "caveat": "論文ではなく Meta 公式のモデルカードの値。各モデルの学習に要した GPU 時間の合計とされるが、検証実験や事後学習を含むかどうかは明記されていない。H100 の TDP は 700 W。",
   "quote": "Training utilized a cumulative of 39.3M GPU hours of computation on H100-80GB (TDP of 700W) type hardware",
   "url": "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md",
   "source": "Llama 3.1 Model Card (meta-llama/llama-models, GitHub)",
   "tier": "primary"
  },
  {
   "id": "A14",
   "place": "pretrain-ops",
   "title": "DeepSeek-V3 の学習全体は278.8万 H800 GPU 時間",
   "body": "DeepSeek-V3 は MoE（入力ごとに一部のエキスパートだけを動かす構造）で、総パラメータ6,710億のうち1トークンあたり370億を使う。学習全体は278.8万 H800 GPU 時間で、1時間2ドルで借りる前提なら557.6万ドルだ。",
   "numbers": "事前学習 266.4万＋文脈長の拡張 11.9万＋事後学習 0.5万＝278.8万 H800 GPU 時間・1時間2ドルで557.6万ドル・1兆トークンあたり18万 GPU 時間（H800 2,048基で3.7日）・14.8兆トークン",
   "caveat": "1時間2ドルは想定のレンタル価格で、実際の設備投資額ではない。アーキテクチャ・アルゴリズム・データに関する事前の研究や検証実験の費用は含まない。最終の学習のうち事前学習が約96%・事後学習が約0.2%を占める（換算値）。",
   "quote": "Combined with 119K GPU hours for the context length extension and 5K GPU hours for post-training, DeepSeek-V3 costs only 2.788M GPU hours for its full training. Assuming the rental price of the H800 GPU is $2 per GPU hour, our total training costs amount to only $5.576M.",
   "url": "https://arxiv.org/abs/2412.19437",
   "source": "DeepSeek-V3 Technical Report (DeepSeek-AI)",
   "tier": "primary"
  },
  {
   "id": "A15",
   "place": "pretrain-ops",
   "title": "DeepSeek-R1 の強化学習は14.7万 H800 GPU 時間",
   "body": "DeepSeek-R1 は DeepSeek-V3 を土台に、推論能力を伸ばす強化学習（報酬をもとにモデルを改善する学習）を加えた。この事後学習は約14.7万 H800 GPU 時間で、1時間2ドルの前提で約29.4万ドルにあたる。",
   "numbers": "R1-Zero 10.1万＋SFT（正解例を使う教師あり学習）用データの作成 0.5万＋R1 4.1万＝14.7万 H800 GPU 時間（約29.4万ドル）",
   "caveat": "1時間2ドルは想定のレンタル価格。土台の V3 の費用は含まない。引用は論文の表7の見出しと各行の値をつないだもの。R1-Zero は H800 64×8基で約198時間学習した。V3 の最終学習と比べると強化学習の事後学習は約5%にあたる（換算値）。",
   "quote": "Training costs of DeepSeek-R1, assuming the rental price of H800 is $2 per GPU hour. ... 101K 5K 41K 147K in USD $202K $10K $82K $294K",
   "url": "https://arxiv.org/abs/2501.12948",
   "source": "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning (DeepSeek-AI), arXiv v2",
   "tier": "primary"
  },
  {
   "id": "A16",
   "place": "pretrain-comm",
   "title": "MoE の学習では通信が計算と同じくらい重くなる",
   "body": "DeepSeek-V3 ではノードをまたぐエキスパート並列（エキスパートを別々の GPU に置く方式）の通信が大きく、計算と通信の比がおよそ1対1になった。これを DualPipe という計算と通信を重ねる手順で隠した。",
   "numbers": "計算：通信 ≈ 1：1（重ね合わせる前）",
   "caveat": "MoE（入力ごとに一部のエキスパートだけを動かす構造）に特有の all-to-all 通信（全 GPU が互いにデータを送り合う方式）による。MoE の学習では通信が計算と同じ規模になりうることを示す例。",
   "quote": "the communication overhead introduced by cross-node expert parallelism results in an inefficient computation-to-communication ratio of approximately 1:1.",
   "url": "https://arxiv.org/abs/2412.19437",
   "source": "DeepSeek-V3 Technical Report (DeepSeek-AI)",
   "tier": "primary"
  },
  {
   "id": "A17",
   "place": "pretrain-comm",
   "title": "データ並列では毎ステップでパラメータ数の2倍を通信する",
   "body": "標準的なデータ並列（モデルの複製ごとに別のデータを処理する方式）では、毎ステップ勾配を all-reduce（全 GPU の値を集計して全員に配る通信）する。reduce-scatter と all-gather の組で1ステップあたり約 2Ψ 要素のデータが動く。",
   "numbers": "1ステップあたり 2Ψ のデータ移動（Ψ はパラメータ数）",
   "caveat": "リング型やパイプライン型の集団通信を使ったときの GPU 1基あたりの量。ZeRO のステージ1と2は同じ量で、ステージ3は 3Ψ（1.5倍）に増える。",
   "quote": "Therefore, the standard DP incurs 2Ψ data movement during each training step.",
   "url": "https://arxiv.org/abs/1910.02054",
   "source": "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models (Rajbhandari et al.)",
   "tier": "primary"
  },
  {
   "id": "A18",
   "place": "pretrain-comm",
   "title": "テンソル並列は各層で4回の all-reduce を行う",
   "body": "テンソル並列（1つの層の行列を複数の GPU に分けて計算する方式）は、各層で順伝播に2回・逆伝播に2回の all-reduce が要る。通信量が大きいため NVLink（GPU 同士の高速な接続）でつながったサーバーの中に収める。",
   "numbers": "1層・1デバイス・1マイクロバッチあたり 8·b·s·h·(t−1)/t（t はテンソル並列の数）",
   "caveat": "パイプライン並列は隣り合うステージ間の1対1の通信で済み、1マイクロバッチあたり bsh と安い。",
   "quote": "tensors of total size 𝑏𝑠ℎneed to be all-reduced among 𝑡model replicas twice each in the forward and backward pass for each layer, leading to a total communication of 8𝑏𝑠ℎ  𝑡−1 𝑡  per layer per device",
   "url": "https://arxiv.org/abs/2104.04473",
   "source": "Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM (Narayanan et al.)",
   "tier": "primary"
  },
  {
   "id": "A19",
   "place": "pretrain-comm",
   "title": "パイプライン並列ではバブルと呼ぶ待ち時間が生じる",
   "body": "パイプライン並列（モデルを層ごとに区切って GPU に割り当てる方式）では、GPU が待たされるバブル（パイプラインの空き時間）が生じる。その割合は (p−1)/m で、インターリーブ方式ではモデルの分割数 v の分だけ小さくなる。",
   "numbers": "バブルの割合 ＝ (p−1)/m（p：ステージ数・m：マイクロバッチ数）・インターリーブ方式：(1/v)·(p−1)/m",
   "caveat": "m ≫ p が必要で、そのぶんアクティベーションのメモリが増える。インターリーブ方式は通信を増やす。",
   "quote": "Therefore, the fraction of ideal computation time spent in the pipeline bubble is: Bubble time fraction (pipeline bubble size) = 𝑡𝑝𝑏 𝑡𝑖𝑑 = 𝑝−1 𝑚 .",
   "url": "https://arxiv.org/abs/2104.04473",
   "source": "Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM (Narayanan et al.)",
   "tier": "primary"
  },
  {
   "id": "A20",
   "place": "pretrain-comm",
   "title": "1兆パラメータの学習でデータ並列は 13 TB/s の帯域を使った",
   "body": "Megatron-LM は A100 3,072基で1兆パラメータのモデルを学習し、502 PFLOP/s（1 GPU あたり 163 TFLOP/s・ピークの52%）に達した。このとき二分帯域幅（クラスタを半分に分けた境界を通る通信帯域）の実効値は、パイプライン並列で 892 GB/s・データ並列で 13 TB/s だった。",
   "numbers": "502 PFLOP/s・163 TFLOP/s/GPU（ピークの52%）・892 GB/s（パイプライン並列）・13 TB/s（データ並列）・テンソル並列とパイプライン並列の組み合わせが悪いとスループットは最大で2分の1",
   "caveat": "1兆パラメータの GPT の1反復あたりのスループットで、最後まで学習したわけではない（著者は約3か月かかると見積もる）。",
   "quote": "When training a trillion-parameter model on 3072 GPUs, our implementation used an effective bisection bandwidth of 892 GB/s for pipeline-parallel communication, and 13 TB/s for data-parallel communication.",
   "url": "https://arxiv.org/abs/2104.04473",
   "source": "Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM (Narayanan et al.)",
   "tier": "primary"
  },
  {
   "id": "A21",
   "place": "inference-kv",
   "title": "生成時は毎ステップ重みと KV キャッシュをメモリから読む",
   "body": "生成では1ステップごとに重みと KV キャッシュ（過去のトークンの計算結果をためておく領域）を HBM（GPU に載った大容量メモリ）から読み込む。バッチや文脈が小さいと重みの読み込みが、大きいと KV キャッシュの読み込みが時間の大半を占める。",
   "numbers": "例：2,048トークン以上・バッチサイズ512以上で KV キャッシュの読み込みが支配的",
   "caveat": "Pope らはこれを「メモリ時間」と呼ぶ。計算時間は1トークンあたり 2N FLOPs の行列積（順伝播のみ）だ。",
   "quote": "At small batch sizes and sequence lengths, the time to load weights dominates. At larger batch sizes and sequence lengths (e.g. 2048+ tokens with batch size 512+), the time to load the KV cache dominates.",
   "url": "https://arxiv.org/abs/2211.05102",
   "source": "Efficiently Scaling Transformer Inference (Pope et al.)",
   "tier": "primary"
  },
  {
   "id": "A22",
   "place": "inference-kv",
   "title": "巨大モデルの KV キャッシュは重みの3倍に達する",
   "body": "マルチヘッドアテンション（各ヘッドが別々の K と V を持つ方式）の5,000億パラメータ超のモデルでは、バッチ512・文脈長2,048で KV キャッシュが 3 TB になる。これはパラメータの3倍で、生成する1トークンごとに読み出す間は計算器が遊ぶ。",
   "numbers": "KV キャッシュ 3 TB ＝ パラメータの3倍（バッチ 512・文脈長 2,048・MHA）",
   "caveat": "マルチクエリアテンション（全ヘッドで K と V を共有する方式）を使う動機になった。同じ論文は PaLM 540B（TPU v4 64基）で、小バッチ時の遅延 29 ms／トークン（int8）と大バッチの prefill（入力をまとめて読み込む段階）での MFU 76% を報告する。",
   "quote": "for batch size 512 and context length 2048, the KV cache totals 3TB, which is 3 times the size of the model’s parameters.",
   "url": "https://arxiv.org/abs/2211.05102",
   "source": "Efficiently Scaling Transformer Inference (Pope et al.)",
   "tier": "primary"
  },
  {
   "id": "A23",
   "place": "inference-prefill-decode",
   "title": "推論は prefill と decode の2段階に分かれる",
   "body": "推論の各リクエストは、計算が重い prefill（入力をまとめて読み込む段階）とメモリが重い decode（1トークンずつ出力する段階）を経る。decode の段階では計算資源を使い切れない。",
   "numbers": "",
   "caveat": "2つの段階を別のマシンに分ける Splitwise は、シミュレーションで20%低いコストで最大1.4倍のスループット、または同じ電力とコストで2.35倍のスループットを示した。",
   "quote": "each inference request undergoes two phases: a compute-intensive prompt computation phase and a memory- intensive token generation phase",
   "url": "https://arxiv.org/abs/2311.18677",
   "source": "Splitwise: Efficient Generative LLM Inference Using Phase Splitting (Patel et al.)",
   "tier": "primary"
  },
  {
   "id": "A24",
   "place": "inference-prefill-decode",
   "title": "decode で GPU を使い切るにはバッチ処理が要る",
   "body": "130億パラメータのモデルでは、512トークンの prefill だけで A100 がほぼ計算律速（演算性能が上限になる状態）になる。一方で decode 1件だけでは帯域律速（メモリの転送速度が上限になる状態）が強く、GPU を活かすにはバッチ処理が欠かせない。",
   "numbers": "130億パラメータ・512トークンの prefill で A100 がほぼ計算律速",
   "caveat": "DistServe は従来手法と比べて7.4倍のリクエスト数、または12.6倍厳しい SLO（応答時間などの目標）を満たせたと報告する。",
   "quote": "for a 13B LLM, computing the prefill of a 512-token sequence makes an A100 near compute-bound",
   "url": "https://arxiv.org/abs/2401.09670",
   "source": "DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving (Zhong et al.)",
   "tier": "primary"
  },
  {
   "id": "A25",
   "place": "inference-prefill-decode",
   "title": "計算律速か帯域律速かは算術強度で決まる",
   "body": "演算が計算律速か帯域律速かは、算術強度（読み書き1バイトあたりの演算数）と GPU の ops:byte 比の大小で決まる。線形層はバッチ512なら 315 FLOPS/B で計算律速だが、バッチ1では約 1 FLOPS/B でメモリ律速になる。",
   "numbers": "V100：FP16 125 TFLOPS・約 900 GB/s・ops:byte 比 40〜139／線形層 4096×1024：バッチ 512 で 315 FLOPS/B（計算律速）・バッチ 1 で 1 FLOPS/B（メモリ律速）",
   "caveat": "NVIDIA の更新され続ける文書で、年は目安。例は V100 と FP16 の値。H100 など新しい GPU は ops:byte 比が高く、バッチ1の decode はさらにメモリ律速になる。バッチ1の線形層は decode の1ステップにほぼ相当する。",
   "quote": "an algorithm is math limited on a given processor if the algorithm’s arithmetic intensity is higher than the processor’s ops:byte ratio.",
   "url": "https://docs.nvidia.com/deeplearning/performance/dl-performance-gpu-background/index.html",
   "source": "GPU Performance Background User's Guide (NVIDIA Deep Learning Performance docs)",
   "tier": "primary"
  },
  {
   "id": "A26",
   "place": "inference-kv",
   "title": "OPT-13B の KV キャッシュは1トークンで 800 KB",
   "body": "1トークンあたりの KV キャッシュは 2（K と V）× 隠れ次元 × 層数 × バイト数で求まる。OPT-13B では 800 KB／トークンで、2,048トークンのリクエスト1件で最大 1.6 GB になる。",
   "numbers": "2 × 5120 × 40 × 2 バイト ＝ 800 KB／トークン・1リクエスト（2,048トークン）で 1.6 GB",
   "caveat": "KV ヘッド数 × ヘッド次元 ＝ 隠れ次元となるマルチヘッドアテンションの式。一般には 2 × 層数 × KV ヘッド数 × ヘッド次元 × バイト数で求める。",
   "quote": "the KV cache of a single token demands 800 KB of space, calculated as 2 (key and value vectors) × 5120 (hidden state size) × 40 (number of layers) × 2 (bytes per FP16).",
   "url": "https://arxiv.org/abs/2309.06180",
   "source": "Efficient Memory Management for Large Language Model Serving with PagedAttention (Kwon et al., vLLM)",
   "tier": "primary"
  },
  {
   "id": "A27",
   "place": "inference-kv",
   "title": "GQA で KV キャッシュは8分の1に縮む",
   "body": "GQA（複数のクエリヘッドで K と V を共有する方式）は KV キャッシュを小さくする。Llama 3 70B はクエリヘッド64に対し KV ヘッドを8にしており、BF16 の KV キャッシュは1トークンあたり約 320 KiB になる。",
   "numbers": "80層・d_model 8192・64ヘッド（ヘッド次元 128）・KV ヘッド 8 → 2 × 80 × 8 × 128 × 2 バイト ＝ 327,680 バイト ≈ 320 KiB／トークン・128K トークンで約 40 GiB",
   "caveat": "構成の数値は Llama 3 論文の Table 3 による。1トークンあたりの容量と 128K トークンの値は論文に書かれておらず、構成から計算した値だ。すべてのヘッドに K と V を持たせると8倍の約 2.5 MiB／トークンになる。",
   "quote": "We use grouped query attention (GQA; Ainslie et al. (2023)) with 8 key-value heads to improve inference speed and to reduce the size of key-value caches during decoding.",
   "url": "https://arxiv.org/abs/2407.21783",
   "source": "The Llama 3 Herd of Models (Llama Team, AI @ Meta)",
   "tier": "primary"
  },
  {
   "id": "A28",
   "place": "inference-kv",
   "title": "KV キャッシュ用メモリの大半が使われず無駄になっていた",
   "body": "A100 40GB で130億パラメータのモデルを動かすと、メモリの約65%を重みが、30%超を KV キャッシュが占める。ところが従来のシステムでは、KV キャッシュ用メモリのうち実際のトークンの状態を保存していたのは20.4〜38.2%だった。",
   "numbers": "重み 26 GB（65%）・KV キャッシュ 30%超・KV キャッシュ用メモリの実使用率 20.4〜38.2%・vLLM（PagedAttention を採用した推論エンジン）でスループット2〜4倍",
   "caveat": "裏を返すと60〜80%が無駄だった。「従来のシステム」は2023年当時の FasterTransformer や Orca のように連続した領域を事前に確保する方式を指す。",
   "quote": "our profiling results in Fig. 2 show that only 20.4% - 38.2% of the KV cache memory is used to store the actual token states in the existing systems.",
   "url": "https://arxiv.org/abs/2309.06180",
   "source": "Efficient Memory Management for Large Language Model Serving with PagedAttention (Kwon et al., vLLM)",
   "tier": "primary"
  },
  {
   "id": "A29",
   "place": "inference-kv",
   "title": "PagedAttention で KV キャッシュの無駄は4%未満になる",
   "body": "vLLM の発表によると、従来のシステムは断片化と過剰な予約でメモリの60〜80%を無駄にしていた。PagedAttention（KV キャッシュを小さなブロックに分けて管理する手法）では無駄が4%未満になる。",
   "numbers": "従来 60〜80%の無駄・PagedAttention で4%未満・LLaMA-13B で1系列あたり最大 1.7 GB",
   "caveat": "著者による公式ブログの記述。論文では裏返しの実使用率20.4〜38.2%として示されている。",
   "quote": "We find that existing systems waste 60% – 80% of memory due to fragmentation and over-reservation.",
   "url": "https://blog.vllm.ai/2023/06/20/vllm.html",
   "source": "vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention (vLLM blog)",
   "tier": "primary"
  },
  {
   "id": "A30",
   "place": "inference-attention",
   "title": "アテンションの時間とメモリは系列長の2乗で増える",
   "body": "セルフアテンション（各トークンが他の全トークンとの関係を計算する仕組み）の時間とメモリは系列長の2乗で増える。標準的な実装では HBM への読み書きも2乗で増え、長い文脈は遅くメモリを食う。",
   "numbers": "系列長 N に対し O(N^2)・A100：HBM 40〜80 GB（1.5〜2.0 TB/s）に対しオンチップの SRAM は SM（GPU の演算ユニットの単位）あたり 192 KB（108 SM）で約 19 TB/s",
   "caveat": "FlashAttention は FLOPs を2乗のまま保つが HBM の読み書きを減らし、追加のメモリを線形に抑える。帯域の値は論文の Section 2.1 による。",
   "quote": "Transformers are slow and memory-hungry on long sequences, since the time and memory complexity of self-attention are quadratic in sequence length.",
   "url": "https://arxiv.org/abs/2205.14135",
   "source": "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness (Dao et al.)",
   "tier": "primary"
  },
  {
   "id": "A31",
   "place": "inference-prefill-decode",
   "title": "decode の速さはメモリ帯域で頭打ちになる",
   "body": "自己回帰の decode（1トークンずつ出力する段階）では、毎ステップ重みと全ての K と V を読み込む。そのメモリ帯域の負担が Transformer の推論の大きなボトルネックになる。",
   "numbers": "",
   "caveat": "",
   "quote": "Autoregressive decoder inference is a severe bottle- neck for Transformer models due to the memory bandwidth overhead from loading decoder weights and all attention keys and values at every decod- ing step",
   "url": "https://arxiv.org/abs/2305.13245",
   "source": "GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints (Ainslie et al.)",
   "tier": "primary"
  },
  {
   "id": "A32",
   "place": "inference-tokens",
   "title": "推論モデルの隠れた推論トークンも出力として課金される",
   "body": "推論モデルの推論トークン（API には見えない内部の思考過程）は、コンテキストウィンドウ（一度に扱える入力と出力の上限）を占め出力トークンとして課金される。OpenAI は推論と出力のために少なくとも25,000トークンを空けておくよう勧めている。",
   "numbers": "推論と出力用に25,000トークン以上の確保を推奨",
   "caveat": "更新され続ける公式文書（2026-11-27 に確認）。",
   "quote": "While reasoning tokens are not visible via the API, they still occupy space in the model’s context window and are billed as output tokens.",
   "url": "https://developers.openai.com/api/docs/guides/reasoning",
   "source": "Reasoning models (OpenAI API docs)",
   "tier": "primary"
  },
  {
   "id": "A33",
   "place": "inference-tokens",
   "title": "o3-preview は高い正答率に57億トークンを使った",
   "body": "ARC-AGI-1（推論力を測るベンチマーク）の100問で o3-preview は、試行6回のとき3,350万トークンで正答率75.7%だった。試行1,024回では約172倍の計算量で57億トークンを使い87.5%に達した。",
   "numbers": "試行6回：3,350万トークン・75.7%・1問26ドル／試行1,024回：57億トークン・87.5%・1問4,560ドル・計算量 約172倍",
   "caveat": "1問あたりのドルは料金の仮定で、OpenAI 社内の原価ではない。この仮定は2回改定された（2025-03-24 に o1-pro の料金・2025-12-10 に o3-pro の料金100万トークン80ドル）。対象は公開版の o3 ではなく o3-preview。トークン数のほうが安定した値だ。",
   "quote": "At OpenAI's direction, we tested at two levels of compute with variable sample sizes: 6 (high-efficiency) and 1024 (low-efficiency, 172x compute).",
   "url": "https://arcprize.org/blog/oai-o3-pub-breakthrough",
   "source": "OpenAI o3 Breakthrough High Score on ARC-AGI-Pub (ARC Prize blog, François Chollet)",
   "tier": "primary"
  },
  {
   "id": "A34",
   "place": "energy",
   "title": "Gemini アプリのテキストプロンプト1件は中央値 0.24 Wh",
   "body": "Google の計測では、2025年5月の Gemini アプリのテキストプロンプト1件の消費電力量は中央値 0.24 Wh だった。58%は稼働中のアクセラレータ・25%はホストの CPU と DRAM が占め、1件あたりのエネルギーは1年で33分の1に下がった。",
   "numbers": "中央値 0.24 Wh／プロンプト・アクセラレータ 0.14 Wh（58%）・ホストの CPU と DRAM 0.06 Wh（25%）・0.03 gCO2e（CO2 換算グラム）・水 0.26 mL・2024年5月から2025年5月でエネルギー33分の1・炭素44分の1",
   "caveat": "テキストプロンプトの中央値のみで、画像・動画や長い推論は含まない。待機中の設備とデータセンターの付帯電力を含む。33分の1にはモデルの改良による23倍と機器の利用率による1.4倍の削減が含まれる。",
   "quote": "we find the median Gemini Apps text prompt consumes 0.24 Wh of energy—a figure substantially lower than many public estimates.",
   "url": "https://arxiv.org/abs/2508.15734",
   "source": "Measuring the environmental impact of delivering AI at Google Scale (Elsworth et al., Google)",
   "tier": "primary"
  },
  {
   "id": "A35",
   "place": "energy",
   "title": "Google の機械学習のエネルギーは5分の3が推論",
   "body": "Google では2019〜2021年の各年で、機械学習のエネルギーの約5分の3が推論に・約5分の2が学習に使われた。機械学習は Google 全体のエネルギーの10〜15%だった。",
   "numbers": "推論 約5分の3・学習 約5分の2・機械学習は Google のエネルギーの10〜15%（FLOPS では70〜80%）",
   "caveat": "2019・2020・2021年の各4月の1週間に基づく。LLM に限らず機械学習全体が対象で、ChatGPT 登場以前の値。",
   "quote": "Across all three years, about ⅗ of ML energy use is for inference and ⅖ for training.",
   "url": "https://arxiv.org/abs/2204.05149",
   "source": "The Carbon Footprint of Machine Learning Training Will Plateau, Then Shrink (Patterson et al., Google)",
   "tier": "primary"
  },
  {
   "id": "A36",
   "place": "energy",
   "title": "Le Chat の400トークンの応答1件は 1.14 gCO2e",
   "body": "Mistral のライフサイクル評価（機器の製造から利用までを含む）では、Le Chat（Mistral Large 2）の400トークンの応答1件で 1.14 gCO2e・水 45 mL だった。学習と18か月の利用を合わせると 20.4 ktCO2e・水 281,000 m3 になる。",
   "numbers": "400トークンの応答：1.14 gCO2e・水 45 mL・0.16 mg Sb eq／学習と18か月の利用：20.4 ktCO2e・水 281,000 m3・660 kg Sb eq",
   "caveat": "ハードウェア製造を含むライフサイクル全体の値で、利用者の端末は含まない。単位が Wh ではなく炭素と水なので Google の 0.24 Wh とは直接比べられない。Sb eq はアンチモン換算の資源消費量。ページ上の「20,4 ktCO₂e」は小数点にカンマを使った表記だ。",
   "quote": "the use of our AI assistant Le Chat for a 400-token response - excluding users’ terminals: 1.14 gCO₂e, 45 mL of water, and 0.16 mg of Sb eq.",
   "url": "https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai",
   "source": "Our contribution to a global environmental standard for AI (Mistral AI)",
   "tier": "primary"
  },
  {
   "id": "A37",
   "place": "energy",
   "title": "GPT-4o の典型的な質問1件は約 0.3 Wh という推定",
   "body": "Epoch AI は ChatGPT で GPT-4o を使う典型的な質問1件の消費電力量をおよそ 0.3 Wh と推定した。従来の推定の10分の1にあたるが、長い入力や推論を伴う出力ではかなり多くなりうるとしている。",
   "numbers": "約 0.3 Wh／質問（推定）",
   "caveat": "推定値（二次情報）。測定ではなく仮定に基づく第三者の推定だ。OpenAI CEO の Sam Altman はブログ「The Gentle Singularity」（2025）で平均 0.34 Wh と書いたが、算出方法は示していない。",
   "quote": "We find that typical ChatGPT queries using GPT-4o likely consume roughly 0.3 watt-hours, which is ten times less than the older estimate.",
   "url": "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
   "source": "How much energy does ChatGPT use? (Epoch AI, Gradient Updates)",
   "tier": "secondary"
  }
 ],
 "methods": [
  {
   "id": "train-mixed-precision-fp16",
   "section": "train",
   "group": "precision",
   "name": "混合精度学習（FP16）",
   "nameEn": "Mixed precision training (FP16 + FP32 master weights + loss scaling)",
   "what": "重み・活性化・勾配を FP16（16ビット浮動小数点）で持ち、更新用に FP32 の重みの写しを残す。小さな勾配が0に潰れないよう損失を定数倍する（損失スケーリング）。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "memory",
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "メモリ消費をほぼ2分の1に削減（CNN・RNN・GAN。100M 超のパラメータのモデルを含む。2017年）",
     "quote": "Using this approach, we can reduce the memory consumption of deep learning models by nearly 2x.",
     "url": "https://arxiv.org/abs/1710.03740"
    }
   ],
   "tradeoffs": "FP16 は表せる値の範囲が狭く、損失スケーリングが必須。高速化は半精度に対応したハードウェア（Tensor Core）次第。論文自身も速度向上は将来のプロセッサでの見込みとして書いている。",
   "noNumber": false,
   "year": 2017,
   "url": "https://arxiv.org/abs/1710.03740",
   "tier": "primary"
  },
  {
   "id": "train-bf16",
   "section": "train",
   "group": "precision",
   "name": "BF16（bfloat16）学習",
   "nameEn": "BFLOAT16 training",
   "what": "指数部が FP32 と同じ幅の16ビット形式 bfloat16 で学習する。表せる範囲が広いので、多くの場合は損失スケーリングもハイパーパラメータの再調整も要らない。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "memory",
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "FP32 と同じ反復回数で同じ結果。ハイパーパラメータの変更なし（BF16 をエミュレーションで再現。画像・音声・言語・GAN・推薦の各タスク）",
     "quote": "achieves the same state-of-the-art (SOTA) results across domains as FP32 tensors in the same number of iterations",
     "url": "https://arxiv.org/abs/1905.12322"
    },
    {
     "text": "Llama 3 405B の事前学習で BF16 の MFU（理論性能のうち実際に使えた割合）38〜43%（最大16K 枚の H100。採用例で FP32 との比較ではない）",
     "quote": "we achieve an overall BF16 Model FLOPs Utilization (MFU; Chowdhery et al. (2023)) of 38-43%",
     "url": "https://arxiv.org/abs/2407.21783"
    }
   ],
   "tradeoffs": "仮数部（有効数字の桁）が FP16 より少なく、精度は粗い。Llama 3 は数値の安定のため、勾配の累積と reduce-scatter（GPU 間で勾配を集めて分ける通信）を FP32 で行っている。",
   "noNumber": true,
   "year": 2019,
   "url": "https://arxiv.org/abs/1905.12322",
   "tier": "primary"
  },
  {
   "id": "train-fp8-training",
   "section": "train",
   "group": "precision",
   "name": "FP8 混合精度学習",
   "nameEn": "FP8 mixed-precision training",
   "what": "行列積（GEMM）を8ビット浮動小数点（E4M3/E5M2）で計算し、スケーリング係数で値の範囲を合わせる。必要に応じて勾配・オプティマイザ状態・通信も FP8 にし、精度に敏感な部分は高い精度のまま残す。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "compute",
    "memory",
    "comm",
    "time"
   ],
   "effects": [
    {
     "text": "175B パラメータまで、ハイパーパラメータを変えずに16ビット学習と同等の品質（FP8 形式の論文。NVIDIA・Arm・Intel、2022年）",
     "quote": "effectively matching the result quality achieved by 16-bit training sessions",
     "url": "https://arxiv.org/abs/2209.05433"
    },
    {
     "text": "GPT-175B の学習で、BF16 の Megatron-LM に比べメモリ39%減・75%高速。Transformer Engine 比で37%高速（H100。Microsoft の FP8-LM の報告）",
     "quote": "achieved a remarkable 39% reduction in real memory usage but also ran 75% faster than the widely adopted BF16 framework",
     "url": "https://arxiv.org/abs/2310.18313"
    },
    {
     "text": "BF16 に対する損失の相対誤差は0.25%未満。FP8 の GEMM は理論上 BF16 の2倍速（DeepSeek-V3。671B の MoE、FP8 学習フレームワーク）",
     "quote": "the relative loss error of our FP8-training model remains consistently below 0.25%",
     "url": "https://arxiv.org/abs/2412.19437"
    },
    {
     "text": "FP8 の GEMM は理論上 BF16 の2倍の計算速度（DeepSeek-V3 の FP8 設計）",
     "quote": "This design theoretically doubles the computational speed compared with the original BF16 method.",
     "url": "https://arxiv.org/abs/2412.19437"
    }
   ],
   "tradeoffs": "発散を防ぐには、細かい単位のスケーリングと高精度での累積が要る。FP8 対応ハードウェア（Hopper 世代以降）が必要。FP8-LM の75%は著者自身の環境での BF16 Megatron-LM との比較。DeepSeek-V3 の2倍は理論値。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2209.05433",
   "tier": "primary"
  },
  {
   "id": "train-fp4-training",
   "section": "train",
   "group": "precision",
   "name": "FP4 / NVFP4 学習",
   "nameEn": "FP4 / NVFP4 training",
   "what": "線形層の計算を4ビット浮動小数点（Blackwell の NVFP4 など）まで落とす。ランダム Hadamard 変換・2次元ブロックスケーリング・確率的丸めで安定させ、一部の層は高い精度のまま残す。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "compute",
    "memory",
    "time"
   ],
   "effects": [
    {
     "text": "12B モデルを10T トークンで学習し、損失と精度は FP8 と同等（NVIDIA の NVFP4 事前学習、2025年）",
     "quote": "achieves training loss and downstream task accuracies comparable to an FP8 baseline",
     "url": "https://arxiv.org/abs/2509.25149"
    },
    {
     "text": "13B パラメータ・100B トークンまで BF16/FP8 と同等の精度（Microsoft の FP4 フレームワーク。エミュレーションでの検証、2025年）",
     "quote": "our FP4 framework achieves accuracy comparable to BF16 and FP8, with minimal degradation",
     "url": "https://arxiv.org/abs/2501.17116"
    },
    {
     "text": "全体を FP4 で学習しても FP16/FP8 と遜色ない（Quartet。Llama 型モデル、Blackwell 用 CUDA カーネル）",
     "quote": "fully FP4-based training is a competitive alternative to FP16 half-precision and to FP8 training",
     "url": "https://arxiv.org/abs/2505.14669"
    }
   ],
   "tradeoffs": "2025〜2026年時点でまだ発展途上。Blackwell 世代のハードウェアが必要。安定させるには専用のレシピと、一部の層を高精度に残す工夫が要る。引用した要旨は品質が同等と述べるだけで、学習全体のコスト削減は示していない。",
   "noNumber": true,
   "year": 2025,
   "url": "https://arxiv.org/abs/2509.25149",
   "tier": "primary"
  },
  {
   "id": "train-zero",
   "section": "train",
   "group": "memory",
   "name": "ZeRO / FSDP（完全シャーディング・データ並列）",
   "nameEn": "ZeRO / Fully Sharded Data Parallel (FSDP)",
   "what": "データ並列（同じモデルを複数 GPU に置き別々のデータで学習）で各 GPU が複製していたオプティマイザ状態・勾配・パラメータを分けて持ち、1枚あたりのメモリを並列数に応じて減らす。PyTorch FSDP は同じ考え方の PyTorch 標準実装。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "memory"
   ],
   "effects": [
    {
     "text": "オプティマイザ状態の分割（ステージ1）でメモリ4分の1、ステージ2で8分の1。ステージ3はデータ並列数に比例し、64 GPU なら64分の1（解析値。混合精度の Adam が前提。ステージ3は通信が約50%増）",
     "quote": "4x memory reduction, same communication volume as DP",
     "url": "https://arxiv.org/abs/1910.02054"
    },
    {
     "text": "従来の最先端比でモデルサイズ8倍・性能10倍。400 GPU で100B 超のパラメータを学習（DeepSpeed ZeRO、2019年）",
     "quote": "This represents an 8x increase in model size and 10x increase in achievable performance over state-of-the-art.",
     "url": "https://arxiv.org/abs/1910.02054"
    },
    {
     "text": "DDP（モデルを丸ごと複製する従来のデータ並列）と同等の性能で、はるかに大きいモデルに対応。TFLOPS はほぼ線形に伸びる（PyTorch FSDP 論文。Meta、2023年。要旨に単一の倍率はない）",
     "quote": "FSDP is capable of achieving comparable performance to Distributed Data Parallel while providing support for significantly larger models",
     "url": "https://arxiv.org/abs/2304.11277"
    }
   ],
   "tradeoffs": "パラメータまで分割するステージ3は通信量が増える（論文では控えめな50%増）。8倍・10倍は著者自身による従来手法との比較。",
   "noNumber": false,
   "year": 2019,
   "url": "https://arxiv.org/abs/1910.02054",
   "tier": "primary"
  },
  {
   "id": "train-offload",
   "section": "train",
   "group": "memory",
   "name": "CPU / NVMe オフロード（ZeRO-Offload、ZeRO-Infinity）",
   "nameEn": "CPU / NVMe offloading (ZeRO-Offload, ZeRO-Infinity)",
   "what": "オプティマイザ状態とその更新計算を、必要ならパラメータも CPU メモリや NVMe（高速 SSD）に移す。少ない GPU でも大きなモデルが載る。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "memory"
   ],
   "effects": [
    {
     "text": "V100 1枚で13B 超のパラメータを学習。PyTorch 単体の10倍の大きさ（ZeRO-Offload）",
     "quote": "It can train models with over 13 billion parameters on a single GPU, a 10x increase in size compared to popular framework such as PyTorch",
     "url": "https://arxiv.org/abs/2101.06840"
    },
    {
     "text": "DGX-2 1ノードで1兆パラメータ級のモデルをファインチューニング（ZeRO-Infinity。GPU・CPU・NVMe を併用）",
     "quote": "It can be used to fine-tune trillion parameter models on a single NVIDIA DGX-2 node",
     "url": "https://arxiv.org/abs/2104.07857"
    }
   ],
   "tradeoffs": "PCIe・CPU・NVMe の帯域が上限になる。帯域が支配的な場合、同じ GPU 数ですべて GPU に載せる学習よりスループットは落ちる。",
   "noNumber": false,
   "year": 2021,
   "url": "https://arxiv.org/abs/2101.06840",
   "tier": "primary"
  },
  {
   "id": "train-activation-checkpointing",
   "section": "train",
   "group": "memory",
   "name": "活性化チェックポイント（勾配チェックポイント）",
   "nameEn": "Activation (gradient) checkpointing",
   "what": "順伝播で活性化（途中の値。逆伝播で使うので保存する）の一部だけを残し、残りは逆伝播のときに計算し直す。計算を増やす代わりにメモリを減らす。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "memory"
   ],
   "effects": [
    {
     "text": "1,000層の ResNet でメモリ48G→7G。実行時間は約30%増（ImageNet、2016年）",
     "quote": "we can reduce the memory cost of a 1,000-layer deep residual network from 48G to 7G with only 30 percent additional running time cost",
     "url": "https://arxiv.org/abs/1604.06174"
    },
    {
     "text": "n 層のメモリを O(√n) に抑える。代わりに順伝播を1回余分に行う（アルゴリズムの解析）",
     "quote": "we design an algorithm that costs O(sqrt(n)) memory to train a n layer network, with only the computational cost of an extra forward pass per mini-batch",
     "url": "https://arxiv.org/abs/1604.06174"
    }
   ],
   "tradeoffs": "計算量が増える。全体に適用すると順伝播およそ1回分の追加。",
   "noNumber": false,
   "year": 2016,
   "url": "https://arxiv.org/abs/1604.06174",
   "tier": "primary"
  },
  {
   "id": "train-selective-recompute-seqpar",
   "section": "train",
   "group": "memory",
   "name": "選択的再計算 + Megatron シーケンス並列",
   "nameEn": "Selective activation recomputation + Megatron sequence parallelism",
   "what": "アテンションのうち、再計算が安くメモリを多く食う部分だけを計算し直す。LayerNorm と dropout の活性化はテンソル並列のグループ内で系列方向に分けて持ち、全体の再計算をほぼ不要にする。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "memory",
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "活性化メモリ5分の1、再計算のオーバーヘッド90%超減。MFU は42.1%→54.2%（29%高速）（530B の GPT-3 型モデル、A100 2240枚）",
     "quote": "our method reduces activation memory by 5x, while reducing execution time overhead from activation recomputation by over 90%",
     "url": "https://arxiv.org/abs/2205.05198"
    }
   ],
   "tradeoffs": "テンソル並列と組み合わせて使う前提の設計。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2205.05198",
   "tier": "primary"
  },
  {
   "id": "train-tensor-3d-parallelism",
   "section": "train",
   "group": "parallelism",
   "name": "テンソル並列と3D/4D 並列（Megatron-LM）",
   "nameEn": "Tensor parallelism and 3D/4D parallelism (Megatron-LM)",
   "what": "1つの重み行列を複数 GPU に分けて持つ（テンソル並列）。これをパイプライン並列・データ並列・コンテキスト並列と組み合わせ、数千 GPU で巨大モデルを効率よく学習する。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "memory",
    "time"
   ],
   "effects": [
    {
     "text": "512 GPU で15.1 PFLOPs、スケーリング効率76%（8.3B モデル。Megatron-LM のテンソル並列、2019年）",
     "quote": "We sustain 15.1 PetaFLOPs across the entire application with 76% scaling efficiency",
     "url": "https://arxiv.org/abs/1909.08053"
    },
    {
     "text": "1T パラメータのモデルを3072 GPU で502 PFLOP/s（ピークの52%）。インターリーブ型スケジュールでスループット+10%（Megatron-LM の3D 並列、2021年）",
     "quote": "Our approach allows us to perform training iterations on a model with 1 trillion parameters at 502 petaFLOP/s on 3072 GPUs",
     "url": "https://arxiv.org/abs/2104.04473"
    },
    {
     "text": "テンソル・コンテキスト・パイプライン・FSDP の4D 並列で BF16 MFU 38〜43%（Llama 3 405B。H100 8K〜16K 枚）",
     "quote": "we achieve an overall BF16 Model FLOPs Utilization (MFU; Chowdhery et al. (2023)) of 38-43%",
     "url": "https://arxiv.org/abs/2407.21783"
    }
   ],
   "tradeoffs": "テンソル並列は高帯域の接続が要り、通常はノード内にとどめる。構成の調整は簡単ではない。",
   "noNumber": false,
   "year": 2019,
   "url": "https://arxiv.org/abs/1909.08053",
   "tier": "primary"
  },
  {
   "id": "train-pipeline-parallelism",
   "section": "train",
   "group": "parallelism",
   "name": "パイプライン並列とバブル削減（GPipe、インターリーブ 1F1B、Zero Bubble）",
   "nameEn": "Pipeline parallelism and bubble reduction (GPipe, interleaved 1F1B, Zero Bubble)",
   "what": "層を段（ステージ）に分けて別々のデバイスに置き、バッチをマイクロバッチに分けて流す。新しいスケジュールは交互実行や逆伝播の分割で待ち時間（バブル）を減らす。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "memory",
    "time"
   ],
   "effects": [
    {
     "text": "アクセラレータに分割するとほぼ線形に高速化（GPipe、2018年）",
     "quote": "resulting in almost linear speedup when a model is partitioned across multiple accelerators",
     "url": "https://arxiv.org/abs/1811.06965"
    },
    {
     "text": "1F1B（順伝播と逆伝播を1回ずつ交互に流す方式）比でスループット最大23%向上。メモリ制約を緩めると31%（Zero Bubble PP。Megatron-LM ベース）",
     "quote": "our method outperforms the 1F1B schedule up to 23% in throughput under a similar memory limit",
     "url": "https://arxiv.org/abs/2401.10241"
    }
   ],
   "tradeoffs": "バブルが残り、処理中のマイクロバッチの分だけ活性化メモリも要る。スケジュールはメモリとバブルの大きさの引き換え。",
   "noNumber": false,
   "year": 2018,
   "url": "https://arxiv.org/abs/1811.06965",
   "tier": "primary"
  },
  {
   "id": "train-sequence-context-parallelism",
   "section": "train",
   "group": "parallelism",
   "name": "長文脈向けのシーケンス並列・コンテキスト並列（Ring Attention、DeepSpeed-Ulysses）",
   "nameEn": "Sequence / context parallelism for long context (Ring Attention, DeepSpeed-Ulysses)",
   "what": "系列（トークン列）の方向に分けて複数デバイスに置く。Ring Attention は KV ブロックを輪状に回して計算と重ね、Ulysses は all-to-all 通信でヘッドを配り直す。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "memory",
    "comm",
    "time"
   ],
   "effects": [
    {
     "text": "従来の最先端比で、4倍長い系列を2.5倍速く処理（DeepSpeed-Ulysses、2023年）",
     "quote": "DeepSpeed-Ulysses trains 2.5x faster with 4x longer sequence length than the existing method SOTA baseline",
     "url": "https://arxiv.org/abs/2309.14509"
    },
    {
     "text": "デバイス数倍まで長い系列を、追加のオーバーヘッドなしで扱う（Ring Attention、2023年）",
     "quote": "enables training and inference of sequences that are up to device count times longer than those achievable by prior memory-efficient Transformers",
     "url": "https://arxiv.org/abs/2310.01889"
    }
   ],
   "tradeoffs": "系列長に比例した通信が加わる。Ulysses の並列数はアテンションヘッドの数が上限。2.5倍は著者自身による従来手法との比較。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2310.01889",
   "tier": "primary"
  },
  {
   "id": "train-dualpipe-overlap",
   "section": "train",
   "group": "parallelism",
   "name": "DualPipe と計算・通信のオーバーラップ（DeepSeek-V3）",
   "nameEn": "DualPipe and computation-communication overlap (DeepSeek-V3)",
   "what": "両方向から流すパイプラインのスケジュールで、順伝播・逆伝播の計算と MoE の all-to-all 通信を重ねる。バブルを減らし、ノードをまたぐエキスパート並列の通信を隠す。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "comm",
    "time",
    "memory"
   ],
   "effects": [
    {
     "text": "細かいエキスパートをノード間に置いたまま all-to-all のオーバーヘッドはほぼゼロ。テンソル並列も不要（DeepSeek-V3、H800 2048枚。重ねない場合は計算と通信が約1:1）",
     "quote": "we can still employ fine-grained experts across nodes while achieving a near-zero all-to-all communication overhead",
     "url": "https://arxiv.org/abs/2412.19437"
    },
    {
     "text": "1兆トークンあたり180K H800 GPU 時間。学習全体で2.788M GPU 時間（1 GPU 時間 $2 換算で約 $5.576M。DeepSeek-V3 の効率化手法すべての合算）",
     "quote": "training DeepSeek-V3 on each trillion tokens requires only 180K H800 GPU hours",
     "url": "https://arxiv.org/abs/2412.19437"
    }
   ],
   "tradeoffs": "モデルのパラメータを2組持つ（論文はエキスパート並列の規模が大きいので影響は小さいとする）。$5.576M は公式の学習1回分だけで、事前の研究やアブレーション実験の費用は含まない（報告書に明記）。DualPipe 単体の効果ではない。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2412.19437",
   "tier": "primary"
  },
  {
   "id": "train-one-bit-adam",
   "section": "train",
   "group": "parallelism",
   "name": "1-bit Adam（通信圧縮）",
   "nameEn": "1-bit Adam (communication compression)",
   "what": "ウォームアップの後は Adam の分散項を固定し、ワーカー間でやり取りするモーメンタムを誤差補償つきで1ビットに圧縮する。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "comm",
    "time"
   ],
   "effects": [
    {
     "text": "通信量は最大5分の1、BERT-Large 事前学習のスループットは最大3.3倍（最大256 GPU。帯域の狭いクラスタ）",
     "quote": "we propose 1-bit Adam that reduces the communication volume by up to 5×",
     "url": "https://arxiv.org/abs/2102.02888"
    }
   ],
   "tradeoffs": "効果が出るのは主に帯域の狭い接続。最初に全精度のウォームアップ期間が要る。",
   "noNumber": false,
   "year": 2021,
   "url": "https://arxiv.org/abs/2102.02888",
   "tier": "primary"
  },
  {
   "id": "train-diloco",
   "section": "train",
   "group": "parallelism",
   "name": "DiLoCo（低通信の分散学習）",
   "nameEn": "DiLoCo (distributed low-communication training)",
   "what": "各ワーカーが AdamW でローカルに多数ステップ進め、ときどき外側の Nesterov モーメンタム最適化で同期する。つながりの弱いクラスタ間でも学習できる。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "comm"
   ],
   "effects": [
    {
     "text": "通信量を500分の1にしつつ、完全同期の学習と同等（ワーカー8台、C4。Google DeepMind、2023年）",
     "quote": "DiLoCo on 8 workers performs as well as fully synchronous optimization while communicating 500 times less",
     "url": "https://arxiv.org/abs/2311.08105"
    }
   ],
   "tradeoffs": "元の論文の検証は中程度の規模。減るのは必要な帯域で、総 FLOPs は減らない。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2311.08105",
   "tier": "primary"
  },
  {
   "id": "train-flashattention",
   "section": "train",
   "group": "kernel",
   "name": "FlashAttention 1/2/3",
   "nameEn": "FlashAttention 1/2/3 (IO-aware exact attention)",
   "what": "厳密なアテンションを GPU チップ上の高速メモリ（SRAM）に収まるタイルごとに計算し、N×N の行列を HBM（GPU の主メモリ）に書き出さない。v2 は作業分割を改良し、v3 は Hopper の非同期実行と FP8 を使う。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "memory",
    "time"
   ],
   "effects": [
    {
     "text": "GPT-2（系列長1K）で3倍高速。BERT-large の学習全体で15%高速（FlashAttention v1、2022年）",
     "quote": "3× speedup on GPT-2 (seq. length 1K)",
     "url": "https://arxiv.org/abs/2205.14135"
    },
    {
     "text": "FlashAttention 比で約2倍。GPT 学習全体で A100 1枚あたり最大225 TFLOPs/s（MFU 72%）（FlashAttention-2、2023年）",
     "quote": "FlashAttention-2 reaches training speed of up to 225 TFLOPs/s per A100 GPU (72% model FLOPs utilization)",
     "url": "https://arxiv.org/abs/2307.08691"
    },
    {
     "text": "H100 で1.5〜2.0倍。FP16 で最大740 TFLOPs/s、FP8 で約1.2 PFLOPs/s（FlashAttention-3、2024年）",
     "quote": "FlashAttention-3, achieves speedup on H100 GPUs by 1.5-2.0× with FP16 reaching up to 740 TFLOPs/s (75% utilization)",
     "url": "https://arxiv.org/abs/2407.08608"
    }
   ],
   "tradeoffs": "ハードウェアごとの専用カーネル。効果は系列が長いほど大きい。メモリは系列長の2乗ではなく1乗で増える。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2205.14135",
   "tier": "primary"
  },
  {
   "id": "train-fused-kernels-liger",
   "section": "train",
   "group": "kernel",
   "name": "Triton の融合カーネル（Liger Kernel）",
   "nameEn": "Fused Triton kernels (Liger Kernel)",
   "what": "RMSNorm・RoPE・SwiGLU・交差エントロピーなどの演算を1つのカーネルにまとめ、入力を小分けにして処理する（線形層と交差エントロピーの融合など）。メモリの読み書きと活性化メモリのピークを減らす。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "memory",
    "time"
   ],
   "effects": [
    {
     "text": "HuggingFace の実装に比べ、平均でスループット約20%向上・GPU メモリ60%減（主要なオープン LLM。LinkedIn、2024年）",
     "quote": "our kernels achieve on average a 20% increase in training throughput and a 60% reduction in GPU memory usage",
     "url": "https://arxiv.org/abs/2410.10989"
    }
   ],
   "tradeoffs": "比較相手は融合していない HuggingFace の実装。すでに最適化された環境に対しては効果が小さい。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2410.10989",
   "tier": "primary"
  },
  {
   "id": "train-mixture-of-experts",
   "section": "train",
   "group": "architecture",
   "name": "Mixture-of-Experts（MoE、疎な活性化）",
   "nameEn": "Mixture-of-Experts (sparse activation)",
   "what": "密な FFN を多数のエキスパートに置き換え、ルーターがトークンごとに少数だけを動かす。総パラメータ数とトークンあたりの計算量を切り離せる。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "compute"
   ],
   "effects": [
    {
     "text": "同じ計算量で T5 比最大7倍速く事前学習。T5-XXL 比で4倍（Switch Transformer。Google、2021年）",
     "quote": "to obtain up to 7x increases in pre-training speed with the same computational resources",
     "url": "https://arxiv.org/abs/2101.03961"
    },
    {
     "text": "DeepSeekMoE 16B が約40%の計算量で LLaMA2 7B と同等（DeepSeekMoE、2024年）",
     "quote": "show that it achieves comparable performance with LLaMA2 7B, with only about 40% of computations",
     "url": "https://arxiv.org/abs/2401.06066"
    },
    {
     "text": "密モデルの DeepSeek 67B より学習コスト42.5%減（DeepSeek-V2。総236B・稼働21B）",
     "quote": "DeepSeek-V2 achieves significantly stronger performance, and meanwhile saves 42.5% of training costs",
     "url": "https://arxiv.org/abs/2405.04434"
    },
    {
     "text": "総パラメータ671B のうち、トークンごとに動くのは37B（DeepSeek-V3）",
     "quote": "671B total parameters with 37B activated for each token",
     "url": "https://arxiv.org/abs/2412.19437"
    }
   ],
   "tradeoffs": "全エキスパートをメモリに載せる必要がある。all-to-all 通信・ルーティングと負荷分散の複雑さ・学習の不安定さが加わる（Switch 論文も通信コストの増加を指摘）。",
   "noNumber": false,
   "year": 2021,
   "url": "https://arxiv.org/abs/2101.03961",
   "tier": "primary"
  },
  {
   "id": "train-sparse-upcycling",
   "section": "train",
   "group": "architecture",
   "name": "Sparse upcycling（密モデルからの MoE 化）",
   "nameEn": "Sparse upcycling (MoE from a dense checkpoint)",
   "what": "学習済みの密モデルの FFN を各エキスパートにコピーして MoE を初期化する。すでに払った事前学習の計算を再利用する。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "compute"
   ],
   "effects": [
    {
     "text": "元の密モデルの事前学習コストの約50%で、密モデルを上回る（T5 Base/Large/XL と ViT。Google、2022年）",
     "quote": "using only ~50% of the initial dense pretraining sunk cost",
     "url": "https://arxiv.org/abs/2212.05055"
    }
   ],
   "tradeoffs": "既存の密モデルのチェックポイントが要る。最終的な構造は元の密モデルの形に縛られる。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2212.05055",
   "tier": "primary"
  },
  {
   "id": "train-compute-optimal-scaling",
   "section": "train",
   "group": "data",
   "name": "計算最適なスケーリング（Chinchilla）",
   "nameEn": "Compute-optimal scaling (Chinchilla)",
   "what": "決まった計算予算の中で、モデルサイズと学習トークン数を同時に決める。Chinchilla はパラメータを2倍にするならトークンもおよそ2倍にすべきとした。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "compute"
   ],
   "effects": [
    {
     "text": "Gopher（280B）と同じ計算量で、4倍のデータを使った70B の Chinchilla が上回る（DeepMind。70M〜16B の400超のモデルで検証）",
     "quote": "Chinchilla, that uses the same compute budget as Gopher but with 70B parameters and 4× more more data",
     "url": "https://arxiv.org/abs/2203.15556"
    }
   ],
   "tradeoffs": "最適なのは学習コストだけ。推論コストが効く場合は、この比率を大きく超えて学習することが多い（例：Gemma 2 の小型モデルは計算最適なトークン数の50倍超。arXiv:2408.00118）。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2203.15556",
   "tier": "primary"
  },
  {
   "id": "train-data-deduplication",
   "section": "train",
   "group": "data",
   "name": "学習データの重複除去",
   "nameEn": "Training data deduplication",
   "what": "完全一致やほぼ同じ文書・部分文字列を取り除く（接尾辞配列や MinHash など）。埋め込みで似ていると判定した冗長な文書も除くことがある。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "tokens",
    "compute"
   ],
   "effects": [
    {
     "text": "同等以上の精度を少ない学習ステップで達成。記憶したテキストの出力は10分の1（Lee et al.、C4 など。Google、2021年。計算削減は定性的）",
     "quote": "require fewer train steps to achieve the same or better accuracy",
     "url": "https://arxiv.org/abs/2107.06499"
    },
    {
     "text": "MinHash による重複除去に上乗せして約20%の効率向上（D4。埋め込みによる重複除去と多様化、6.7B 規模。Meta、2023年）",
     "quote": "can speed up training (20% efficiency gains)",
     "url": "https://arxiv.org/abs/2308.12284"
    }
   ],
   "tradeoffs": "削りすぎると多様性が落ちる。Lee et al. は計算削減を定性的にしか述べていない。",
   "noNumber": false,
   "year": 2021,
   "url": "https://arxiv.org/abs/2107.06499",
   "tier": "primary"
  },
  {
   "id": "train-data-quality-filtering",
   "section": "train",
   "group": "data",
   "name": "モデルによる品質フィルタリングとデータ枝刈り（FineWeb-Edu、DCLM、phi-1）",
   "nameEn": "Model-based quality filtering and data pruning (FineWeb-Edu, DCLM, phi-1)",
   "what": "分類器（LLM による注釈で学習することが多い）で文書を採点し、品質の高い部分だけを残す。理論上は、良い枝刈り指標があればデータ量のべき乗則を上回れる。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "tokens",
    "compute"
   ],
   "effects": [
    {
     "text": "Matrix の最終 MMLU に、ほぼ10分の1のトークンで到達（FineWeb-Edu。Hugging Face、2024年）",
     "quote": "On MMLU, FineWeb-Edu can match the final performance of Matrix with almost 10x fewer tokens",
     "url": "https://arxiv.org/abs/2406.17557"
    },
    {
     "text": "MAP-Neo より計算量40%減で MMLU +6.6pt。Llama 3 8B と同程度の MMLU を6.6分の1の計算量で（DCLM-Baseline 7B、2.6T トークン）",
     "quote": "DCLM-Baseline represents a 6.6 percentage point improvement on MMLU while being trained with 40% less compute",
     "url": "https://arxiv.org/abs/2406.11794"
    },
    {
     "text": "教科書品質のデータで、1.3B のコードモデルを A100 8枚・4日で学習（phi-1。Microsoft、2023年）",
     "quote": "trained for 4 days on 8 A100s, using a selection of “textbook quality” data from the web (6B tokens)",
     "url": "https://arxiv.org/abs/2306.11644"
    }
   ],
   "tradeoffs": "分類器による選別はベンチマークに似た内容に偏るおそれ。「Beyond neural scaling laws」（arXiv:2206.14486）が効果を示したのは画像分野で、良い指標を作ること自体にもコストがかかる。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2406.17557",
   "tier": "primary"
  },
  {
   "id": "train-data-mixture-doremi",
   "section": "train",
   "group": "data",
   "name": "データ配合の最適化（DoReMi）",
   "nameEn": "Data mixture optimization (DoReMi)",
   "what": "小さな代理モデルを Group DRO（最も苦手な分野の損失を下げる学習法）で学習し、ドメインごとの重みを求める。その重みで再サンプルしたデータで大きなモデルを学習する。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "compute",
    "tokens"
   ],
   "effects": [
    {
     "text": "ベースラインの精度に2.6分の1のステップで到達。few-shot 精度+6.5pt（280M の代理モデルで重みを決め、8B モデルを学習。The Pile）",
     "quote": "reaches the baseline accuracy with 2.6x fewer training steps",
     "url": "https://arxiv.org/abs/2305.10429"
    }
   ],
   "tradeoffs": "代理モデルの学習が別に要る。効果は The Pile の既定の配合との比較。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2305.10429",
   "tier": "primary"
  },
  {
   "id": "train-data-repetition",
   "section": "train",
   "group": "data",
   "name": "データ不足時の複数エポック反復",
   "nameEn": "Multi-epoch data repetition under data constraints",
   "what": "固有のデータが足りないとき、同じデータを数エポック繰り返して学習する。繰り返したトークンの価値の目減りを織り込んだスケーリング則で見積もる。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "tokens"
   ],
   "effects": [
    {
     "text": "4エポックまでの反復なら、固有データだけの場合と比べ損失の差はごくわずか（最大9B パラメータ・900B トークン、400回の実験。2023年）",
     "quote": "training with up to 4 epochs of repeated data yields negligible changes to loss compared to having unique data",
     "url": "https://arxiv.org/abs/2305.16264"
    }
   ],
   "tradeoffs": "繰り返しが多いと、追加の計算の価値はゼロに近づく。減るのは必要な固有データ量で、FLOPs は減らない。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2305.16264",
   "tier": "primary"
  },
  {
   "id": "train-mup-transfer",
   "section": "train",
   "group": "data",
   "name": "μP / μTransfer（ハイパーパラメータのゼロショット転移）",
   "nameEn": "μP / μTransfer (zero-shot hyperparameter transfer)",
   "what": "Maximal Update Parametrization（μP）で、幅を広げても最適なハイパーパラメータが変わらないようにモデルを設計する。小さな代理モデルで調整し、その値を大きなモデルに移す。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "compute"
   ],
   "effects": [
    {
     "text": "調整コストは事前学習全体の7%だけで、公表された GPT-3 6.7B を上回る（40M のモデルから転移。Microsoft・OpenAI、2022年）",
     "quote": "we outperform the published numbers of the 6.7B GPT-3 model [7] with tuning cost being only 7% of total pretraining cost",
     "url": "https://arxiv.org/abs/2203.03466"
    }
   ],
   "tradeoffs": "μP のパラメータ化を採用する必要がある。正則化など、すべてのハイパーパラメータが転移するわけではない。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2203.03466",
   "tier": "primary"
  },
  {
   "id": "train-distillation-pretraining",
   "section": "train",
   "group": "distillation",
   "name": "知識蒸留と枝刈りによる小型モデルの事前学習（Minitron、Gemma 2、Llama 3.2）",
   "nameEn": "Knowledge distillation and pruning for smaller pretrained models (Minitron, Gemma 2, Llama 3.2)",
   "what": "各サイズをゼロから学習する代わりに、小さな生徒モデルに大きな教師モデルの次トークン分布をまねさせる。先に教師を構造的に枝刈りしてから蒸留することもある。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "tokens",
    "compute"
   ],
   "effects": [
    {
     "text": "モデルあたりの学習トークンが最大40分の1。15B/8B/4B のモデル群全体で計算量1.8倍の節約（Minitron。Nemotron-4 15B の枝刈り＋蒸留、NVIDIA、2024年）",
     "quote": "requires up to 40x fewer training tokens per model compared to training from scratch",
     "url": "https://arxiv.org/abs/2407.14679"
    },
    {
     "text": "2B/9B を蒸留で、計算最適なトークン数の50倍超で学習（Gemma 2。Google DeepMind、2024年。採用例でコスト削減の数字ではない）",
     "quote": "on a quantity of tokens that is more than 50× the compute-optimal quantity predicted by the theory",
     "url": "https://arxiv.org/abs/2408.00118"
    },
    {
     "text": "Llama 3.1 8B を1回の構造的枝刈りで縮め、8B/70B のロジットから蒸留して1B/3B を作成（Llama 3.2。Meta のブログ、2024年。コストの数字なし）",
     "quote": "using structured pruning in a single shot manner from the Llama 3.1 8B",
     "url": "https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/"
    }
   ],
   "tradeoffs": "学習済みの教師と、学習中の教師の推論（ロジットの計算）が要る。Gemma 2 は蒸留を品質のために使っており、コスト削減は主張していない。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2407.14679",
   "tier": "primary"
  },
  {
   "id": "train-reasoning-distillation",
   "section": "train",
   "group": "distillation",
   "name": "RL で得た推論能力の小型モデルへの蒸留（DeepSeek-R1-Distill）",
   "nameEn": "Distilling RL-trained reasoning into small models (DeepSeek-R1-Distill)",
   "what": "小型モデルで大規模な RL（強化学習）を回す代わりに、RL で鍛えた大型の教師が生成した推論過程で SFT（教師ありファインチューニング）する。",
   "stages": [
    "finetune"
   ],
   "reduces": [
    "compute"
   ],
   "effects": [
    {
     "text": "小型モデルでは蒸留が大規模 RL を上回る。大規模 RL には「膨大な計算力」が要る（DeepSeek-R1。Qwen2.5-32B ベース、教師のサンプル800K 件。コストは定性的）",
     "quote": "smaller models relying on the large-scale RL mentioned in this paper require enormous computational power",
     "url": "https://arxiv.org/abs/2501.12948"
    }
   ],
   "tradeoffs": "強い教師が要る。教師を超えるにはやはり大規模な RL が要るかもしれないと DeepSeek も述べている。",
   "noNumber": true,
   "year": 2025,
   "url": "https://arxiv.org/abs/2501.12948",
   "tier": "primary"
  },
  {
   "id": "train-lora",
   "section": "train",
   "group": "peft",
   "name": "LoRA（低ランク適応）",
   "nameEn": "LoRA (low-rank adaptation)",
   "what": "事前学習済みの重みを凍結し、各層に差し込んだ小さな低ランク行列だけを学習する。学習後に重みへ統合すれば、推論の遅れは増えない。",
   "stages": [
    "finetune"
   ],
   "reduces": [
    "memory",
    "compute"
   ],
   "effects": [
    {
     "text": "Adam による全パラメータのファインチューニングに比べ、学習するパラメータは10,000分の1・GPU メモリは3分の1（GPT-3 175B）",
     "quote": "LoRA can reduce the number of trainable parameters by 10,000 times and the GPU memory requirement by 3 times",
     "url": "https://arxiv.org/abs/2106.09685"
    },
    {
     "text": "VRAM 1.2TB→350GB。学習は25%高速（GPT-3 175B）",
     "quote": "On GPT-3 175B, we reduce the VRAM consumption during training from 1.2TB to 350GB.",
     "url": "https://arxiv.org/abs/2106.09685"
    },
    {
     "text": "方策勾配法の RL ではランク1でも全パラメータ学習と同等。1回の計算あたり FLOPs は全パラメータ学習の3分の2強（Thinking Machines「LoRA Without Regret」、2025年）",
     "quote": "LoRA fully matches the learning performance of FullFT when running policy gradient algorithms",
     "url": "https://thinkingmachines.ai/blog/lora/"
    }
   ],
   "tradeoffs": "データが多い場合や表現力が足りない場合は、全パラメータのファインチューニングに劣ることがある（LoRA Without Regret と GaLore が指摘）。",
   "noNumber": false,
   "year": 2021,
   "url": "https://arxiv.org/abs/2106.09685",
   "tier": "primary"
  },
  {
   "id": "train-qlora",
   "section": "train",
   "group": "peft",
   "name": "QLoRA（4ビット量子化したベース + LoRA）",
   "nameEn": "QLoRA (4-bit quantized base + LoRA)",
   "what": "4ビット NF4 で量子化して凍結したベースモデルを通して逆伝播し、LoRA アダプタを学習する。二重量子化とページングするオプティマイザでメモリをさらに減らす。",
   "stages": [
    "finetune"
   ],
   "reduces": [
    "memory"
   ],
   "effects": [
    {
     "text": "65B のファインチューニングが48GB の GPU 1枚で可能。従来は780GB 超（LLaMA 65B。16ビットの全パラメータ学習が比較相手）",
     "quote": "QLoRA reduces the average memory requirements of finetuning a 65B parameter model from >780GB of GPU memory to <48GB",
     "url": "https://arxiv.org/abs/2305.14314"
    },
    {
     "text": "Guanaco が GPU 1枚・24時間の学習で、Vicuna ベンチマークにおいて ChatGPT の99.3%に到達（Guanaco モデル群）",
     "quote": "while only requiring 24 hours of finetuning on a single GPU",
     "url": "https://arxiv.org/abs/2305.14314"
    }
   ],
   "tradeoffs": "逆量子化（4ビットから戻す計算）のオーバーヘッドがある。品質は4ビットで近似したベースモデルに依存する。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2305.14314",
   "tier": "primary"
  },
  {
   "id": "train-adapters-prefix",
   "section": "train",
   "group": "peft",
   "name": "Adapter と prefix-tuning（初期の PEFT）",
   "nameEn": "Adapters and prefix-tuning (early PEFT)",
   "what": "Adapter は小さなボトルネック層を差し込み、prefix-tuning は連続値の「仮想トークン」ベクトルを学習する。どちらもベースモデルの重みは凍結したまま。",
   "stages": [
    "finetune"
   ],
   "reduces": [
    "memory"
   ],
   "effects": [
    {
     "text": "タスクあたり3.6%のパラメータで、GLUE の全パラメータ学習との差0.4%以内（BERT への Adapter、2019年）",
     "quote": "On GLUE, we attain within 0.4% of the performance of full fine-tuning, adding only 3.6% parameters per task.",
     "url": "https://arxiv.org/abs/1902.00751"
    },
    {
     "text": "0.1%のパラメータで同程度の性能（GPT-2・BART への prefix-tuning、2021年）",
     "quote": "by learning only 0.1% of the parameters, prefix-tuning obtains comparable performance in the full data setting",
     "url": "https://arxiv.org/abs/2101.00190"
    }
   ],
   "tradeoffs": "Adapter は推論の遅れを増やす（統合できる LoRA と違う）。主な節約はタスクごとの保存容量とオプティマイザのメモリ。",
   "noNumber": false,
   "year": 2019,
   "url": "https://arxiv.org/abs/1902.00751",
   "tier": "primary"
  },
  {
   "id": "train-grpo",
   "section": "train",
   "group": "rl",
   "name": "GRPO（Group Relative Policy Optimization）",
   "nameEn": "GRPO (Group Relative Policy Optimization)",
   "what": "PPO の変種で、価値モデル（critic）を使わない。同じプロンプトへの複数の回答の報酬から、アドバンテージ（平均よりどれだけ良いか）の基準を求める。",
   "stages": [
    "finetune"
   ],
   "reduces": [
    "memory",
    "compute"
   ],
   "effects": [
    {
     "text": "critic（通常は方策モデルと同程度の大きさ）を不要にする。節約量は定性的（DeepSeekMath 7B）",
     "quote": "GRPO foregoes the critic model, instead estimating the baseline from group scores, significantly reducing training resources",
     "url": "https://arxiv.org/abs/2402.03300"
    }
   ],
   "tradeoffs": "プロンプトごとに複数の回答を生成するので、生成の量が増える。元の論文にメモリや計算量の数値はない。",
   "noNumber": true,
   "year": 2024,
   "url": "https://arxiv.org/abs/2402.03300",
   "tier": "primary"
  },
  {
   "id": "train-dpo",
   "section": "train",
   "group": "rl",
   "name": "DPO（Direct Preference Optimization）",
   "nameEn": "DPO (Direct Preference Optimization)",
   "what": "RLHF の目的関数を書き換え、好みのペアに対する単純な分類の損失で方策を最適化する。別の報酬モデルも、学習中のオンライン生成も要らない。",
   "stages": [
    "finetune"
   ],
   "reduces": [
    "compute",
    "memory"
   ],
   "effects": [
    {
     "text": "ファインチューニング中に LM からのサンプリングが不要。PPO による RLHF と同等以上（定性的。感情制御・要約・対話、2023年）",
     "quote": "eliminating the need for sampling from the LM during fine-tuning or performing significant hyperparameter tuning",
     "url": "https://arxiv.org/abs/2305.18290"
    },
    {
     "text": "大きなモデルでは DPO の方が PPO より計算量が少なかった（Meta、Llama 3 の事後学習）",
     "quote": "found that DPO required less compute for large-scale models and performed better",
     "url": "https://arxiv.org/abs/2407.21783"
    }
   ],
   "tradeoffs": "オフラインで学習するので、品質は好みデータの分布に左右される（Llama 3 は直近のモデルで作った、オンポリシーに近いバッチを使う）。",
   "noNumber": true,
   "year": 2023,
   "url": "https://arxiv.org/abs/2305.18290",
   "tier": "primary"
  },
  {
   "id": "train-async-rl",
   "section": "train",
   "group": "rl",
   "name": "非同期・オフポリシーの RL システム（AReaL、Asynchronous RLHF）",
   "nameEn": "Asynchronous / off-policy RL systems (AReaL, Asynchronous RLHF)",
   "what": "回答の生成（ロールアウト）と学習を切り離し、一番長い生成を GPU が待たずに済むようにする。データの古さ（staleness）の制御や、オフポリシーに強い目的関数を使う。",
   "stages": [
    "finetune"
   ],
   "reduces": [
    "time"
   ],
   "effects": [
    {
     "text": "同じ GPU 数の同期型システムに比べ、学習が最大2.77倍高速（AReaL。数学・コードの推論）",
     "quote": "AReaL achieves up to 2.77× training speedup compared to synchronous systems with the same number of GPUs",
     "url": "https://arxiv.org/abs/2505.24298"
    },
    {
     "text": "同等の性能で同期型より約40%高速（LLaMA 3.1 8B のチャットボット、オンライン DPO）",
     "quote": "training a general-purpose chatbot from LLaMA 3.1 8B on an instruction-following task ~40% faster than a synchronous run",
     "url": "https://arxiv.org/abs/2410.18252"
    }
   ],
   "tradeoffs": "古いモデルで生成したデータ（オフポリシー）が学習を損なうことがあり、許容範囲の制御が要る。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2505.24298",
   "tier": "primary"
  },
  {
   "id": "train-evolution-strategies",
   "section": "train",
   "group": "rl",
   "name": "進化戦略による LLM ファインチューニング（逆伝播なし）",
   "nameEn": "Evolution strategies for LLM fine-tuning (backprop-free)",
   "what": "全パラメータにシード付きのノイズを加えた少数の個体（例：30）を推論だけで評価し、スカラーの報酬から重みを更新する。勾配も参照モデルも critic も使わない。",
   "stages": [
    "finetune"
   ],
   "reduces": [
    "memory",
    "compute",
    "comm"
   ],
   "effects": [
    {
     "text": "推論だけで勾配計算がなく、GPU メモリを節約。1サンプルあたり順伝播1回（GRPO は順伝播2回と逆伝播1回）。FLOPs の優位は定性的（Qwen2.5・Llama 3、最大約8B。2025年）",
     "quote": "Fine-tuning with ES only requires inference, and therefore no gradient calculations are needed.",
     "url": "https://arxiv.org/abs/2509.24372"
    },
    {
     "text": "個体数30で足りた。従来の進化戦略の研究は10,000以上（10億パラメータ級の LLM）",
     "quote": "the ES implementation only needs a population of 30 to effectively optimize billions of parameters",
     "url": "https://arxiv.org/abs/2509.24372"
    }
   ],
   "tradeoffs": "2025年の新しい手法。検証は Countdown・簡潔さ・GSM8K などの限られたタスク。大規模での RL と比べた総コストは確かめられていない。",
   "noNumber": false,
   "year": 2025,
   "url": "https://arxiv.org/abs/2509.24372",
   "tier": "primary"
  },
  {
   "id": "train-adafactor",
   "section": "train",
   "group": "optimizer",
   "name": "Adafactor（2次モーメントの分解）",
   "nameEn": "Adafactor (factored second moments)",
   "what": "重み行列の2次モーメントの推定を行と列の合計だけで持ち、モーメンタムも省く。オプティマイザのメモリが劣線形（パラメータ数より小さい伸び）で済む。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "memory"
   ],
   "effects": [
    {
     "text": "WMT14 英独の Transformer 翻訳で Adam と同等。補助メモリは「ごくわずか」（定性的。Google、2018年）",
     "quote": "while using very little auxiliary storage in the optimizer",
     "url": "https://arxiv.org/abs/1804.04235"
    }
   ],
   "tradeoffs": "要旨にメモリの数値はない。更新のクリッピングがないと不安定になりやすい。",
   "noNumber": true,
   "year": 2018,
   "url": "https://arxiv.org/abs/1804.04235",
   "tier": "primary"
  },
  {
   "id": "train-8bit-optimizers",
   "section": "train",
   "group": "optimizer",
   "name": "8ビットオプティマイザ（ブロック単位で量子化した Adam）",
   "nameEn": "8-bit optimizers (block-wise quantized Adam)",
   "what": "オプティマイザ状態をブロック単位の動的量子化で8ビットにして持つ。安定化用の埋め込み層も併用する。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "memory"
   ],
   "effects": [
    {
     "text": "32ビットと同じ性能を、ごく一部のオプティマイザメモリで維持（定性的）。コード2行の変更で置き換え可能（1.5B の LM・GLUE・ImageNet・WMT14・RoBERTa。2021年）",
     "quote": "our 8-bit optimizers maintain 32-bit performance with a small fraction of the memory footprint",
     "url": "https://arxiv.org/abs/2110.02861"
    },
    {
     "text": "8-bit GaLore で BF16 比オプティマイザメモリ82.5%減・学習全体のメモリ63.3%減（LLaMA 7B の事前学習。GaLore 論文）",
     "quote": "Our 8-bit GaLore further reduces optimizer memory by up to 82.5% and total training memory by 63.3%",
     "url": "https://arxiv.org/abs/2403.03507"
    }
   ],
   "tradeoffs": "要旨に単一の倍率はない。構造上は Adam の状態が要素あたり32ビットから8ビットに縮む。2つ目の数字は GaLore と組み合わせた値。",
   "noNumber": false,
   "year": 2021,
   "url": "https://arxiv.org/abs/2110.02861",
   "tier": "primary"
  },
  {
   "id": "train-galore",
   "section": "train",
   "group": "optimizer",
   "name": "GaLore（勾配の低ランク射影）",
   "nameEn": "GaLore (gradient low-rank projection)",
   "what": "オプティマイザ状態のために勾配を低ランクの部分空間へ射影しつつ、重みは全ランクで更新する。部分空間は定期的に入れ替える。",
   "stages": [
    "pretrain",
    "finetune"
   ],
   "reduces": [
    "memory"
   ],
   "effects": [
    {
     "text": "オプティマイザ状態のメモリを最大65.5%削減。24GB の民生用 GPU で7B の事前学習（LLaMA 1B/7B。C4 で最大19.7B トークン）",
     "quote": "we demonstrate, for the first time, the feasibility of pre-training a 7B model on consumer GPUs with 24GB memory",
     "url": "https://arxiv.org/abs/2403.03507"
    }
   ],
   "tradeoffs": "定期的な SVD（特異値分解）の計算が加わる。検証は中程度のトークン数まで。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2403.03507",
   "tier": "primary"
  },
  {
   "id": "train-muon",
   "section": "train",
   "group": "optimizer",
   "name": "Muon（モーメンタムを直交化するオプティマイザ）",
   "nameEn": "Muon (orthogonalized momentum optimizer)",
   "what": "行列パラメータのモーメンタム更新を Newton-Schulz 反復で直交化する。Moonshot は大規模向けに、重み減衰とパラメータごとの更新スケール調整を加えた。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "compute"
   ],
   "effects": [
    {
     "text": "計算最適な学習で AdamW の約2倍の計算効率（Moonshot AI のスケーリング則実験。Moonlight 3B/16B MoE、5.7T トークン）",
     "quote": "Scaling law experiments indicate that Muon achieves ∼2× computational efficiency compared to AdamW",
     "url": "https://arxiv.org/abs/2502.16982"
    },
    {
     "text": "独立ベンチマークでは行列ベースのオプティマイザの高速化が縮む。0.1B で1.4倍、1.2B で1.1倍（Fantastic Pretraining Optimizers、2025年。よく調整した AdamW が比較相手）",
     "quote": "decreasing from 1.4x over AdamW for 0.1B parameter models to merely 1.1x for 1.2B parameter models",
     "url": "https://arxiv.org/abs/2509.02046"
    }
   ],
   "tradeoffs": "報告される高速化は調整の度合いと規模で変わる。約2倍は Moonshot 自身の報告で、独立した比較では規模が大きいほど差が縮む。Kimi K2 は安定化に QK-clip（MuonClip）が必要だった。",
   "noNumber": false,
   "year": 2025,
   "url": "https://arxiv.org/abs/2502.16982",
   "tier": "primary"
  },
  {
   "id": "train-sophia",
   "section": "train",
   "group": "optimizer",
   "name": "Sophia（クリッピング付きの対角2次最適化）",
   "nameEn": "Sophia (clipped diagonal second-order optimizer)",
   "what": "安価でまれにしか更新しないヘッセ行列（損失の曲がり具合）の対角推定で更新を補正し、要素ごとにクリッピングする。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "同じパープレキシティに、Adam の2分の1のステップ・計算量・実時間で到達（GPT-2 型、125M〜1.5B）",
     "quote": "Sophia achieves a 2x speed-up compared to Adam in the number of steps, total compute, and wall-clock time",
     "url": "https://arxiv.org/abs/2305.14342"
    },
    {
     "text": "独立ベンチマークでは、主張された1.4〜2倍の高速化は、よく調整した AdamW に対して主張より小さい（Fantastic Pretraining Optimizers。0.1B〜1.2B）",
     "quote": "the actual speedup of many proposed optimizers over well-tuned baselines is lower than claimed",
     "url": "https://arxiv.org/abs/2509.02046"
    }
   ],
   "tradeoffs": "最先端規模での高速化は一次資料では確かめられていない。2倍は著者自身による Adam との比較で、独立した比較では差が小さい。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2305.14342",
   "tier": "primary"
  },
  {
   "id": "train-model-growth",
   "section": "train",
   "group": "other",
   "name": "モデル成長（深さ方向の積み重ね、G_stack）",
   "nameEn": "Model growth / depthwise stacking (G_stack)",
   "what": "先に小さなモデルを学習し、その層を深さ方向に積み重ねるなどして大きなモデルを初期化してから学習を続ける。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "tokens",
    "compute"
   ],
   "effects": [
    {
     "text": "同じ損失に300B ではなく194B トークンで到達。54.6%の高速化（7B モデル、2024年）",
     "quote": "our G_stack model converges to the same loss with 194B tokens, resulting in a 54.6% speedup",
     "url": "https://arxiv.org/abs/2405.15319"
    }
   ],
   "tradeoffs": "成長させる時期と倍率を決める必要がある。検証は7B・750B トークンまで。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2405.15319",
   "tier": "primary"
  },
  {
   "id": "train-seq-length-warmup",
   "section": "train",
   "group": "other",
   "name": "系列長ウォームアップ（カリキュラム）",
   "nameEn": "Sequence length warmup (curriculum)",
   "what": "事前学習を短い系列から始めて徐々に長くする。大きなバッチサイズと学習率でも学習が安定する。",
   "stages": [
    "pretrain"
   ],
   "reduces": [
    "tokens",
    "time"
   ],
   "effects": [
    {
     "text": "同じゼロショット結果に、最大でトークン数2.2分の1・実時間3.7分の1で到達（GPT-2 の再現。Microsoft DeepSpeed、2021年）",
     "quote": "our method reduces the required number of training tokens and wall clock time by up to 2.2x and 3.7x, respectively",
     "url": "https://arxiv.org/abs/2108.06084"
    }
   ],
   "tradeoffs": "結果は GPT-2・GPT-3 125M の規模。比較相手は、ウォームアップなしでは不安定になるほど大きなバッチと学習率を使っている。",
   "noNumber": false,
   "year": 2021,
   "url": "https://arxiv.org/abs/2108.06084",
   "tier": "primary"
  },
  {
   "id": "model-llm-int8",
   "section": "model",
   "group": "quantization",
   "name": "LLM.int8()",
   "nameEn": "LLM.int8() (8-bit weight quantization with mixed-precision outlier decomposition)",
   "what": "行列積の大部分を 8 ビット整数で計算し、外れ値の特徴次元だけを 16 ビットで計算する量子化（重みなどの数値をより少ないビット数で表すこと）。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "cost"
   ],
   "effects": [
    {
     "text": "推論メモリをおよそ半減（最大 175B パラメータの Transformer、OPT-175B・BLOOM などで 16 ビットとの比較）",
     "quote": "cut the memory needed for inference by half while retaining full precision performance",
     "url": "https://arxiv.org/abs/2208.07339"
    },
    {
     "text": "99.9% 超の値を 8 ビットで乗算（混合精度の分解、外れ値は 16 ビットのまま）",
     "quote": "still more than 99.9% of values are multiplied in 8-bit",
     "url": "https://arxiv.org/abs/2208.07339"
    },
    {
     "text": "175B モデルをコンシューマー GPU 搭載のサーバー 1 台で実行（OPT-175B・BLOOM）",
     "quote": "making it possible to use OPT-175B/BLOOM on a single server with consumer GPUs",
     "url": "https://arxiv.org/abs/2208.07339"
    }
   ],
   "tradeoffs": "論文は 175B まで性能低下なしと主張。要旨が主な利点とするのはメモリ削減で、速度ではない。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2208.07339",
   "tier": "primary"
  },
  {
   "id": "model-gptq",
   "section": "model",
   "group": "quantization",
   "name": "GPTQ",
   "nameEn": "GPTQ (one-shot post-training 3-4-bit weight quantization)",
   "what": "学習済みモデルの重みを層ごとに一度で 3〜4 ビットへ量子化（数値を少ないビット数で表すこと）する。近似的な 2 次情報（ヘッセ行列）で量子化の誤差を補正する。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "comm",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "重み 1 つあたり 3〜4 ビットで精度低下はごくわずか、175B の量子化は約 4 GPU 時間（最大 175B の GPT・OPT モデル、非圧縮モデルとの比較）",
     "quote": "reducing the bitwidth down to 3 or 4 bits per weight, with negligible accuracy degradation relative to the uncompressed baseline",
     "url": "https://arxiv.org/abs/2210.17323"
    },
    {
     "text": "エンドツーエンドで約 3.25 倍（A100）・約 4.5 倍（A6000）の高速化（生成推論、FP16 との比較）",
     "quote": "end-to-end inference speedups over FP16, of around 3.25x when using high-end GPUs (NVIDIA A100) and 4.5x when using more cost-effective ones (NVIDIA A6000)",
     "url": "https://arxiv.org/abs/2210.17323"
    },
    {
     "text": "175B モデルが GPU 1 枚に収まる（生成推論）",
     "quote": "allowing us for the first time to execute an 175 billion-parameter model inside a single GPU for generative inference",
     "url": "https://arxiv.org/abs/2210.17323"
    }
   ],
   "tradeoffs": "要旨によると 2 ビットや 3 値では「まずまずの精度」にとどまる。量子化するのは重みだけで、活性化（層の中間出力）は FP16 のまま。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2210.17323",
   "tier": "primary"
  },
  {
   "id": "model-awq",
   "section": "model",
   "group": "quantization",
   "name": "AWQ（Activation-aware Weight Quantization）",
   "nameEn": "AWQ (Activation-aware Weight Quantization)",
   "what": "活性化（層の中間出力）の統計から重要な約 1% の重みチャネルを見つけ、チャネルごとのスケーリングで守りながら重みを 4 ビットなどに量子化する。誤差逆伝播は不要。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "comm",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "重要な 1% の重みを守ると誤差が大きく減る（LLM の重みのみの量子化）",
     "quote": "Protecting only 1% salient weights can greatly reduce quantization error",
     "url": "https://arxiv.org/abs/2306.00978"
    },
    {
     "text": "3 倍超の高速化（TinyChat で 4 ビット、デスクトップ・モバイル GPU、Hugging Face の FP16 実装との比較）",
     "quote": "TinyChat offers more than 3x speedup over the Huggingface FP16 implementation on both desktop and mobile GPUs",
     "url": "https://arxiv.org/abs/2306.00978"
    },
    {
     "text": "70B の Llama-2 をモバイル GPU で実行（4 ビットでのオンデバイス展開）",
     "quote": "It also democratizes the deployment of the 70B Llama-2 model on mobile GPUs",
     "url": "https://arxiv.org/abs/2306.00978"
    }
   ],
   "tradeoffs": "高速化の数字は著者ら自身の TinyChat カーネルによるもので、AWQ 単体の効果ではない。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2306.00978",
   "tier": "primary"
  },
  {
   "id": "model-smoothquant",
   "section": "model",
   "group": "quantization",
   "name": "SmoothQuant",
   "nameEn": "SmoothQuant (W8A8 post-training quantization)",
   "what": "活性化の外れ値の扱いにくさを、数学的に等価なチャネルごとのスケーリングで重み側へ移す学習後量子化。重みと活性化の両方を INT8 にでき、すべての行列積を 8 ビットで計算する（W8A8）。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "最大 1.56 倍の高速化と 2 倍のメモリ削減（OPT・BLOOM・GLM・MT-NLG・Llama-1/2・Falcon・Mistral・Mixtral などの LLM、精度低下はごくわずか）",
     "quote": "We demonstrate up to 1.56x speedup and 2x memory reduction for LLMs with negligible loss in accuracy",
     "url": "https://arxiv.org/abs/2211.10438"
    },
    {
     "text": "530B モデルを 1 ノードで提供（MT-NLG 530B）",
     "quote": "SmoothQuant enables serving 530B LLM within a single node",
     "url": "https://arxiv.org/abs/2211.10438"
    }
   ],
   "tradeoffs": "追加の学習は不要。精度低下がごくわずかという評価は要旨の記述による。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2211.10438",
   "tier": "primary"
  },
  {
   "id": "model-quarot",
   "section": "model",
   "group": "quantization",
   "name": "QuaRot",
   "nameEn": "QuaRot (rotation-based end-to-end 4-bit W4A4KV4)",
   "what": "出力を変えない直交回転（アダマール変換）を隠れ状態や活性化にかけて外れ値を消す。すべての行列積と KV キャッシュ（生成済みトークンのキーと値の保存領域）を 4 ビット整数で扱えるようにする。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "最大でプリフィル（入力プロンプトの処理）3.33 倍の高速化、デコード時のメモリ 3.89 倍の削減（LLaMA2-70B、バッチ 64、系列長 2048）",
     "quote": "QuaRot achieves up to 3.33× prefill speedups (on a batch size 64 with 2048 sequence length), and 3.89× memory saving during the decoding stage",
     "url": "https://arxiv.org/abs/2404.00456"
    },
    {
     "text": "WikiText-2 のパープレキシティ悪化は最大 0.47、ゼロショット性能の 99% を維持（4 ビットの LLaMa2-70B）",
     "quote": "Our 4-bit quantized LLaMa2-70B model has losses of at most 0.47 WikiText-2 perplexity and retains 99% of the zero-shot performance",
     "url": "https://arxiv.org/abs/2404.00456"
    }
   ],
   "tradeoffs": "4 ビットではパープレキシティ（予測の外れ具合を示す指標）がわずかに悪化する（LLaMA2-70B で 0.47 以下）。6・8 ビットは RTN（単純な丸め）でも劣化なしと報告。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2404.00456",
   "tier": "primary"
  },
  {
   "id": "model-aqlm",
   "section": "model",
   "group": "quantization",
   "name": "AQLM",
   "nameEn": "AQLM (additive / multi-codebook 2-bit weight quantization)",
   "what": "重みのグループを、学習したコードブック（代表ベクトルの表）のベクトルの和で表す加法量子化。Transformer ブロックごとにコードブックを最適化し、1 パラメータあたり約 2〜3 ビットにする。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "comm"
   ],
   "effects": [
    {
     "text": "3 ビット未満でパレート最適、つまりサイズと精度の兼ね合いで最良（LLaMA 2 7B・13B・70B、QuIP# と FP16 との比較）",
     "quote": "AQLM is the first scheme that is Pareto optimal in terms of accuracy-vs-model-size when compressing to less than 3 bits per parameter",
     "url": "https://arxiv.org/abs/2401.06118"
    },
    {
     "text": "CPU で FP32 比最大 4 倍高速な推論（8 ビットコードブックの CPU 版、論文の Table 5）",
     "quote": "this also allows for up to 4x faster inference relative to FP32 on CPU",
     "url": "https://arxiv.org/abs/2401.06118"
    }
   ],
   "tradeoffs": "論文自身が、従来手法の 2 ビット量子化は 3〜4 ビットの小さいモデルを使うより劣っていたと指摘する。AQLM はこの領域を改善すると主張している。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2401.06118",
   "tier": "primary"
  },
  {
   "id": "model-fp8-inference",
   "section": "model",
   "group": "quantization",
   "name": "FP8 推論量子化（E4M3・E5M2）",
   "nameEn": "FP8 (E4M3/E5M2) inference quantization",
   "what": "Hopper 世代の GPU がネイティブ対応する 8 ビット浮動小数点形式（E4M3・E5M2）で、多くの行列積の重みと活性化を表す。行ごとのスケーリングなどと組み合わせる。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "プリフィルのスループット最大 50% 向上（H100 上の Llama 3 405B、FP8 と 2 台構成の BF16 パイプライン並列推論の比較、入力 4,096・出力 256 トークン）",
     "quote": "use of FP8 inference leads to throughput improvements of up to 50% during the pre-fill stage",
     "url": "https://arxiv.org/abs/2407.21783"
    },
    {
     "text": "応答への影響はごくわずか（報酬スコアの分布で評価、Llama 3 405B の BF16 と FP8 の比較）",
     "quote": "Our FP8 quantization approach has negligible impact on the model’s responses",
     "url": "https://arxiv.org/abs/2407.21783"
    },
    {
     "text": "FP8 は BF16 比で 1.4 倍のスループット（H100 上の Llama-3.1-Minitron-4B、TensorRT-LLM）",
     "quote": "Compared to BF16, we notice that FP8 delivers a performance boost of 1.4×",
     "url": "https://arxiv.org/abs/2408.11796"
    }
   ],
   "tradeoffs": "Llama 3 チームは最初と最後の Transformer 層を量子化せずに残した。パープレキシティの高いトークンでアンダーフローやデコード誤りが起きたため、動的スケール係数にも上限を設けた。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2209.05433",
   "tier": "primary"
  },
  {
   "id": "model-mxfp4",
   "section": "model",
   "group": "quantization",
   "name": "MXFP4（OCP Microscaling 4 ビット浮動小数点）",
   "nameEn": "MXFP4 (OCP Microscaling 4-bit floating point)",
   "what": "4 ビット浮動小数点（E2M1）の要素を小さなブロックに分け、ブロックごとに 2 のべき乗のスケールを 1 つ共有する形式。gpt-oss では MoE（トークンごとに一部の専門家層だけを使う構成）の重みに使う。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "comm",
    "cost"
   ],
   "effects": [
    {
     "text": "1 パラメータあたり 4.25 ビット、120B モデルが 80GB の GPU 1 枚に載る（gpt-oss-120b、パラメータの 90% 超を占める MoE 重みを MXFP4 化）",
     "quote": "quantizing these to MXFP4 enables the larger model to fit on a single 80GB GPU",
     "url": "https://arxiv.org/abs/2508.10925"
    },
    {
     "text": "116.83B パラメータでチェックポイントは 60.8GiB（gpt-oss-120b、Table 1）",
     "quote": "Total Parameters 116.83B 20.91B Checkpoint Size 60.8GiB 12.8GiB",
     "url": "https://arxiv.org/abs/2508.10925"
    },
    {
     "text": "20b モデルは最小 16GB のメモリで動作（gpt-oss-20b）",
     "quote": "the smaller model to run on systems with as little as 16GB memory",
     "url": "https://arxiv.org/abs/2508.10925"
    }
   ],
   "tradeoffs": "gpt-oss は MXFP4 量子化を前提に事後学習されている（量子化を考慮した学習）。MX の論文は FP32 推論の置き換えとして手間なく使えると主張する。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2310.10537",
   "tier": "primary"
  },
  {
   "id": "model-nvfp4",
   "section": "model",
   "group": "quantization",
   "name": "NVFP4（NVIDIA Blackwell 4 ビット浮動小数点）",
   "nameEn": "NVFP4 (NVIDIA Blackwell 4-bit floating point)",
   "what": "4 ビット浮動小数点（E2M1）の値に、16 要素ごとの FP8（E4M3）スケールとテンソル全体の FP32 スケールを付ける。MXFP4 より細かいスケーリングで、Blackwell の Tensor Core が高速に処理する。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "comm",
    "compute",
    "cost"
   ],
   "effects": [
    {
     "text": "メモリを FP16 比で約 3.5 倍、FP8 比で約 1.8 倍削減（モデルの重み、NVIDIA ブログ）",
     "quote": "This reduces the model memory footprint by approximately 3.5x relative to FP16, and approximately 1.8x compared to FP8",
     "url": "https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/"
    },
    {
     "text": "FP8 比の精度低下は 1% 以下（DeepSeek-R1-0528 のベンチマーク）",
     "quote": "achieving 1% or less accuracy degradation versus FP8 on DeepSeek-R1-0528 benchmarks",
     "url": "https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/"
    }
   ],
   "tradeoffs": "ベンダー（NVIDIA）のブログの数字で、査読を経ていない。ネイティブな高速化には Blackwell 世代のハードウェアが必要。",
   "noNumber": false,
   "year": 2025,
   "url": "https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/",
   "tier": "primary"
  },
  {
   "id": "model-bitnet-b158",
   "section": "model",
   "group": "quantization",
   "name": "BitNet b1.58",
   "nameEn": "BitNet b1.58 (native ternary {-1,0,1} weights)",
   "what": "すべての重みを {-1, 0, 1} の 3 値（約 1.58 ビット）に、活性化を 8 ビットに制限してモデルをゼロから学習する。行列積の大半が足し算になる。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "comm",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "2.71 倍高速、GPU メモリ 3.55 倍削減（BitNet b1.58 3B と FP16 の LLaMA LLM 3B の比較、パープレキシティは同等）",
     "quote": "while being 2.71 times faster and using 3.55 times less GPU memory",
     "url": "https://arxiv.org/abs/2402.17764"
    },
    {
     "text": "埋め込み以外のメモリ 0.4GB、CPU での TPOT 29ms、推定エネルギー 0.028J（BitNet b1.58 2B4T と 1〜2B 級オープンモデルの比較。例：LLaMA 3.2 1B は 2GB・48ms・0.258J。TPOT は出力 1 トークンあたりの時間）",
     "quote": "Memory 2GB 1.4GB 2.6GB 3.2GB 4.8GB 0.4GB (Non-emb) Latency 48ms 41ms 65ms 67ms 124ms 29ms (CPU; TPOT)",
     "url": "https://arxiv.org/abs/2504.12285"
    }
   ],
   "tradeoffs": "ゼロからの学習が必要で、学習済みモデルを後から量子化する手法ではない。速度向上には bitnet.cpp などの専用カーネルが要る。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2402.17764",
   "tier": "primary"
  },
  {
   "id": "model-kivi",
   "section": "model",
   "group": "quantization",
   "name": "KIVI",
   "nameEn": "KIVI (2-bit KV-cache quantization)",
   "what": "KV キャッシュ（生成済みトークンのキーと値の保存領域）を調整なしで非対称な 2 ビットに量子化する。キーはチャネルごと・値はトークンごとに量子化し、直近の少数は元の精度で残す。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "comm",
    "cost"
   ],
   "effects": [
    {
     "text": "ピークメモリ 2.6 倍削減、バッチサイズ最大 4 倍、スループット 2.35〜3.47 倍（Llama・Falcon・Mistral、ピークメモリは重みを含む）",
     "quote": "KIVI can enable Llama, Falcon, and Mistral models to maintain almost the same quality while using 2.6× less peak memory (including model weight)",
     "url": "https://arxiv.org/abs/2402.02750"
    },
    {
     "text": "スループット 2.35〜3.47 倍（実際の LLM 推論ワークロード）",
     "quote": "This reduction in memory usage enables up to 4× larger batch size, bringing 2.35× ∼ 3.47× throughput on real LLM inference workload",
     "url": "https://arxiv.org/abs/2402.02750"
    }
   ],
   "tradeoffs": "品質が「ほぼ同じ」という評価は要旨の主張による。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2402.02750",
   "tier": "primary"
  },
  {
   "id": "model-sparsegpt",
   "section": "model",
   "group": "pruning",
   "name": "SparseGPT",
   "nameEn": "SparseGPT (one-shot unstructured / semi-structured pruning)",
   "what": "再学習なしで一度に枝刈り（不要な重みをゼロにすること）する。層ごとの疎な回帰問題を解き、近似的な 2 次情報で残りの重みを更新する。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory"
   ],
   "effects": [
    {
     "text": "一度でスパース性 50%・精度低下は最小限、60% でもパープレキシティの増加はごくわずか（OPT-175B・BLOOM-176B、4.5 時間未満で枝刈り）",
     "quote": "can reach 60% unstructured sparsity with negligible increase in perplexity",
     "url": "https://arxiv.org/abs/2301.00774"
    },
    {
     "text": "100B 超の重みを推論時に無視できる（OPT-175B・BLOOM-176B）",
     "quote": "more than 100 billion weights from these models can be ignored at inference time",
     "url": "https://arxiv.org/abs/2301.00774"
    }
   ],
   "tradeoffs": "非構造的なスパース性は、専用の疎行列カーネルやハードウェアがないと実時間の高速化につながらない。2:4・4:8 のパターンや量子化との併用に対応する。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2301.00774",
   "tier": "primary"
  },
  {
   "id": "model-wanda",
   "section": "model",
   "group": "pruning",
   "name": "Wanda（Pruning by Weights and activations）",
   "nameEn": "Wanda (Pruning by Weights and activations)",
   "what": "重みの絶対値と入力活性化のノルムの積が小さい重みを、出力ごとに枝刈り（ゼロにすること）する。再学習や重みの更新は不要。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "time"
   ],
   "effects": [
    {
     "text": "2:4 で線形層が約 1.6 倍高速、エンドツーエンドのレイテンシで 1.24 倍（LLaMA-65B の行列積は CUTLASS、LLaMA-7B のエンドツーエンドは 251ms 対 312ms）",
     "quote": "For end to end latency, we observe a speedup of 1.24× on LLaMA-7B (251ms as compared to 312ms)",
     "url": "https://arxiv.org/abs/2306.11695"
    },
    {
     "text": "線形層の高速化は約 1.6 倍（LLaMA-65B、バッチサイズ 1、構造化 2:4 は重み 4 つのうち 2 つがゼロ）",
     "quote": "Structured 2:4 sparsity is able to bring notable inference speedup (around 1.6×) for linear layers in LLMs",
     "url": "https://arxiv.org/abs/2306.11695"
    }
   ],
   "tradeoffs": "LLaMA-7B の WikiText パープレキシティは密な 5.68 から、非構造 50% で 7.26、2:4 で 11.53 に悪化する（Table 3）。著者らは高速化がスパース性そのものによるもので Wanda 固有ではないとしている。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2306.11695",
   "tier": "primary"
  },
  {
   "id": "model-nm-sparsity-2-4",
   "section": "model",
   "group": "pruning",
   "name": "2:4 半構造化スパース性（Sparse Tensor Core）",
   "nameEn": "2:4 semi-structured sparsity on Sparse Tensor Cores",
   "what": "連続する 4 つの重みのうち 2 つを必ずゼロ（50%）にする細かなパターン。NVIDIA Ampere 以降の Sparse Tensor Core が計算の半分を省ける。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "密な計算に比べ演算スループット 2 倍（NVIDIA Ampere の Sparse Tensor Core、2:4・50% のスパース性）",
     "quote": "exploit a 2:4 (50%) sparsity pattern that leads to twice the math throughput of dense matrix units",
     "url": "https://arxiv.org/abs/2104.08378"
    }
   ],
   "tradeoffs": "2 倍は演算性能のピーク値。LLM 全体での効果はより小さく（Wanda では 1.24 倍）、LLM を一度で 2:4 に枝刈りするとパープレキシティが目立って悪化する。",
   "noNumber": false,
   "year": 2021,
   "url": "https://arxiv.org/abs/2104.08378",
   "tier": "primary"
  },
  {
   "id": "model-depth-width-pruning-minitron",
   "section": "model",
   "group": "pruning",
   "name": "深さ・幅の構造化枝刈りと蒸留（Minitron、ShortGPT）",
   "nameEn": "Structured depth/width pruning + distillation (Minitron, ShortGPT)",
   "what": "学習済み LLM から層ごと（深さ）や隠れ次元・Attention・MLP のチャネル（幅）を取り除く。その後、元のモデルからの知識蒸留（大きいモデルの出力をまねる学習）で精度を取り戻す。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "平均スループットが Llama 3.1 8B 比で 2.7 倍（深さ）・1.8 倍（幅）（Llama-3.1-Minitron-4B、TensorRT-LLM、H100 80GB 1 枚、FP8）",
     "quote": "Llama 3.1-Minitron-4B (Depth) is fastest, achieving an average throughput improvement of 2.7× over Llama 3.1 8B",
     "url": "https://arxiv.org/abs/2408.11796"
    },
    {
     "text": "Nemotron-4 を 2〜4 倍に圧縮、派生モデル 1 つあたりの学習トークンは最大 40 倍少ない（Nemotron-4 15B から 8B・4B、学習側のコスト）",
     "quote": "requires up to 40x fewer training tokens per model compared to training from scratch",
     "url": "https://arxiv.org/abs/2407.14679"
    },
    {
     "text": "層の 25% を削除して MMLU 55.0 → 52.2（ShortGPT、LLaMA 2-13B、40 層中 10 層を削除）",
     "quote": "removing 10 layers (25% of the total 40 layers) from the LLaMA 2-13B model resulted in only a slight drop in performance on the MMLU benchmark",
     "url": "https://arxiv.org/abs/2403.03853"
    }
   ],
   "tradeoffs": "深さ方向に枝刈りした Minitron-4B ベースは、指示チューニング前の GSM8K が 16.8% と、幅方向の 41.24% より大きく低い。蒸留による再学習が必要。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2407.14679",
   "tier": "primary"
  },
  {
   "id": "model-contextual-sparsity-dejavu",
   "section": "model",
   "group": "pruning",
   "name": "文脈依存スパース性（Deja Vu）",
   "nameEn": "Contextual (activation) sparsity — Deja Vu",
   "what": "軽量な予測器が入力ごとに必要な少数の Attention ヘッドと MLP ニューロンを選び、推論時に残りの計算を飛ばす。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "レイテンシを FasterTransformer 比で 2 倍超、Hugging Face 比で 6 倍超削減（OPT-175B）",
     "quote": "DejaVu can reduce the inference latency of OPT-175B by over 2X compared to the state-of-the-art FasterTransformer",
     "url": "https://arxiv.org/abs/2310.17157"
    }
   ],
   "tradeoffs": "品質低下なしと主張。効果はメモリ帯域が律速になるバッチ 1 に近いデコードと、専用カーネルに依存する。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2310.17157",
   "tier": "primary"
  },
  {
   "id": "model-distilbert",
   "section": "model",
   "group": "distillation",
   "name": "DistilBERT",
   "nameEn": "DistilBERT (pre-training knowledge distillation)",
   "what": "知識蒸留（大きな教師モデルの出力をまねて小さなモデルを学習すること）で、BERT の半分の層を持つ生徒モデルを事前学習する。損失は言語モデル・教師のソフトターゲット・埋め込みのコサイン距離の 3 つ。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "40% 小型、60% 高速、能力の 97% を維持（教師は BERT-base、GLUE 型の自然言語理解タスク）",
     "quote": "reduce the size of a BERT model by 40%, while retaining 97% of its language understanding capabilities and being 60% faster",
     "url": "https://arxiv.org/abs/1910.01108"
    }
   ],
   "tradeoffs": "要旨によれば言語理解能力の 97% を維持、つまり約 3% は失う。",
   "noNumber": false,
   "year": 2019,
   "url": "https://arxiv.org/abs/1910.01108",
   "tier": "primary"
  },
  {
   "id": "model-instruction-distillation-alpaca-orca",
   "section": "model",
   "group": "distillation",
   "name": "指示・説明トレースの蒸留（Alpaca、Orca）",
   "nameEn": "Instruction / explanation-trace distillation from a large teacher (Alpaca, Orca)",
   "what": "大規模な商用モデルの出力（指示と応答、または段階的な説明）で小さなオープンモデルをファインチューニングし、大きなモデルの代わりに使えるようにする。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "cost"
   ],
   "effects": [
    {
     "text": "Alpaca 7B がブラインドの一対比較で text-davinci-003 と同等（90 対 89）、再現費用は 600 ドル未満（LLaMA 7B を学習。データは text-davinci-003 による 52K 件のデモ）",
     "quote": "Alpaca wins 90 versus 89 comparisons against text-davinci-003",
     "url": "https://crfm.stanford.edu/2023/03/13/alpaca.html"
    },
    {
     "text": "Orca 13B が BBH で ChatGPT と同等（GPT-4 の説明トレースで学習した 13B の生徒モデル）",
     "quote": "Orca reaches parity with ChatGPT on the BBH benchmark",
     "url": "https://arxiv.org/abs/2306.02707"
    }
   ],
   "tradeoffs": "Orca の論文は、模倣モデルが教師の推論ではなく文体を学びやすいと警告する。Orca も GPT-4 には及ばない。Alpaca の評価は小規模。",
   "noNumber": false,
   "year": 2023,
   "url": "https://crfm.stanford.edu/2023/03/13/alpaca.html",
   "tier": "primary"
  },
  {
   "id": "model-distilling-step-by-step",
   "section": "model",
   "group": "distillation",
   "name": "Distilling step-by-step",
   "nameEn": "Distilling step-by-step (rationale-augmented task distillation)",
   "what": "LLM が生成した根拠（答えに至る説明）を追加の教師信号としてマルチタスク学習に使い、ずっと小さなタスク特化モデルを学習する。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "cost"
   ],
   "effects": [
    {
     "text": "770M の T5 が few-shot の 540B PaLM を上回る（1 つのベンチマーク、利用可能なデータの 80% を使用）",
     "quote": "our finetuned 770M T5 model outperforms the few-shot prompted 540B PaLM model using only 80% of available data on a benchmark",
     "url": "https://arxiv.org/abs/2305.02301"
    }
   ],
   "tradeoffs": "タスク特化（4 つの NLP ベンチマーク）の手法で、汎用モデルの置き換えではない。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2305.02301",
   "tier": "primary"
  },
  {
   "id": "model-reasoning-distillation-r1",
   "section": "model",
   "group": "distillation",
   "name": "推論トレースの蒸留（DeepSeek-R1-Distill）",
   "nameEn": "Reasoning-trace distillation into small dense models (DeepSeek-R1-Distill)",
   "what": "強化学習で訓練した大規模 MoE モデル DeepSeek-R1 の推論データで、Qwen・Llama 系の小さな密モデル（1.5B〜70B）を教師ありファインチューニングする。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "cost"
   ],
   "effects": [
    {
     "text": "R1-Distill-Qwen-7B が AIME 2024 で 55.5% となり QwQ-32B-Preview を上回る（DeepSeek-R1 から Qwen2.5-7B へ蒸留。教師は総 671B・アクティブ 37B）",
     "quote": "DeepSeek-R1-Distill-Qwen-7B achieves 55.5% on AIME 2024, surpassing QwQ-32B-Preview",
     "url": "https://arxiv.org/abs/2501.12948v1"
    },
    {
     "text": "R1-Distill-Qwen-32B が AIME 2024 で 72.6%、MATH-500 で 94.3%（32B の密な生徒モデル）",
     "quote": "DeepSeek-R1-Distill-Qwen-32B scores 72.6% on AIME 2024, 94.3% on MATH-500, and 57.2% on LiveCodeBench",
     "url": "https://arxiv.org/abs/2501.12948v1"
    }
   ],
   "tradeoffs": "蒸留した生徒モデルは教師に及ばない。推論モデルは出力が長いため、トークン単価の節約が出力量の増加で相殺されうる。",
   "noNumber": false,
   "year": 2025,
   "url": "https://arxiv.org/abs/2501.12948",
   "tier": "primary"
  },
  {
   "id": "model-mqa",
   "section": "model",
   "group": "attention",
   "name": "MQA（Multi-Query Attention）",
   "nameEn": "Multi-Query Attention (MQA)",
   "what": "すべてのクエリヘッドが 1 組のキー・値ヘッドを共有する。KV キャッシュ（生成済みトークンのキーと値の保存領域）と逐次デコードに必要なメモリ帯域を減らす。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "comm",
    "time"
   ],
   "effects": [
    {
     "text": "デコーダのトークンあたり時間が 46µs → 3.8µs（Shazeer 2019、TPUv2 上の WMT 翻訳モデル、バッチ 1024、マルチヘッドとの比較）",
     "quote": "For the multi-query model, the encoder took 195ms and the decoder took 3.9ms per step",
     "url": "https://arxiv.org/abs/1911.02150"
    },
    {
     "text": "KV キャッシュを GQA 比で 8 倍削減（Character.AI の本番モデル）",
     "quote": "This reduces KV cache size by 8X compared to the Grouped-Query Attention adopted in most open source models",
     "url": "https://web.archive.org/web/20240624161133/https://research.character.ai/optimizing-inference/"
    }
   ],
   "tradeoffs": "論文は品質低下を「わずか」と報告。GQA の論文は MQA で品質が落ちうると指摘する。",
   "noNumber": false,
   "year": 2019,
   "url": "https://arxiv.org/abs/1911.02150",
   "tier": "primary"
  },
  {
   "id": "model-gqa",
   "section": "model",
   "group": "attention",
   "name": "GQA（Grouped-Query Attention）",
   "nameEn": "Grouped-Query Attention (GQA)",
   "what": "クエリヘッドをグループに分け、グループごとに 1 組のキー・値ヘッドを共有させる（MHA と MQA の中間）。既存の MHA チェックポイントは事前学習の約 5% の計算量の追加学習で転換できる。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "comm",
    "time"
   ],
   "effects": [
    {
     "text": "推論時間 1.51 秒（MHA-XXL）→ 0.28 秒（GQA-8-XXL）、品質は MHA に近い（T5-XXL、5% の追加学習。Table 1 の推論時間は MHA-XXL 1.51・MQA-XXL 0.24・GQA-8-XXL 0.28 秒、平均スコアは 47.2・46.6・47.1）",
     "quote": "Inference time and average dev set performance comparison of T5 Large and XXL models with multi-head attention, and 5% uptrained T5-XXL models with multi-query and grouped-query attention",
     "url": "https://arxiv.org/abs/2305.13245"
    },
    {
     "text": "MQA 並みの速度で MHA に近い品質（追加学習した T5）",
     "quote": "uptrained GQA achieves quality close to multi-head attention with comparable speed to MQA",
     "url": "https://arxiv.org/abs/2305.13245"
    }
   ],
   "tradeoffs": "MHA（通常のマルチヘッド Attention）との品質差は残る（Table 1 の平均スコアで 47.1 対 47.2）。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2305.13245",
   "tier": "primary"
  },
  {
   "id": "model-mla",
   "section": "model",
   "group": "attention",
   "name": "MLA（Multi-head Latent Attention）",
   "nameEn": "Multi-head Latent Attention (MLA)",
   "what": "キーと値をまとめて低ランクの潜在ベクトルに圧縮し、ヘッドごとの完全な K・V の代わりにそれをキャッシュする。RoPE（位置情報の埋め込み方式）用のキーは分けて持つ。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "comm",
    "cost"
   ],
   "effects": [
    {
     "text": "KV キャッシュ 93.3% 削減、最大生成スループット 5.76 倍（DeepSeek-V2 と DeepSeek 67B の比較、MoE の効果も含む）",
     "quote": "reduces the KV cache by 93.3%, and boosts the maximum generation throughput to 5.76 times",
     "url": "https://arxiv.org/abs/2405.04434"
    }
   ],
   "tradeoffs": "スループットの数字はモデル全体の比較（V2 対 密な 67B）で、MLA に MoE などほかの変更が混ざっている。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2405.04434",
   "tier": "primary"
  },
  {
   "id": "model-sliding-window-local-global",
   "section": "model",
   "group": "attention",
   "name": "スライディングウィンドウ Attention・局所／大域の交互配置",
   "nameEn": "Sliding-window / local-global interleaved attention",
   "what": "大半の層は直近の固定幅（ウィンドウ）のトークンだけを参照し、KV キャッシュを循環バッファで持つ。長距離の情報には、ところどころ全体を参照する大域 Attention 層を挟む。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "32k トークンでキャッシュメモリ 8 倍削減（Mistral 7B、ウィンドウ W=4096、循環バッファのキャッシュ）",
     "quote": "On a sequence length of 32k tokens, this reduces the cache memory usage by 8x, without impacting the model quality",
     "url": "https://arxiv.org/abs/2310.06825"
    },
    {
     "text": "通常の Attention 比で 2 倍の速度（Mistral 7B、系列長 16K、W=4096、FlashAttention・xFormers への変更）",
     "quote": "yield a 2x speed improvement over a vanilla attention baseline",
     "url": "https://arxiv.org/abs/2310.06825"
    },
    {
     "text": "KV メモリのオーバーヘッドが大域のみの 60% から 15% 未満に（Gemma 3 の 2B でのアブレーション、32k コンテキスト、局所 5：大域 1・ウィンドウ 1024）",
     "quote": "the “global only” configuration results in a memory overhead of 60%, while this is reduced to less than 15%",
     "url": "https://arxiv.org/abs/2503.19786"
    }
   ],
   "tradeoffs": "純粋なスライディングウィンドウでは遠いトークンを直接参照できない。Gemma 3 は長いコンテキストのために大域層を残している。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2310.06825",
   "tier": "primary"
  },
  {
   "id": "model-cross-layer-kv-sharing",
   "section": "model",
   "group": "attention",
   "name": "層間 KV 共有（Cross-Layer Attention、CLA）",
   "nameEn": "Cross-layer KV sharing (Cross-Layer Attention, CLA)",
   "what": "隣り合う層が同じキー・値ヘッドを使い回し、KV キャッシュ（生成済みトークンのキーと値の保存領域）を層のグループごとに 1 回だけ保存する。MQA や GQA に重ねて使う。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "comm"
   ],
   "effects": [
    {
     "text": "MQA 比で KV キャッシュをさらに 2 倍削減、精度はほぼ同じ（ゼロから学習した 1B・3B モデル）",
     "quote": "it is possible to reduce the size of the KV cache by another 2x while maintaining nearly the same accuracy as unmodified MQA",
     "url": "https://arxiv.org/abs/2405.12981"
    },
    {
     "text": "手法の組み合わせで KV キャッシュを 20 倍超削減（Character.AI、MQA・局所／大域ハイブリッド・層間共有の併用）",
     "quote": "We use the following techniques to reduce KV cache size by more than 20X without regressing quality",
     "url": "https://web.archive.org/web/20240624161133/https://research.character.ai/optimizing-inference/"
    }
   ],
   "tradeoffs": "20 倍超は複数の手法を合わせた数字。Character.AI は層間共有だけでさらに 2〜3 倍の削減と報告している。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2405.12981",
   "tier": "primary"
  },
  {
   "id": "model-yoco",
   "section": "model",
   "group": "attention",
   "name": "YOCO（You Only Cache Once）",
   "nameEn": "YOCO (You Only Cache Once, decoder-decoder)",
   "what": "効率的な Attention を使う self-decoder が全体で 1 つの KV キャッシュを作り、cross-decoder の全層がそれを cross-attention で再利用する。プリフィル（入力プロンプトの処理）は途中で打ち切れる。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "time",
    "compute"
   ],
   "effects": [
    {
     "text": "KV キャッシュ約 80 倍削減（65B）、1M コンテキストでプリフィル 71.8 倍高速（Transformer との比較のプロファイリング）",
     "quote": "the memory of KV caches can be reduced by about 80× for 65B models",
     "url": "https://arxiv.org/abs/2405.05254"
    },
    {
     "text": "512K コンテキストでプリフィルが 180 秒 → 6 秒未満（3B 級モデル）",
     "quote": "for a 512K context, YOCO reduces the Transformer prefilling latency from 180 seconds to less than six seconds",
     "url": "https://arxiv.org/abs/2405.05254"
    }
   ],
   "tradeoffs": "研究段階のアーキテクチャで、新しいモデルの事前学習が必要。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2405.05254",
   "tier": "primary"
  },
  {
   "id": "model-trainable-sparse-attention",
   "section": "model",
   "group": "attention",
   "name": "学習可能なスパース Attention（NSA、DeepSeek Sparse Attention）",
   "nameEn": "Trainable sparse attention (NSA, DeepSeek Sparse Attention)",
   "what": "各クエリが過去のトークンの一部だけを参照するよう最初から学習する。NSA は圧縮ブロック・選択ブロック・局所ウィンドウを使い、DSA は軽量な lightning indexer で上位 k 個のトークンを選ぶ。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "comm",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "デコード 11.6 倍、順伝播 9.0 倍、逆伝播 6.0 倍の高速化（64k 系列長で NSA と Full Attention の比較、Figure 1）",
     "quote": "Speedup Ratio 11.6× 9.0× 6.0× Speed on Stages",
     "url": "https://arxiv.org/abs/2502.11089"
    },
    {
     "text": "中核の Attention の計算量が O(L^2) → O(Lk)（DSA の DeepSeek-V3.2 と MLA の DeepSeek-V3.1-Terminus の比較）",
     "quote": "DSA reduces the core attention complexity of the main model from O(L²) to O(Lk), where k (≪L) is the number of selected tokens",
     "url": "https://arxiv.org/abs/2512.02556"
    },
    {
     "text": "API 価格を 50% 以上値下げ（V3.2-Exp 公開時の DeepSeek API、2025-09-29）",
     "quote": "DeepSeek API prices drop 50%+, effective immediately.",
     "url": "https://api-docs.deepseek.com/news/news250929"
    }
   ],
   "tradeoffs": "lightning indexer 自体の計算量は O(L^2) のまま。値下げは事業上の結果で、条件をそろえた測定ではない。",
   "noNumber": false,
   "year": 2025,
   "url": "https://arxiv.org/abs/2502.11089",
   "tier": "primary"
  },
  {
   "id": "model-mamba-ssm",
   "section": "model",
   "group": "architecture",
   "name": "選択的状態空間モデル（Mamba、Mamba-2）",
   "nameEn": "Selective state-space models (Mamba, Mamba-2)",
   "what": "Attention の代わりに、入力に応じて変わる（選択的な）状態空間の再帰計算を使う。状態の大きさが一定なので系列長に線形の時間で処理でき、生成 1 トークンあたりのメモリは O(1)。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "time"
   ],
   "effects": [
    {
     "text": "Transformer の 5 倍のスループット（Mamba の推論）",
     "quote": "Mamba enjoys fast inference (5× higher throughput than Transformers) and linear scaling in sequence length",
     "url": "https://arxiv.org/abs/2312.00752"
    },
    {
     "text": "Mamba-3B が 2 倍のサイズの Transformer に匹敵（言語モデリング）",
     "quote": "our Mamba-3B model outperforms Transformers of the same size and matches Transformers twice its size",
     "url": "https://arxiv.org/abs/2312.00752"
    },
    {
     "text": "Mamba-2 の中核層が 2〜8 倍高速（SSD 層と Mamba の選択的 SSM の比較）",
     "quote": "a refinement of Mamba's selective SSM that is 2-8X faster",
     "url": "https://arxiv.org/abs/2405.21060"
    }
   ],
   "tradeoffs": "純粋な SSM（状態空間モデル）は内容に基づく想起が従来から弱い。本番利用の多くはハイブリッド構成。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2312.00752",
   "tier": "primary"
  },
  {
   "id": "model-rwkv",
   "section": "model",
   "group": "architecture",
   "name": "RWKV（Receptance Weighted Key Value）",
   "nameEn": "RWKV (linear-attention RNN)",
   "what": "Transformer のように並列に学習でき、推論時は RNN（再帰型ニューラルネットワーク）として動く線形 Attention の定式化。トークンあたりのコストは一定。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory"
   ],
   "effects": [
    {
     "text": "推論時のトークンあたり計算量とメモリが一定、14B まで拡大（最大 14B パラメータの RWKV と同規模の Transformer の比較）",
     "quote": "maintains constant computational and memory complexity during inference",
     "url": "https://arxiv.org/abs/2305.13048"
    }
   ],
   "tradeoffs": "要旨は同規模の Transformer と同等の性能と報告する。速度の倍率は要旨に示されていない。",
   "noNumber": true,
   "year": 2023,
   "url": "https://arxiv.org/abs/2305.13048",
   "tier": "primary"
  },
  {
   "id": "model-hybrid-ssm-attention",
   "section": "model",
   "group": "architecture",
   "name": "SSM と Attention のハイブリッド（Jamba、Samba、Nemotron-H）",
   "nameEn": "Hybrid SSM-attention models (Jamba, Samba, Nemotron-H)",
   "what": "Mamba（SSM、状態空間モデル）層の間に少数の Attention 層を挟み、必要に応じて MoE も組み合わせる。長距離の想起を保ちつつ、KV キャッシュとトークンあたりの計算を減らす。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "compute",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "256K で KV キャッシュ 4GB（Mixtral は 32GB）、長いコンテキストのスループットは Mixtral の 3 倍（Jamba は総 52B・アクティブ 12B。16 ビット、256K コンテキスト）",
     "quote": "its throughput is 3x that of Mixtral-8x7B for long contexts",
     "url": "https://arxiv.org/abs/2403.19887"
    },
    {
     "text": "同程度の精度で最大 3 倍高速な推論（Nemotron-H 8B・56B と Qwen-2.5-7B・72B、Llama-3.1-8B・70B の比較）",
     "quote": "while being up to 3× faster at inference",
     "url": "https://arxiv.org/abs/2504.03624"
    },
    {
     "text": "128K のプロンプトで 3.73 倍のスループット（Mamba と SWA を組み合わせた Samba 3.8B と、GQA を使う Transformer の比較）",
     "quote": "Samba achieves a 3.73x higher throughput compared to Transformers with grouped-query attention for user prompts of 128K length",
     "url": "https://arxiv.org/abs/2406.07522"
    }
   ],
   "tradeoffs": "効果は長いコンテキストに集中し、短いコンテキストでの高速化は小さい。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2403.19887",
   "tier": "primary"
  },
  {
   "id": "model-hybrid-linear-attention",
   "section": "model",
   "group": "architecture",
   "name": "線形 Attention のハイブリッド（MiniMax-01 の lightning attention、Qwen3-Next の Gated DeltaNet）",
   "nameEn": "Hybrid linear-attention models (MiniMax-01 lightning attention, Qwen3-Next Gated DeltaNet)",
   "what": "大半の層は線形 Attention（計算量が系列長に比例する Attention）を使い、ところどころ通常の softmax／gated Attention 層を挟む。比率は MiniMax-01 が 8 層に 1 層、Qwen3-Next が 4 層に 1 層で、多くはスパースな MoE と組み合わせる。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "32K 超のコンテキストで Qwen3-32B 比 10 倍の推論スループット（Qwen3-Next-80B-A3B、総 80B・アクティブ 3B、公式モデルカード）",
     "quote": "with 10 times inference throughput for context over 32K tokens",
     "url": "https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct"
    },
    {
     "text": "学習時のコンテキストは 1M トークン、推論時は 4M まで外挿（MiniMax-Text-01、総 456B・アクティブ 45.9B）",
     "quote": "extrapolate to 4 million tokens during inference at an affordable cost",
     "url": "https://arxiv.org/abs/2501.08313"
    }
   ],
   "tradeoffs": "Qwen3-Next のスループットの主張は Base モデルのもので、スパース性の高い MoE と MTP の効果も含む。線形 Attention 単独の効果ではない。",
   "noNumber": false,
   "year": 2025,
   "url": "https://arxiv.org/abs/2501.08313",
   "tier": "primary"
  },
  {
   "id": "model-sparse-moe",
   "section": "model",
   "group": "architecture",
   "name": "スパース MoE（Mixture-of-Experts）",
   "nameEn": "Sparse Mixture-of-Experts (top-k routed FFN experts)",
   "what": "密な FFN（層内の全結合部分）を多数の専門家 FFN とルーターに置き換え、トークンごとに少数だけを動かす。トークンあたりの計算量は総パラメータではなくアクティブなパラメータに比例する。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "cost",
    "time"
   ],
   "effects": [
    {
     "text": "47B 中 13B がアクティブ（Mixtral 8x7B、8 つの専門家から上位 2 つを選択、Llama 2 70B と GPT-3.5 に匹敵または上回る）",
     "quote": "each token has access to 47B parameters, but only uses 13B active parameters during inference",
     "url": "https://arxiv.org/abs/2401.04088"
    },
    {
     "text": "671B 中 37B がアクティブ（DeepSeek-V3）",
     "quote": "671B total parameters with 37B activated for each token",
     "url": "https://arxiv.org/abs/2412.19437"
    },
    {
     "text": "116.8B 中 5.1B がアクティブ（gpt-oss-120b）",
     "quote": "116.8B total parameters and 5.1B “active” parameters per token per forward pass",
     "url": "https://arxiv.org/abs/2508.10925"
    }
   ],
   "tradeoffs": "全専門家をメモリに置く必要があり（総パラメータ分）、メモリよりトークンあたりの計算量とレイテンシを減らす手法。ルーティングで通信と負荷分散の複雑さが増す。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2401.04088",
   "tier": "primary"
  },
  {
   "id": "model-early-exit",
   "section": "model",
   "group": "other",
   "name": "早期終了・自己投機的な層スキップ（CALM、LayerSkip）",
   "nameEn": "Early exit / self-speculative layer skipping (CALM, LayerSkip)",
   "what": "CALM は確信度に応じて簡単なトークンを少ない層で打ち切る。LayerSkip は層ドロップアウトと早期終了の損失で学習し、浅い層で下書きしたトークンを深い層で検証する。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "最大 3 倍の高速化の可能性（CALM、3 つのテキスト生成タスク）",
     "quote": "potential speedup of up to ×3",
     "url": "https://arxiv.org/abs/2207.07061"
    },
    {
     "text": "最大で 2.16 倍（CNN/DM 要約）・1.82 倍（コーディング）・2.0 倍（TOPv2）（LayerSkip の自己投機的デコード、Llama モデル）",
     "quote": "show speedups of up to 2.16x on summarization for CNN/DM documents, 1.82x on coding, and 2.0x on TOPv2 semantic parsing task",
     "url": "https://arxiv.org/abs/2404.16710"
    }
   ],
   "tradeoffs": "特別な学習（早期終了の損失やドロップアウト）が必要。CALM の実際の高速化は確信度のしきい値とバッチ処理に左右される。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2207.07061",
   "tier": "primary"
  },
  {
   "id": "model-mixture-of-depths",
   "section": "model",
   "group": "other",
   "name": "Mixture-of-Depths",
   "nameEn": "Mixture-of-Depths (token-level dynamic compute)",
   "what": "ルーターが各層の Attention・MLP で処理するトークンを上位 k 個に制限し、ほかのトークンは残差接続を通ってそのブロックを飛ばす。計算グラフは静的なまま。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "サンプリング時の 1 ステップが 50% 超高速（同じ学習 FLOPs のベースラインとの比較）",
     "quote": "can be upwards of 50% faster to step during post-training sampling",
     "url": "https://arxiv.org/abs/2404.02258"
    }
   ],
   "tradeoffs": "研究段階の結果。上位 k 個のルーティングで自己回帰的にサンプリングするには補助の予測器が要る。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2404.02258",
   "tier": "primary"
  },
  {
   "id": "model-matformer-elastic",
   "section": "model",
   "group": "other",
   "name": "入れ子型の可変サイズモデル（MatFormer、Gemma 3n の Mix-n-Match・Per-Layer Embeddings）",
   "nameEn": "Nested elastic models (MatFormer, Gemma 3n Mix-n-Match / Per-Layer Embeddings)",
   "what": "1 つのモデルの中に入れ子の FFN サブブロックを学習し、展開時に小さなサブモデルを切り出せるようにする。Gemma 3n はアクセラレータの外に置く Per-Layer Embeddings と KV キャッシュ共有も加える。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "850M のモデル 1 つから 582M〜850M のサブモデルを切り出し（MatLM、個別に学習したモデルより損失が低い）",
     "quote": "allows us to extract multiple smaller models spanning from 582M to 850M parameters",
     "url": "https://arxiv.org/abs/2310.07707"
    },
    {
     "text": "E2B・E4B が最小 2GB・3GB のメモリで動作（元のパラメータ数は 5B・8B、Gemma 3n、Google の開発者ガイド 2025-06-26）",
     "quote": "operating with as little as 2GB (E2B) and 3GB (E4B) of memory",
     "url": "https://developers.googleblog.com/en/introducing-gemma-3n-developer-guide/"
    },
    {
     "text": "KV キャッシュ共有でプリフィルが Gemma 3 4B 比 2 倍（Gemma 3n）",
     "quote": "delivering a notable 2x improvement on prefill performance compared to Gemma 3 4B",
     "url": "https://developers.googleblog.com/en/introducing-gemma-3n-developer-guide/"
    }
   ],
   "tradeoffs": "MatFormer による投機的デコードの効果は小さい（LAMBADA で最大 1.16 倍、Table 2）。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2310.07707",
   "tier": "primary"
  },
  {
   "id": "model-mtp-self-speculative",
   "section": "model",
   "group": "other",
   "name": "MTP（Multi-token prediction）ヘッドを使う投機的デコード",
   "nameEn": "Multi-token prediction (MTP) heads reused for speculative decoding",
   "what": "先のトークンを予測する追加モジュール付きでモデルを学習する。推論時はその下書きを本体モデルが検証し（投機的デコード）、1 ステップで複数のトークンを出す。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time"
   ],
   "effects": [
    {
     "text": "トークン毎秒 1.8 倍、2 番目のトークンの受理率 85〜90%（次の 2 トークンを予測する DeepSeek-V3）",
     "quote": "delivering 1.8 times TPS (Tokens Per Second)",
     "url": "https://arxiv.org/abs/2412.19437"
    }
   ],
   "tradeoffs": "デコード時の実行時手法と重なる。高速化は受理率に左右され、受理率は話題によって変わる。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2412.19437",
   "tier": "primary"
  },
  {
   "id": "model-small-language-models",
   "section": "model",
   "group": "other",
   "name": "厳選・合成データで学習した小型言語モデル（Phi-3、Gemma 3）",
   "nameEn": "Small language models trained on curated / synthetic data (Phi-3, Gemma 3)",
   "what": "強く絞り込んだ Web データと合成データ（または蒸留）で小さな密モデルを学習し、多くのタスクで大きなモデルの代わりにする。端末上での利用も含む。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "cost",
    "time"
   ],
   "effects": [
    {
     "text": "3.8B の phi-3-mini が MMLU 69%・MT-bench 8.38 で Mixtral 8x7B や GPT-3.5 に匹敵（3.3T トークンで学習、スマートフォンに載る大きさ）",
     "quote": "phi-3-mini achieves 69% on MMLU and 8.38 on MT-bench",
     "url": "https://arxiv.org/abs/2404.14219"
    },
    {
     "text": "Gemma3-4B-IT が Gemma2-27B-IT に匹敵（Gemma 3、蒸留で学習）",
     "quote": "making Gemma3-4B-IT competitive with Gemma2-27B-IT",
     "url": "https://arxiv.org/abs/2503.19786"
    }
   ],
   "tradeoffs": "開発元によるベンチマーク上の主張。知識量が問われるタスクでは大きなモデルに劣る（要旨では定量化されていない）。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2404.14219",
   "tier": "primary"
  },
  {
   "id": "serve-paged_attention_vllm",
   "section": "serve",
   "group": "memory",
   "name": "PagedAttention（vLLM）",
   "nameEn": "PagedAttention / vLLM (paged KV cache memory management)",
   "what": "KV キャッシュ（過去のトークンの計算結果をためておく領域）を固定サイズのブロックに分けて管理する。OS の仮想メモリのページングと同じ発想で、断片化と確保しすぎをほぼなくす。リクエスト間でブロックを共有でき、空いたメモリでバッチを大きくできる。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "同じレイテンシでスループット（一定時間に処理できる量）2〜4 倍（FasterTransformer と Orca 比。系列が長い・モデルが大きい・デコードが複雑なほど効果大）",
     "quote": "vLLM improves the throughput of popular LLMs by 2-4× with the same level of latency compared to the state-of-the-art systems, such as FasterTransformer and Orca",
     "url": "https://arxiv.org/abs/2309.06180"
    },
    {
     "text": "KV メモリの無駄が既存システムの 60〜80% から 4% 未満に（vLLM 公開時のブログ、既存のサービングシステムとの比較）",
     "quote": "We find that existing systems waste 60% – 80% of memory due to fragmentation and over-reservation.",
     "url": "https://vllm.ai/blog/2023-06-20-vllm"
    },
    {
     "text": "スループット最大 24 倍（HF Transformers 比）／最大 3.5 倍（TGI 比）（vLLM 公開時のブログのベンチマーク）",
     "quote": "vLLM achieves up to 24x higher throughput compared to HF",
     "url": "https://vllm.ai/blog/2023-06-20-vllm"
    }
   ],
   "tradeoffs": "ブロックテーブル経由の間接参照でカーネルが複雑になる。効果が出るのはメモリがバッチサイズの上限を決めている場合。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2309.06180",
   "tier": "primary"
  },
  {
   "id": "serve-orca_continuous_batching",
   "section": "serve",
   "group": "batching",
   "name": "反復単位スケジューリング／continuous batching（Orca）",
   "nameEn": "Iteration-level scheduling / continuous batching (Orca)",
   "what": "バッチをリクエスト単位ではなく 1 デコードステップ単位で組み直す。終わったリクエストは抜け、新しいリクエストは毎ステップ加わる。selective batching で長さの違うリクエストもアテンション以外の演算をまとめて実行する。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "同じレイテンシでスループット（一定時間に処理できる量）36.9 倍（NVIDIA FasterTransformer 比、OSDI 2022 の要旨）",
     "quote": "36.9× throughput improvement at the same level of latency",
     "url": "https://www.usenix.org/conference/osdi22/presentation/yu"
    }
   ],
   "tradeoffs": "毎ステップでリクエストを出し入れできるスケジューラが要る。長さが変わる KV キャッシュ（過去のトークンの計算結果）のメモリ管理も必要で、これは後に PagedAttention が解決した。",
   "noNumber": false,
   "year": 2022,
   "url": "https://www.usenix.org/conference/osdi22/presentation/yu",
   "tier": "primary"
  },
  {
   "id": "serve-chunked_prefill_sarathi",
   "section": "serve",
   "group": "batching",
   "name": "チャンク化 prefill（Sarathi-Serve）／Dynamic SplitFuse",
   "nameEn": "Chunked prefill with stall-free scheduling (Sarathi-Serve) / Dynamic SplitFuse",
   "what": "長いプロンプトの prefill（入力全体を一度に処理する段階）をほぼ同じ大きさのチャンクに分ける。実行中のデコードと同じバッチに混ぜるので、新しいリクエストが既存のデコードを止めない。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "vLLM 比でサービング容量 2.6 倍（Mistral-7B・A100 1 枚）。最大 3.7 倍（Yi-34B・A100 2 枚）、パイプライン並列で最大 5.6 倍（Falcon-180B）（いずれもテールレイテンシ制約下）",
     "quote": "For Mistral-7B on single A100 GPUs, we achieve 2.6x higher serving capacity and up to 3.7x higher serving capacity for the Yi-34B model on two A100 GPUs as compared to vLLM.",
     "url": "https://arxiv.org/abs/2403.02310"
    },
    {
     "text": "実効スループット最大 2.3 倍、平均レイテンシ 2 倍低減（DeepSpeed-FastGen の Dynamic SplitFuse、vLLM 比）",
     "quote": "to deliver up to 2.3x higher effective throughput, 2x lower latency on average, and up to 3.7x lower (token-level) tail latency, compared to state-of-the-art systems like vLLM",
     "url": "https://arxiv.org/abs/2401.08671"
    }
   ],
   "tradeoffs": "チャンクごとに KV を読み直すため prefill に多少のオーバーヘッドが乗る。チャンクサイズで TTFT（最初のトークンまでの時間）と TPOT（1 トークンあたりの生成時間）が綱引きになる。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2403.02310",
   "tier": "primary"
  },
  {
   "id": "serve-flashattention2",
   "section": "serve",
   "group": "kernel",
   "name": "FlashAttention-2",
   "nameEn": "FlashAttention-2 (IO-aware exact attention kernel)",
   "what": "アテンションをオンチップ SRAM に収まるタイルごとに厳密に計算し、巨大な注意行列を HBM（GPU の主メモリ）に書き出さない。スレッドブロックとワープへの仕事の割り振りも改善した。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "memory",
    "time"
   ],
   "effects": [
    {
     "text": "FlashAttention の約 2 倍速、A100 のピーク FLOPs/s の 50〜73%（A100 でのカーネルベンチマーク）",
     "quote": "These yield around 2× speedup compared to FlashAttention, reaching 50-73% of the theoretical maximum FLOPs/s on A100",
     "url": "https://arxiv.org/abs/2307.08691"
    }
   ],
   "tradeoffs": "近似なしの厳密計算だが特定の GPU アーキテクチャに依存する。主な効果は prefill（入力の一括処理）や長い系列で出る。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2307.08691",
   "tier": "primary"
  },
  {
   "id": "serve-flashattention3",
   "section": "serve",
   "group": "kernel",
   "name": "FlashAttention-3",
   "nameEn": "FlashAttention-3 (Hopper asynchrony + FP8)",
   "what": "Hopper 世代の Tensor Core と TMA の非同期実行で行列積と softmax を重ね合わせる。FP8 のブロック量子化も選べ、H100 の利用率を上げる。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "1.5〜2.0 倍速／FP16 で最大 740 TFLOPs/s（利用率 75%）／FP8 で 1.2 PFLOPs/s 近く（H100、FlashAttention-2 比）",
     "quote": "FlashAttention-3, achieves speedup on H100 GPUs by 1.5-2.0× with FP16 reaching up to 740 TFLOPs/s (75% utilization), and with FP8 reaching close to 1.2 PFLOPs/s",
     "url": "https://arxiv.org/abs/2407.08608"
    }
   ],
   "tradeoffs": "Hopper 専用。FP8 経路は精度が下がる。論文では基準の FP8 アテンションより誤差が 2.6 倍小さいが、FP8 であることに変わりはない。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2407.08608",
   "tier": "primary"
  },
  {
   "id": "serve-flash_decoding",
   "section": "serve",
   "group": "kernel",
   "name": "Flash-Decoding",
   "nameEn": "Flash-Decoding (split-KV parallel attention for decoding)",
   "what": "デコード時に長い KV キャッシュ（過去のトークンの計算結果）をチャンクに分けて GPU 全体で並列に処理し、最後に部分結果をまとめる。バッチサイズ 1 でも GPU を使い切れる。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time"
   ],
   "effects": [
    {
     "text": "非常に長い系列で生成全体が最大 8 倍速（CodeLlama 34B、系列長 512〜64k、バッチサイズ 1 で最も効く）",
     "quote": "bringing up to 8x faster generation for very long sequences",
     "url": "https://crfm.stanford.edu/2023/10/12/flashdecoding.html"
    },
    {
     "text": "アテンション単体で FlashAttention の最大 50 倍速（A100、f16、バッチサイズ 1・GQA のマイクロベンチマーク）",
     "quote": "the attention itself is up to 50x faster than FlashAttention",
     "url": "https://crfm.stanford.edu/2023/10/12/flashdecoding.html"
    }
   ],
   "tradeoffs": "効果は長い文脈と小さいバッチに集中する。大きなバッチではもともと GPU が埋まっている。",
   "noNumber": false,
   "year": 2023,
   "url": "https://crfm.stanford.edu/2023/10/12/flashdecoding.html",
   "tier": "primary"
  },
  {
   "id": "serve-flashinfer",
   "section": "serve",
   "group": "kernel",
   "name": "FlashInfer",
   "nameEn": "FlashInfer (customizable attention engine for serving)",
   "what": "サービング向けのアテンションカーネルライブラリ。ブロック疎な KV 形式・JIT コンパイルされるアテンションの変種・CUDA Graphs と両立する負荷分散スケジューリングを備える。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time"
   ],
   "effects": [
    {
     "text": "トークン間レイテンシ 29〜69% 短縮（コンパイラバックエンド比）／長文脈でレイテンシ 28〜30% 短縮／並列生成で 13〜17% 高速化（LLM サービングのベンチマーク、最先端手法比）",
     "quote": "FlashInfer achieve 29-69% inter-token-latency reduction compared to compiler backends for LLM serving benchmark, 28-30% latency reduction for long-context inference, and 13-17% speedup for LLM serving with parallel generation",
     "url": "https://arxiv.org/abs/2501.01005"
    }
   ],
   "tradeoffs": "出典データに引き換えの記載なし。数値は最先端のサービング手法と比べたベンチマーク値。",
   "noNumber": false,
   "year": 2025,
   "url": "https://arxiv.org/abs/2501.01005",
   "tier": "primary"
  },
  {
   "id": "serve-speculative_decoding",
   "section": "serve",
   "group": "speculative",
   "name": "投機的デコーディング（ドラフトモデル＋検証）",
   "nameEn": "Speculative decoding / speculative sampling (draft model + verification)",
   "what": "小さなドラフトモデルが数トークンを先に提案し、大きなモデルが 1 回の並列計算でまとめて検証する。棄却サンプリングの工夫で出力分布は大きなモデルと同一に保つ。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time",
    "compute",
    "cost"
   ],
   "effects": [
    {
     "text": "2〜3 倍の高速化、出力は同一（T5-XXL、標準の T5X 実装比）",
     "quote": "We demonstrate it on T5-XXL and show a 2X-3X acceleration compared to the standard T5X implementation, with identical outputs.",
     "url": "https://arxiv.org/abs/2211.17192"
    },
    {
     "text": "デコード 2〜2.5 倍高速化（Chinchilla 70B、分散環境）",
     "quote": "achieving a 2-2.5x decoding speedup in a distributed setup, without compromising the sample quality",
     "url": "https://arxiv.org/abs/2302.01318"
    },
    {
     "text": "大きなバッチでは高速化が 1 倍を下回ることがある（vLLM 上の EAGLE 系、バッチサイズ 2〜48。Meta の本番論文が引用）",
     "quote": "when the batch size is increased from 2 to 48, the speed-up (measured using vLLM) of EAGLE-based speculative decoding compared to non-speculative decoding drops from 1.3× to 0.7×",
     "url": "https://arxiv.org/html/2508.08192v1"
    }
   ],
   "tradeoffs": "分布は変わらないが効果は受理率しだい。GPU が計算律速になる大きなバッチでは効果が縮み、逆転もする。棄却されたトークンの計算は無駄になり、よく合うドラフトモデルも要る。vLLM での研究では本体モデルの検証が実行時間の大半を占め、実測は理論値を大きく下回った（arXiv 2601.11580）。",
   "noNumber": false,
   "year": 2022,
   "url": "https://arxiv.org/abs/2211.17192",
   "tier": "primary"
  },
  {
   "id": "serve-specinfer_tree",
   "section": "serve",
   "group": "speculative",
   "name": "木構造の投機的推論（SpecInfer）",
   "nameEn": "Tree-based speculative inference and verification (SpecInfer)",
   "what": "小さな投機モデル群の予測をトークンの木にまとめ、tree attention で全分岐を LLM に並列検証させる。1 ステップで受理されるトークン数を増やす。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time",
    "compute"
   ],
   "effects": [
    {
     "text": "分散推論で 1.5〜2.8 倍／オフロード型推論で 2.6〜3.5 倍（既存の LLM サービングシステム比）",
     "quote": "SpecInfer outperforms existing LLM serving systems by 1.5-2.8x for distributed LLM inference and by 2.6-3.5x for offloading-based LLM inference",
     "url": "https://arxiv.org/abs/2305.09781"
    }
   ],
   "tradeoffs": "木の検証は 1 本の系列の検証より 1 ステップあたりの本体モデルの計算を多く使う。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2305.09781",
   "tier": "primary"
  },
  {
   "id": "serve-medusa",
   "section": "serve",
   "group": "speculative",
   "name": "Medusa（追加デコーディングヘッド）",
   "nameEn": "Medusa (extra decoding heads)",
   "what": "LLM の上に軽量なデコーディングヘッドを複数足し、それぞれが先のトークンを予測する。候補を tree attention で 1 ステップで検証するので、別のドラフトモデルが要らない。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time"
   ],
   "effects": [
    {
     "text": "2.2 倍超の高速化（Medusa-1、本体凍結）／2.3〜3.6 倍（Medusa-2）（さまざまなサイズのモデル）",
     "quote": "Medusa-1 can achieve over 2.2x speedup without compromising generation quality, while Medusa-2 further improves the speedup to 2.3-3.6x",
     "url": "https://arxiv.org/abs/2401.10774"
    }
   ],
   "tradeoffs": "Medusa-1 は追加ヘッドだけを学習し本体の重みは凍結で無損失。Medusa-2 は本体も微調整するので重みが変わり、重みを変えない手法の範囲から外れる。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2401.10774",
   "tier": "primary"
  },
  {
   "id": "serve-eagle",
   "section": "serve",
   "group": "speculative",
   "name": "EAGLE／EAGLE-2／EAGLE-3",
   "nameEn": "EAGLE / EAGLE-2 / EAGLE-3 (feature-level draft heads)",
   "what": "本体モデルの内部特徴量を使う小さなドラフトヘッドで下書きトークンを作る。EAGLE-2 は文脈に応じて形を変えるドラフト木を使う。EAGLE-3 は training-time test と複数層の特徴融合でトークンを直接予測する。検証は本体モデルが無損失で行う。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time"
   ],
   "effects": [
    {
     "text": "レイテンシ 2.7〜3.5 倍高速化、スループット 2 倍（EAGLE、LLaMA2-Chat 70B）",
     "quote": "For LLaMA2-Chat 70B, EAGLE achieved a latency speedup ratio of 2.7x-3.5x, doubled throughput, while maintaining the distribution of the generated text.",
     "url": "https://arxiv.org/abs/2401.15077"
    },
    {
     "text": "3.05〜4.26 倍高速化、EAGLE-1 より 20〜40% 速い（EAGLE-2、3 系列の LLM と 6 タスク）",
     "quote": "EAGLE-2 achieving speedup ratios 3.05x-4.26x, which is 20%-40% faster than EAGLE-1",
     "url": "https://arxiv.org/abs/2406.16858"
    },
    {
     "text": "最大 6.5 倍高速化／SGLang のバッチサイズ 64 でスループット 1.38 倍（EAGLE-3、チャットモデルと推論モデル、5 タスク）",
     "quote": "EAGLE-3 achieves a speedup ratio up to 6.5x, with about 1.4x improvement over EAGLE-2. In the SGLang framework, EAGLE-3 achieves a 1.38x throughput improvement at a batch size of 64.",
     "url": "https://arxiv.org/abs/2503.01840"
    },
    {
     "text": "本番の大きなバッチで 1.4〜2.0 倍（Meta、Llama モデルでの本番規模の EAGLE 系投機的デコーディング）",
     "quote": "our optimizations enable us to achieve a speed-up for large batch sizes between 1.4x and 2.0x at production scale",
     "url": "https://arxiv.org/abs/2508.08192"
    }
   ],
   "tradeoffs": "本体モデルごとにドラフトヘッドの学習が要る。見出しの高速化は小さなバッチでの値で、同時接続が多いと縮む。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2401.15077",
   "tier": "primary"
  },
  {
   "id": "serve-lookahead_decoding",
   "section": "serve",
   "group": "speculative",
   "name": "Lookahead decoding（ドラフト不要の並列デコーディング）",
   "nameEn": "Lookahead decoding (draft-free parallel decoding)",
   "what": "Jacobi 反復で n-gram を並列に生成し、一致した n-gram を検証して採用する。ドラフトモデルもデータストアも要らず、1 ステップの計算を増やす代わりにステップ数を減らす。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time"
   ],
   "effects": [
    {
     "text": "MT-bench で最大 1.8 倍／コード補完で複数 GPU の strong scaling（問題の大きさを固定して GPU を増やす）により最大 4 倍（厳密なデコーディング）",
     "quote": "Our implementation of Lookahead decoding can speed up autoregressive decoding by up to 1.8x on MT-bench and 4x with strong scaling on multiple GPUs in code completion tasks.",
     "url": "https://arxiv.org/abs/2402.02057"
    }
   ],
   "tradeoffs": "1 ステップあたりの計算が増える。計算資源がすでに飽和していると効果は小さい。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2402.02057",
   "tier": "primary"
  },
  {
   "id": "serve-mtp_speculation",
   "section": "serve",
   "group": "speculative",
   "name": "MTP モジュールの投機的デコーディング転用（DeepSeek-V3）",
   "nameEn": "Multi-token prediction (MTP) modules reused for speculative decoding (DeepSeek-V3)",
   "what": "MTP（複数トークン予測）の目的で学習したモデルは次の 2 トークンを予測する。推論時はその MTP モジュールを内蔵ドラフトとして使い、本体が予測を検証する。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time"
   ],
   "effects": [
    {
     "text": "2 トークン目の受理率 85〜90%、TPS（毎秒トークン数）1.8 倍（DeepSeek-V3、671B の MoE）",
     "quote": "the acceptance rate of the second token prediction ranges between 85% and 90% across various generation topics, demonstrating consistent reliability. This high acceptance rate enables DeepSeek-V3 to achieve a significantly improved decoding speed, delivering 1.8 times TPS (Tokens Per Second).",
     "url": "https://arxiv.org/abs/2412.19437"
    }
   ],
   "tradeoffs": "MTP ヘッド付きで学習したモデルでしか使えず、学習時に決まる。推論時の利用そのものは重みを変えない。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2412.19437",
   "tier": "primary"
  },
  {
   "id": "serve-prefix_caching_radix",
   "section": "serve",
   "group": "caching",
   "name": "自動プレフィックスキャッシュ／RadixAttention（SGLang）",
   "nameEn": "Automatic prefix caching / RadixAttention (SGLang)",
   "what": "過去のプロンプトと出力の KV キャッシュ（計算済みの中間結果）を radix tree に保持し、LRU で追い出す。共通の先頭部分（システムプロンプト・few-shot 例・会話履歴）を持つリクエストは、その prefill（入力の一括処理）を再計算せずに済む。キャッシュを意識したスケジューリングも行う。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "スループット最大 6.4 倍（最先端の推論システム比。エージェント制御・推論・few-shot・JSON デコード・RAG・マルチターン会話）",
     "quote": "SGLang achieves up to 6.4x higher throughput compared to state-of-the-art inference systems",
     "url": "https://arxiv.org/abs/2312.07104"
    },
    {
     "text": "キャッシュヒットがなくても目立ったオーバーヘッドなし（SGLang のアブレーション、LMSYS ブログ）",
     "quote": "our ablation study revealed no noticeable overhead even in the absence of cache hits, leading us to always enable the RadixAttention feature in the runtime",
     "url": "https://lmsys.org/blog/2024-01-17-sglang/"
    }
   ],
   "tradeoffs": "効果は先頭部分の重なり具合に比例する。キャッシュした KV は実行中のリクエストと GPU メモリを取り合う。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2312.07104",
   "tier": "primary"
  },
  {
   "id": "serve-kv_cache_offload_lmcache",
   "section": "serve",
   "group": "caching",
   "name": "KV キャッシュのオフロードとエンジン間共有（LMCache）",
   "nameEn": "KV cache offloading and cross-engine sharing (LMCache)",
   "what": "KV キャッシュ（計算済みの中間結果）を GPU メモリから CPU・ストレージ・ネットワークの階層へ移し、クエリや推論エンジンをまたいで共有する。GPU から追い出された先頭部分を再計算せず読み戻せる。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "compute",
    "time"
   ],
   "effects": [
    {
     "text": "スループット最大 15 倍（LMCache と vLLM の組み合わせ、マルチラウンド QA と文書分析）",
     "quote": "combining LMCACHE with vLLM achieves up to 15x improvement in throughput across workloads such as multi-round question answering and document analysis",
     "url": "https://arxiv.org/abs/2510.09665"
    }
   ],
   "tradeoffs": "遅い階層からの読み込みが再計算より速くないと得にならない。論文は文脈の切り詰めでプレフィックスキャッシュのヒット率が半分に落ちうると指摘する。",
   "noNumber": false,
   "year": 2025,
   "url": "https://arxiv.org/abs/2510.09665",
   "tier": "primary"
  },
  {
   "id": "serve-cacheblend",
   "section": "serve",
   "group": "caching",
   "name": "RAG 向けの非プレフィックス KV 再利用（CacheBlend）",
   "nameEn": "Non-prefix KV cache reuse for RAG (CacheBlend)",
   "what": "検索で取ってきたチャンクの事前計算済み KV キャッシュを、先頭以外の位置でも再利用する。チャンク間の相互アテンションを戻すため一部のトークンだけ選んで再計算する。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time"
   ],
   "effects": [
    {
     "text": "TTFT（最初のトークンまでの時間）2.2〜3.3 倍短縮、スループット 2.8〜5 倍（KV を全部再計算する場合との比較。オープンソース LLM 3 種、データセット 4 種）",
     "quote": "CacheBlend reduces time-to-first-token (TTFT) by 2.2-3.3x and increases the inference throughput by 2.8-5x from full KV recompute without compromising generation quality",
     "url": "https://arxiv.org/abs/2405.16444"
    }
   ],
   "tradeoffs": "部分的な再計算は完全な prefill（入力の一括処理）の近似。チャンクごとの KV を保存しておく必要がある。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2405.16444",
   "tier": "primary"
  },
  {
   "id": "serve-kv_aware_routing",
   "section": "serve",
   "group": "caching",
   "name": "KV キャッシュを意識したレプリカ間ルーティング（Preble、NVIDIA Dynamo Smart Router）",
   "nameEn": "Prefix/KV-cache-aware request routing across replicas (Preble, NVIDIA Dynamo Smart Router)",
   "what": "クラスタ全体のスケジューラが、一致する KV の先頭部分を最も長く持つレプリカへリクエストを送る。負荷も分散しつつ、分散環境全体のキャッシュヒット率を上げる。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time",
    "compute"
   ],
   "effects": [
    {
     "text": "平均レイテンシ 1.5〜14.5 倍、p99 レイテンシ 2〜10 倍の改善（Preble、最先端のサービングシステム比。オープンソース LLM 2 種、実ワークロード）",
     "quote": "Preble outperforms the SOTA serving systems by 1.5X to 14.5X on average latency and 2X to 10X on p99 latency",
     "url": "https://arxiv.org/abs/2407.00023"
    }
   ],
   "tradeoffs": "キャッシュのある場所に寄せることと負荷分散がぶつかりうる。キャッシュ状態の全体像を把握する仕組みが要る。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2407.00023",
   "tier": "primary"
  },
  {
   "id": "serve-kv_cache_quantization",
   "section": "serve",
   "group": "memory",
   "name": "KV キャッシュ量子化（KIVI、2 ビット）",
   "nameEn": "KV cache quantization (KIVI, 2-bit)",
   "what": "KV キャッシュ（過去のトークンの計算結果）だけを調整なしで 2 ビットに量子化する（キーはチャネル単位、値はトークン単位）。1 リクエストのメモリが減り、バッチに多くのリクエストを詰められる。モデルの重みには触れない。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "time"
   ],
   "effects": [
    {
     "text": "ピークメモリ 2.6 倍削減、バッチ最大 4 倍、スループット 2.35〜3.47 倍（Llama・Falcon・Mistral、実際の推論ワークロード）",
     "quote": "maintain almost the same quality while using 2.6× less peak memory (including model weight). This reduction in memory usage enables up to 4× larger batch size, bringing 2.35× ~ 3.47× throughput on real LLM inference workload",
     "url": "https://arxiv.org/abs/2402.02750"
    }
   ],
   "tradeoffs": "非可逆で品質が少し落ちるおそれがある。ビット幅を攻めるほどそのおそれは大きくなる。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2402.02750",
   "tier": "primary"
  },
  {
   "id": "serve-kv_cache_eviction",
   "section": "serve",
   "group": "memory",
   "name": "KV キャッシュの追い出し・疎化（H2O、StreamingLLM）",
   "nameEn": "KV cache eviction / sparsity (H2O heavy hitters, StreamingLLM attention sinks)",
   "what": "KV キャッシュ（過去のトークンの計算結果）の一部だけを残す。H2O は直近のトークンと累積アテンションの大きい heavy hitter を残す。StreamingLLM は先頭の attention sink とスライディングウィンドウを残し、キャッシュの大きさに上限をつける。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "time"
   ],
   "effects": [
    {
     "text": "スループット最大 29 倍（DeepSpeed Zero-Inference・HF Accelerate 比）、3 倍（FlexGen 比）。レイテンシ最大 1.9 倍短縮（いずれも H2O、heavy hitter 20%、OPT-6.7B／OPT-30B）",
     "quote": "Our implementation of H2O with 20% heavy hitters improves the throughput over three leading inference systems DeepSpeed Zero-Inference, Hugging Face Accelerate, and FlexGen by up to 29×, 29×, and 3× on OPT-6.7B and OPT-30B",
     "url": "https://arxiv.org/abs/2306.14048"
    },
    {
     "text": "最大 22.2 倍高速化（StreamingLLM、ストリーミング環境でのスライディングウィンドウ再計算比）",
     "quote": "In streaming settings, StreamingLLM outperforms the sliding window recomputation baseline by up to 22.2x speedup.",
     "url": "https://arxiv.org/abs/2309.17453"
    }
   ],
   "tradeoffs": "非可逆。捨てたトークンは呼び戻せないので、長距離の正確な検索が要るタスクでは劣化しうる。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2306.14048",
   "tier": "primary"
  },
  {
   "id": "serve-pd_disaggregation",
   "section": "serve",
   "group": "disaggregation",
   "name": "prefill／decode 分離（DistServe、Splitwise）",
   "nameEn": "Prefill/decode disaggregation (DistServe, Splitwise)",
   "what": "計算律速の prefill（入力の一括処理）とメモリ帯域律速の decode（1 トークンずつの生成）を別の GPU 群で動かし、KV キャッシュを受け渡す。干渉がなくなり、段階ごとに並列化やバッチサイズ、安いハードウェアまで選べる。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "処理リクエスト 7.4 倍、または SLO（応答時間の目標）12.6 倍厳しく（DistServe、最先端システム比。90% 超のリクエストがレイテンシ制約内）",
     "quote": "DistServe can serve 7.4x more requests or 12.6x tighter SLO, compared to state-of-the-art systems, while staying within latency constraints for > 90% of requests",
     "url": "https://arxiv.org/abs/2401.09670"
    },
    {
     "text": "コスト 20% 減でスループット 1.4 倍、または同コスト・同電力でスループット 2.35 倍（Splitwise のクラスタ設計）",
     "quote": "we show that we can achieve 1.4x higher throughput at 20% lower cost than current designs. Alternatively, we can achieve 2.35x more throughput with the same cost and power budgets.",
     "url": "https://arxiv.org/abs/2311.18677"
    },
    {
     "text": "処理リクエスト最大 30 倍（NVIDIA Dynamo、GB200 NVL72 上の DeepSeek-R1、ベンダーの主張）",
     "quote": "the framework increases requests served by up to 30x and more than doubles throughput for Llama 70B on NVIDIA Hopper GPUs",
     "url": "https://developer.nvidia.com/blog/introducing-nvidia-dynamo-a-low-latency-distributed-inference-framework-for-scaling-reasoning-ai-models/"
    }
   ],
   "tradeoffs": "KV 転送用の高速なインターコネクトと複雑な容量計画が要る。小規模な構成では得にならないこともある。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2401.09670",
   "tier": "primary"
  },
  {
   "id": "serve-mooncake_kvcache_centric",
   "section": "serve",
   "group": "disaggregation",
   "name": "KV キャッシュ中心の分離型サービング（Mooncake／Kimi）",
   "nameEn": "KVCache-centric disaggregated serving (Mooncake / Kimi)",
   "what": "prefill と decode のクラスタを分け、GPU クラスタ内の余った CPU DRAM と SSD をまとめて分離型 KV キャッシュにする。KV キャッシュを意識したスケジューラと予測にもとづく早期の受付拒否で、過負荷時も SLO（応答時間の目標）を守る。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time",
    "compute",
    "cost"
   ],
   "effects": [
    {
     "text": "スループット最大 525% 増（シミュレーション）／実ワークロードで処理リクエスト 75% 増（Kimi 本番サービス、ベースライン比）",
     "quote": "Mooncake can achieve up to a 525% increase in throughput in certain simulated scenarios while adhering to SLOs. Under real workloads, Mooncake's innovative architecture enables Kimi to handle 75% more requests.",
     "url": "https://arxiv.org/abs/2407.00079"
    }
   ],
   "tradeoffs": "大きなエンジニアリング投資が要る。効果は長文脈のワークロードに集中する。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2407.00079",
   "tier": "primary"
  },
  {
   "id": "serve-large_scale_ep_deepseek",
   "section": "serve",
   "group": "disaggregation",
   "name": "大規模エキスパート並列＋PD 分離＋ディスク KV キャッシュ（DeepSeek-V3/R1 推論システム）",
   "nameEn": "Large-scale cross-node expert parallelism with PD disaggregation and on-disk KV cache (DeepSeek-V3/R1 inference system)",
   "what": "疎な MoE（入力ごとに一部の専門家だけ動かすモデル）のエキスパートを多数のノードに散らし、エキスパートあたりの実効バッチを大きくする。2 本のマイクロバッチで通信と計算を重ね、DP／EP 間の負荷を均し、繰り返し入力はディスク上の KV キャッシュから返す。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "入力トークンの 56.3% がディスク KV キャッシュにヒット（DeepSeek 本番、24 時間）",
     "quote": "Total input tokens: 608B, of which 342B tokens (56.3%) hit the on-disk KV cache.",
     "url": "https://github.com/deepseek-ai/open-infra-index/blob/main/202502OpenSourceWeek/day_6_one_more_thing_deepseekV3R1_inference_system_overview.md"
    },
    {
     "text": "H800 1 ノードあたり入力約 73.7k トークン/秒（prefill）または出力約 14.8k トークン/秒（decode）（DeepSeek 本番の統計）",
     "quote": "Each H800 node delivers an average throughput of ~73.7k tokens/s input (including cache hits) during prefilling or ~14.8k tokens/s output during decoding.",
     "url": "https://github.com/deepseek-ai/open-infra-index/blob/main/202502OpenSourceWeek/day_6_one_more_thing_deepseekV3R1_inference_system_overview.md"
    },
    {
     "text": "理論上のコスト利益率 545%（全トークンを R1 の料金で課金し H800 を 1 時間 2 ドルと仮定。実際の収入はこれより低い）",
     "quote": "If all tokens were billed at DeepSeek-R1’s pricing (*), the total daily revenue would be $562,027, with a cost profit margin of 545%.",
     "url": "https://github.com/deepseek-ai/open-infra-index/blob/main/202502OpenSourceWeek/day_6_one_more_thing_deepseekV3R1_inference_system_overview.md"
    }
   ],
   "tradeoffs": "大規模 MoE モデルと非常に多いトラフィックに特化した構成。ノード間通信のエンジニアリングが重い。",
   "noNumber": false,
   "year": 2025,
   "url": "https://github.com/deepseek-ai/open-infra-index/blob/main/202502OpenSourceWeek/day_6_one_more_thing_deepseekV3R1_inference_system_overview.md",
   "tier": "primary"
  },
  {
   "id": "serve-multi_lora_serving",
   "section": "serve",
   "group": "other",
   "name": "複数アダプタの一括サービング（S-LoRA）",
   "nameEn": "Batched multi-adapter serving (S-LoRA)",
   "what": "1 つの共有ベースモデルで数千の LoRA アダプタ（微調整の差分だけの小さな重み）を提供する。アダプタはホストメモリに置き、KV キャッシュと同じメモリプールでページングし、専用カーネルで別アダプタのリクエストもまとめて処理する。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "memory",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "スループット最大 4 倍、扱えるアダプタ数が数桁多い（HuggingFace PEFT と vLLM の素朴な LoRA 対応との比較）",
     "quote": "S-LoRA can improve the throughput by up to 4 times and increase the number of served adapters by several orders of magnitude",
     "url": "https://arxiv.org/abs/2311.03285"
    }
   ],
   "tradeoffs": "多数の微調整が 1 つのベースモデルを共有する場合にしか使えない。アダプタの入れ替えにオーバーヘッドがかかる。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2311.03285",
   "tier": "primary"
  },
  {
   "id": "serve-api_prompt_caching",
   "section": "serve",
   "group": "caching",
   "name": "API のプロンプトキャッシュ／コンテキストキャッシュ（Anthropic、OpenAI、Google Gemini、DeepSeek）",
   "nameEn": "API prompt caching / context caching (Anthropic, OpenAI, Google Gemini, DeepSeek)",
   "what": "商用 API がプロンプトの処理済み先頭部分を保存し、同じ先頭部分を持つ次のリクエストではその分を大きく割り引いて課金する。利用者は固定部分（システムプロンプト・ツール・文書）を先頭に置き、1 バイトも変えないようにする。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "cost",
    "time",
    "tokens"
   ],
   "effects": [
    {
     "text": "キャッシュ読み出しは基本入力単価の 0.1 倍、5 分書き込みは 1.25 倍、1 時間書き込みは 2 倍（Anthropic Claude API の現行料金ドキュメント。脚注では Opus 5.5／Sonnet 5.5 の読み出しは 0.05 倍、Fable／Mythos 5.1〜5.2 は 0.025 倍）",
     "quote": "Cache read tokens are 0.1 times the base input tokens price (see the table footnote for per-model exceptions).",
     "url": "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    },
    {
     "text": "長いプロンプトで最大でコスト 90%・レイテンシ 85% 削減。本と対話する例で TTFT（最初のトークンまでの時間）11.5 秒→2.4 秒（Anthropic の発表 2024 年 8 月、Claude 3.x、10 万トークンのキャッシュ済みプロンプト）",
     "quote": "reducing costs by up to 90% and latency by up to 85% for long prompts",
     "url": "https://www.anthropic.com/news/prompt-caching"
    },
    {
     "text": "キャッシュ済み入力を最大 95% 割引、自動で適用（OpenAI API のプロンプトキャッシュガイド。対応モデルでは既定で有効）",
     "quote": "Pay the model’s reduced cached-input rate for reused tokens, discounted up to 95%.",
     "url": "https://developers.openai.com/api/docs/guides/prompt-caching"
    },
    {
     "text": "コンテキストキャッシュ料金 100 万トークンあたり $0.10、通常入力は $2.00（0.05 倍）（Google Gemini 4 Carbon の有料枠。2026 年 11 月 30 日までの料金、implicit caching のみ）",
     "quote": "Context caching price * Not available * $0.10 through November 30, 2026.",
     "url": "https://ai.google.dev/gemini-api/docs/pricing"
    },
    {
     "text": "API コスト最大 90% 削減、128K のプロンプトで最初のトークンまで 13 秒→500 ms（DeepSeek のディスク型コンテキストキャッシュ発表 2024-08-02。料金はその後改定）",
     "quote": "the first token latency is cut from 13s to just 500ms",
     "url": "https://api-docs.deepseek.com/news/news0802"
    }
   ],
   "tradeoffs": "Anthropic はキャッシュ書き込みに割増料金をとるので、先頭部分を使い回さないと元が取れない。キャッシュには期限がある（Anthropic は 5 分か 1 時間、OpenAI はメモリ内で約 5〜10 分か延長 24 時間）。先頭部分が少しでも変わるとそれ以降は全部無効になり、キャッシュできる最小長もある。料金は 2026-11-27 時点の値（DeepSeek の値は 2024 年の発表時点）。",
   "noNumber": false,
   "year": 2024,
   "url": "https://platform.claude.com/docs/en/build-with-claude/prompt-caching",
   "tier": "primary"
  },
  {
   "id": "serve-batch_api",
   "section": "serve",
   "group": "api",
   "name": "Batch API（OpenAI Batch、Anthropic Message Batches、Gemini Batch）",
   "nameEn": "Asynchronous batch APIs (OpenAI Batch, Anthropic Message Batches, Gemini Batch)",
   "what": "多数のリクエストを 1 つの非同期ジョブとして送り、24 時間以内に完了させる。事業者は空いた計算資源で処理し、半額で課金する。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "cost"
   ],
   "effects": [
    {
     "text": "50% 割引、24 時間以内に完了（OpenAI Batch API）",
     "quote": "Better cost efficiency: 50% cost discount compared to synchronous APIs",
     "url": "https://developers.openai.com/api/docs/guides/batch"
    },
    {
     "text": "標準料金の 50%、プロンプトキャッシュと併用可（Anthropic Message Batches API）",
     "quote": "All usage is charged at 50 percent of the standard API prices.",
     "url": "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    },
    {
     "text": "標準コストの 50%、目標 24 時間（Gemini Batch API）",
     "quote": "Batch API usage is priced at 50% of the standard interactive API cost for the equivalent model.",
     "url": "https://ai.google.dev/gemini-api/docs/batch-api"
    }
   ],
   "tradeoffs": "即時の応答はない（最大 24 時間、期限切れになることもある）。Anthropic はバッチでのキャッシュヒットをベストエフォートとし、30% から 98% と説明する。Anthropic の fast mode は Batch API と併用できない。料金は 2026-11-27 時点の値。",
   "noNumber": false,
   "year": 2024,
   "url": "https://developers.openai.com/api/docs/guides/batch",
   "tier": "primary"
  },
  {
   "id": "serve-flex_background_tiers",
   "section": "serve",
   "group": "api",
   "name": "安価な低速サービス階層（OpenAI Flex processing、background mode の完了期限）",
   "nameEn": "Discounted slower service tiers (OpenAI Flex processing, background-mode completion windows)",
   "what": "同期 API のまま応答の遅れや後回しを受け入れ、トークン単価を下げる。バッチ用のファイルを用意する手間はない。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "cost"
   ],
   "effects": [
    {
     "text": "Flex は Batch API と同じ料金（OpenAI Flex processing。ベータで縮小中、GPT-6.2 系では使えない）",
     "quote": "Tokens are priced at Batch API rates , with additional discounts from prompt caching .",
     "url": "https://developers.openai.com/api/docs/guides/flex-processing"
    },
    {
     "text": "2 時間の完了期限で Standard より 30% 安い／8 時間なら 40% 安い（OpenAI Responses API の background mode、対応モデル）",
     "quote": "The 2-hour window is 30% below Standard token pricing, and the 8-hour window is 40% below.",
     "url": "https://developers.openai.com/api/docs/guides/flex-processing"
    }
   ],
   "tradeoffs": "応答が遅く、タイムアウトや一時的な資源不足が起きることがある。OpenAI のドキュメントでは Flex は廃止予定。料金は 2026-11-27 時点の値。",
   "noNumber": false,
   "year": 2025,
   "url": "https://developers.openai.com/api/docs/guides/flex-processing",
   "tier": "primary"
  },
  {
   "id": "serve-llm_cascade_frugalgpt",
   "section": "serve",
   "group": "routing",
   "name": "LLM カスケード（FrugalGPT）",
   "nameEn": "LLM cascade (FrugalGPT)",
   "what": "まず安いモデルに問い合わせ、学習したスコアラーが答えを信用できないと判断したときだけ高いモデルへ回す。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "cost"
   ],
   "effects": [
    {
     "text": "GPT-4 と同等の性能でコスト最大 98% 削減、または同じコストで精度 +4%（2023 年の商用 API：GPT-4・ChatGPT・J1-Jumbo など）",
     "quote": "FrugalGPT can match the performance of the best individual LLM (e.g. GPT-4) with up to 98% cost reduction or improve the accuracy over GPT-4 by 4% with the same cost",
     "url": "https://arxiv.org/abs/2305.05176"
    }
   ],
   "tradeoffs": "スコアラーの学習にラベル付きデータが要る。上位モデルに回した問い合わせは順番に呼ぶぶん遅くなる。結果は 2023 年当時の価格差が前提。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2305.05176",
   "tier": "primary"
  },
  {
   "id": "serve-router_routellm",
   "section": "serve",
   "group": "routing",
   "name": "強弱モデルの学習型ルーティング（RouteLLM）",
   "nameEn": "Learned strong/weak model routing (RouteLLM)",
   "what": "人間の選好データで学習したルーターが、問い合わせごとに安い弱いモデルで足りるか強いモデルが要るかを決める。カスケードせず 1 回で振り分ける。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "cost"
   ],
   "effects": [
    {
     "text": "場合によっては品質を落とさずコスト 2 倍超の削減（広く使われるベンチマーク、強いモデルと弱いモデルの組。要旨による）",
     "quote": "our approach significantly reduces costs-by over 2 times in certain cases-without compromising the quality of responses",
     "url": "https://arxiv.org/abs/2406.18665"
    }
   ],
   "tradeoffs": "ルーターが誤ると難しい問い合わせが弱いモデルに行く。コストのしきい値の調整が要る。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2406.18665",
   "tier": "primary"
  },
  {
   "id": "serve-rag_vs_long_context_selfroute",
   "section": "serve",
   "group": "routing",
   "name": "長文脈の代わりに RAG を使い必要時だけ戻す（Self-Route）",
   "nameEn": "RAG instead of full long context, with self-routing fallback (Self-Route)",
   "what": "まず検索したチャンク（短い入力）で答える。モデルがそれでは答えられないと判断した問い合わせだけ、長い文脈全体を入れて答え直す。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "tokens",
    "cost"
   ],
   "effects": [
    {
     "text": "長文脈と同等の性能でコスト 65% 削減（Gemini-1.5-Pro）／39% 削減（GPT-4o）（公開の長文脈データセット。論文では GPT-4o・Gemini-1.5-Pro・GPT-3.5-Turbo の 3 モデル）",
     "quote": "the cost is reduced by 65% for Gemini-1.5-Pro and 39% for GPT-4O",
     "url": "https://arxiv.org/html/2407.16833v2"
    },
    {
     "text": "60% 超の問い合わせで RAG と長文脈の予測が同一（同じ研究）",
     "quote": "our analysis reveals that the predictions from LC and RAG are identical for over 60% of queries",
     "url": "https://arxiv.org/html/2407.16833v2"
    }
   ],
   "tradeoffs": "資源を十分に使えるなら平均では長文脈のほうが RAG より強い。対象の文章と言い回しが違う問い合わせでは検索が失敗しうる。",
   "noNumber": false,
   "year": 2024,
   "url": "https://arxiv.org/abs/2407.16833",
   "tier": "primary"
  },
  {
   "id": "serve-smaller_model_for_subtasks",
   "section": "serve",
   "group": "routing",
   "name": "簡単な作業に安いモデルとサブエージェントを割り当てる（Claude Code のガイド）",
   "nameEn": "Assign cheaper models and subagents to simpler subtasks (Claude Code guidance)",
   "what": "普段は中位か小さいモデルを使い、最大のモデルは難しい推論にとっておく。テスト・ログ・文書取得のような出力の多い作業はサブエージェントに任せ、要約だけをメインの文脈に戻す。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "cost",
    "tokens"
   ],
   "effects": [
    {
     "text": "多くのコーディングには Sonnet、簡単なサブエージェントの作業には haiku を推奨（Claude Code のコスト管理ドキュメント、定性的な指針）",
     "quote": "Sonnet handles most coding tasks well and costs less than Opus. Reserve Opus for complex architectural decisions or multi-step reasoning.",
     "url": "https://code.claude.com/docs/en/costs"
    },
    {
     "text": "100 万トークンあたりの入力単価は Haiku 5.5 が $0.10、Opus 5.5 が $4 で40倍の差。出力は $0.50 と $20（2026-11-27 時点の Anthropic の定価）",
     "quote": "| Claude Opus 5.5 | $4 / MTok | $5 / MTok | $8 / MTok | $0.20 / MTok | $20 / MTok |",
     "url": "https://platform.claude.com/docs/en/about-claude/pricing"
    }
   ],
   "tradeoffs": "ドキュメントには全体での節約額の一次的な測定がない。作業に対してモデルが弱すぎると品質が落ちる。料金は 2026-11-27 時点の値。",
   "noNumber": false,
   "year": 2025,
   "url": "https://code.claude.com/docs/en/costs",
   "tier": "primary"
  },
  {
   "id": "serve-prompt_compression_llmlingua",
   "section": "serve",
   "group": "prompt",
   "name": "プロンプト圧縮（LLMLingua、LongLLMLingua、LLMLingua-2）",
   "nameEn": "Prompt compression (LLMLingua, LongLLMLingua, LLMLingua-2)",
   "what": "小さな言語モデルがトークンを採点し、情報の少ないトークンを落としてから大きなモデルに送る。蒸留で学習したトークン分類器で必要なトークンだけ残す方式もある。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "tokens",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "性能低下わずかで最大 20 倍に圧縮（LLMLingua。GSM8K・BBH・ShareGPT・Arxiv-March23）",
     "quote": "allows for up to 20x compression with little performance loss",
     "url": "https://arxiv.org/abs/2310.05736"
    },
    {
     "text": "2〜5 倍の圧縮で全体のレイテンシ 1.6〜2.9 倍高速、従来の圧縮器より 3〜6 倍速い（LLMLingua-2、XLM-RoBERTa-large／mBERT）",
     "quote": "our model is 3x-6x faster than existing prompt compression methods, while accelerating the end-to-end latency by 1.6x-2.9x with compression ratios of 2x-5x",
     "url": "https://arxiv.org/abs/2403.12968"
    }
   ],
   "tradeoffs": "非可逆。圧縮したプロンプトはプレフィックスキャッシュを壊すことがあり、圧縮器自体も計算資源を使う。",
   "noNumber": false,
   "year": 2023,
   "url": "https://arxiv.org/abs/2310.05736",
   "tier": "primary"
  },
  {
   "id": "serve-concise_reasoning_prompting",
   "section": "serve",
   "group": "prompt",
   "name": "簡潔な推論プロンプトとトークン予算（Chain of Draft、TALE）",
   "nameEn": "Concise reasoning prompts and token budgets (Chain of Draft, TALE)",
   "what": "途中の下書きを最小限に書かせたり、明示したトークン予算の中で推論させたりする。冗長な chain-of-thought（段階的に考えを書き出す推論）の出力トークンを減らす。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "tokens",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "最少で CoT の 7.6% のトークンで同等以上の精度（Chain of Draft、Chain-of-Thought との比較、推論タスク）",
     "quote": "CoD matches or surpasses CoT in accuracy while using as little as only 7.6% of the tokens",
     "url": "https://arxiv.org/abs/2502.18600"
    },
    {
     "text": "わずかな性能低下でトークンコストを削減。要旨に代表値の数字はない（TALE、トークン予算を意識した推論）",
     "quote": "our method effectively reduces token costs in CoT reasoning with only a slight performance reduction",
     "url": "https://arxiv.org/abs/2412.18547"
    }
   ],
   "tradeoffs": "本当に長い推論が要るタスクでは精度が落ちうる。",
   "noNumber": false,
   "year": 2025,
   "url": "https://arxiv.org/abs/2502.18600",
   "tier": "primary"
  },
  {
   "id": "serve-reasoning_effort_control",
   "section": "serve",
   "group": "reasoning",
   "name": "推論の effort 指定と出力上限（Anthropic effort、OpenAI reasoning.effort、Gemini thinking_level、max_tokens）",
   "nameEn": "Reasoning effort / thinking level parameters and output caps (Anthropic effort, OpenAI reasoning.effort, Gemini thinking_level, max_tokens)",
   "what": "推論モデルが考えたり行動したりに使うトークン量を API パラメータで指定する（low から max）。max_tokens は思考を含む出力全体の上限。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "tokens",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "SWE-bench Verified の同スコアで出力トークン 76% 減（Opus 4.5 の medium effort 対 Sonnet 4.5 の最高スコア、2025 年 11 月）",
     "quote": "Set to a medium effort level, Opus 4.5 matches Sonnet 4.5’s best score on SWE-bench Verified, but uses 76% fewer output tokens.",
     "url": "https://www.anthropic.com/news/claude-opus-4-5"
    },
    {
     "text": "low effort でトークンを大きく節約、能力は多少下がる（定性的。Anthropic の effort ドキュメント、ツール呼び出しを含む全出力トークンに効く）",
     "quote": "Significant token savings with some capability reduction.",
     "url": "https://platform.claude.com/docs/en/build-with-claude/effort"
    },
    {
     "text": "effort を下げると速度とトークン節約を優先（定性的。OpenAI の推論ガイド）",
     "quote": "Lower effort favors speed and lower token usage, while at higher effort the model thinks more completely to provide higher quality responses.",
     "url": "https://developers.openai.com/api/docs/guides/reasoning"
    }
   ],
   "tradeoffs": "effort を下げると難しいタスクでの能力が落ちる。Anthropic のドキュメントは effort を厳密なトークン予算ではなく振る舞いの合図とし、自前の評価で振って確かめるよう勧める。思考トークンは出力として課金される。",
   "noNumber": false,
   "year": 2025,
   "url": "https://platform.claude.com/docs/en/build-with-claude/effort",
   "tier": "primary"
  },
  {
   "id": "serve-context_editing_compaction",
   "section": "serve",
   "group": "prompt",
   "name": "エージェントの文脈管理（context editing、memory、compaction）",
   "nameEn": "Agent context management: context editing, memory, and compaction",
   "what": "長いエージェント実行で古いツール結果を自動で消す（context editing）、メモを文脈の外に残す（memory tool）、古い履歴を要約する（compaction）。毎ターン送り直すトークンを減らす。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "tokens",
    "cost"
   ],
   "effects": [
    {
     "text": "100 ターンの Web 検索評価でトークン消費 84% 減（Anthropic Claude Developer Platform の社内評価、2025 年 9 月）",
     "quote": "context editing enabled agents to complete workflows that would otherwise fail due to context exhaustion—while reducing token consumption by 84%",
     "url": "https://www.anthropic.com/news/context-management"
    }
   ],
   "tradeoffs": "Anthropic のドキュメントによると、思考ブロックなどを消すとその位置でプロンプトキャッシュが無効になる。要約で細部が落ちることもある。",
   "noNumber": false,
   "year": 2025,
   "url": "https://www.anthropic.com/news/context-management",
   "tier": "primary"
  },
  {
   "id": "serve-tool_search_code_execution",
   "section": "serve",
   "group": "prompt",
   "name": "ツールのオンデマンド読み込みとコードからのツール操作（Tool Search Tool、Programmatic Tool Calling、code execution with MCP）",
   "nameEn": "On-demand tool loading and code-based tool orchestration (Tool Search Tool, Programmatic Tool Calling, code execution with MCP)",
   "what": "すべてのツール定義と途中結果を文脈に積む代わりに、必要なツールだけを検索して読み込む。ツール呼び出しはコードから実行し、最終結果だけをモデルに渡す。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "tokens",
    "time",
    "cost"
   ],
   "effects": [
    {
     "text": "ツール定義のトークン 85% 超削減（Anthropic の tool search ドキュメント。複数 MCP サーバーの典型構成で定義が約 55k トークン）",
     "quote": "Tool search typically reduces this by over 85 percent, loading only the 3–5 tools Claude needs for a given request.",
     "url": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool"
    },
    {
     "text": "複雑な調査タスクでトークン 37% 減（43,588→27,297）（Programmatic Tool Calling、Anthropic 社内テスト、2025 年 11 月）",
     "quote": "Average usage dropped from 43,588 to 27,297 tokens, a 37% reduction on complex research tasks.",
     "url": "https://www.anthropic.com/engineering/advanced-tool-use"
    },
    {
     "text": "150,000→2,000 トークン（98.7% 減）（code execution with MCP、説明用の例）",
     "quote": "This reduces the token usage from 150,000 tokens to 2,000 tokens—a time and cost saving of 98.7%",
     "url": "https://www.anthropic.com/engineering/code-execution-with-mcp"
    }
   ],
   "tradeoffs": "検索や実行の手順とサンドボックス基盤が余分に要る。Anthropic のドキュメントでは小さなツールが約 10 個未満なら効果は薄い。",
   "noNumber": false,
   "year": 2025,
   "url": "https://www.anthropic.com/engineering/advanced-tool-use",
   "tier": "primary"
  },
  {
   "id": "serve-semantic_cache_gptcache",
   "section": "serve",
   "group": "caching",
   "name": "応答のセマンティックキャッシュ（GPTCache）",
   "nameEn": "Semantic caching of responses (GPTCache)",
   "what": "入ってきた問い合わせを埋め込みベクトル（意味を表す数値の並び）にし、意味の近い過去の問い合わせがあれば保存した LLM の答えを返す。LLM の呼び出しそのものを省く。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "cost",
    "time"
   ],
   "effects": [
    {
     "text": "キャッシュヒット時に応答 2〜10 倍速（GPTCache 論文、NLP-OSS 2023。要旨にコスト削減率の記載なし）",
     "quote": "increase response speed 2-10 times when the cache is hit",
     "url": "https://aclanthology.org/2023.nlposs-1.24/"
    }
   ],
   "tradeoffs": "誤ヒットすると間違った答えや古い答えを返す。節約額は問い合わせの繰り返し具合しだいで、個人向けや鮮度が要る内容には向かない。",
   "noNumber": false,
   "year": 2023,
   "url": "https://aclanthology.org/2023.nlposs-1.24/",
   "tier": "primary"
  },
  {
   "id": "serve-price_trend_epoch",
   "section": "serve",
   "group": "trend",
   "name": "傾向：同じ能力あたりのトークン価格は急速に下がる（Epoch AI）",
   "nameEn": "Trend: price per token for fixed capability falls quickly (Epoch AI)",
   "what": "一定のベンチマークスコアに届く最安価格が時間とともにどれだけ速く下がるかを測る。ハードウェア・サービング・モデル効率の改善を合わせた結果を映す。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "cost"
   ],
   "effects": [
    {
     "text": "マイルストーンにより年 9〜900 倍のペースで低下、GPQA で GPT-4 水準なら年 40 倍（Epoch AI のデータ分析 2025 年、ベンチマーク 6 種）",
     "quote": "The rate of decline varies dramatically depending on the performance milestone, ranging from 9x to 900x per year.",
     "url": "https://epoch.ai/data-insights/llm-inference-price-trends"
    }
   ],
   "tradeoffs": "Epoch は最も急な下落は直近 1 年に起きたもので、続くとは限らないと注記する。価格はコストと同じではない。",
   "noNumber": false,
   "year": 2025,
   "url": "https://epoch.ai/data-insights/llm-inference-price-trends",
   "tier": "secondary"
  },
  {
   "id": "serve-price_trend_llmflation",
   "section": "serve",
   "group": "trend",
   "name": "傾向：「LLMflation」（a16z）",
   "nameEn": "Trend: \"LLMflation\" (a16z)",
   "what": "MMLU の一定スコアに届くモデルの最安価格を時系列で追う。",
   "stages": [
    "inference"
   ],
   "reduces": [
    "cost"
   ],
   "effects": [
    {
     "text": "同じ性能のコストが年 10 倍のペースで低下（a16z の分析 2024 年 11 月、MMLU のしきい値）",
     "quote": "For an LLM of equivalent performance, the cost is decreasing by 10x every year.",
     "url": "https://a16z.com/llmflation-llm-inference-cost/"
    }
   ],
   "tradeoffs": "著者自身が手法は完璧からほど遠いと述べる（データ汚染、表示価格ベース）。",
   "noNumber": false,
   "year": 2024,
   "url": "https://a16z.com/llmflation-llm-inference-cost/",
   "tier": "secondary"
  }
 ]
};
