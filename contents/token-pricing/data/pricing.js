/* AI サービスのトークン単価のデータ（正本）。調査の記録は research/token-pricing-2026.md。
   値は 100万トークンあたりの USD。円や人民元は original にそのまま残し、換算しない。 */
window.TOKEN_PRICING = {
 "asOf": "2026-11-27",
 "unit": "USD / 100万トークン",
 "providers": [
  {
   "id": "openai",
   "name": "OpenAI"
  },
  {
   "id": "anthropic",
   "name": "Anthropic"
  },
  {
   "id": "google",
   "name": "Google"
  },
  {
   "id": "xai",
   "name": "xAI"
  },
  {
   "id": "deepseek",
   "name": "DeepSeek"
  },
  {
   "id": "mistral",
   "name": "Mistral AI"
  },
  {
   "id": "cohere",
   "name": "Cohere"
  },
  {
   "id": "alibaba",
   "name": "Alibaba Cloud（Qwen）"
  },
  {
   "id": "moonshot",
   "name": "Moonshot AI（Kimi）"
  },
  {
   "id": "zai",
   "name": "Z.ai（GLM）"
  },
  {
   "id": "minimax",
   "name": "MiniMax"
  },
  {
   "id": "ai21",
   "name": "AI21 Labs"
  },
  {
   "id": "meta",
   "name": "Meta"
  }
 ],
 "current": [
  {
   "provider": "openai",
   "model": "GPT-6.2 Astra",
   "id": "gpt-6.2-astra",
   "tier": "flagship",
   "released": "2026-11-17",
   "input": 8,
   "cachedInput": 0.4,
   "output": 40,
   "notes": "Standard・短文脈（≤272K）。272K入力トークン超のリクエストは入力・キャッシュ2倍、出力1.5倍（リクエスト全体に適用）。長文脈は $16/$0.80/$60。30分キャッシュ書き込み $10、12時間書き込み $20。Batch は50%（$4/$0.20/$20）。Fast は2倍。Ultrafast は2027-02-28まで3倍、2027-03-01から6倍。Background の2時間枠は30%引き、8時間枠は40%引き（公開ベータ）。2026-03-05以降発表モデルはデータレジデンシー等で10%上乗せ。Flex 非対応。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-6.2-astra"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6 Astra",
   "id": "gpt-6-astra",
   "tier": "flagship",
   "released": "2026-09-03",
   "input": 10,
   "cachedInput": 1,
   "output": 50,
   "notes": "Standard・短文脈。272K入力トークン超のリクエストは入力・キャッシュ2倍、出力1.5倍（リクエスト全体に適用）。長文脈は $20/$2/$75。キャッシュ書き込み $12.50（30分）。Batch・Flex は50%。Fast は2倍。Ultrafast は $60/$6/$300（6倍）。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-6-astra"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6.2 Sol",
   "id": "gpt-6.2-sol",
   "tier": "mid",
   "released": "2026-11-17",
   "input": 2,
   "cachedInput": 0.1,
   "output": 10,
   "notes": "Standard・短文脈。272K入力トークン超のリクエストは入力・キャッシュ2倍、出力1.5倍（リクエスト全体に適用）。長文脈は $4/$0.20/$15。キャッシュ書き込み $2.50（30分）、$5（12時間）。Batch は50%。Fast は2倍。Ultrafast は2027-02-28まで3倍、以降6倍。Background 割引あり。GPT-6.1 Sol と同価格。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-6.2-sol"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6.1 Sol",
   "id": "gpt-6.1-sol",
   "tier": "mid",
   "released": "2026-09-29",
   "input": 2,
   "cachedInput": 0.1,
   "output": 10,
   "notes": "Standard・短文脈。272K入力トークン超のリクエストは入力・キャッシュ2倍、出力1.5倍（リクエスト全体に適用）。長文脈は $4/$0.20/$15。Batch・Flex は50%。Fast は2倍。Ultrafast は6倍（$12/$0.60/$60）。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-6.1-sol"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6 Sol",
   "id": "gpt-6-sol",
   "tier": "mid",
   "released": "2026-09-22",
   "input": 2,
   "cachedInput": 0.2,
   "output": 10,
   "notes": "Standard・短文脈。272K入力トークン超のリクエストは入力・キャッシュ2倍、出力1.5倍（リクエスト全体に適用）。長文脈は $4/$0.40/$15。Batch・Flex は50%。Fast は2倍。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-6-sol"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6.1 Terra",
   "id": "gpt-6.1-terra",
   "tier": "mid",
   "released": "2026-10-26",
   "input": 1,
   "cachedInput": 0.05,
   "output": 5,
   "notes": "Standard・短文脈。272K入力トークン超のリクエストは入力・キャッシュ2倍、出力1.5倍（リクエスト全体に適用）。長文脈は $2/$0.10/$7.50。キャッシュ書き込み $1.25（30分）、$2.50（12時間）。Batch・Flex は50%。Fast は2倍。Background 割引あり。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-6.1-terra"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.6 Sol",
   "id": "gpt-5.6-sol",
   "tier": "mid",
   "released": "2026-07-09",
   "input": 4,
   "cachedInput": 0.4,
   "output": 20,
   "notes": "プロモーション価格。料金ページとモデルページは2026-11-30までと記載（2026-08-21の changelog では「少なくとも2026-11-21まで」）。発表時の定価は $5/$30。272K入力トークン超のリクエストは入力・キャッシュ2倍、出力1.5倍（リクエスト全体に適用）。長文脈は $8/$0.80/$30。Batch・Flex は50%。Fast は2倍。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-5.6-sol",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.6 Terra",
   "id": "gpt-5.6-terra",
   "tier": "mid",
   "released": "2026-07-09",
   "input": 2,
   "cachedInput": 0.2,
   "output": 12,
   "notes": "2026-07-30に20%値下げした後の価格。272K入力トークン超のリクエストは入力・キャッシュ2倍、出力1.5倍（リクエスト全体に適用）。長文脈は $4/$0.40/$18。Batch・Flex は50%。Fast は2倍。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-5.6-terra"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.5",
   "id": "gpt-5.5",
   "tier": "mid",
   "released": "2026-04-24",
   "input": 5,
   "cachedInput": 0.5,
   "output": 30,
   "notes": "272K未満の価格。272K超は入力2倍・出力1.5倍（$10/$1/$45）。Batch・Flex は50%。Fast（旧 Priority）は $12.50/$1.25/$75。データレジデンシーは10%上乗せ。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-5.5"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.4",
   "id": "gpt-5.4",
   "tier": "mid",
   "released": "2026-03-05",
   "input": 2.5,
   "cachedInput": 0.25,
   "output": 15,
   "notes": "272K未満の価格。272K超は $5/$0.50/$22.50。Batch・Flex は50%。データレジデンシーは10%上乗せ。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-5.4"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6 Luna",
   "id": "gpt-6-luna",
   "tier": "small",
   "released": "2026-09-22",
   "input": 0.1,
   "cachedInput": 0.01,
   "output": 0.5,
   "notes": "Standard・短文脈。272K入力トークン超のリクエストは入力・キャッシュ2倍、出力1.5倍（リクエスト全体に適用）。長文脈は $0.20/$0.02/$0.75。Batch・Flex は50%。Fast は2倍。Background 割引あり。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-6-luna"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.6 Luna",
   "id": "gpt-5.6-luna",
   "tier": "small",
   "released": "2026-07-09",
   "input": 0.2,
   "cachedInput": 0.02,
   "output": 1.2,
   "notes": "2026-07-30に80%値下げした後の価格。272K入力トークン超のリクエストは入力・キャッシュ2倍、出力1.5倍（リクエスト全体に適用）。長文脈は $0.40/$0.04/$1.80。Batch・Flex は50%。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-5.6-luna"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.4 mini",
   "id": "gpt-5.4-mini",
   "tier": "small",
   "released": "2026-03-17",
   "input": 0.75,
   "cachedInput": 0.075,
   "output": 4.5,
   "notes": "Batch・Flex は50%（$0.375/$0.0375/$2.25）。データレジデンシーは10%上乗せ。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-5.4-mini"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.4 nano",
   "id": "gpt-5.4-nano",
   "tier": "small",
   "released": "2026-03-17",
   "input": 0.2,
   "cachedInput": 0.02,
   "output": 1.25,
   "notes": "モデルページでは Deprecated 表示。Batch・Flex は50%。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-5.4-nano"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5 nano",
   "id": "gpt-5-nano",
   "tier": "small",
   "released": "2025-08-07",
   "input": 0.05,
   "cachedInput": 0.005,
   "output": 0.4,
   "notes": "Deprecated（モデルページ）。料金ページ掲載の中で最安のテキストモデル。Batch・Flex は50%。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-5-nano"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.5 Pro",
   "id": "gpt-5.5-pro",
   "tier": "reasoning",
   "released": "2026-04-24",
   "input": 30,
   "cachedInput": null,
   "output": 180,
   "notes": "キャッシュ入力の割引なし。272K未満の価格。272K超は $60/$270。Batch・Flex は $15/$90。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-5.5-pro"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "OpenAI o3",
   "id": "o3",
   "tier": "reasoning",
   "released": "2025-04-16",
   "input": 2,
   "cachedInput": 0.5,
   "output": 8,
   "notes": "2025-06-10に80%値下げした後の価格。モデルページでは Deprecated 表示。Batch は $1/$4、Flex は $1/$0.25/$4。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/o3"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "OpenAI o3-pro",
   "id": "o3-pro",
   "tier": "reasoning",
   "released": "2025-06-10",
   "input": 20,
   "cachedInput": null,
   "output": 80,
   "notes": "Deprecated（モデルページ）。Batch は $10/$40。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/o3-pro"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4.1",
   "id": "gpt-4.1",
   "tier": "other",
   "released": "2025-04-14",
   "input": 2,
   "cachedInput": 0.5,
   "output": 8,
   "notes": "旧世代。Deprecated で、2027-01-14に提供終了予定（後継は gpt-6-luna）。Batch は $1/$4。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4o",
   "id": "gpt-4o",
   "tier": "other",
   "released": "2024-05-13",
   "input": 2.5,
   "cachedInput": 1.25,
   "output": 10,
   "notes": "価格は現行スナップショット gpt-4o-2024-08-06 のもの。Deprecated で、2027-01-14に提供終了予定。Batch は $1.25/$5。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/gpt-4o",
    "https://developers.openai.com/api/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4o mini",
   "id": "gpt-4o-mini",
   "tier": "other",
   "released": "2024-07-18",
   "input": 0.15,
   "cachedInput": 0.075,
   "output": 0.6,
   "notes": "Deprecated で、2027-01-14に提供終了予定。Batch は $0.075/$0.30。",
   "source": [
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Fable 5.2",
   "id": "claude-fable-5-2",
   "tier": "flagship",
   "released": "2026-11-09",
   "input": 8,
   "cachedInput": 0.2,
   "output": 40,
   "notes": "キャッシュ書き込み（5分） $10。キャッシュ書き込み1時間 $16。キャッシュ読み取りは入力の0.025倍。Batch は $4/$20。fast mode は $16/$80（Batch 不可）。1Mコンテキストを標準単価で提供。現行の最上位（Mythos 級）。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/fable-5-2/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Mythos 5.2",
   "id": "claude-mythos-5-2",
   "tier": "flagship",
   "released": "2026-11-09",
   "input": 8,
   "cachedInput": 0.2,
   "output": 40,
   "notes": "キャッシュ書き込み（5分） $10。キャッシュ書き込み1時間 $16。Fable 5.2 と同じモデルで安全対策の段階が異なる。Cyber Verification Program などの認証を受けた組織のみ利用可（limited availability）。Batch は $4/$20。fast mode は $16/$80。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://platform.claude.com/docs/en/models/mythos-5-2/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Fable 5.1",
   "id": "claude-fable-5-1",
   "tier": "flagship",
   "released": "2026-09-01",
   "input": 10,
   "cachedInput": 0.25,
   "output": 50,
   "notes": "キャッシュ書き込み（5分） $12.5。キャッシュ書き込み1時間 $20。Legacy。キャッシュ読み取りは入力の0.025倍（発表時に75%値下げと明記）。Batch は $5/$25。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/fable-5-1/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Mythos 5.1",
   "id": "claude-mythos-5-1",
   "tier": "flagship",
   "released": "2026-09-01",
   "input": 10,
   "cachedInput": 0.25,
   "output": 50,
   "notes": "キャッシュ書き込み（5分） $12.5。キャッシュ書き込み1時間 $20。認証済み組織のみ。Batch は $5/$25。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://platform.claude.com/docs/en/models/mythos-5-1/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Fable 5",
   "id": "claude-fable-5",
   "tier": "flagship",
   "released": "2026-06-09",
   "input": 10,
   "cachedInput": 1,
   "output": 50,
   "notes": "キャッシュ書き込み（5分） $12.5。キャッシュ書き込み1時間 $20。Legacy。キャッシュ読み取りは標準の0.1倍。Batch は $5/$25。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/fable-5/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Mythos 5",
   "id": "claude-mythos-5",
   "tier": "flagship",
   "released": "2026-06-09",
   "input": 10,
   "cachedInput": 1,
   "output": 50,
   "notes": "キャッシュ書き込み（5分） $12.5。キャッシュ書き込み1時間 $20。認証済み組織のみ。Batch は $5/$25。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://platform.claude.com/docs/en/models/mythos-5/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 5.5",
   "id": "claude-opus-5-5",
   "tier": "flagship",
   "released": "2026-09-22",
   "input": 4,
   "cachedInput": 0.2,
   "output": 20,
   "notes": "キャッシュ書き込み（5分） $5。キャッシュ書き込み1時間 $8。Opus 級（Mythos 級より下）。公式ドキュメントが「迷ったらまずこれ」とするモデル。キャッシュ読み取りは入力の0.05倍。Batch は $2/$10。fast mode は $8/$40。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/opus-5-5/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 5",
   "id": "claude-opus-5",
   "tier": "flagship",
   "released": "2026-07-24",
   "input": 5,
   "cachedInput": 0.5,
   "output": 25,
   "notes": "キャッシュ書き込み（5分） $6.25。キャッシュ書き込み1時間 $10。Legacy。Batch は $2.50/$12.50。fast mode（research preview）は $10/$50。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/opus-5/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4.8",
   "id": "claude-opus-4-8",
   "tier": "flagship",
   "released": "2026-05-28",
   "input": 5,
   "cachedInput": 0.5,
   "output": 25,
   "notes": "キャッシュ書き込み（5分） $6.25。キャッシュ書き込み1時間 $10。Legacy。Batch は $2.50/$12.50。fast mode（deprecated）は $10/$50。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/opus-4-8/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4.7",
   "id": "claude-opus-4-7",
   "tier": "flagship",
   "released": "2026-04-16",
   "input": 5,
   "cachedInput": 0.5,
   "output": 25,
   "notes": "キャッシュ書き込み（5分） $6.25。キャッシュ書き込み1時間 $10。Legacy。Batch は $2.50/$12.50。4.7 以降は新トークナイザで同じ文章が約30%多いトークンになる。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/opus-4-7/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4.6",
   "id": "claude-opus-4-6",
   "tier": "flagship",
   "released": "2026-02-05",
   "input": 5,
   "cachedInput": 0.5,
   "output": 25,
   "notes": "キャッシュ書き込み（5分） $6.25。キャッシュ書き込み1時間 $10。Legacy。Batch は $2.50/$12.50。現在は1Mコンテキスト全体が標準単価（発売時は200K超で $10/$37.50 の割増があった）。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/opus-4-6/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4.5",
   "id": "claude-opus-4-5-20251101",
   "tier": "flagship",
   "released": "2025-11-24",
   "input": 5,
   "cachedInput": 0.5,
   "output": 25,
   "notes": "キャッシュ書き込み（5分） $6.25。キャッシュ書き込み1時間 $10。Deprecated（2026-11-23 通知）。Claude API での退役予定は 2027-01-22。Batch は $2.50/$12.50。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://platform.claude.com/docs/en/about-claude/model-deprecations",
    "https://platform.claude.com/docs/en/models/opus-4-5/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 5.5",
   "id": "claude-sonnet-5-5",
   "tier": "mid",
   "released": "2026-09-28",
   "input": 2,
   "cachedInput": 0.1,
   "output": 10,
   "notes": "キャッシュ書き込み（5分） $2.5。キャッシュ書き込み1時間 $4。キャッシュ読み取りは入力の0.05倍。発売時は $0.20 で、2026-10-07 に $0.10 へ半額化。Batch は $1/$5。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/sonnet-5-5/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 5",
   "id": "claude-sonnet-5",
   "tier": "mid",
   "released": "2026-06-30",
   "input": 2,
   "cachedInput": 0.2,
   "output": 10,
   "notes": "キャッシュ書き込み（5分） $2.5。キャッシュ書き込み1時間 $4。Legacy。発売時は2026-08-31までの導入価格だったが、2026-08-10 に恒久化（9月1日からの $3/$15 への値上げは中止）。Batch は $1/$5。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/sonnet-5/overview",
    "https://www.anthropic.com/news/claude-sonnet-5"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 4.6",
   "id": "claude-sonnet-4-6",
   "tier": "mid",
   "released": "2026-02-17",
   "input": 3,
   "cachedInput": 0.3,
   "output": 15,
   "notes": "キャッシュ書き込み（5分） $3.75。キャッシュ書き込み1時間 $6。Legacy。Batch は $1.50/$7.50。現在は1Mコンテキスト全体が標準単価（2026-03 時点では200K超で $6/$22.50 の割増があった）。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/sonnet-4-6/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 4.5",
   "id": "claude-sonnet-4-5-20250929",
   "tier": "mid",
   "released": "2025-09-29",
   "input": 3,
   "cachedInput": 0.3,
   "output": 15,
   "notes": "キャッシュ書き込み（5分） $3.75。キャッシュ書き込み1時間 $6。Deprecated（2026-09-30 通知）。Claude API での退役予定は 2026-11-30。Batch は $1.50/$7.50。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://platform.claude.com/docs/en/about-claude/model-deprecations",
    "https://platform.claude.com/docs/en/models/sonnet-4-5/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Haiku 5.5（プロンプト10万トークン以下）",
   "id": "claude-haiku-5-5",
   "tier": "small",
   "released": "2026-10-07",
   "input": 0.1,
   "cachedInput": 0.01,
   "output": 0.5,
   "notes": "キャッシュ書き込み（5分） $0.125。キャッシュ書き込み1時間 $0.2。1リクエストのプロンプト（キャッシュ読み書きを含む全入力）が10万トークン以下のときの単価。Batch は $0.05/$0.25。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/haiku-5-5/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Haiku 5.5（プロンプト10万トークン超）",
   "id": "claude-haiku-5-5",
   "tier": "small",
   "released": "2026-10-07",
   "input": 0.5,
   "cachedInput": 0.05,
   "output": 2.5,
   "notes": "キャッシュ書き込み（5分） $0.625。キャッシュ書き込み1時間 $1。プロンプトが10万トークンを超えたリクエストは、そのリクエスト全体がこの単価。Batch は $0.25/$1.25。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/haiku-5-5/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Haiku 4.5",
   "id": "claude-haiku-4-5-20251001",
   "tier": "small",
   "released": "2025-10-15",
   "input": 1,
   "cachedInput": 0.1,
   "output": 5,
   "notes": "キャッシュ書き込み（5分） $1.25。キャッシュ書き込み1時間 $2。Legacy。Batch は $0.50/$2.50。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://claude.com/pricing",
    "https://platform.claude.com/docs/en/models/haiku-4-5/overview"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 4 Carbon",
   "id": "gemini-4-carbon",
   "tier": "flagship",
   "released": "2026-11-10",
   "input": 2,
   "cachedInput": 0.1,
   "output": 10,
   "notes": "2026-11-30 までの導入価格。2026-12-01 から 入力 $4.00 / キャッシュ $0.20 / 出力 $20.00。出力は思考トークン込み。無料枠なし。キャッシュは暗黙キャッシュのみ。長いプロンプトの割増の記載なし。Batch と Flex は半額（導入期間 $1.00/$5.00、12/1 以降 $2.00/$10.00）、Priority は $3.60/$18.00（12/1 以降 $7.20/$36.00）。Vertex AI（Agent Platform）の global も同額、non-global は約1.1倍、導入価格は「50% のクレジット還元」による。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing",
    "https://aistudio.google.com/docs/changelog",
    "https://cloud.google.com/model-garden/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 4 Argon",
   "id": "gemini-4-argon",
   "tier": "reasoning",
   "released": "2026-10-13",
   "input": 2,
   "cachedInput": 0.1,
   "output": 10,
   "notes": "Carbon と同一単価（whats-new ページに「same per-token pricing」と明記）。Carbon より思考トークンが少ない効率版。2026-11-30 までの導入価格で、2026-12-01 から $4.00 / $0.20 / $20.00。無料枠なし。暗黙キャッシュのみ。Batch と Flex は半額、Priority は $3.60/$18.00。招待制の Contributor 枠は $1.00/$5.00（データが製品改善に使われる）。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing",
    "https://aistudio.google.com/docs/whats-new-gemini-4-argon"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 4 Neon",
   "id": "gemini-4-neon",
   "tier": "mid",
   "released": "2026-11-18",
   "input": 3,
   "cachedInput": 0.15,
   "output": 15,
   "notes": "無料枠なし。暗黙キャッシュのみ。100万トークンの文脈。長いプロンプトの割増の記載なし。Batch と Flex は $1.50/$7.50、Priority は $5.40/$27.00。Vertex AI はキャッシュ書き込み $3.75（2027-01-12 から）を別記。2026-12-01 以降は Carbon/Argon（$4/$20）より安く、導入期間中は Carbon/Argon より高い。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing",
    "https://aistudio.google.com/docs/changelog",
    "https://cloud.google.com/model-garden/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 4 Hydrogen",
   "id": "gemini-4-hydrogen",
   "tier": "mid",
   "released": "2026-11-12",
   "input": 1.5,
   "cachedInput": 0.075,
   "output": 7.5,
   "notes": "Gemini 4 で唯一無料枠あり。暗黙キャッシュのみ。Batch と Flex は $0.75/$3.75、Priority は $2.70/$13.50。招待制の Contributor 枠 $0.75/$3.75。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.8 Flash",
   "id": "gemini-3.8-flash",
   "tier": "mid",
   "released": "2026-09-02",
   "input": 0.75,
   "cachedInput": 0.075,
   "output": 3.75,
   "notes": "2026-12-31 までの導入価格。2027-01-01 から 入力 $1.50 / キャッシュ $0.15 / 出力 $7.50。キャッシュ保存料は $0.50/100万トークン・時（2027 年から $1.00）。無料枠あり。Batch と Flex は半額、Priority は $1.35/$6.75。2026-12-01 から gemini-2.5-pro への要求はこのモデルに自動で回され、この単価で課金される。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing",
    "https://aistudio.google.com/docs/whats-new-gemini-3.8"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.6 Flash",
   "id": "gemini-3.6-flash",
   "tier": "mid",
   "released": "2026-07-21",
   "input": 0.75,
   "cachedInput": 0.075,
   "output": 3.75,
   "notes": "一世代前の Flash。2026-12-31 までの導入価格で、2027-01-01 から $1.50 / $0.15 / $7.50。無料枠あり。Batch と Flex は半額。gemini-3.5-flash への要求はこのモデルに回される。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.5 Flash-Lite",
   "id": "gemini-3.5-flash-lite",
   "tier": "small",
   "released": "2026-07-21",
   "input": 0.3,
   "cachedInput": 0.03,
   "output": 2.5,
   "notes": "入力はテキスト・画像・動画・音声とも $0.30。無料枠あり。Batch は $0.15/$1.25。2026-12-01 から gemini-2.5-flash への要求はこのモデルに回される。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.1 Flash-Lite",
   "id": "gemini-3.1-flash-lite",
   "tier": "small",
   "released": "2026-05-07",
   "input": 0.25,
   "cachedInput": 0.025,
   "output": 1.5,
   "notes": "音声入力は $0.50（キャッシュ $0.05）。無料枠あり。Batch と Flex は $0.125/$0.75。終了予定日は 2027-05-07（後継は 3.5 Flash-Lite）。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing",
    "https://aistudio.google.com/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.1 Pro Preview",
   "id": "gemini-3.1-pro-preview",
   "tier": "other",
   "released": "2026-02-19",
   "input": 2,
   "cachedInput": 0.2,
   "output": 12,
   "notes": "プレビュー版。20万トークン以下のプロンプトの値。20万トークン超では 入力 $4.00 / キャッシュ $0.40 / 出力 $18.00。キャッシュ保存料 $4.50/100万トークン・時。無料枠なし（AI Studio で試用のみ）。Batch は $1.00/$6.00。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3 Flash Preview",
   "id": "gemini-3-flash-preview",
   "tier": "other",
   "released": "2025-12-17",
   "input": 0.5,
   "cachedInput": 0.05,
   "output": 3,
   "notes": "料金ページでは legacy Flash 扱い。音声入力は $1.00。無料枠あり。Batch は $0.25/$1.50。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing",
    "https://aistudio.google.com/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.5 Pro",
   "id": "gemini-2.5-pro",
   "tier": "other",
   "released": "2025-06-17",
   "input": 1.25,
   "cachedInput": 0.125,
   "output": 10,
   "notes": "非推奨。AI Studio では選べず、2026-12-01 から gemini-3.8-flash に自動で回され、その単価で課金される。20万トークン以下の値で、20万トークン超は 入力 $2.50 / キャッシュ $0.25 / 出力 $15.00。Batch は $0.625/$5.00。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing",
    "https://aistudio.google.com/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.5 Flash",
   "id": "gemini-2.5-flash",
   "tier": "other",
   "released": "2025-06-17",
   "input": 0.3,
   "cachedInput": 0.03,
   "output": 2.5,
   "notes": "非推奨。2026-12-01 から gemini-3.5-flash-lite に自動で回され、その単価（同額 $0.30/$2.50）で課金される。音声入力 $1.00。Batch は $0.15/$1.25。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing",
    "https://aistudio.google.com/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.5 Flash-Lite",
   "id": "gemini-2.5-flash-lite",
   "tier": "small",
   "released": "2025-07-22",
   "input": 0.1,
   "cachedInput": 0.01,
   "output": 0.4,
   "notes": "終了日の発表なし。音声入力 $0.30。無料枠あり。Batch は $0.05/$0.20。tier は Google の公式区分ではなく、説明文と単価からの便宜的な分類。",
   "source": [
    "https://aistudio.google.com/docs/pricing",
    "https://aistudio.google.com/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "xai",
   "model": "Grok 4.7",
   "id": "grok-4.7",
   "tier": "flagship",
   "released": "2026-09-21",
   "input": 2,
   "cachedInput": 0.5,
   "output": 6,
   "notes": "プロンプト20万トークン未満の料金。20万以上は $4.00 / $1.00 / $12.00 をリクエスト全体に適用。Batch API は20%引き、Priority は2倍、US リージョンエンドポイントは1.1倍。公開日は x.ai/news/grok-4-7（2026-09-21）。なお docs の表記は社名が「SpaceXSI」になっている",
   "source": [
    "https://docs.x.ai/developers/pricing"
   ],
   "verified": true
  },
  {
   "provider": "xai",
   "model": "Grok 4.3",
   "id": "grok-4.3",
   "tier": "mid",
   "released": null,
   "input": 1.25,
   "cachedInput": 0.2,
   "output": 2.5,
   "notes": "20万トークン未満。20万以上は $2.50 / $0.40 / $5.00。コンテキスト1M。公開日は一次情報で確認できず",
   "source": [
    "https://docs.x.ai/developers/pricing"
   ],
   "verified": true
  },
  {
   "provider": "xai",
   "model": "Grok 4.20 (reasoning)",
   "id": "grok-4.20-0309-reasoning",
   "tier": "reasoning",
   "released": "2026-03",
   "input": 1.25,
   "cachedInput": 0.2,
   "output": 2.5,
   "notes": "20万トークン未満。20万以上は $2.50 / $0.40 / $5.00。non-reasoning 版・multi-agent 版も同額。公開月はリリースノートの 2026年3月の項",
   "source": [
    "https://docs.x.ai/developers/pricing"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "DeepSeek-V4.1-Flash-1017",
   "id": "deepseek-flash",
   "tier": "small",
   "released": "2026-10-17",
   "input": 0.3,
   "cachedInput": 0.006,
   "output": 1.2,
   "notes": "ピーク時間帯の料金。オフピークは半額（入力 $0.15、キャッシュ $0.003、出力 $0.60）。ピークは月〜金の 01:00-04:00 と 06:00-10:00 UTC（中国の祝日を除く）。旧名 deepseek-v4-flash でも受け付ける",
   "source": [
    "https://api-docs.deepseek.com/quick_start/pricing"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "DeepSeek-V4-Pro-0813",
   "id": "deepseek-v4-pro",
   "tier": "flagship",
   "released": "2026-08-13",
   "input": 1.32,
   "cachedInput": 0.044,
   "output": 3.96,
   "notes": "ピーク時間帯の料金。オフピークは半額（入力 $0.66、キャッシュ $0.022、出力 $1.98）。思考モードと非思考モードの両方に対応",
   "source": [
    "https://api-docs.deepseek.com/quick_start/pricing"
   ],
   "verified": true
  },
  {
   "provider": "mistral",
   "model": "Mistral Large 4",
   "id": "mistral-large-4-0",
   "tier": "flagship",
   "released": "2026-10-06",
   "input": 0.7,
   "cachedInput": 0.07,
   "output": 2.1,
   "notes": "エイリアス mistral-large。バージョン 26.10。公開日は mistral.ai/news/mistral-large-4（2026-10-06）。Batch は50%引き。リージョン推論は+10%。なお mistral.ai/pricing の FAQ には「Mistral Large は $0.5 / $1.5」という旧（Large 3 の）記述が残っている",
   "source": [
    "https://docs.mistral.ai/models/mistral-large-4-0"
   ],
   "verified": true
  },
  {
   "provider": "mistral",
   "model": "Mistral Small 4",
   "id": "mistral-small-2603",
   "tier": "small",
   "released": "2026-03",
   "input": 0.15,
   "cachedInput": null,
   "output": 0.6,
   "notes": "エイリアス mistral-small-latest。キャッシュ入力の価格は表示なし。Apache 2.0 のオープンウェイト",
   "source": [
    "https://docs.mistral.ai/models/mistral-small-4-0-26-03"
   ],
   "verified": true
  },
  {
   "provider": "mistral",
   "model": "Ministral 3 (14B)",
   "id": null,
   "tier": "open",
   "released": "2025-12",
   "input": 0.2,
   "cachedInput": null,
   "output": 0.2,
   "notes": "8B は $0.15 / $0.15、3B は $0.10 / $0.10",
   "source": [
    "https://docs.mistral.ai/inference/pricing"
   ],
   "verified": true
  },
  {
   "provider": "mistral",
   "model": "Codestral",
   "id": null,
   "tier": "other",
   "released": null,
   "input": 0.3,
   "cachedInput": null,
   "output": 0.9,
   "notes": "コード生成モデル",
   "source": [
    "https://docs.mistral.ai/inference/pricing"
   ],
   "verified": true
  },
  {
   "provider": "cohere",
   "model": "Command R",
   "id": null,
   "tier": "mid",
   "released": "2024-08-30",
   "input": 0.15,
   "cachedInput": null,
   "output": 0.6,
   "notes": "料金ページの埋め込みデータの値。08-2024 版の価格（cohere.com/blog/command-series-0824）と一致",
   "source": [
    "https://cohere.com/pricing"
   ],
   "verified": true
  },
  {
   "provider": "cohere",
   "model": "Command R7B",
   "id": null,
   "tier": "small",
   "released": "2024-12-13",
   "input": 0.0375,
   "cachedInput": null,
   "output": 0.15,
   "notes": "公開日は cohere.com/blog/command-r7b",
   "source": [
    "https://cohere.com/pricing"
   ],
   "verified": true
  },
  {
   "provider": "alibaba",
   "model": "Qwen4-Max",
   "id": "qwen4-max",
   "tier": "flagship",
   "released": null,
   "input": 1.5,
   "cachedInput": null,
   "output": 4.5,
   "notes": "International（シンガポール）デプロイの定価。思考・非思考モード共通、入力100万トークンまで同額。Global デプロイは $1.413 / $4.24。キャッシュヒットは別単価（ページの注記では例として入力単価の10%）で、表には載っていない",
   "source": [
    "https://www.alibabacloud.com/help/en/model-studio/model-pricing"
   ],
   "verified": true
  },
  {
   "provider": "alibaba",
   "model": "Qwen3.7-Plus",
   "id": "qwen3.7-plus",
   "tier": "mid",
   "released": "2026-05-26",
   "input": 0.4,
   "cachedInput": null,
   "output": 1.6,
   "notes": "International、入力25.6万トークン以下の定価（期間限定20%引きの表示あり）。25.6万超〜100万は $1.2 / $4.8。released はスナップショット名 qwen3.7-plus-2026-05-26 から",
   "source": [
    "https://www.alibabacloud.com/help/en/model-studio/model-pricing"
   ],
   "verified": true
  },
  {
   "provider": "alibaba",
   "model": "Qwen3.8-Flash",
   "id": "qwen3.8-flash",
   "tier": "small",
   "released": null,
   "input": 0.15,
   "cachedInput": null,
   "output": 0.47,
   "notes": "International の定価。Global は $0.113 / $0.382",
   "source": [
    "https://www.alibabacloud.com/help/en/model-studio/model-pricing"
   ],
   "verified": true
  },
  {
   "provider": "moonshot",
   "model": "Kimi K3.1 Pro",
   "id": "kimi-k3.1-pro",
   "tier": "flagship",
   "released": "2026-10",
   "input": 2,
   "cachedInput": 0.2,
   "output": 10,
   "notes": "キャッシュ書き込みは 5分TTL $2.00、1時間TTL $4.00。highspeed 版は $4 / $20。Batch は定価の60%。released は料金ページのスナップショットで 2026-10-14 には無く 2026-11-02 にあったことから",
   "source": [
    "https://platform.kimi.ai/docs/pricing/chat"
   ],
   "verified": true
  },
  {
   "provider": "moonshot",
   "model": "Kimi K3",
   "id": "kimi-k3",
   "tier": "open",
   "released": "2026-09",
   "input": 3,
   "cachedInput": 0.3,
   "output": 15,
   "notes": "3兆パラメータ級のオープンソースモデル。キャッシュ書き込みは 5分 $3.00、1時間 $6.00。released は 2026-08-28 のスナップショットに無く 2026-09-20 にあったことから",
   "source": [
    "https://platform.kimi.ai/docs/pricing/chat"
   ],
   "verified": true
  },
  {
   "provider": "moonshot",
   "model": "Kimi K2.6",
   "id": "kimi-k2.6",
   "tier": "mid",
   "released": "2026-04",
   "input": 0.95,
   "cachedInput": 0.16,
   "output": 4,
   "notes": "K2 系は 2026-10-31 から新規ユーザーに提供せず、2026-12 末までに全廃予定",
   "source": [
    "https://platform.kimi.ai/docs/pricing/chat"
   ],
   "verified": true
  },
  {
   "provider": "zai",
   "model": "GLM-5.3",
   "id": null,
   "tier": "flagship",
   "released": "2026-09",
   "input": 1.4,
   "cachedInput": 0.26,
   "output": 4.4,
   "notes": "キャッシュ保存は期間限定で無料。released は料金ページのスナップショットで 2026-09-28 に初出。サイトの説明文に GLM-5.4 の名前があるが料金表には無い",
   "source": [
    "https://docs.z.ai/guides/overview/pricing"
   ],
   "verified": true
  },
  {
   "provider": "zai",
   "model": "GLM-5.3-FlashX",
   "id": null,
   "tier": "mid",
   "released": "2026-09",
   "input": 0.37,
   "cachedInput": 0.075,
   "output": 1.25,
   "notes": "",
   "source": [
    "https://docs.z.ai/guides/overview/pricing"
   ],
   "verified": true
  },
  {
   "provider": "zai",
   "model": "GLM-5.3-Flash",
   "id": null,
   "tier": "small",
   "released": "2026-09",
   "input": 0.15,
   "cachedInput": 0.03,
   "output": 0.5,
   "notes": "GLM-4.7-Flash と GLM-4.5-Flash は無料",
   "source": [
    "https://docs.z.ai/guides/overview/pricing"
   ],
   "verified": true
  },
  {
   "provider": "minimax",
   "model": "MiniMax-M3",
   "id": "MiniMax-M3",
   "tier": "flagship",
   "released": "2026-06",
   "input": 0.3,
   "cachedInput": 0.06,
   "output": 1.2,
   "notes": "表示: 定価 $0.60 / $2.40、キャッシュ読み $0.12（Permanent 50% off 適用後 $0.30 / $1.20 / $0.06）。入力51.2万トークン以下の Standard。表示は定価 $0.60 / $2.40（キャッシュ $0.12）に「Permanent 50% off」で、表の値は割引後。51.2万超は $0.60 / $2.40（割引後）。Priority は1.5倍。released は 2026-06 のスナップショットのお知らせ表示から",
   "source": [
    "https://platform.minimax.io/docs/pricing/overview"
   ],
   "verified": true
  },
  {
   "provider": "minimax",
   "model": "MiniMax-M3.1-Flash",
   "id": "MiniMax-M3.1-Flash",
   "tier": "small",
   "released": null,
   "input": 0.15,
   "cachedInput": 0.015,
   "output": 0.6,
   "notes": "model_id は料金表の Model 欄の表記",
   "source": [
    "https://platform.minimax.io/docs/pricing/overview"
   ],
   "verified": true
  },
  {
   "provider": "ai21",
   "model": "Jamba Large 1.7",
   "id": "jamba-large",
   "tier": "flagship",
   "released": "2025-07",
   "input": 2,
   "cachedInput": null,
   "output": 8,
   "notes": "jamba-large は jamba-large-1.7-2025-07 を指す（docs.ai21.com/docs/jamba-foundation-models）。キャッシュ入力の価格は表示なし",
   "source": [
    "https://www.ai21.com/pricing/"
   ],
   "verified": true
  },
  {
   "provider": "ai21",
   "model": "Jamba Mini 2",
   "id": "jamba-mini",
   "tier": "small",
   "released": "2026-01",
   "input": 0.2,
   "cachedInput": null,
   "output": 0.4,
   "notes": "jamba-mini は jamba-mini-2-2026-01 を指す",
   "source": [
    "https://www.ai21.com/pricing/"
   ],
   "verified": true
  },
  {
   "provider": "meta",
   "model": "Muse Wonder",
   "id": "muse-wonder-1.0",
   "tier": "flagship",
   "released": null,
   "input": 4,
   "cachedInput": 0.2,
   "output": 20,
   "notes": "Standard モードのみ。プレビュー版。長文の割増なし",
   "source": [
    "https://dev.meta.ai/docs/pricing-rate-limits"
   ],
   "verified": true
  },
  {
   "provider": "meta",
   "model": "Muse Spark 1.3",
   "id": "muse-spark-1.3",
   "tier": "mid",
   "released": null,
   "input": 1.25,
   "cachedInput": 0.15,
   "output": 4.25,
   "notes": "Standard モード。Contributor モード（入力内容を Meta の学習に使うことを許可）は $0.10 / $0.002 / $0.20。1.2・1.1 も同額",
   "source": [
    "https://dev.meta.ai/docs/pricing-rate-limits"
   ],
   "verified": true
  },
  {
   "provider": "meta",
   "model": "Muse Ember",
   "id": "muse-ember-1.0",
   "tier": "small",
   "released": null,
   "input": 0.1,
   "cachedInput": 0.004,
   "output": 0.5,
   "notes": "入力20万トークン以下。20万超はリクエスト全体に $0.30 / $0.012 / $1.50",
   "source": [
    "https://dev.meta.ai/docs/pricing-rate-limits"
   ],
   "verified": true
  }
 ],
 "history": [
  {
   "provider": "openai",
   "model": "GPT-3（OpenAI API）",
   "line": "GPT-3（OpenAI API）",
   "date": "2020-06-11",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "（価格の記載なし）",
   "notes": "API を private beta として公開。発表記事に価格の記載はない。",
   "source": [
    "https://openai.com/index/openai-api/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-3（OpenAI API の料金プラン）",
   "line": "GPT-3（OpenAI API の料金プラン）",
   "date": "2020-10-01",
   "event": "price_change",
   "input": null,
   "output": null,
   "original": "Explore: 無料（100Kトークンか3か月）/ Create: $100/月で2Mトークン、超過分 8セント/1K / Build: $400/月で10Mトークン、超過分 6セント/1K / Scale: 要問い合わせ",
   "notes": "2020-09初めに beta 利用者へ通知された暫定のプラン。トークン数は入力と出力の合計。モデル別のトークン単価ではないため、input・output は null。報道のみで確認し、OpenAI の一次情報は見つからなかった。",
   "source": [
    "https://thenextweb.com/neural/2020/09/03/openai-reveals-the-pricing-plans-for-its-api-and-it-aint-cheap/"
   ],
   "verified": false
  },
  {
   "provider": "openai",
   "model": "Davinci（GPT-3）",
   "line": "GPT-3 Davinci",
   "date": "2022-09-01",
   "event": "price_cut",
   "input": 20,
   "output": 20,
   "original": "$0.06 / 1k tokens → $0.02 / 1k tokens",
   "notes": "改定前は $60/1M。入力と出力が同じ単価。告知は2022-08-22で、OpenAI Staff の投稿（OpenAI のコミュニティフォーラム）。2022-09-01 00:00 UTC から適用。ファインチューニング済みモデルは対象外。改定後の $20/1M は deprecations ページの Historical price とも一致する。",
   "source": [
    "https://community.openai.com/t/the-openai-api-is-now-more-affordable/20432"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "Curie（GPT-3）",
   "line": "GPT-3 Curie",
   "date": "2022-09-01",
   "event": "price_cut",
   "input": 2,
   "output": 2,
   "original": "$0.006 / 1k tokens → $0.002 / 1k tokens",
   "notes": "改定前は $6/1M。",
   "source": [
    "https://community.openai.com/t/the-openai-api-is-now-more-affordable/20432"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "Babbage（GPT-3）",
   "line": "GPT-3 Babbage",
   "date": "2022-09-01",
   "event": "price_cut",
   "input": 0.5,
   "output": 0.5,
   "original": "$0.0012 / 1k tokens → $0.0005 / 1k tokens",
   "notes": "改定前は $1.20/1M。",
   "source": [
    "https://community.openai.com/t/the-openai-api-is-now-more-affordable/20432"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "Ada（GPT-3）",
   "line": "GPT-3 Ada",
   "date": "2022-09-01",
   "event": "price_cut",
   "input": 0.4,
   "output": 0.4,
   "original": "$0.0008 / 1k tokens → $0.0004 / 1k tokens",
   "notes": "改定前は $0.80/1M。",
   "source": [
    "https://community.openai.com/t/the-openai-api-is-now-more-affordable/20432"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "text-davinci-003",
   "line": "text-davinci-003",
   "date": "2022-11-28",
   "event": "launch",
   "input": 20,
   "output": 20,
   "original": "$0.02 / 1K tokens",
   "notes": "単価 $20/1M は deprecations ページの Historical price（公式）で確認した。公開日 2022-11-28 は第三者の記事でのみ確認したため verified は false。",
   "source": [
    "https://developers.openai.com/api/docs/deprecations",
    "https://scale.com/blog/gpt-3-davinci-003-comparison"
   ],
   "verified": false
  },
  {
   "provider": "openai",
   "model": "gpt-3.5-turbo（ChatGPT API）",
   "line": "gpt-3.5-turbo",
   "date": "2023-03-01",
   "event": "launch",
   "input": 2,
   "output": 2,
   "original": "$0.002 per 1k tokens",
   "notes": "記事に「既存の GPT-3.5 モデルの10分の1」とある。記事に元の公開日の表示はなく「Update on April 24, 2024」のみ。日付はスナップショット名 gpt-3.5-turbo-0301 と一致する。deprecations ページは gpt-3.5-turbo-0301 の Historical price を $15/$20 per 1M としており、食い違う（uncertain を参照）。",
   "source": [
    "https://openai.com/index/introducing-chatgpt-and-whisper-apis/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4（8K）",
   "line": "GPT-4（8K）",
   "date": "2023-03-14",
   "event": "launch",
   "input": 30,
   "output": 60,
   "original": "$0.03 per 1k prompt tokens / $0.06 per 1k completion tokens",
   "notes": "deprecations ページの gpt-4-0314 の Historical price（$30/$60）とも一致。",
   "source": [
    "https://openai.com/index/gpt-4-research/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4-32K",
   "line": "GPT-4-32K",
   "date": "2023-03-14",
   "event": "launch",
   "input": 60,
   "output": 120,
   "original": "$0.06 per 1K prompt tokens / $0.12 per 1k completion tokens",
   "notes": "限定提供。deprecations ページの Historical price（$60/$120）とも一致。2025-06-06に提供終了。",
   "source": [
    "https://openai.com/index/gpt-4-research/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "gpt-3.5-turbo（4K）",
   "line": "gpt-3.5-turbo",
   "date": "2023-06-13",
   "event": "price_cut",
   "input": 1.5,
   "output": 2,
   "original": "$0.0015 per 1K input tokens / $0.002 per 1K output tokens",
   "notes": "入力を25%値下げ。",
   "source": [
    "https://openai.com/index/function-calling-and-other-api-updates/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "gpt-3.5-turbo-16k",
   "line": "gpt-3.5-turbo-16k",
   "date": "2023-06-13",
   "event": "launch",
   "input": 3,
   "output": 4,
   "original": "$0.003 per 1K input tokens / $0.004 per 1K output tokens",
   "notes": "",
   "source": [
    "https://openai.com/index/function-calling-and-other-api-updates/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4 Turbo（gpt-4-1106-preview）",
   "line": "GPT-4 Turbo（gpt-4-1106-preview）",
   "date": "2023-11-06",
   "event": "launch",
   "input": 10,
   "output": 30,
   "original": "$0.01 / $0.03 per 1,000 tokens",
   "notes": "128Kコンテキスト。GPT-4 比で入力は3分の1、出力は2分の1。",
   "source": [
    "https://openai.com/index/new-models-and-developer-products-announced-at-devday/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "gpt-3.5-turbo-1106",
   "line": "gpt-3.5-turbo",
   "date": "2023-11-06",
   "event": "price_cut",
   "input": 1,
   "output": 2,
   "original": "$0.001 / $0.002 per 1,000 tokens",
   "notes": "新しい 16K モデル。4K 版の利用者から見ると入力は33%値下げ。",
   "source": [
    "https://openai.com/index/new-models-and-developer-products-announced-at-devday/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-3 系ベースモデル（davinci, curie, babbage, ada, text-davinci-003 ほか）",
   "line": "GPT-3 系ベースモデル（davinci, curie, babbage, ada, text-davinci-003 ほか）",
   "date": "2024-01-04",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "",
   "notes": "提供終了。後継は davinci-002・babbage-002・gpt-3.5-turbo-instruct。",
   "source": [
    "https://developers.openai.com/api/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "gpt-3.5-turbo-0125",
   "line": "gpt-3.5-turbo",
   "date": "2024-01-25",
   "event": "price_cut",
   "input": 0.5,
   "output": 1.5,
   "original": "$0.0005 /1K input / $0.0015 /1K output",
   "notes": "発表日は2024-01-25。changelog では2024-02-01に公開。入力を50%、出力を25%値下げ。",
   "source": [
    "https://openai.com/index/new-embedding-models-and-api-updates/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4o（gpt-4o-2024-05-13）",
   "line": "GPT-4o",
   "date": "2024-05-13",
   "event": "launch",
   "input": 5,
   "output": 15,
   "original": "（計算値）GPT-4 Turbo（$10/$30 per 1M）の半額",
   "notes": "発表記事には「GPT-4 Turbo の半額」とだけあり、金額は書かれていない。2024-08-06の記事の「2024-05-13版に比べて入力50%減で $2.50、出力33%減で $10.00」からも $5/$15 と計算でき、2つの値は一致する。",
   "source": [
    "https://openai.com/index/hello-gpt-4o/",
    "https://openai.com/index/introducing-structured-outputs-in-the-api/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4o mini",
   "line": "GPT-4o mini",
   "date": "2024-07-18",
   "event": "launch",
   "input": 0.15,
   "output": 0.6,
   "original": "15 cents per million input tokens / 60 cents per million output tokens",
   "notes": "GPT-3.5 Turbo より60%以上安い。",
   "source": [
    "https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4o（gpt-4o-2024-08-06）",
   "line": "GPT-4o",
   "date": "2024-08-06",
   "event": "price_cut",
   "input": 2.5,
   "output": 10,
   "original": "$2.50/1M input tokens / $10.00/1M output tokens",
   "notes": "新しいスナップショットで入力50%減、出力33%減。",
   "source": [
    "https://openai.com/index/introducing-structured-outputs-in-the-api/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "o1-preview",
   "line": "o1-preview",
   "date": "2024-09-12",
   "event": "launch",
   "input": 15,
   "output": 60,
   "original": "$15 / $60 per 1M tokens（モデルページ）",
   "notes": "価格は提供終了したモデルのページの掲載値。発表記事に金額はない。2025-07-28に提供終了。",
   "source": [
    "https://developers.openai.com/api/docs/models/o1-preview",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "o1-mini",
   "line": "o1-mini",
   "date": "2024-09-12",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "（発表記事は「o1-preview より80%安い」のみ）",
   "notes": "現在のモデルページは $1.10/$4.40 だが、これは後の値下げ後の価格とみられる。発表時の金額と値下げの日付は一次情報で確認できなかった。",
   "source": [
    "https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/"
   ],
   "verified": false
  },
  {
   "provider": "openai",
   "model": "GPT-4o（Prompt Caching）",
   "line": "GPT-4o",
   "date": "2024-10-01",
   "event": "price_change",
   "input": 2.5,
   "output": 10,
   "original": "cached input $1.25 / 1M（50%引き）",
   "notes": "Prompt Caching を導入し、キャッシュ入力を50%引きにした。GPT-4o mini のキャッシュ入力は $0.075、o1 は $7.50。",
   "source": [
    "https://openai.com/index/api-prompt-caching/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "OpenAI o1",
   "line": "OpenAI o1",
   "date": "2024-12-17",
   "event": "launch",
   "input": 15,
   "output": 60,
   "original": "$15 / $60 per 1M tokens（モデルページ）",
   "notes": "API 版の o1-2024-12-17。キャッシュ入力は $7.50。2026-10-23に提供終了。",
   "source": [
    "https://developers.openai.com/api/docs/models/o1",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "o3-mini",
   "line": "o3-mini",
   "date": "2025-01-31",
   "event": "launch",
   "input": 1.1,
   "output": 4.4,
   "original": "$1.10 / $4.40 per 1M tokens（モデルページ）",
   "notes": "発表記事に金額はない。2026-10-23に提供終了。",
   "source": [
    "https://developers.openai.com/api/docs/models/o3-mini",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4.5 Preview",
   "line": "GPT-4.5 Preview",
   "date": "2025-02-27",
   "event": "launch",
   "input": 75,
   "output": 150,
   "original": "$75 / $150 per 1M tokens（モデルページ）",
   "notes": "キャッシュ入力は $37.50。2025-07-14に提供終了。",
   "source": [
    "https://developers.openai.com/api/docs/models/gpt-4.5-preview",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4.1",
   "line": "GPT-4.1",
   "date": "2025-04-14",
   "event": "launch",
   "input": 2,
   "output": 8,
   "original": "$2.00 / $8.00 per 1M tokens",
   "notes": "キャッシュ入力は $0.50（割引を75%に拡大）。長いコンテキストの追加料金なし。",
   "source": [
    "https://openai.com/index/gpt-4-1/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4.1 mini",
   "line": "GPT-4.1 mini",
   "date": "2025-04-14",
   "event": "launch",
   "input": 0.4,
   "output": 1.6,
   "original": "$0.40 / $1.60 per 1M tokens",
   "notes": "キャッシュ入力は $0.10。",
   "source": [
    "https://openai.com/index/gpt-4-1/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4.1 nano",
   "line": "GPT-4.1 nano",
   "date": "2025-04-14",
   "event": "launch",
   "input": 0.1,
   "output": 0.4,
   "original": "$0.10 / $0.40 per 1M tokens",
   "notes": "キャッシュ入力は $0.025。2026-10-23に提供終了。",
   "source": [
    "https://openai.com/index/gpt-4-1/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "OpenAI o3",
   "line": "OpenAI o3",
   "date": "2025-04-16",
   "event": "launch",
   "input": 10,
   "output": 40,
   "original": "$10 / $40 per 1M tokens（逆算）",
   "notes": "公式の発表記事と changelog に金額はない。2025-06-10の「80%値下げで $2/$8」から逆算した値で、第三者のブログの記載とも一致する。",
   "source": [
    "https://openai.com/index/introducing-o3-and-o4-mini/",
    "https://community.openai.com/t/o3-is-80-cheaper-and-introducing-o3-pro/1284925",
    "https://simonwillison.net/2025/Jun/10/o3-price-drop/"
   ],
   "verified": false
  },
  {
   "provider": "openai",
   "model": "o4-mini",
   "line": "o4-mini",
   "date": "2025-04-16",
   "event": "launch",
   "input": 1.1,
   "output": 4.4,
   "original": "$1.10 / $4.40 per 1M tokens（モデルページ）",
   "notes": "キャッシュ入力は $0.275。2026-10-23に提供終了。",
   "source": [
    "https://developers.openai.com/api/docs/models/o4-mini"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "OpenAI o3",
   "line": "OpenAI o3",
   "date": "2025-06-10",
   "event": "price_cut",
   "input": 2,
   "output": 8,
   "original": "Input: $2 / 1M tokens, Output: $8 / 1M tokens",
   "notes": "80%値下げ。changelog には「o3 の価格を引き下げ」とだけあり、金額は OpenAI 開発者フォーラムの告知と現行モデルページで確認した。",
   "source": [
    "https://developers.openai.com/api/docs/changelog",
    "https://community.openai.com/t/o3-is-80-cheaper-and-introducing-o3-pro/1284925",
    "https://developers.openai.com/api/docs/models/o3"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "OpenAI o3-pro",
   "line": "OpenAI o3-pro",
   "date": "2025-06-10",
   "event": "launch",
   "input": 20,
   "output": 80,
   "original": "Input: $20 / 1M tokens, Output: $80 / 1M tokens",
   "notes": "告知では o1-pro（$150/$600）より87%安い。",
   "source": [
    "https://developers.openai.com/api/docs/models/o3-pro",
    "https://community.openai.com/t/o3-is-80-cheaper-and-introducing-o3-pro/1284925"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-4.5 Preview",
   "line": "GPT-4.5 Preview",
   "date": "2025-07-14",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "",
   "notes": "提供終了。",
   "source": [
    "https://developers.openai.com/api/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "gpt-oss-120b / gpt-oss-20b",
   "line": "gpt-oss-120b / gpt-oss-20b",
   "date": "2025-08-05",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "（API の単価なし。オープンウェイト）",
   "notes": "Apache 2.0 で公開。",
   "source": [
    "https://openai.com/index/introducing-gpt-oss/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5",
   "line": "GPT-5",
   "date": "2025-08-07",
   "event": "launch",
   "input": 1.25,
   "output": 10,
   "original": "$1.25/1M input tokens / $10/1M output tokens",
   "notes": "キャッシュ入力は $0.125。",
   "source": [
    "https://openai.com/index/introducing-gpt-5-for-developers/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5 mini",
   "line": "GPT-5 mini",
   "date": "2025-08-07",
   "event": "launch",
   "input": 0.25,
   "output": 2,
   "original": "$0.25/1M input / $2/1M output",
   "notes": "",
   "source": [
    "https://openai.com/index/introducing-gpt-5-for-developers/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5 nano",
   "line": "GPT-5 nano",
   "date": "2025-08-07",
   "event": "launch",
   "input": 0.05,
   "output": 0.4,
   "original": "$0.05/1M input / $0.40/1M output",
   "notes": "",
   "source": [
    "https://openai.com/index/introducing-gpt-5-for-developers/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5 pro",
   "line": "GPT-5 pro",
   "date": "2025-10-06",
   "event": "launch",
   "input": 15,
   "output": 120,
   "original": "$15 / $120 per 1M tokens（モデルページ）",
   "notes": "",
   "source": [
    "https://developers.openai.com/api/docs/models/gpt-5-pro",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.1",
   "line": "GPT-5.1",
   "date": "2025-11-13",
   "event": "launch",
   "input": 1.25,
   "output": 10,
   "original": "$1.25 / $10 per 1M tokens（モデルページ）",
   "notes": "発表記事に単価はない。キャッシュ入力は90%引きで、最大24時間のキャッシュ保持を追加料金なしで導入。",
   "source": [
    "https://developers.openai.com/api/docs/models/gpt-5.1",
    "https://openai.com/index/gpt-5-1-for-developers/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.2",
   "line": "GPT-5.2",
   "date": "2025-12-11",
   "event": "launch",
   "input": 1.75,
   "output": 14,
   "original": "$1.75/1M input tokens / $14/1M output tokens",
   "notes": "キャッシュ入力は $0.175。GPT-5.1 より1トークンあたり高い。",
   "source": [
    "https://openai.com/index/introducing-gpt-5-2/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.2 Pro",
   "line": "GPT-5.2 Pro",
   "date": "2025-12-11",
   "event": "launch",
   "input": 21,
   "output": 168,
   "original": "$21 / $168 per 1M tokens",
   "notes": "",
   "source": [
    "https://openai.com/index/introducing-gpt-5-2/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.4",
   "line": "GPT-5.4",
   "date": "2026-03-05",
   "event": "launch",
   "input": 2.5,
   "output": 15,
   "original": "$2.50 / M tokens（入力）/ $15 / M tokens（出力）",
   "notes": "キャッシュ入力は $0.25。272K超は入力2倍・出力1.5倍。",
   "source": [
    "https://openai.com/index/introducing-gpt-5-4/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.4 Pro",
   "line": "GPT-5.4 Pro",
   "date": "2026-03-05",
   "event": "launch",
   "input": 30,
   "output": 180,
   "original": "$30 / $180 per M tokens",
   "notes": "",
   "source": [
    "https://openai.com/index/introducing-gpt-5-4/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.4 mini",
   "line": "GPT-5.4 mini",
   "date": "2026-03-17",
   "event": "launch",
   "input": 0.75,
   "output": 4.5,
   "original": "$0.75 per 1M input / $4.50 per 1M output",
   "notes": "",
   "source": [
    "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.4 nano",
   "line": "GPT-5.4 nano",
   "date": "2026-03-17",
   "event": "launch",
   "input": 0.2,
   "output": 1.25,
   "original": "$0.20 per 1M input / $1.25 per 1M output",
   "notes": "",
   "source": [
    "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.5",
   "line": "GPT-5.5",
   "date": "2026-04-24",
   "event": "launch",
   "input": 5,
   "output": 30,
   "original": "$5 per 1M input tokens / $30 per 1M output tokens",
   "notes": "発表記事は2026-04-23付で、API 公開は changelog で2026-04-24。Batch・Flex は半額、Priority は2.5倍。",
   "source": [
    "https://openai.com/index/introducing-gpt-5-5/",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.5 Pro",
   "line": "GPT-5.5 Pro",
   "date": "2026-04-24",
   "event": "launch",
   "input": 30,
   "output": 180,
   "original": "$30 / $180 per 1M tokens（モデルページ）",
   "notes": "",
   "source": [
    "https://developers.openai.com/api/docs/models/gpt-5.5-pro",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.6 Sol",
   "line": "GPT-5.6 Sol",
   "date": "2026-07-09",
   "event": "launch",
   "input": 5,
   "output": 30,
   "original": "Sol is $5 input / $30 output（per 1M tokens）",
   "notes": "2026-06-26に限定プレビューを発表（同じ価格の記載あり）。",
   "source": [
    "https://openai.com/index/gpt-5-6/",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.6 Terra",
   "line": "GPT-5.6 Terra",
   "date": "2026-07-09",
   "event": "launch",
   "input": 2.5,
   "output": 15,
   "original": "Terra is $2.50 input / $15 output",
   "notes": "",
   "source": [
    "https://openai.com/index/gpt-5-6/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.6 Luna",
   "line": "GPT-5.6 Luna",
   "date": "2026-07-09",
   "event": "launch",
   "input": 1,
   "output": 6,
   "original": "Luna is $1 input / $6 output",
   "notes": "",
   "source": [
    "https://openai.com/index/gpt-5-6/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.6 Terra",
   "line": "GPT-5.6 Terra",
   "date": "2026-07-30",
   "event": "price_cut",
   "input": 2,
   "output": 12,
   "original": "$2 per million input tokens / $12 per million output tokens",
   "notes": "20%値下げ。同じ日に Priority Processing を Fast mode に改称した。",
   "source": [
    "https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.6 Luna",
   "line": "GPT-5.6 Luna",
   "date": "2026-07-30",
   "event": "price_cut",
   "input": 0.2,
   "output": 1.2,
   "original": "$0.20 per million input tokens / $1.20 per million output tokens",
   "notes": "80%値下げ。",
   "source": [
    "https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-5.6 Sol",
   "line": "GPT-5.6 Sol",
   "date": "2026-08-21",
   "event": "price_cut",
   "input": 4,
   "output": 20,
   "original": "$4 per million input tokens / $20 per million output tokens",
   "notes": "期間限定のプロモーション価格（入力20%減・出力33%減）。期限は changelog では「少なくとも2026-11-21まで」、現行の料金ページでは「2026-11-30まで」。",
   "source": [
    "https://developers.openai.com/api/docs/changelog",
    "https://developers.openai.com/api/docs/models/gpt-5.6-sol"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6 Astra",
   "line": "GPT-6 Astra",
   "date": "2026-09-03",
   "event": "launch",
   "input": 10,
   "output": 50,
   "original": "$10 per million input tokens / $50 per million output tokens",
   "notes": "キャッシュ入力は $1。Fast mode は2倍。",
   "source": [
    "https://openai.com/index/gpt-6-astra/",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6 Sol",
   "line": "GPT-6 Sol",
   "date": "2026-09-22",
   "event": "launch",
   "input": 2,
   "output": 10,
   "original": "$2 input, $0.20 cached input, $10 output（per 1M, ≤272K）",
   "notes": "発表記事は GPT-5.6 Sol のプロモーション価格（$4/$20）から50%減と説明している。",
   "source": [
    "https://developers.openai.com/api/docs/changelog",
    "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6 Luna",
   "line": "GPT-6 Luna",
   "date": "2026-09-22",
   "event": "launch",
   "input": 0.1,
   "output": 0.5,
   "original": "$0.10 input, $0.01 cached input, $0.50 output（per 1M, ≤272K）",
   "notes": "GPT-5.6 Luna（$0.20/$1.20）と比べて安い。",
   "source": [
    "https://developers.openai.com/api/docs/changelog",
    "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6.1 Sol",
   "line": "GPT-6.1 Sol",
   "date": "2026-09-29",
   "event": "launch",
   "input": 2,
   "output": 10,
   "original": "$2 input, $0.10 cached input, $2.50 cache write, $10 output（per 1M, ≤272K）",
   "notes": "GPT-6 Astra の5分の1の単価。",
   "source": [
    "https://developers.openai.com/api/docs/changelog",
    "https://openai.com/index/introducing-gpt-6-1-sol/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "gpt-3.5-turbo / gpt-4 / gpt-4-turbo / o1 / o3-mini / o4-mini / gpt-4.1-nano / gpt-4o-2024-05-13",
   "line": "gpt-3.5-turbo / gpt-4 / gpt-4-turbo / o1 / o3-mini / o4-mini / gpt-4.1-nano / gpt-4o-2024-05-13",
   "date": "2026-10-23",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "",
   "notes": "まとめて提供終了（告知は2026-04-22）。",
   "source": [
    "https://developers.openai.com/api/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6.1 Terra",
   "line": "GPT-6.1 Terra",
   "date": "2026-10-26",
   "event": "launch",
   "input": 1,
   "output": 5,
   "original": "$1 per million input tokens / $0.05 cached / $5 per million output tokens",
   "notes": "GPT-5.6 Terra と GPT-6.1 Sol の半額。",
   "source": [
    "https://openai.com/index/introducing-gpt-6-1-terra/",
    "https://developers.openai.com/api/docs/models/gpt-6.1-terra"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6.2 Astra",
   "line": "GPT-6.2 Astra",
   "date": "2026-11-17",
   "event": "launch",
   "input": 8,
   "output": 40,
   "original": "$8 for input, $0.40 for cached input, $40 for output, all per million tokens",
   "notes": "GPT-6 Astra より入出力が20%安く、キャッシュ入力は60%安い。",
   "source": [
    "https://openai.com/index/introducing-gpt-6-2-astra-sol/",
    "https://developers.openai.com/api/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "GPT-6.2 Sol",
   "line": "GPT-6.2 Sol",
   "date": "2026-11-17",
   "event": "launch",
   "input": 2,
   "output": 10,
   "original": "GPT-6.1 Sol と同じ単価",
   "notes": "金額はモデルページで確認した。",
   "source": [
    "https://openai.com/index/introducing-gpt-6-2-astra-sol/",
    "https://developers.openai.com/api/docs/models/gpt-6.2-sol"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude (Claude-v1)",
   "line": "Claude (Claude-v1)",
   "date": "2023-03-14",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "Prompt $2.90/ million characters, Output $8.60/ million characters",
   "notes": "公開APIの最初の価格表。文字数課金のためトークン単価（input/output）は null。コンテキスト 9,000 トークン。発表記事: https://www.anthropic.com/news/introducing-claude",
   "source": [
    "https://web.archive.org/web/20230314160928/https://cdn2.assets-servd.host/anthropic-website/production/images/FINAL-PRICING.pdf"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Instant",
   "line": "Claude Instant",
   "date": "2023-03-14",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "Prompt $0.43/ million characters, Output $1.45/ million characters",
   "notes": "文字数課金のため null。発表記事: https://www.anthropic.com/news/introducing-claude",
   "source": [
    "https://web.archive.org/web/20230314160928/https://cdn2.assets-servd.host/anthropic-website/production/images/FINAL-PRICING.pdf"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude (Claude-v1)",
   "line": "Claude (Claude-v1)",
   "date": "2023-05",
   "event": "price_change",
   "input": 11.02,
   "output": 32.68,
   "original": "Prompt $11.02/ million tokens, Completion $32.68/ million tokens",
   "notes": "文字課金からトークン課金への切り替え（コンテキスト 100,000 トークン）。日付はファイル名 model_pricing_may2023.pdf からの推定で、アーカイブの初回取得は 2023-09-06。正確な切り替え日は未確認。",
   "source": [
    "https://web.archive.org/web/20230906010755/https://www-files.anthropic.com/production/images/model_pricing_may2023.pdf"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Instant",
   "line": "Claude Instant",
   "date": "2023-05",
   "event": "price_change",
   "input": 1.63,
   "output": 5.51,
   "original": "Prompt $1.63/ million tokens, Completion $5.51/ million tokens",
   "notes": "同上。日付はファイル名からの推定。",
   "source": [
    "https://web.archive.org/web/20230906010755/https://www-files.anthropic.com/production/images/model_pricing_may2023.pdf"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 2",
   "line": "Claude 2",
   "date": "2023-07-11",
   "event": "launch",
   "input": 11.02,
   "output": 32.68,
   "original": "Prompt $11.02/million tokens, Completion $32.68/million tokens",
   "notes": "記事は「Claude 1.3 と同じ価格」。価格表に「Claude 1 も Claude 2 と同じ価格」と注記。",
   "source": [
    "https://www.anthropic.com/news/claude-2",
    "https://web.archive.org/web/20230714073646/https://www-files.anthropic.com/production/images/model_pricing_july2023.pdf"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Instant 1.2",
   "line": "Claude Instant",
   "date": "2023-08-09",
   "event": "launch",
   "input": 1.63,
   "output": 5.51,
   "original": "Prompt $1.63/million tokens, Completion $5.51/million tokens",
   "notes": "記事に価格の数字はなく価格表へリンク。値は2023-09-13取得の価格表 PDF。",
   "source": [
    "https://www.anthropic.com/news/releasing-claude-instant-1-2",
    "https://web.archive.org/web/20230913124029/https://www-files.anthropic.com/production/images/model_pricing_july2023.pdf"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 2.1",
   "line": "Claude 2.1",
   "date": "2023-11-21",
   "event": "launch",
   "input": 8,
   "output": 24,
   "original": "Prompt $8.00/million tokens, Completion $24.00/million tokens",
   "notes": "記事は「価格を更新」とだけ書き、数字は価格表 PDF（2023-11-21 取得）で確認。",
   "source": [
    "https://www.anthropic.com/news/claude-2-1",
    "https://web.archive.org/web/20231121203917/https://www-files.anthropic.com/production/images/model_pricing_nov2023.pdf"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 2.0",
   "line": "Claude 2",
   "date": "2023-11-21",
   "event": "price_cut",
   "input": 8,
   "output": 24,
   "original": "Prompt $8.00/million tokens, Completion $24.00/million tokens",
   "notes": "$11.02/$32.68 から値下げ。Claude 2.1 と同日の価格表で確認。",
   "source": [
    "https://web.archive.org/web/20231121203917/https://www-files.anthropic.com/production/images/model_pricing_nov2023.pdf"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Instant",
   "line": "Claude Instant",
   "date": "2023-12",
   "event": "price_cut",
   "input": 0.8,
   "output": 2.4,
   "original": "Prompt $0.80/million tokens, Completion $2.40/million tokens",
   "notes": "$1.63/$5.51 から値下げ。2023-11-21 取得の価格表ではまだ $1.63/$5.51、2023-12-12 取得の model_pricing_dec2023.pdf で $0.80/$2.40。正確な日付は未確認。",
   "source": [
    "https://web.archive.org/web/20231212095751/https://www-files.anthropic.com/production/images/model_pricing_dec2023.pdf"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 3 Opus",
   "line": "Claude 3 Opus",
   "date": "2024-03-04",
   "event": "launch",
   "input": 15,
   "output": 75,
   "original": "$15 | $75 [Input $/million tokens | Output $/million tokens]",
   "notes": "",
   "source": [
    "https://www.anthropic.com/news/claude-3-family"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 3 Sonnet",
   "line": "Claude 3 Sonnet",
   "date": "2024-03-04",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "$3 | $15",
   "notes": "",
   "source": [
    "https://www.anthropic.com/news/claude-3-family"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 3 Haiku",
   "line": "Claude 3 Haiku",
   "date": "2024-03-13",
   "event": "launch",
   "input": 0.25,
   "output": 1.25,
   "original": "$0.25 | $1.25",
   "notes": "価格は 2024-03-04 の Claude 3 発表記事で公表。API 提供開始は 2024-03-13。",
   "source": [
    "https://www.anthropic.com/news/claude-3-family",
    "https://www.anthropic.com/news/claude-3-haiku"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 3.5 Sonnet",
   "line": "Claude 3.5 Sonnet",
   "date": "2024-06-21",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "$3 per million input tokens and $15 per million output tokens",
   "notes": "記事の公開日表示は 2024-06-21。モデル ID は claude-3-5-sonnet-20240620。",
   "source": [
    "https://www.anthropic.com/news/claude-3-5-sonnet"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 3.5 Sonnet（upgraded）",
   "line": "Claude 3.5 Sonnet（upgraded）",
   "date": "2024-10-22",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "Input $3 / MTok, Output $15 / MTok",
   "notes": "モデル ID claude-3-5-sonnet-20241022。価格は料金ページのアーカイブで確認。",
   "source": [
    "https://www.anthropic.com/news/3-5-models-and-computer-use",
    "https://web.archive.org/web/20241031014556/https://www.anthropic.com/pricing"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 3.5 Haiku",
   "line": "Claude 3.5 Haiku",
   "date": "2024-11-04",
   "event": "launch",
   "input": 1,
   "output": 5,
   "original": "Update (11/04/2024): ... now priced at $1 MTok input / $5 MTok output.",
   "notes": "2024-10-22 の発表時は Claude 3 Haiku と同じ単価（$0.25 / $1.25）とされていたが、提供開始時に値上げした。提供開始時に予告の $0.25/$1.25 から $1/$5 へ値上げ（4倍）。",
   "source": [
    "https://web.archive.org/web/20241105102333/https://www.anthropic.com/news/3-5-models-and-computer-use",
    "https://web.archive.org/web/20241105232124/https://www.anthropic.com/pricing"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 1 / Claude Instant（1.0〜1.3、Instant 1.0〜1.2）",
   "line": "Claude 1 / Claude Instant（1.0〜1.3、Instant 1.0〜1.2）",
   "date": "2024-11-06",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "Retirement date November 6, 2024",
   "notes": "2024-09-04 に廃止予告。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/model-deprecations"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 3.5 Haiku",
   "line": "Claude 3.5 Haiku",
   "date": "2024-12-03",
   "event": "price_cut",
   "input": 0.8,
   "output": 4,
   "original": "Update (12/03/2024): ... now priced at $0.80 MTok input / $4 MTok output.",
   "notes": "",
   "source": [
    "https://www.anthropic.com/news/3-5-models-and-computer-use",
    "https://web.archive.org/web/20241204124035/https://www.anthropic.com/pricing"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 3.7 Sonnet",
   "line": "Claude 3.7 Sonnet",
   "date": "2025-02-24",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "$3 per million input tokens and $15 per million output tokens—which includes thinking tokens",
   "notes": "",
   "source": [
    "https://www.anthropic.com/news/claude-3-7-sonnet"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4",
   "line": "Claude Opus 4",
   "date": "2025-05-22",
   "event": "launch",
   "input": 15,
   "output": 75,
   "original": "Opus 4 at $15/$75 per million tokens (input/output)",
   "notes": "",
   "source": [
    "https://www.anthropic.com/news/claude-4"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 4",
   "line": "Claude Sonnet 4",
   "date": "2025-05-22",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "Sonnet 4 at $3/$15",
   "notes": "",
   "source": [
    "https://www.anthropic.com/news/claude-4"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 2.0 / 2.1 / Claude 3 Sonnet",
   "line": "Claude 2.0 / 2.1 / Claude 3 Sonnet",
   "date": "2025-07-21",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "Retirement date July 21, 2025",
   "notes": "2025-01-21 に廃止予告。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/model-deprecations"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4.1",
   "line": "Claude Opus 4.1",
   "date": "2025-08-05",
   "event": "launch",
   "input": 15,
   "output": 75,
   "original": "Pricing is the same as Opus 4.",
   "notes": "記事に数字はなく「Opus 4 と同じ」。数字は現行料金ページ（retired 表示付き）で確認。",
   "source": [
    "https://www.anthropic.com/news/claude-opus-4-1",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 4.5",
   "line": "Claude Sonnet 4.5",
   "date": "2025-09-29",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "Pricing remains the same as Claude Sonnet 4, at $3/$15 per million tokens.",
   "notes": "",
   "source": [
    "https://www.anthropic.com/news/claude-sonnet-4-5"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Haiku 4.5",
   "line": "Claude Haiku 4.5",
   "date": "2025-10-15",
   "event": "launch",
   "input": 1,
   "output": 5,
   "original": "Pricing is now $1/$5 per million input and output tokens.",
   "notes": "",
   "source": [
    "https://www.anthropic.com/news/claude-haiku-4-5"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude 3.5 Sonnet（2024-06-20 版・2024-10-22 版）",
   "line": "Claude 3.5 Sonnet（2024-06-20 版・2024-10-22 版）",
   "date": "2025-10-28",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "Retirement date October 28, 2025",
   "notes": "2025-08-13 に廃止予告。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/model-deprecations"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4.5",
   "line": "Claude Opus 4.5",
   "date": "2025-11-24",
   "event": "launch",
   "input": 5,
   "output": 25,
   "original": "Pricing is now $5/$25 per million tokens",
   "notes": "Opus 4.1 の $15/$75 から3分の1に値下げされた Opus 級。",
   "source": [
    "https://www.anthropic.com/news/claude-opus-4-5"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 3",
   "line": "Claude Opus 3",
   "date": "2026-01-05",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "Retirement date January 5, 2026",
   "notes": "2025-06-30 に廃止予告。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/model-deprecations"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4.6",
   "line": "Claude Opus 4.6",
   "date": "2026-02-05",
   "event": "launch",
   "input": 5,
   "output": 25,
   "original": "Pricing remains the same at $5/$25 per million tokens; ... prompts exceeding 200k tokens ($10/$37.50 per million input/output tokens)",
   "notes": "発売時は1Mコンテキスト（beta）で200K超のプロンプトに $10/$37.50 の割増。",
   "source": [
    "https://www.anthropic.com/news/claude-opus-4-6"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 4.6",
   "line": "Claude Sonnet 4.6",
   "date": "2026-02-17",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "Pricing remains the same as Sonnet 4.5, starting at $3/$15 per million tokens.",
   "notes": "",
   "source": [
    "https://www.anthropic.com/news/claude-sonnet-4-6"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 3.7",
   "line": "Claude Sonnet 3.7",
   "date": "2026-02-19",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "Retirement date February 19, 2026",
   "notes": "2025-10-28 に廃止予告。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/model-deprecations"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Haiku 3.5",
   "line": "Claude Haiku 3.5",
   "date": "2026-02-19",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "Retirement date February 19, 2026",
   "notes": "2025-12-19 に廃止予告。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/model-deprecations"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4.6 / Sonnet 4.6（長文割増の廃止）",
   "line": "Claude Opus 4.6 / Sonnet 4.6（長文割増の廃止）",
   "date": "2026-03",
   "event": "price_cut",
   "input": null,
   "output": null,
   "original": "(2026-03-01) > 200K input tokens: Opus 4.6 Input $10 / Output $37.50, Sonnet 4.6/4.5/4 Input $6 / Output $22.50 → (2026-04-01) \"include the full 1M token context window at standard pricing\"",
   "notes": "200K超の割増が無くなり、1M全体が標準単価（Opus 4.6 $5/$25、Sonnet 4.6 $3/$15）になった。2026-03-01 と 2026-04-01 のアーカイブの間の変更で、正確な日付は未確認。",
   "source": [
    "https://web.archive.org/web/20260301150515/https://platform.claude.com/docs/en/about-claude/pricing",
    "https://web.archive.org/web/20260401185808/https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Mythos Preview",
   "line": "Claude Mythos Preview",
   "date": "2026-04-07",
   "event": "launch",
   "input": 25,
   "output": 125,
   "original": "$25/$125 per million input/output tokens",
   "notes": "Project Glasswing の限定参加者向け研究プレビュー。$100M の利用クレジット終了後の価格として公表。一般向け料金表には載っていない。2026-06-09 に deprecated（退役日は未定）。",
   "source": [
    "https://www.anthropic.com/glasswing"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4.7",
   "line": "Claude Opus 4.7",
   "date": "2026-04-16",
   "event": "launch",
   "input": 5,
   "output": 25,
   "original": "Pricing remains the same as Opus 4.6: $5 per million input tokens and $25 per million output tokens.",
   "notes": "新トークナイザで同じ文章のトークン数が増える（料金ページは約30%増と記載）。",
   "source": [
    "https://www.anthropic.com/news/claude-opus-4-7"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Haiku 3",
   "line": "Claude Haiku 3",
   "date": "2026-04-20",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "Retirement date April 20, 2026",
   "notes": "2026-02-19 に廃止予告。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/model-deprecations"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4.8",
   "line": "Claude Opus 4.8",
   "date": "2026-05-28",
   "event": "launch",
   "input": 5,
   "output": 25,
   "original": "It’s available today for the same price.",
   "notes": "記事に数字はなく「同じ価格」。数字は現行料金ページで確認。",
   "source": [
    "https://www.anthropic.com/news/claude-opus-4-8",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Fable 5",
   "line": "Claude Fable 5",
   "date": "2026-06-09",
   "event": "launch",
   "input": 10,
   "output": 50,
   "original": "$10 per million input tokens and $50 per million output tokens—less than half the price of Claude Mythos Preview.",
   "notes": "Mythos 級を一般向けにした最初のモデル。2026-06-12 にアクセス停止、2026-07-01 に再開（同記事の関連記事欄）。",
   "source": [
    "https://www.anthropic.com/news/claude-fable-5-mythos-5"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Mythos 5",
   "line": "Claude Mythos 5",
   "date": "2026-06-09",
   "event": "launch",
   "input": 10,
   "output": 50,
   "original": "Pricing for both models is $10 per million input tokens and $50 per million output tokens.",
   "notes": "認証済み組織のみ。",
   "source": [
    "https://www.anthropic.com/news/claude-fable-5-mythos-5"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 4 / Claude Opus 4",
   "line": "Claude Sonnet 4 / Claude Opus 4",
   "date": "2026-06-15",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "Retirement date June 15, 2026",
   "notes": "2026-04-14 に廃止予告。Google Cloud（Google managed）など一部クラウドでは提供継続。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/model-deprecations"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 5",
   "line": "Claude Sonnet 5",
   "date": "2026-06-30",
   "event": "launch",
   "input": 2,
   "output": 10,
   "original": "introductory pricing of $2/MTok input and $10/MTok output ... standard pricing of $3 input / $15 output previously set to take effect September 1",
   "notes": "発売時は2026-08-31までの導入価格。9月1日から $3/$15 になる予定だった。",
   "source": [
    "https://www.anthropic.com/news/claude-sonnet-5",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 5",
   "line": "Claude Opus 5",
   "date": "2026-07-24",
   "event": "launch",
   "input": 5,
   "output": 25,
   "original": "priced at $5 per million input tokens and $25 per million output tokens (the same as Opus 4.8)",
   "notes": "",
   "source": [
    "https://www.anthropic.com/news/claude-opus-5"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 4.1",
   "line": "Claude Opus 4.1",
   "date": "2026-08-05",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "Retirement date August 5, 2026",
   "notes": "2026-06-05 に廃止予告。Google Cloud（Google managed）と Bedrock では提供継続。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/model-deprecations"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 5",
   "line": "Claude Sonnet 5",
   "date": "2026-08-10",
   "event": "price_change",
   "input": 2,
   "output": 10,
   "original": "Edit August 10, 2026: Sonnet 5's introductory pricing of $2 per million input tokens and $10 per million output tokens is now permanent.",
   "notes": "予定されていた $3/$15 への値上げを中止し、導入価格を恒久化。",
   "source": [
    "https://www.anthropic.com/news/claude-sonnet-5",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Fable 5.1",
   "line": "Claude Fable 5.1",
   "date": "2026-09-01",
   "event": "launch",
   "input": 10,
   "output": 50,
   "original": "Cache reads now cost 75% less, or $0.25 per million tokens.",
   "notes": "入力・出力は Fable 5 と同じ $10/$50（数字は料金ページとモデルページ）。キャッシュ読み取りを $1 → $0.25 に値下げ。記事の日付表示は「September 2026」で、日付はモデルページの Released による。",
   "source": [
    "https://www.anthropic.com/claude-fable-and-mythos-5-1",
    "https://platform.claude.com/docs/en/models/fable-5-1/overview"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Mythos 5.1",
   "line": "Claude Mythos 5.1",
   "date": "2026-09-01",
   "event": "launch",
   "input": 10,
   "output": 50,
   "original": "$10 / MTok, $50 / MTok",
   "notes": "認証済み組織のみ。",
   "source": [
    "https://platform.claude.com/docs/en/models/mythos-5-1/overview",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Opus 5.5",
   "line": "Claude Opus 5.5",
   "date": "2026-09-22",
   "event": "launch",
   "input": 4,
   "output": 20,
   "original": "Input tokens $4 / Output tokens $20 / Cache reads $0.20 / Cache writes $5 (Prices per 1M tokens)",
   "notes": "発売（launch）。Opus 5 の $5/$25 より安い。キャッシュ読み取りも $0.50 → $0.20。",
   "source": [
    "https://www.anthropic.com/claude-opus-5-5"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 5.5",
   "line": "Claude Sonnet 5.5",
   "date": "2026-09-28",
   "event": "launch",
   "input": 2,
   "output": 10,
   "original": "$2 per million input tokens, $10 per million output tokens, and $0.20 per million tokens for cache reads",
   "notes": "発売時のキャッシュ読み取りは $0.20（現行の記事は $0.10 に書き換え済み）。",
   "source": [
    "https://web.archive.org/web/20260928180005/https://www.anthropic.com/claude-sonnet-5-5"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Sonnet 5.5（キャッシュ読み取り）",
   "line": "Claude Sonnet 5.5（キャッシュ読み取り）",
   "date": "2026-10-07",
   "event": "price_cut",
   "input": null,
   "output": null,
   "original": "We’re halving the price of Claude Sonnet 5.5’s cache reads",
   "notes": "キャッシュ読み取りを $0.20 → $0.10 に半額化。入力 $2・出力 $10 は据え置き。料金ページのアーカイブ（10-06 → 10-08）でも確認。",
   "source": [
    "https://www.anthropic.com/claude-haiku-5-5",
    "https://web.archive.org/web/20261006160118/https://platform.claude.com/docs/en/about-claude/pricing",
    "https://web.archive.org/web/20261008043247/https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Haiku 5.5",
   "line": "Claude Haiku 5.5",
   "date": "2026-10-07",
   "event": "launch",
   "input": 0.1,
   "output": 0.5,
   "original": "Input tokens $0.10 / $0.50, Output tokens $0.50 / $2.50 (prompts up to / over 100k)",
   "notes": "10万トークン以下の単価。超えると $0.50/$2.50。キャッシュ読み取り $0.01 / $0.05。",
   "source": [
    "https://www.anthropic.com/claude-haiku-5-5"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Fable 5.2",
   "line": "Claude Fable 5.2",
   "date": "2026-11-09",
   "event": "launch",
   "input": 8,
   "output": 40,
   "original": "$8 per million input tokens and $40 per million output tokens",
   "notes": "発売（launch）。Fable 5.1 の $10/$50 より安い。fast mode は $16/$80。キャッシュ読み取り $0.20（料金ページ）。",
   "source": [
    "https://www.anthropic.com/claude-fable-and-mythos-5-2"
   ],
   "verified": true
  },
  {
   "provider": "anthropic",
   "model": "Claude Mythos 5.2",
   "line": "Claude Mythos 5.2",
   "date": "2026-11-09",
   "event": "launch",
   "input": 8,
   "output": 40,
   "original": "$8 per million input tokens and $40 per million output tokens",
   "notes": "認証済み組織のみ。",
   "source": [
    "https://www.anthropic.com/claude-fable-and-mythos-5-2"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "PaLM API（MakerSuite 経由）",
   "line": "PaLM API（MakerSuite 経由）",
   "date": "2023-05-11",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "\"During the preview period, developers can try the PaLM API at no cost. Pricing will be announced closer to general availability.\"",
   "notes": "公開プレビュー開始（米国のみ）。プレビュー中は無料で、有料の単価は公表されていなかった。日付はブログの日付。",
   "source": [
    "https://developers.googleblog.com/en/palm-api-makersuite-moving-into-public-preview/",
    "https://web.archive.org/web/20230601095014/https://developers.generativeai.google/guide/preview_faq"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "PaLM 2 for Text（text-bison@001、Vertex AI）",
   "line": "PaLM 2 for Text（text-bison@001、Vertex AI）",
   "date": "2023-06-01",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "Input $0.0010 / 1000 characters, Output $0.0010 / 1000 characters",
   "notes": "Google Cloud の Vertex AI 側の PaLM 2 料金（Google AI の PaLM API とは別の窓口）。文字数課金で、UTF-8 のコードポイント数、空白は数えない。トークン換算はしない（Google の目安は 1 トークン ≒ 4 文字だが、空白を除く文字数課金とは前提が合わない）。日付はこの単価を確認できた最初のスナップショットの日付で、発表日ではない。",
   "source": [
    "https://web.archive.org/web/20230601222355/https://cloud.google.com/vertex-ai/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "PaLM 2 for Text（text-bison、Vertex AI）",
   "line": "PaLM 2 for Text（text-bison、Vertex AI）",
   "date": "2023-09-21",
   "event": "price_cut",
   "input": null,
   "output": null,
   "original": "Input $0.0005 / 1,000 characters, Output $0.0005 / 1,000 characters",
   "notes": "2023-07-09 のスナップショットでは $0.0010、2023-09-21 では $0.0005。変更日はこの間で、正確な日付は未確認。トークン換算はしない。",
   "source": [
    "https://web.archive.org/web/20230921205003/https://cloud.google.com/vertex-ai/pricing",
    "https://web.archive.org/web/20230709033050/https://cloud.google.com/vertex-ai/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.0 Pro（gemini-pro）",
   "line": "Gemini 1.0 Pro（gemini-pro）",
   "date": "2023-12-13",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "Pay-as-you-go: Input $0.00025 / 1K characters, $0.0025 / image; Output $0.0005 / 1K char（\"Coming soon to Google AI Studio\"）",
   "notes": "公開時は無料枠（60 QPM）のみで、有料は「Coming soon」。Vertex AI の Gemini Pro も同じ文字単価（2023-12-14 の Vertex 料金ページ）。文字数課金のためトークン換算はしない。",
   "source": [
    "https://web.archive.org/web/20231213151604/https://ai.google.dev/pricing",
    "https://aistudio.google.com/docs/changelog",
    "https://blog.google/technology/ai/gemini-api-developers-cloud/"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "PaLM 2 for Text（text-bison、Vertex AI）",
   "line": "PaLM 2 for Text（text-bison、Vertex AI）",
   "date": "2023-12-14",
   "event": "price_cut",
   "input": null,
   "output": null,
   "original": "Input: Online requests $0.00025 / Batch $0.00020; Output: Online $0.0005 / Batch $0.0004（per 1,000 characters）",
   "notes": "2023-12-06 のスナップショットでは入力 $0.0005、2023-12-14 では $0.00025。Gemini Pro 公開（12/13）と同時期。正確な日付は未確認。トークン換算はしない。",
   "source": [
    "https://web.archive.org/web/20231214031953/https://cloud.google.com/vertex-ai/docs/generative-ai/pricing",
    "https://web.archive.org/web/20231206152454/https://cloud.google.com/vertex-ai/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.0 Pro",
   "line": "Gemini 1.0 Pro",
   "date": "2024-02-15",
   "event": "price_cut",
   "input": null,
   "output": null,
   "original": "Input $0.000125 / 1K characters, $0.0025 / image; Output $0.000375 / 1K characters",
   "notes": "2024-02-04 のスナップショットでは $0.00025/$0.0005、2024-02-15 では $0.000125/$0.000375。変更日はこの間で、正確な日付と公式発表は未確認。この時点でも Google AI 側の有料枠は「Coming soon」で、実際の課金はまだ始まっていない。トークン換算はしない。",
   "source": [
    "https://web.archive.org/web/20240215181623/https://ai.google.dev/pricing",
    "https://web.archive.org/web/20240204213038/https://ai.google.dev/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.0 Pro",
   "line": "Gemini 1.0 Pro",
   "date": "2024-04-02",
   "event": "price_change",
   "input": 0.5,
   "output": 1.5,
   "original": "$0.50 / 1 million tokens（input）, $1.50 / 1 million tokens（output）",
   "notes": "課金単位が文字数からトークンに変わった。2024-03-25 のスナップショットは文字単価、2024-04-02 はトークン単価。従量課金の開始は 2024-05-14（release notes）。",
   "source": [
    "https://web.archive.org/web/20240402010009/https://ai.google.dev/pricing",
    "https://web.archive.org/web/20240325164557/https://ai.google.dev/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.5 Pro",
   "line": "Gemini 1.5 Pro",
   "date": "2024-04-09",
   "event": "launch",
   "input": 7,
   "output": 21,
   "original": "$7 / 1 million tokens (preview pricing), $21 / 1 million tokens (preview pricing)",
   "notes": "公開プレビューは 2024-04-09（release notes）。プレビュー価格の表示は 2024-04-02 のスナップショットからあるが、有料枠は「Coming on May 2/May 14」のままで、この単価で実際に課金されたかは確認できない（課金開始 2024-05-30 の時点では $3.50/$10.50）。",
   "source": [
    "https://web.archive.org/web/20240402010009/https://ai.google.dev/pricing",
    "https://web.archive.org/web/20240512055220/https://ai.google.dev/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.5 Pro",
   "line": "Gemini 1.5 Pro",
   "date": "2024-05-14",
   "event": "price_cut",
   "input": 3.5,
   "output": 10.5,
   "original": "$3.50 / 1M（≤128K）, $7.00 / 1M（>128K）; output $10.50（≤128K）, $21.00（128K+）",
   "notes": "Google I/O の日のスナップショットで確認。128K トークン超は 入力 $7.00 / 出力 $21.00。「Billing starts May 30, 2024」と表示。GA は 2024-05-23（release notes）。",
   "source": [
    "https://web.archive.org/web/20240514232746/https://ai.google.dev/pricing",
    "https://web.archive.org/web/20240603135204/https://ai.google.dev/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.5 Flash",
   "line": "Gemini 1.5 Flash",
   "date": "2024-05-14",
   "event": "launch",
   "input": 0.35,
   "output": 0.53,
   "original": "Input $0.35 / 1M（≤128K）, $0.70（>128K）; Output $0.53 / 1M（≤128K）, $1.05（>128K）",
   "notes": "release notes ではプレビュー公開を 2024-05-10 と記載しているが、料金の表示を確認できたのは 2024-05-14 のスナップショット。出力 $0.53 は数日後に $1.05 に変わっている（次の行）。課金開始は 2024-05-30。",
   "source": [
    "https://web.archive.org/web/20240514232746/https://ai.google.dev/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.5 Flash",
   "line": "Gemini 1.5 Flash",
   "date": "2024-05-18",
   "event": "price_change",
   "input": 0.35,
   "output": 1.05,
   "original": "Input $0.35 / 1M（≤128K）, $0.70（>128K）; Output $1.05 / 1M（≤128K）, $2.10（>128K）",
   "notes": "2024-05-14 と 2024-05-18 のスナップショットの間で出力単価が $0.53 から $1.05 に変わった。課金開始（2024-05-30）前の変更で、訂正か値上げかは不明。GA は 2024-05-23。",
   "source": [
    "https://web.archive.org/web/20240518100331/https://ai.google.dev/pricing",
    "https://web.archive.org/web/20240514232746/https://ai.google.dev/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.5 Flash",
   "line": "Gemini 1.5 Flash",
   "date": "2024-08-12",
   "event": "price_cut",
   "input": 0.075,
   "output": 0.3,
   "original": "$0.075 / 1 million tokens（input, ≤128K）, $0.30（output, ≤128K）",
   "notes": "ブログ（2024-08-08）で発表、8/12 から適用。入力 78%、出力 71% の値下げ。128K 超は $0.15/$0.60、キャッシュは $0.01875（≤128K）。",
   "source": [
    "https://developers.googleblog.com/en/gemini-15-flash-updates-google-ai-studio-gemini-api/",
    "https://web.archive.org/web/20240904171757/https://ai.google.dev/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.5 Pro",
   "line": "Gemini 1.5 Pro",
   "date": "2024-10-01",
   "event": "price_cut",
   "input": 1.25,
   "output": 5,
   "original": "$1.25 / 1M（input ≤128K）, $5.00（output ≤128K）; >128K: $2.50 / $10.00",
   "notes": "ブログ（2024-09-24）で発表、10/1 から適用。入力 64%、出力 52% の値下げ。キャッシュは $0.875 → $0.3125（≤128K）。",
   "source": [
    "https://developers.googleblog.com/en/updated-production-ready-gemini-models-reduced-15-pro-pricing-increased-rate-limits-and-more/",
    "https://web.archive.org/web/20241001092414/https://ai.google.dev/pricing",
    "https://web.archive.org/web/20241102172747/https://ai.google.dev/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.5 Flash-8B",
   "line": "Gemini 1.5 Flash-8B",
   "date": "2024-10-03",
   "event": "launch",
   "input": 0.0375,
   "output": 0.15,
   "original": "$0.0375 per 1 million input tokens on prompts <128K, $0.15 per 1 million output tokens",
   "notes": "128K 超は $0.075/$0.30。キャッシュは $0.01（≤128K）。",
   "source": [
    "https://developers.googleblog.com/en/gemini-15-flash-8b-is-now-generally-available-for-use/",
    "https://web.archive.org/web/20241102172747/https://ai.google.dev/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.0 Flash",
   "line": "Gemini 2.0 Flash",
   "date": "2025-02-05",
   "event": "launch",
   "input": 0.1,
   "output": 0.4,
   "original": "$0.10 (text / image / video), $0.70 (audio); Output $0.40",
   "notes": "GA の日付。実験版（gemini-2.0-flash-exp）は 2024-12-11 から無料で公開。短い文脈と長い文脈の価格差をなくした単一価格。キャッシュ $0.025。",
   "source": [
    "https://web.archive.org/web/20250211163751/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog",
    "https://developers.googleblog.com/en/gemini-2-family-expands/"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.0 Flash-Lite",
   "line": "Gemini 2.0 Flash-Lite",
   "date": "2025-02-05",
   "event": "launch",
   "input": 0.075,
   "output": 0.3,
   "original": "Input $0.075, Output $0.30",
   "notes": "公開プレビューの日付。GA は 2025-02-25 で単価は同じ（2025-03-04 のスナップショット）。",
   "source": [
    "https://web.archive.org/web/20250211163751/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.0 Pro",
   "line": "Gemini 1.0 Pro",
   "date": "2025-02-18",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "\"Gemini 1.0 Pro is no longer supported.\"",
   "notes": "",
   "source": [
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.5 Pro Preview",
   "line": "Gemini 2.5 Pro",
   "date": "2025-04-04",
   "event": "launch",
   "input": 1.25,
   "output": 10,
   "original": "$1.25, prompts <= 200k tokens / $2.50, prompts > 200k tokens; Output $10.00 / $15.00",
   "notes": "有料のプレビュー版（gemini-2.5-pro-preview-03-25）の公開は 2025-04-04（release notes）。単価は 2025-05-02 のスナップショットで確認（2025-04-01 のスナップショットには未掲載）。出力は思考トークン込み。キャッシュは $0.31（≤200K）。実験版は 2025-03-25 に無料で公開。",
   "source": [
    "https://web.archive.org/web/20250502025139/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.5 Flash Preview",
   "line": "Gemini 2.5 Flash",
   "date": "2025-04-17",
   "event": "launch",
   "input": 0.15,
   "output": null,
   "original": "Input $0.15 (text / image / video), $1.00 (audio); Output Non-thinking: $0.60 / Thinking: $3.50",
   "notes": "出力は思考なし $0.60・思考あり $3.50 の二本立てだったため output は null。",
   "source": [
    "https://web.archive.org/web/20250502025139/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.5 Pro",
   "line": "Gemini 2.5 Pro",
   "date": "2025-06-17",
   "event": "launch",
   "input": 1.25,
   "output": 10,
   "original": "$1.25, prompts <= 200k tokens / $2.50 > 200k; Output $10.00 / $15.00",
   "notes": "安定版（GA）。単価はプレビュー版と同じ。",
   "source": [
    "https://web.archive.org/web/20250701052920/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog",
    "https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.5 Flash",
   "line": "Gemini 2.5 Flash",
   "date": "2025-06-17",
   "event": "price_change",
   "input": 0.3,
   "output": 2.5,
   "original": "$0.30 / 1M input tokens (*up from $0.15 input), $2.50 / 1M output tokens (*down from $3.50 output)",
   "notes": "安定版（GA）の公開とともに改定。入力は値上げ、出力は思考ありの $3.50 から値下げ。思考あり・なしの価格差は廃止。",
   "source": [
    "https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/",
    "https://web.archive.org/web/20250701052920/https://ai.google.dev/gemini-api/docs/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.5 Flash-Lite",
   "line": "Gemini 2.5 Flash-Lite",
   "date": "2025-06-17",
   "event": "launch",
   "input": 0.1,
   "output": 0.4,
   "original": "Input $0.10 (text / image / video), $0.50 (audio); Output $0.40",
   "notes": "プレビュー版（gemini-2.5-flash-lite-preview-06-17）。GA は 2025-07-22 で、テキストの単価は同じ、音声入力は $0.30 に下がった（2025-08-01 のスナップショット）。",
   "source": [
    "https://web.archive.org/web/20250701052920/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 1.5 Pro / 1.5 Flash / 1.5 Flash-8B",
   "line": "Gemini 1.5 Pro / 1.5 Flash / 1.5 Flash-8B",
   "date": "2025-09-29",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "\"The following Gemini 1.5 models are now shut down\"",
   "notes": "",
   "source": [
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.5 Pro",
   "line": "Gemini 2.5 Pro",
   "date": "2025-10-16",
   "event": "price_change",
   "input": 1.25,
   "output": 10,
   "original": "Context caching price $0.125, prompts <= 200k tokens / $0.25 > 200k（変更前 $0.31 / $0.625）",
   "notes": "入力・出力は変わらず、キャッシュ入力の単価だけが下がった。2025-10-02 と 2025-10-16 のスナップショットの間の変更で、正確な日付と公式発表は未確認。同時に 2.5 Flash のキャッシュは $0.075 → $0.03、2.5 Flash-Lite は $0.025 → $0.01。",
   "source": [
    "https://web.archive.org/web/20251016083234/https://ai.google.dev/gemini-api/docs/pricing",
    "https://web.archive.org/web/20251002162244/https://ai.google.dev/gemini-api/docs/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3 Pro Preview",
   "line": "Gemini 3 Pro Preview",
   "date": "2025-11-18",
   "event": "launch",
   "input": 2,
   "output": 12,
   "original": "$2.00, prompts <= 200k tokens / $4.00 > 200k; Output $12.00 / $18.00",
   "notes": "Gemini 3 系の最初のモデル。キャッシュ $0.20（≤200K）。無料枠なし。",
   "source": [
    "https://web.archive.org/web/20251206112346/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3 Flash Preview",
   "line": "Gemini 3 Flash Preview",
   "date": "2025-12-17",
   "event": "launch",
   "input": 0.5,
   "output": 3,
   "original": "$0.50 (text / image / video), $1.00 (audio); Output $3.00",
   "notes": "キャッシュ $0.05。",
   "source": [
    "https://web.archive.org/web/20260101134813/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.1 Pro Preview",
   "line": "Gemini 3.1 Pro Preview",
   "date": "2026-02-19",
   "event": "launch",
   "input": 2,
   "output": 12,
   "original": "$2.00, prompts <= 200k tokens / $4.00 > 200k; Output $12.00 / $18.00",
   "notes": "3 Pro Preview と同じ単価。",
   "source": [
    "https://web.archive.org/web/20260301091320/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.1 Flash-Lite Preview",
   "line": "Gemini 3.1 Flash-Lite",
   "date": "2026-03-03",
   "event": "launch",
   "input": 0.25,
   "output": 1.5,
   "original": "$0.25 (text / image / video), $0.50 (audio); Output $1.50",
   "notes": "プレビュー版は 2026-05-25 に終了。",
   "source": [
    "https://web.archive.org/web/20260401191258/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3 Pro Preview",
   "line": "Gemini 3 Pro Preview",
   "date": "2026-03-09",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "Shutdown date March 9, 2026（後継 gemini-3.1-pro-preview）",
   "notes": "",
   "source": [
    "https://aistudio.google.com/docs/deprecations",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.1 Flash-Lite",
   "line": "Gemini 3.1 Flash-Lite",
   "date": "2026-05-07",
   "event": "launch",
   "input": 0.25,
   "output": 1.5,
   "original": "$0.25 (text / image / video), $0.50 (audio); Output $1.50",
   "notes": "GA。単価はプレビュー版と同じ。",
   "source": [
    "https://web.archive.org/web/20260602081519/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.5 Flash",
   "line": "Gemini 3.5 Flash",
   "date": "2026-05-19",
   "event": "launch",
   "input": 1.5,
   "output": 9,
   "original": "Input $1.50, Output $9.00, Context caching $0.15",
   "notes": "GA。公開時の説明は「our most intelligent model」。",
   "source": [
    "https://web.archive.org/web/20260602081519/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 2.0 Flash / 2.0 Flash-Lite",
   "line": "Gemini 2.0 Flash / 2.0 Flash-Lite",
   "date": "2026-06-01",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "\"The following Gemini 2.0 models are now shut down\"",
   "notes": "",
   "source": [
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.6 Flash",
   "line": "Gemini 3.6 Flash",
   "date": "2026-07-21",
   "event": "launch",
   "input": 1.5,
   "output": 7.5,
   "original": "Input $1.50, Output $7.50, Context caching $0.15",
   "notes": "3.5 Flash より出力単価が安い（$9.00 → $7.50）。",
   "source": [
    "https://web.archive.org/web/20260801152348/https://ai.google.dev/gemini-api/docs/pricing",
    "https://web.archive.org/web/20260812042335/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.5 Flash-Lite",
   "line": "Gemini 3.5 Flash-Lite",
   "date": "2026-07-21",
   "event": "launch",
   "input": 0.3,
   "output": 2.5,
   "original": "$0.30 (text / image / video / audio); Output $2.50",
   "notes": "",
   "source": [
    "https://web.archive.org/web/20260801152348/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.6 Flash",
   "line": "Gemini 3.6 Flash",
   "date": "2026-08-13",
   "event": "price_cut",
   "input": 0.75,
   "output": 3.75,
   "original": "$0.75 through December 31, 2026. / $1.50 starting January 1, 2027.; Output $3.75 through December 31, 2026. / $7.50 starting January 1, 2027.",
   "notes": "2026-08-12 04:23 UTC のスナップショットでは $1.50/$7.50、2026-08-13 18:11 UTC では期間限定の $0.75/$3.75。3.7 Flash の公開日と同じで、正確な適用日と公式発表は未確認。",
   "source": [
    "https://web.archive.org/web/20260813181124/https://ai.google.dev/gemini-api/docs/pricing",
    "https://web.archive.org/web/20260812042335/https://ai.google.dev/gemini-api/docs/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.7 Flash",
   "line": "Gemini 3.7 Flash",
   "date": "2026-08-13",
   "event": "launch",
   "input": 0.75,
   "output": 3.75,
   "original": "$0.75 through December 31, 2026 / $1.50 starting January 1, 2027; Output $3.75 / $7.50",
   "notes": "導入価格（2026-12-31 まで）。",
   "source": [
    "https://web.archive.org/web/20260813181124/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.8 Flash",
   "line": "Gemini 3.8 Flash",
   "date": "2026-09-02",
   "event": "launch",
   "input": 0.75,
   "output": 3.75,
   "original": "$0.75 through December 31, 2026 / $1.50 starting January 1, 2027; Output $3.75 / $7.50",
   "notes": "導入価格（2026-12-31 まで）。公開当日のスナップショットは未確認で、2026-10-01 のスナップショットと現行の解説ページで確認。",
   "source": [
    "https://web.archive.org/web/20261001035256/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/whats-new-gemini-3.8",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 3.7 Flash / Gemini 3.5 Flash",
   "line": "Gemini 3.7 Flash / Gemini 3.5 Flash",
   "date": "2026-10-08",
   "event": "retired",
   "input": null,
   "output": null,
   "original": "deprecated; API requests are automatically routed to gemini-3.8-flash / gemini-3.6-flash",
   "notes": "エンドポイントは残り、要求は後継モデルに回される（3.7 → 3.8 Flash、3.5 → 3.6 Flash）。",
   "source": [
    "https://aistudio.google.com/docs/changelog",
    "https://aistudio.google.com/docs/deprecations"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 4 Argon",
   "line": "Gemini 4 Argon",
   "date": "2026-10-13",
   "event": "launch",
   "input": 2,
   "output": 10,
   "original": "$2.00 through November 30, 2026. / $4.00 starting December 1, 2026.; Output $10.00 / $20.00",
   "notes": "公開 2 日後のスナップショットで導入価格を確認。",
   "source": [
    "https://web.archive.org/web/20261015063329/https://ai.google.dev/gemini-api/docs/pricing",
    "https://aistudio.google.com/docs/changelog"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 4 Carbon",
   "line": "Gemini 4 Carbon",
   "date": "2026-11-10",
   "event": "launch",
   "input": 2,
   "output": 10,
   "original": "introductory pricing of $2.00 per 1M input tokens and $10.00 per 1M output tokens through November 30, 2026",
   "notes": "2026-12-01 から $4.00/$20.00（料金ページ）。",
   "source": [
    "https://aistudio.google.com/docs/changelog",
    "https://aistudio.google.com/docs/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 4 Hydrogen",
   "line": "Gemini 4 Hydrogen",
   "date": "2026-11-12",
   "event": "launch",
   "input": 1.5,
   "output": 7.5,
   "original": "$1.50 per 1M input tokens and $7.50 per 1M output tokens",
   "notes": "無料枠あり。",
   "source": [
    "https://aistudio.google.com/docs/changelog",
    "https://aistudio.google.com/docs/pricing"
   ],
   "verified": true
  },
  {
   "provider": "google",
   "model": "Gemini 4 Neon",
   "line": "Gemini 4 Neon",
   "date": "2026-11-18",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "$3.00 per 1M input tokens and $15.00 per 1M output tokens",
   "notes": "",
   "source": [
    "https://aistudio.google.com/docs/changelog",
    "https://aistudio.google.com/docs/pricing"
   ],
   "verified": true
  },
  {
   "provider": "xai",
   "model": "grok-beta（API 公開ベータ）",
   "line": "grok-beta（API 公開ベータ）",
   "date": "2024-11",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "",
   "notes": "リリースノートに 2024年11月の API Public Beta 公開はあるが、価格は x.ai/api の 2024-11 スナップショットにも載っておらず確認できず",
   "source": [
    "https://docs.x.ai/developers/release-notes"
   ],
   "verified": false
  },
  {
   "provider": "xai",
   "model": "grok-3",
   "line": "grok-3",
   "date": "2025-04",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "",
   "notes": "リリースノートで 2025年4月に API 提供開始。価格は 2025-09-11 のスナップショットの表で確認（それ以前のスナップショットは表がJS描画で読めず）。同表で grok-3-mini は $0.30 / $0.50",
   "source": [
    "https://web.archive.org/web/20250911090812/https://docs.x.ai/docs/models"
   ],
   "verified": true
  },
  {
   "provider": "xai",
   "model": "grok-4-0709",
   "line": "grok-4-0709",
   "date": "2025-07-09",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "",
   "notes": "公開日は x.ai/news/grok-4（2025-07-09）。価格は 2025-09-11 スナップショットの表で確認",
   "source": [
    "https://web.archive.org/web/20250911090812/https://docs.x.ai/docs/models"
   ],
   "verified": true
  },
  {
   "provider": "xai",
   "model": "grok-4-fast",
   "line": "grok-4-fast",
   "date": "2025-09-19",
   "event": "launch",
   "input": 0.2,
   "output": 0.5,
   "original": "",
   "notes": "12.8万トークン未満。以上は $0.40 / $1.00。キャッシュ入力 $0.05",
   "source": [
    "https://x.ai/news/grok-4-fast"
   ],
   "verified": true
  },
  {
   "provider": "xai",
   "model": "grok-4-1-fast",
   "line": "grok-4-1-fast",
   "date": "2025-11-19",
   "event": "launch",
   "input": 0.2,
   "output": 0.5,
   "original": "",
   "notes": "キャッシュ入力 $0.05。2025-12-02 のスナップショットの表でも同額",
   "source": [
    "https://x.ai/news/grok-4-1-fast"
   ],
   "verified": true
  },
  {
   "provider": "xai",
   "model": "grok-4.20 / grok-4.3",
   "line": "grok-4.20 / grok-4.3",
   "date": "2026-05-14",
   "event": "price_change",
   "input": 1.25,
   "output": 2.5,
   "original": "",
   "notes": "料金ページの最古のスナップショット（2026-05-14）時点の値。公開時の価格がこれと同じかは未確認",
   "source": [
    "https://web.archive.org/web/20260514185402/https://docs.x.ai/developers/pricing"
   ],
   "verified": true
  },
  {
   "provider": "xai",
   "model": "Grok 4.5",
   "line": "Grok 4.5",
   "date": "2026-07-16",
   "event": "launch",
   "input": 2,
   "output": 6,
   "original": "",
   "notes": "リリースノートに $2 / $6 と記載。公開日は x.ai/news/grok-4-5",
   "source": [
    "https://docs.x.ai/developers/release-notes"
   ],
   "verified": true
  },
  {
   "provider": "xai",
   "model": "Grok 4.6",
   "line": "Grok 4.6",
   "date": "2026-08-12",
   "event": "launch",
   "input": 2,
   "output": 6,
   "original": "",
   "notes": "キャッシュ入力 $0.50。20万トークン以上は $4 / $1 / $12",
   "source": [
    "https://docs.x.ai/developers/release-notes"
   ],
   "verified": true
  },
  {
   "provider": "xai",
   "model": "Grok 4.7",
   "line": "Grok 4.7",
   "date": "2026-09-21",
   "event": "launch",
   "input": 2,
   "output": 6,
   "original": "",
   "notes": "4.6 と同額で据え置き",
   "source": [
    "https://docs.x.ai/developers/release-notes"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "DeepSeek-V2（deepseek-chat）",
   "line": "deepseek-chat",
   "date": "2024-05",
   "event": "launch",
   "input": 0.14,
   "output": 0.28,
   "original": "¥1 / ¥2 per 1M tokens",
   "notes": "2024-05-25 のスナップショット。deepseek-coder も同額",
   "source": [
    "https://web.archive.org/web/20240525232726/https://platform.deepseek.com/api-docs/pricing/"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "deepseek-chat（コンテキストキャッシュ導入）",
   "line": "deepseek-chat",
   "date": "2024-08",
   "event": "price_change",
   "input": 0.14,
   "output": 0.28,
   "original": "¥0.1（キャッシュヒット）/ ¥1 / ¥2",
   "notes": "キャッシュヒット入力 $0.014 が追加された（2024-08-06 のスナップショット）",
   "source": [
    "https://web.archive.org/web/20240806021813/https://platform.deepseek.com/api-docs/pricing/"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "DeepSeek-V3（deepseek-chat）",
   "line": "deepseek-chat",
   "date": "2024-12-26",
   "event": "launch",
   "input": 0.27,
   "output": 1.1,
   "original": "¥2 / ¥8（定価）",
   "notes": "キャッシュヒット $0.07。2025-02-08 16:00 UTC までは旧価格（$0.14 / $0.28）の割引を適用（2025-01-21 スナップショットで確認）",
   "source": [
    "https://api-docs.deepseek.com/news/news1226"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "DeepSeek-R1（deepseek-reasoner）",
   "line": "DeepSeek-R1（deepseek-reasoner）",
   "date": "2025-01-20",
   "event": "launch",
   "input": 0.55,
   "output": 2.19,
   "original": "¥4 / ¥16",
   "notes": "キャッシュヒット $0.14",
   "source": [
    "https://api-docs.deepseek.com/news/news250120"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "deepseek-chat / deepseek-reasoner（オフピーク割引の導入）",
   "line": "deepseek-chat",
   "date": "2025-02-26",
   "event": "price_change",
   "input": 0.27,
   "output": 1.1,
   "original": "",
   "notes": "UTC 16:30-00:30 は V3 が50%引き、R1 が75%引き（ともに入力 $0.135、出力 $0.550）。表の値は V3 の通常料金",
   "source": [
    "https://web.archive.org/web/20250226111135/https://api-docs.deepseek.com/quick_start/pricing"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "DeepSeek-V3.1",
   "line": "deepseek-chat",
   "date": "2025-09-05",
   "event": "price_change",
   "input": 0.56,
   "output": 1.68,
   "original": "",
   "notes": "2025-08-21 発表、2025-09-05 16:00 UTC から適用。オフピーク割引を終了。キャッシュヒット $0.07。chat・reasoner 共通",
   "source": [
    "https://web.archive.org/web/20250906202357/https://api-docs.deepseek.com/quick_start/pricing"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "DeepSeek-V3.2-Exp",
   "line": "deepseek-chat",
   "date": "2025-09-29",
   "event": "price_cut",
   "input": 0.28,
   "output": 0.42,
   "original": "",
   "notes": "「50%以上の値下げ」と発表（news250929）。キャッシュヒット $0.028",
   "source": [
    "https://web.archive.org/web/20251004112357/https://api-docs.deepseek.com/quick_start/pricing"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "DeepSeek-V4-Flash（プレビュー）",
   "line": "DeepSeek-V4-Flash（プレビュー）",
   "date": "2026-04-24",
   "event": "launch",
   "input": 0.14,
   "output": 0.28,
   "original": "",
   "notes": "同時に V4-Pro は $1.74 / $3.48（キャッシュヒット $0.145）。2026-04-26 にキャッシュヒット単価を1/10に値下げし、V4-Pro には期間限定の75%引きを適用（2026-05-14 スナップショット）",
   "source": [
    "https://web.archive.org/web/20260424103126/https://api-docs.deepseek.com/quick_start/pricing"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "DeepSeek-V4-Pro GA（ピーク・オフピーク料金の導入）",
   "line": "DeepSeek-V4-Pro GA（ピーク・オフピーク料金の導入）",
   "date": "2026-08-16",
   "event": "price_change",
   "input": 1.32,
   "output": 3.96,
   "original": "",
   "notes": "ピーク料金。オフピークは半額。同時に V4-Flash は $0.44 / $1.32 に値上げ（ピーク、キャッシュ $0.014）。2026-08-16 16:00 UTC から適用（news260813）",
   "source": [
    "https://web.archive.org/web/20260818015542/https://api-docs.deepseek.com/quick_start/pricing"
   ],
   "verified": true
  },
  {
   "provider": "deepseek",
   "model": "DeepSeek-V4.1-Flash",
   "line": "DeepSeek-V4.1-Flash",
   "date": "2026-09-10",
   "event": "price_cut",
   "input": 0.3,
   "output": 1.2,
   "original": "",
   "notes": "ピーク料金。オフピークは $0.15 / $0.60。2026-09-10 04:00 UTC から適用（news260910）",
   "source": [
    "https://web.archive.org/web/20260915115019/https://api-docs.deepseek.com/quick_start/pricing"
   ],
   "verified": true
  },
  {
   "provider": "mistral",
   "model": "mistral-medium（La Plateforme ベータ公開）",
   "line": "mistral-medium（La Plateforme ベータ公開）",
   "date": "2023-12-11",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "2.5€ / 7.5€ per 1M tokens（VAT 抜き）",
   "notes": "ユーロ表記のみ。同時に mistral-tiny 0.14€ / 0.42€、mistral-small 0.6€ / 1.8€",
   "source": [
    "https://web.archive.org/web/20231214050807/https://docs.mistral.ai/platform/pricing/"
   ],
   "verified": true
  },
  {
   "provider": "mistral",
   "model": "Mistral Large",
   "line": "Mistral Large",
   "date": "2024-02-26",
   "event": "launch",
   "input": 8,
   "output": 24,
   "original": "7.3€ / 22€",
   "notes": "2024-03-07 のスナップショット。公開日は mistral.ai/news/mistral-large",
   "source": [
    "https://web.archive.org/web/20240307184040/https://docs.mistral.ai/platform/pricing/"
   ],
   "verified": true
  },
  {
   "provider": "mistral",
   "model": "Mistral Large 2 ほか（全面値下げ）",
   "line": "Mistral Large 2 ほか（全面値下げ）",
   "date": "2024-09-17",
   "event": "price_cut",
   "input": 2,
   "output": 6,
   "original": "",
   "notes": "Large は $3 / $9 から33%値下げ。Small は $1 / $3 から $0.2 / $0.6（80%引き）、Codestral も $1 / $3 から $0.2 / $0.6、Nemo は $0.3 から $0.15",
   "source": [
    "https://mistral.ai/news/september-24-release"
   ],
   "verified": true
  },
  {
   "provider": "mistral",
   "model": "Mistral Medium 3",
   "line": "Mistral Medium 3",
   "date": "2025-05-07",
   "event": "launch",
   "input": 0.4,
   "output": 2,
   "original": "",
   "notes": "",
   "source": [
    "https://mistral.ai/news/mistral-medium-3"
   ],
   "verified": true
  },
  {
   "provider": "mistral",
   "model": "Mistral Large 3",
   "line": "Mistral Large 3",
   "date": "2025-12-02",
   "event": "launch",
   "input": 0.5,
   "output": 1.5,
   "original": "",
   "notes": "mistral-large-2512。同時に Ministral 3 (8B) は $0.15 / $0.15",
   "source": [
    "https://mistral.ai/news/mistral-3"
   ],
   "verified": true
  },
  {
   "provider": "mistral",
   "model": "Mistral Large 4",
   "line": "Mistral Large 4",
   "date": "2026-10-06",
   "event": "launch",
   "input": 0.7,
   "output": 2.1,
   "original": "",
   "notes": "キャッシュ入力 $0.07。Large 3 より値上げ",
   "source": [
    "https://mistral.ai/news/mistral-large-4"
   ],
   "verified": true
  },
  {
   "provider": "cohere",
   "model": "Command / Command R",
   "line": "Command R",
   "date": "2024-03-11",
   "event": "launch",
   "input": 0.5,
   "output": 1.5,
   "original": "",
   "notes": "Command R 公開時の価格。同じ表で Command は $1.00 / $2.00",
   "source": [
    "https://cohere.com/blog/command-r"
   ],
   "verified": true
  },
  {
   "provider": "cohere",
   "model": "Command R+（04-2024）",
   "line": "Command R+（04-2024）",
   "date": "2024-04-04",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "",
   "notes": "現在の料金ページの FAQ（旧モデルの価格）に記載。公開日は cohere.com/blog/command-r-plus-microsoft-azure",
   "source": [
    "https://cohere.com/pricing"
   ],
   "verified": true
  },
  {
   "provider": "cohere",
   "model": "Command R / R+（08-2024）",
   "line": "Command R",
   "date": "2024-08-30",
   "event": "price_cut",
   "input": 0.15,
   "output": 0.6,
   "original": "",
   "notes": "表の値は Command R。Command R+ 08-2024 は $2.50 / $10.00",
   "source": [
    "https://cohere.com/blog/command-series-0824"
   ],
   "verified": true
  },
  {
   "provider": "cohere",
   "model": "Command R7B",
   "line": "Command R7B",
   "date": "2024-12-13",
   "event": "launch",
   "input": 0.0375,
   "output": 0.15,
   "original": "",
   "notes": "",
   "source": [
    "https://cohere.com/blog/command-r7b"
   ],
   "verified": true
  },
  {
   "provider": "cohere",
   "model": "Command A",
   "line": "Command A",
   "date": "2025-03-13",
   "event": "launch",
   "input": 2.5,
   "output": 10,
   "original": "",
   "notes": "",
   "source": [
    "https://cohere.com/blog/command-a"
   ],
   "verified": true
  },
  {
   "provider": "cohere",
   "model": "Command A+",
   "line": "Command A+",
   "date": "2026-05-20",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "",
   "notes": "オープンソースとして公開。2026-07-24 以降のスナップショットでは料金ページの Command A の枠が Command A+（Free 扱い）に置き換わっている",
   "source": [
    "https://cohere.com/blog/command-a-plus"
   ],
   "verified": false
  },
  {
   "provider": "alibaba",
   "model": "qwen-max（Qwen2.5-Max 系）",
   "line": "qwen-max（Qwen2.5-Max 系）",
   "date": "2025-01-30",
   "event": "price_change",
   "input": 1.6,
   "output": 6.4,
   "original": "$0.0016 / $0.0064 per 1,000 tokens",
   "notes": "2025-01-30 のスナップショット時点の値。同時点で qwen-plus は $0.4 / $1.2、qwen-turbo は $0.05 / $0.2",
   "source": [
    "https://web.archive.org/web/20250130085941/https://www.alibabacloud.com/help/en/model-studio/getting-started/models"
   ],
   "verified": true
  },
  {
   "provider": "alibaba",
   "model": "qwen3-max",
   "line": "qwen3-max",
   "date": "2026-02-10",
   "event": "price_change",
   "input": 1.2,
   "output": 6,
   "original": "",
   "notes": "International、入力3.2万以下の段階。3.2万〜12.8万は $2.4 / $12、12.8万〜25.2万は $3 / $15。qwen3-max-2025-09-23 のスナップショットあり",
   "source": [
    "https://web.archive.org/web/20260210034228/https://www.alibabacloud.com/help/en/model-studio/model-pricing"
   ],
   "verified": true
  },
  {
   "provider": "alibaba",
   "model": "Qwen4-Max",
   "line": "Qwen4-Max",
   "date": "2026-11-26",
   "event": "price_change",
   "input": 1.5,
   "output": 4.5,
   "original": "",
   "notes": "現在の料金ページ（最終更新 2026-11-26）の値。段階料金がなくなり100万トークンまで同額",
   "source": [
    "https://www.alibabacloud.com/help/en/model-studio/model-pricing"
   ],
   "verified": true
  },
  {
   "provider": "moonshot",
   "model": "Kimi K2",
   "line": "Kimi K2",
   "date": "2025-07",
   "event": "launch",
   "input": null,
   "output": null,
   "original": "",
   "notes": "当時の料金ページは表がJSの別ファイルで、アーカイブから価格を読み取れなかった",
   "source": [
    "https://platform.moonshot.ai/docs/pricing/chat"
   ],
   "verified": false
  },
  {
   "provider": "moonshot",
   "model": "Kimi K2.5",
   "line": "Kimi K2.5",
   "date": "2026-04-15",
   "event": "price_change",
   "input": 0.6,
   "output": 3,
   "original": "",
   "notes": "キャッシュヒット $0.10。2026-04-15 のスナップショット時点の値",
   "source": [
    "https://web.archive.org/web/20260415080812/https://platform.kimi.ai/docs/pricing/chat-k25"
   ],
   "verified": true
  },
  {
   "provider": "moonshot",
   "model": "Kimi K2.6",
   "line": "Kimi K2.6",
   "date": "2026-04-20",
   "event": "launch",
   "input": 0.95,
   "output": 4,
   "original": "",
   "notes": "キャッシュヒット $0.16",
   "source": [
    "https://web.archive.org/web/20260420172022/https://platform.kimi.ai/docs/pricing/chat-k26"
   ],
   "verified": true
  },
  {
   "provider": "moonshot",
   "model": "Kimi K3",
   "line": "Kimi K3",
   "date": "2026-09-20",
   "event": "launch",
   "input": 3,
   "output": 15,
   "original": "",
   "notes": "初出のスナップショットの値。キャッシュ入力 $0.30",
   "source": [
    "https://web.archive.org/web/20260920103132/https://platform.kimi.ai/docs/pricing/chat"
   ],
   "verified": true
  },
  {
   "provider": "moonshot",
   "model": "Kimi K3.1 Pro",
   "line": "Kimi K3.1 Pro",
   "date": "2026-11-02",
   "event": "launch",
   "input": 2,
   "output": 10,
   "original": "",
   "notes": "初出のスナップショットの値。K3 より安い",
   "source": [
    "https://web.archive.org/web/20261102142438/https://platform.kimi.ai/docs/pricing/chat"
   ],
   "verified": true
  },
  {
   "provider": "zai",
   "model": "GLM-4.5",
   "line": "GLM-4.5",
   "date": "2025-08-13",
   "event": "launch",
   "input": 0.6,
   "output": 2.2,
   "original": "",
   "notes": "2025-08 のスナップショット。キャッシュ入力 $0.11。GLM-4.5-Air は $0.2 / $1.1、GLM-4.5-X は $2.2 / $8.9。GLM-4.6・4.7 も同額で据え置き",
   "source": [
    "https://web.archive.org/web/20250813063236/https://docs.z.ai/guides/overview/pricing"
   ],
   "verified": true
  },
  {
   "provider": "zai",
   "model": "GLM-5",
   "line": "GLM-5",
   "date": "2026-02-28",
   "event": "launch",
   "input": 1,
   "output": 3.2,
   "original": "",
   "notes": "キャッシュ入力 $0.2。2026-02-28 のスナップショットで確認",
   "source": [
    "https://web.archive.org/web/20260228090017/https://docs.z.ai/guides/overview/pricing"
   ],
   "verified": true
  },
  {
   "provider": "zai",
   "model": "GLM-5.1",
   "line": "GLM-5.1",
   "date": "2026-04-30",
   "event": "price_change",
   "input": 1.4,
   "output": 4.4,
   "original": "",
   "notes": "キャッシュ入力 $0.26。GLM-5 から値上げ。2026-04-30 のスナップショットで確認",
   "source": [
    "https://web.archive.org/web/20260430033800/https://docs.z.ai/guides/overview/pricing"
   ],
   "verified": true
  },
  {
   "provider": "zai",
   "model": "GLM-5.3 / 5.3-Flash",
   "line": "GLM-5.3 / 5.3-Flash",
   "date": "2026-09-28",
   "event": "launch",
   "input": 1.4,
   "output": 4.4,
   "original": "",
   "notes": "5.3 は 5.1・5.2 と同額。同時に低価格の 5.3-Flash（$0.15 / $0.50）が追加",
   "source": [
    "https://web.archive.org/web/20260928201841/https://docs.z.ai/guides/overview/pricing"
   ],
   "verified": true
  },
  {
   "provider": "minimax",
   "model": "MiniMax-M2",
   "line": "MiniMax-M2",
   "date": "2025-10-28",
   "event": "launch",
   "input": 0.3,
   "output": 1.2,
   "original": "",
   "notes": "2025-11-07 まで無料提供の告知あり。M2 の公開日は 2025-10-27 前後（スナップショットは 2025-10-28）",
   "source": [
    "https://web.archive.org/web/20251028133921/https://platform.minimax.io/docs/guides/pricing"
   ],
   "verified": true
  },
  {
   "provider": "minimax",
   "model": "MiniMax-M2.5",
   "line": "MiniMax-M2.5",
   "date": "2026-02-25",
   "event": "launch",
   "input": 0.3,
   "output": 1.2,
   "original": "",
   "notes": "キャッシュ読み $0.03、書き込み $0.375。highspeed 版は $0.6 / $2.4。M2.1・M2 も同額",
   "source": [
    "https://web.archive.org/web/20260225101933/https://platform.minimax.io/docs/guides/pricing-paygo"
   ],
   "verified": true
  },
  {
   "provider": "minimax",
   "model": "MiniMax-M3",
   "line": "MiniMax-M3",
   "date": "2026-06-16",
   "event": "launch",
   "input": 0.3,
   "output": 1.2,
   "original": "定価 $0.60 / $2.40（50% off 後 $0.30 / $1.20）",
   "notes": "定価 $0.60 / $2.40 に「Permanent 50% off」。51.2万トークン超は割引後 $0.60 / $2.40",
   "source": [
    "https://web.archive.org/web/20260616040022/https://platform.minimax.io/docs/guides/pricing-paygo"
   ],
   "verified": true
  },
  {
   "provider": "ai21",
   "model": "Jurassic-2 Ultra",
   "line": "Jurassic-2 Ultra",
   "date": "2024-04-22",
   "event": "price_change",
   "input": 2,
   "output": 10,
   "original": "$0.002 / 1K input, $0.010 / 1K output",
   "notes": "2024-04-22 のスナップショット。Mid は $0.25 / $1.25、Light は $0.10 / $0.50",
   "source": [
    "https://web.archive.org/web/20240422142416/https://www.ai21.com/pricing"
   ],
   "verified": true
  },
  {
   "provider": "ai21",
   "model": "Jamba-Instruct",
   "line": "Jamba-Instruct",
   "date": "2024-09-12",
   "event": "retired",
   "input": 0.5,
   "output": 0.7,
   "original": "",
   "notes": "2024-09 時点で DEPRECATED 表示",
   "source": [
    "https://web.archive.org/web/20240912201526/https://www.ai21.com/pricing"
   ],
   "verified": true
  },
  {
   "provider": "ai21",
   "model": "Jamba 1.5 Large",
   "line": "Jamba 1.5 Large",
   "date": "2024-08",
   "event": "launch",
   "input": 2,
   "output": 8,
   "original": "",
   "notes": "2024-09-12 のスナップショット。Jamba 1.5 Mini は $0.2 / $0.4。この価格が現在まで続いている",
   "source": [
    "https://web.archive.org/web/20240912201526/https://www.ai21.com/pricing"
   ],
   "verified": true
  },
  {
   "provider": "meta",
   "model": "Muse Spark",
   "line": "Muse Spark",
   "date": "2026-08-04",
   "event": "launch",
   "input": 1.25,
   "output": 4.25,
   "original": "",
   "notes": "料金ページの最古のスナップショット。この時点では Muse Spark のみで、キャッシュ入力 $0.15。公開日そのものは未確認",
   "source": [
    "https://web.archive.org/web/20260804014526/https://dev.meta.ai/docs/pricing-rate-limits"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "Davinci（GPT-3）",
   "line": "GPT-3 Davinci",
   "date": "2021-12-04",
   "event": "snapshot",
   "input": 60,
   "output": 60,
   "original": "$0.0600 / 1K tokens",
   "notes": "Internet Archive で読める最初の料金ページ（2021-12-04 のスナップショット）の単価。入力と出力は同じ単価。この単価がいつから適用されていたかは確かめられていない。",
   "source": [
    "https://web.archive.org/web/20211204021218/https://openai.com/api/pricing/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "Curie（GPT-3）",
   "line": "GPT-3 Curie",
   "date": "2021-12-04",
   "event": "snapshot",
   "input": 6,
   "output": 6,
   "original": "$0.0060 / 1K tokens",
   "notes": "Internet Archive で読める最初の料金ページ（2021-12-04 のスナップショット）の単価。入力と出力は同じ単価。この単価がいつから適用されていたかは確かめられていない。",
   "source": [
    "https://web.archive.org/web/20211204021218/https://openai.com/api/pricing/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "Babbage（GPT-3）",
   "line": "GPT-3 Babbage",
   "date": "2021-12-04",
   "event": "snapshot",
   "input": 1.2,
   "output": 1.2,
   "original": "$0.0012 / 1K tokens",
   "notes": "Internet Archive で読める最初の料金ページ（2021-12-04 のスナップショット）の単価。入力と出力は同じ単価。この単価がいつから適用されていたかは確かめられていない。",
   "source": [
    "https://web.archive.org/web/20211204021218/https://openai.com/api/pricing/"
   ],
   "verified": true
  },
  {
   "provider": "openai",
   "model": "Ada（GPT-3）",
   "line": "GPT-3 Ada",
   "date": "2021-12-04",
   "event": "snapshot",
   "input": 0.8,
   "output": 0.8,
   "original": "$0.0008 / 1K tokens",
   "notes": "Internet Archive で読める最初の料金ページ（2021-12-04 のスナップショット）の単価。入力と出力は同じ単価。この単価がいつから適用されていたかは確かめられていない。",
   "source": [
    "https://web.archive.org/web/20211204021218/https://openai.com/api/pricing/"
   ],
   "verified": true
  }
 ],
 "cloud": [
  {
   "platform": "Amazon Bedrock",
   "vendor": "Amazon",
   "model": "Amazon Nova Micro",
   "region": "us-east-1",
   "input": 0.035,
   "cachedInput": 0.00875,
   "output": 0.14,
   "vsDirect": "比較対象なし（Amazon 自社モデル）",
   "notes": "Price List の単位は 1K トークン（0.000035/0.00000875/0.00014 USD）を 1M に読み替え。キャッシュ書き込みは 0 USD。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/us-east-1/index.json",
    "https://aws.amazon.com/bedrock/pricing/"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Amazon",
   "model": "Amazon Nova Lite",
   "region": "us-east-1",
   "input": 0.06,
   "cachedInput": 0.015,
   "output": 0.24,
   "vsDirect": "比較対象なし（Amazon 自社モデル）",
   "notes": "1K 単位表記（0.00006/0.000015/0.00024）を 1M に読み替え。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/us-east-1/index.json",
    "https://aws.amazon.com/bedrock/pricing/"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Amazon",
   "model": "Amazon Nova Pro",
   "region": "us-east-1",
   "input": 0.8,
   "cachedInput": 0.2,
   "output": 3.2,
   "vsDirect": "比較対象なし（Amazon 自社モデル）",
   "notes": "1K 単位表記（0.0008/0.0002/0.0032）。latency-optimized は 1.00/4.00。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/us-east-1/index.json",
    "https://aws.amazon.com/bedrock/pricing/"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Amazon",
   "model": "Amazon Nova Premier",
   "region": "us-east-1",
   "input": 2.5,
   "cachedInput": 0.625,
   "output": 12.5,
   "vsDirect": "比較対象なし（Amazon 自社モデル）",
   "notes": "1K 単位表記（0.0025/0.000625/0.0125）。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/us-east-1/index.json",
    "https://aws.amazon.com/bedrock/pricing/"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Amazon",
   "model": "Amazon Nova 2 Lite",
   "region": "global（Global Cross-region Inference、us-east-1 起点）",
   "input": 0.3,
   "cachedInput": 0.075,
   "output": 2.5,
   "vsDirect": "比較対象なし（Amazon 自社モデル）",
   "notes": "同じ us-east-1 の in-region / Geo は 0.33/0.0825/2.75（global より10%高い）。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/us-east-1/index.json",
    "https://aws.amazon.com/bedrock/pricing/"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Amazon",
   "model": "Amazon Nova 2 Pro",
   "region": "global（Global Cross-region Inference、us-east-1 起点）",
   "input": 1.25,
   "cachedInput": null,
   "output": 10,
   "vsDirect": "比較対象なし（Amazon 自社モデル）",
   "notes": "テキスト入出力の値。in-region は 1.375/11.0。キャッシュ読み取り単価は Price List で見つけられず null。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/us-east-1/index.json",
    "https://aws.amazon.com/bedrock/pricing/"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Amazon",
   "model": "Amazon Nova Micro",
   "region": "ap-northeast-1（東京）",
   "input": 0.042,
   "cachedInput": 0.0105,
   "output": 0.168,
   "vsDirect": "比較対象なし（Amazon 自社モデル）",
   "notes": "us-east-1 比で入力・出力とも20%高い。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/ap-northeast-1/index.json"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Amazon",
   "model": "Amazon Nova Lite",
   "region": "ap-northeast-1（東京）",
   "input": 0.072,
   "cachedInput": 0.018,
   "output": 0.288,
   "vsDirect": "比較対象なし（Amazon 自社モデル）",
   "notes": "us-east-1 比で20%高い。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/ap-northeast-1/index.json"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Amazon",
   "model": "Amazon Nova Pro",
   "region": "ap-northeast-1（東京）",
   "input": 0.96,
   "cachedInput": 0.24,
   "output": 3.84,
   "vsDirect": "比較対象なし（Amazon 自社モデル）",
   "notes": "us-east-1 比で20%高い。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/ap-northeast-1/index.json"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Amazon",
   "model": "Amazon Nova 2 Lite",
   "region": "ap-northeast-1（東京・in-region）",
   "input": 0.396,
   "cachedInput": 0.099,
   "output": 3.311,
   "vsDirect": "比較対象なし（Amazon 自社モデル）",
   "notes": "東京起点の global cross-region は 0.36/0.09/3.01。us-east-1 の in-region（0.33/2.75）比で入力20%高。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/ap-northeast-1/index.json"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Anthropic",
   "model": "Claude Opus 5.5",
   "region": "global",
   "input": 4,
   "cachedInput": 0.2,
   "output": 20,
   "vsDirect": "直販と同じ",
   "notes": "Anthropic 直販は 4/0.20/20（キャッシュ書き込み5分 5、1時間 8）。Bedrock も同額。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrockFoundationModels/current/us-east-1/index.json",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Anthropic",
   "model": "Claude Opus 5.5",
   "region": "us-east-1 / ap-northeast-1（regional・Geo）",
   "input": 4.4,
   "cachedInput": 0.22,
   "output": 22,
   "vsDirect": "割高（10%）",
   "notes": "regional / Geo エンドポイントは global の1.1倍。東京（APN1）も us-east-1 と同額。Anthropic 文書にも「Regional and multi-region endpoints include a 10 percent premium over global endpoints」とある。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrockFoundationModels/current/us-east-1/index.json",
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrockFoundationModels/current/ap-northeast-1/index.json",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Anthropic",
   "model": "Claude Sonnet 5.5",
   "region": "global",
   "input": 2,
   "cachedInput": 0.1,
   "output": 10,
   "vsDirect": "直販と同じ",
   "notes": "Bedrock の料金ページに「Starting October 7, 2026, cache read pricing for Claude Sonnet 5.5 is reduced by 50% from the prior rate」。regional は 2.2/0.11/11。東京 Price List には Sonnet 5.5 の行が見当たらず。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrockFoundationModels/current/us-east-1/index.json",
    "https://platform.claude.com/docs/en/about-claude/pricing",
    "https://aws.amazon.com/bedrock/pricing/"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Anthropic",
   "model": "Claude Haiku 5.5",
   "region": "global",
   "input": 0.1,
   "cachedInput": 0.01,
   "output": 0.5,
   "vsDirect": "直販と同じ",
   "notes": "100K トークン以下のプロンプトの単価。超過時は 0.50/0.05/2.50（直販と同じ）。regional は 0.11/0.011/0.55（東京も同額）。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrockFoundationModels/current/us-east-1/index.json",
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrockFoundationModels/current/ap-northeast-1/index.json",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Anthropic",
   "model": "Claude Sonnet 4.6",
   "region": "global",
   "input": 3,
   "cachedInput": 0.3,
   "output": 15,
   "vsDirect": "直販と同じ",
   "notes": "regional は 3.3/0.33/16.5（東京も同額）。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrockFoundationModels/current/us-east-1/index.json",
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrockFoundationModels/current/ap-northeast-1/index.json",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "OpenAI",
   "model": "OpenAI GPT-6.2 Sol",
   "region": "global",
   "input": 2,
   "cachedInput": 0.1,
   "output": 10,
   "vsDirect": "直販と同じ",
   "notes": "272K 以下（short context）の値。regional は 2.2/0.11/11（+10%）。OpenAI 直販 Standard は 2.00/0.10/10.00。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrockFoundationModels/current/us-east-1/index.json",
    "https://developers.openai.com/api/docs/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "OpenAI",
   "model": "OpenAI GPT-6.2 Astra",
   "region": "global",
   "input": 8,
   "cachedInput": 0.4,
   "output": 40,
   "vsDirect": "直販と同じ",
   "notes": "short context の値。regional は 8.8/0.44/44。ultrafast 版は global 24/1.2/120。OpenAI 直販 Standard は 8.00/0.40/40.00。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrockFoundationModels/current/us-east-1/index.json",
    "https://developers.openai.com/api/docs/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Meta",
   "model": "Llama 4 Maverick 17B",
   "region": "us-east-1",
   "input": 0.24,
   "cachedInput": null,
   "output": 0.97,
   "vsDirect": "不明",
   "notes": "Meta の直販従量料金は今回確認していない。同モデルは Azure global 0.25/1.00、Vertex 0.35/1.15 で、クラウドごとに値が違う。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/us-east-1/index.json"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Meta",
   "model": "Llama 3.3 70B",
   "region": "us-east-1",
   "input": 0.72,
   "cachedInput": null,
   "output": 0.72,
   "vsDirect": "不明",
   "notes": "",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/us-east-1/index.json"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Mistral AI",
   "model": "Mistral Large 3",
   "region": "us-east-1",
   "input": 0.5,
   "cachedInput": null,
   "output": 1.5,
   "vsDirect": "直販と同じ（直販側の版は特定できず）",
   "notes": "mistral.ai/pricing の FAQ に「Mistral Large costs $0.5 /M tokens in and $1.5 /M tokens out」とあるが版の明記なし。docs の料金表には Large 4（0.7/0.07/2.1）のみ掲載。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/us-east-1/index.json",
    "https://mistral.ai/pricing",
    "https://docs.mistral.ai/inference/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Mistral AI",
   "model": "Mistral Large 3",
   "region": "ap-northeast-1（東京）",
   "input": 0.61,
   "cachedInput": null,
   "output": 1.82,
   "vsDirect": "割高（us-east-1 比で入力22%・出力約21%）",
   "notes": "料金ページの地域別表でも Tokyo は $0.61 / $1.82。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/ap-northeast-1/index.json",
    "https://aws.amazon.com/bedrock/pricing/"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "OpenAI（オープンウェイト）",
   "model": "gpt-oss-120b",
   "region": "us-east-1",
   "input": 0.15,
   "cachedInput": null,
   "output": 0.6,
   "vsDirect": "比較対象なし（OpenAI 直販 API の単価なし）",
   "notes": "東京は 0.18/0.73。Vertex は 0.09/0.36。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/us-east-1/index.json",
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/ap-northeast-1/index.json"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Amazon",
   "model": "Provisioned Throughput（Amazon Nova Pro）",
   "region": "us-east-1",
   "input": null,
   "cachedInput": null,
   "output": null,
   "vsDirect": "該当なし（時間課金）",
   "notes": "トークン単価ではなく、モデルユニット1つあたりの時間課金。コミットなし 60.50 USD/時、1か月 55.00 USD/時、6か月 30.25 USD/時。Anthropic モデルの Provisioned Throughput は「please reach out to your account team」。別に Reserved tier（TPM 単位の時間課金）がある。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrock/current/us-east-1/index.json",
    "https://aws.amazon.com/bedrock/pricing/"
   ],
   "verified": true
  },
  {
   "platform": "Amazon Bedrock",
   "vendor": "Anthropic",
   "model": "Reserved tier（Claude Sonnet 4.6）",
   "region": "global / Geo",
   "input": null,
   "cachedInput": null,
   "output": null,
   "vsDirect": "該当なし（時間課金）",
   "notes": "Price List の単位表記は「1M TPM Hour」。1か月コミット: 入力 global 0.18・Geo 0.198、出力 global 0.90・Geo 0.99。3か月: 入力 0.162 / 0.1782、出力 0.81 / 0.891。料金ページ見出しは「Price per hour per 1K Input TPM」で、単位の表記が食い違う。",
   "source": [
    "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonBedrockFoundationModels/current/us-east-1/index.json",
    "https://aws.amazon.com/bedrock/pricing/"
   ],
   "verified": false
  },
  {
   "platform": "Microsoft Azure（Foundry / Azure OpenAI）",
   "vendor": "OpenAI",
   "model": "GPT-6.2 Sol",
   "region": "Global（eastus2 の価格表）",
   "input": 2,
   "cachedInput": 0.1,
   "output": 10,
   "vsDirect": "直販と同じ",
   "notes": "short context。キャッシュ書き込み 30分 2.5、12時間 5.0（OpenAI 直販と同じ）。GPT-6.2 に Regional の行はない。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=productName eq 'Azure OpenAI GPT6' and armRegionName eq 'eastus2'",
    "https://developers.openai.com/api/docs/pricing",
    "https://azure.microsoft.com/en-us/pricing/details/azure-openai/"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry / Azure OpenAI）",
   "vendor": "OpenAI",
   "model": "GPT-6.2 Sol",
   "region": "Data Zone（eastus2）",
   "input": 2.2,
   "cachedInput": 0.11,
   "output": 11,
   "vsDirect": "割高（10%）",
   "notes": "OpenAI 直販も regional processing（data residency）は「10% uplift for models released on or after March 5, 2026」。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=productName eq 'Azure OpenAI GPT6' and armRegionName eq 'eastus2'",
    "https://developers.openai.com/api/docs/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry / Azure OpenAI）",
   "vendor": "OpenAI",
   "model": "GPT-6.2 Sol",
   "region": "japaneast の「DZ」メーター",
   "input": 2.4,
   "cachedInput": 0.12,
   "output": 12,
   "vsDirect": "割高（20%）",
   "notes": "Retail Prices API の japaneast に「Std DZ」メーターがあり Global の1.2倍。日本向け Data Zone が何を指すかは公式文書で未確認。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=productName eq 'Azure OpenAI GPT6' and armRegionName eq 'japaneast'"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry / Azure OpenAI）",
   "vendor": "OpenAI",
   "model": "GPT-6.2 Astra",
   "region": "Global（eastus2）",
   "input": 8,
   "cachedInput": 0.4,
   "output": 40,
   "vsDirect": "直販と同じ",
   "notes": "Data Zone は 8.8/0.44/44、japaneast DZ は 9.6/0.48/48。Flex Global は 4.0/0.2/20。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=productName eq 'Azure OpenAI GPT6' and armRegionName eq 'eastus2'",
    "https://developers.openai.com/api/docs/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry / Azure OpenAI）",
   "vendor": "OpenAI",
   "model": "GPT-5.4",
   "region": "Global（eastus2）",
   "input": 2.5,
   "cachedInput": 0.25,
   "output": 15,
   "vsDirect": "直販と同じ",
   "notes": "Data Zone は 2.75/0.275/16.5（+10%）。japaneast DZ は 3.0/0.3/18.0（+20%、2026-06-01 から）。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=productName eq 'Azure OpenAI GPT5' and armRegionName eq 'eastus2'",
    "https://prices.azure.com/api/retail/prices?$filter=productName eq 'Azure OpenAI GPT5' and armRegionName eq 'japaneast'",
    "https://developers.openai.com/api/docs/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry / Azure OpenAI）",
   "vendor": "OpenAI",
   "model": "GPT-4o（2024-11-20）",
   "region": "Global",
   "input": 2.5,
   "cachedInput": 1.25,
   "output": 10,
   "vsDirect": "不明",
   "notes": "OpenAI 直販の gpt-4o 現行単価は今回確認していない。Regional（eastus2）は 2.75/1.375/11（+10%）、Regional（japaneast）は 3.025/1.513/12.10（Global 比 +21%）。Data Zone は 2.75/1.375/11。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=productName eq 'Azure OpenAI' and armRegionName eq 'eastus2'",
    "https://prices.azure.com/api/retail/prices?$filter=productName eq 'Azure OpenAI' and armRegionName eq 'japaneast'"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry）",
   "vendor": "Microsoft",
   "model": "Phi-4",
   "region": "eastus2",
   "input": 0.125,
   "cachedInput": null,
   "output": 0.5,
   "vsDirect": "比較対象なし（Microsoft 自社モデル）",
   "notes": "1K 単位表記（0.000125/0.0005）。Phi-4-mini は 0.075/0.30、Phi-4-reasoning は 0.125/0.50。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=serviceName eq 'Foundry Models' and armRegionName eq 'eastus2'"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry）",
   "vendor": "Microsoft",
   "model": "MAI-Thinking-1",
   "region": "Global",
   "input": 2,
   "cachedInput": 0.2,
   "output": 8,
   "vsDirect": "比較対象なし（Microsoft 自社モデル）",
   "notes": "MAI 系はほかに MAI-Code-2-Flash 0.05/0.005/0.25 など。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=serviceName eq 'Foundry Models' and armRegionName eq 'eastus2'"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry）",
   "vendor": "Meta",
   "model": "Llama 4 Maverick 17B",
   "region": "Global",
   "input": 0.25,
   "cachedInput": null,
   "output": 1,
   "vsDirect": "不明",
   "notes": "Data Zone・Regional は 0.275/1.10（+10%）。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=serviceName eq 'Foundry Models' and armRegionName eq 'eastus2'"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry）",
   "vendor": "Mistral AI",
   "model": "Mistral Large 4",
   "region": "Global",
   "input": 0.7,
   "cachedInput": 0.07,
   "output": 2.1,
   "vsDirect": "直販と同じ",
   "notes": "Mistral docs の料金表は 0.7/0.07/2.1（単位の明記はないが per 1M と見られる）。Data Zone は 0.77/0.077/2.31。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=serviceName eq 'Foundry Models' and armRegionName eq 'eastus2'",
    "https://docs.mistral.ai/inference/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry）",
   "vendor": "Mistral AI",
   "model": "Mistral Large 3",
   "region": "Global",
   "input": 0.5,
   "cachedInput": null,
   "output": 1.5,
   "vsDirect": "直販と同じ（直販側の版は特定できず）",
   "notes": "Data Zone は 0.55/1.65。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=serviceName eq 'Foundry Models' and armRegionName eq 'eastus2'",
    "https://mistral.ai/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry）",
   "vendor": "Anthropic",
   "model": "Claude（Claude in Microsoft Foundry）",
   "region": "Azure / Anthropic ホスト",
   "input": null,
   "cachedInput": null,
   "output": null,
   "vsDirect": "直販と同じ",
   "notes": "Anthropic 文書: Azure Marketplace で CCU（1 CCU = 0.01 USD）課金、トークン単価は直販の標準単価と同じ。US Data Zone Standard は 1.1倍。個別モデルの単価は直販の表（例: Opus 5.5 は 4/0.20/20）を参照。",
   "source": [
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Microsoft Azure（Foundry / Azure OpenAI）",
   "vendor": "Microsoft",
   "model": "Provisioned Throughput（PTU）",
   "region": "Global / Data Zone / Regional",
   "input": null,
   "cachedInput": null,
   "output": null,
   "vsDirect": "該当なし（時間課金）",
   "notes": "トークン単価ではなく PTU 単位の時間課金。時間単価: Global 1.0、Data Zone 1.1、Regional 2.0 USD/PTU・時。予約: Global 1か月 260 USD/PTU、1年 2,652 USD/PTU、Data Zone・Regional は 1か月 286、1年 2,916（Retail Prices API の値。unitOfMeasure の表記は「1/Hour」）。料金ページには「You are charged an hourly rate per model regardless of usage」。",
   "source": [
    "https://prices.azure.com/api/retail/prices?$filter=serviceName eq 'Foundry Models' and armRegionName eq 'eastus2'",
    "https://azure.microsoft.com/en-us/pricing/details/azure-openai/"
   ],
   "verified": true
  },
  {
   "platform": "Google Cloud Vertex AI",
   "vendor": "Google",
   "model": "Gemini 4 Neon",
   "region": "Global",
   "input": 3,
   "cachedInput": 0.15,
   "output": 15,
   "vsDirect": "Gemini API と同じ",
   "notes": "Non-global は 3.30/0.165/16.50（+10%）。キャッシュ書き込み 3.75 は 2027-01-12 から。",
   "source": [
    "https://cloud.google.com/vertex-ai/generative-ai/pricing",
    "https://aistudio.google.com/docs/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Google Cloud Vertex AI",
   "vendor": "Google",
   "model": "Gemini 4 Hydrogen",
   "region": "Global",
   "input": 1.5,
   "cachedInput": 0.075,
   "output": 7.5,
   "vsDirect": "Gemini API と同じ",
   "notes": "Non-global は 1.65/0.0825/8.25。",
   "source": [
    "https://cloud.google.com/vertex-ai/generative-ai/pricing",
    "https://aistudio.google.com/docs/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Google Cloud Vertex AI",
   "vendor": "Google",
   "model": "Gemini 4 Carbon",
   "region": "Global",
   "input": 2,
   "cachedInput": 0.1,
   "output": 10,
   "vsDirect": "Gemini API と同じ",
   "notes": "2026-11-30 までの価格。Vertex では「50% credits back」の販促扱い。2026-12-01 からは 4.00/0.20/20.00（Gemini API も同じ）。Gemini 4 Argon も同じ価格体系。",
   "source": [
    "https://cloud.google.com/vertex-ai/generative-ai/pricing",
    "https://aistudio.google.com/docs/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Google Cloud Vertex AI",
   "vendor": "Google",
   "model": "Gemini 3.8 Flash",
   "region": "Global",
   "input": 0.75,
   "cachedInput": 0.075,
   "output": 3.75,
   "vsDirect": "Gemini API と同じ",
   "notes": "2026-12-31 までの導入価格。2027-01-01 から 1.50/0.15/7.50。Non-global は 0.825/0.0825/4.125。",
   "source": [
    "https://cloud.google.com/vertex-ai/generative-ai/pricing",
    "https://aistudio.google.com/docs/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Google Cloud Vertex AI",
   "vendor": "Google",
   "model": "Gemini 3.1 Pro Preview",
   "region": "Global",
   "input": 2,
   "cachedInput": 0.2,
   "output": 12,
   "vsDirect": "Gemini API と同じ",
   "notes": "200K 以下の単価。200K 超は 4.00/0.40/18.00。",
   "source": [
    "https://cloud.google.com/vertex-ai/generative-ai/pricing",
    "https://aistudio.google.com/docs/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Google Cloud Vertex AI",
   "vendor": "Anthropic",
   "model": "Claude Opus 5.5",
   "region": "Global",
   "input": 4,
   "cachedInput": 0.2,
   "output": 20,
   "vsDirect": "直販と同じ",
   "notes": "US / EU multi-region と regional は 4.40/0.22/22.00（+10%）。Vertex の Global 表では Batch Input 2.50 / Batch Output 12.50 と載っており、直販の Batch（2/10）と食い違う。",
   "source": [
    "https://cloud.google.com/model-garden/partner-models/pricing",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Google Cloud Vertex AI",
   "vendor": "Anthropic",
   "model": "Claude Sonnet 5.5",
   "region": "Global",
   "input": 2,
   "cachedInput": 0.1,
   "output": 10,
   "vsDirect": "直販と同じ",
   "notes": "multi-region / regional は 2.20/0.11/11.00。",
   "source": [
    "https://cloud.google.com/model-garden/partner-models/pricing",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Google Cloud Vertex AI",
   "vendor": "Anthropic",
   "model": "Claude Haiku 5.5",
   "region": "Global",
   "input": 0.1,
   "cachedInput": 0.01,
   "output": 0.5,
   "vsDirect": "直販と同じ",
   "notes": "100K 以下。100K 超は 0.50/0.05/2.50。regional は 0.11/0.011/0.55。",
   "source": [
    "https://cloud.google.com/model-garden/partner-models/pricing",
    "https://platform.claude.com/docs/en/about-claude/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Google Cloud Vertex AI",
   "vendor": "Meta",
   "model": "Llama 4 Maverick",
   "region": "Global",
   "input": 0.35,
   "cachedInput": null,
   "output": 1.15,
   "vsDirect": "不明",
   "notes": "Bedrock 0.24/0.97、Azure 0.25/1.00 より高い。",
   "source": [
    "https://cloud.google.com/model-garden/partner-models/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Google Cloud Vertex AI",
   "vendor": "OpenAI（オープンウェイト）",
   "model": "gpt-oss-120b",
   "region": "Global",
   "input": 0.09,
   "cachedInput": null,
   "output": 0.36,
   "vsDirect": "比較対象なし（OpenAI 直販 API の単価なし）",
   "notes": "",
   "source": [
    "https://cloud.google.com/model-garden/partner-models/pricing"
   ],
   "verified": true
  },
  {
   "platform": "Google Cloud Vertex AI",
   "vendor": "Google",
   "model": "Provisioned Throughput（GSU）",
   "region": "Global / Non-global",
   "input": null,
   "cachedInput": null,
   "output": null,
   "vsDirect": "該当なし（時間課金）",
   "notes": "GSU 単位の時間課金（Hourly 表）。Global: 1週間コミット 7.14、1か月 3.698630137、3か月 3.287671233、1年 2.739726027 USD/GSU・時。Non-global は 7.854 / 4.068493151 / 3.616438356 / 3.01369863。",
   "source": [
    "https://cloud.google.com/vertex-ai/generative-ai/pricing"
   ],
   "verified": true
  }
 ],
 "japan": [
  {
   "provider": "Preferred Networks（PFN）",
   "service": "PLaMo API（Standard プラン）",
   "model": "PLaMo 3.0 Prime / PLaMo 3.1 Prime",
   "publicPrice": true,
   "original": "1M tokens あたり Input 60円 / Output 250円",
   "released": "2024-12",
   "notes": "128k トークンまでの単価（128k 超もリリース記念期間中は同額）。Free プランは 0円（試用）、Enterprise は個別見積もり。「利用料金の算出において、1円未満の値は切り上げられます」。税込・税抜の表記は確認できず。PLaMo 3.1 Prime は 2026-10-27 提供開始。PLaMo 3.0 Prime は 2027-01-31 提供終了予定。 2024-12 の提供開始時は 1M トークンあたり入力 300円・出力 1,000円で、2025-05-22 に現在の単価へ値下げした（Internet Archive で確認）。",
   "source": [
    "https://plamo.preferredai.jp/api",
    "https://plamo.preferredai.jp/assets/index-ByRiTARd.js（/api ページは SPA。値はこの JS に含まれる表示文言から確認）"
   ],
   "verified": true
  },
  {
   "provider": "Preferred Networks（PFN）",
   "service": "Microsoft Foundry（Marketplace）",
   "model": "PLaMo 3 Prime",
   "publicPrice": true,
   "original": "最低メーター単価 653.90115円 / 時間（Marketplace の JP 市場表示）",
   "released": "2026-10",
   "notes": "トークン単価ではなく時間課金。Azure 側の計算資源料金が別にかかるかは未確認。PLaMo 2.2 Prime は 160.11765円/時間から。",
   "source": [
    "https://catalogapi.azure.com/offers?api-version=2018-08-01-beta&market=JP&language=ja&$filter=contains(offerId,'plamo')"
   ],
   "verified": true
  },
  {
   "provider": "NTT データ（NTT 開発モデル）",
   "service": "Azure（Marketplace / MaaS）",
   "model": "tsuzumi-7B Instruct",
   "publicPrice": true,
   "original": "1,000トークンあたり 入力 0.05792円 / 出力 0.15929円",
   "released": "2024-11",
   "notes": "Marketplace カタログの JP 市場価格（consumptionUnitType「per 1000 tokens」）。1M 換算では 57.92円 / 159.29円。Marketplace の円表示が USD 基準の換算かどうかは未確認。提供開始日は NTT データのページの見出し「Microsoft Azure上でNTT版LLM「tsuzumi」を2024年11月20日に提供開始」から。",
   "source": [
    "https://catalogapi.azure.com/offers/1681106214127.nttdata-tsuzumi-1-1-instruct-offer?api-version=2018-08-01-beta&market=JP&language=ja",
    "https://www.nttdata.com/jp/ja/lineup/tsuzumi"
   ],
   "verified": true
  },
  {
   "provider": "NTT データ（NTT 開発モデル）",
   "service": "Microsoft Foundry（Marketplace・マネージドコンピュート）",
   "model": "tsuzumi 2 Instruct",
   "publicPrice": true,
   "original": "H100 / A100 GPU 1時間あたり 118.8602円",
   "released": "2026-01",
   "notes": "トークン単価なし。GPU 時間あたりのソフトウェア料金（Azure の計算資源料金は別とみられるが未確認）。released はカタログの creationDate（2026-01-16）で、一般提供日ではない可能性がある。NTT データのページは「利用料金やサービスの詳細情報はMicrosoftのマーケットプレイス上のカタログ情報および利用マニュアルをご覧ください」。",
   "source": [
    "https://catalogapi.azure.com/offers/1681106214127.nttdata-tsuzumi-2-instruct-offer?api-version=2018-08-01-beta&market=JP&language=ja",
    "https://www.nttdata.com/jp/ja/lineup/tsuzumi"
   ],
   "verified": true
  },
  {
   "provider": "ソフトバンク（SB Intuitions 開発モデル）",
   "service": "Cloud PF Type A の Sarashina（旧 Sarashina API）",
   "model": "Sarashina3 mini / nano / guard / embedding / rerank",
   "publicPrice": false,
   "original": "要問い合わせ（単価は公開されていない）",
   "released": "2025-11",
   "notes": "On-Demand（従量課金）と Dedicated（月額固定）があるが単価は非公開。Sarashina API は 2025-11-28 開始（ソフトバンク 2025-11-05 プレスリリース）。2026-03-06 の Internet Archive スナップショットでも「料金に関しては、お問い合わせフォームよりご連絡ください」。",
   "source": [
    "https://www.softbank.jp/biz/services/ai/sarashina-api/",
    "https://www.softbank.jp/corp/news/press/sbkk/2025/20251105_01",
    "https://web.archive.org/web/20260306045733/https://www.softbank.jp/biz/services/ai/sarashina-api/"
   ],
   "verified": true
  },
  {
   "provider": "SB Intuitions",
   "service": "Sarashina サービス（無償ベータ）",
   "model": "Sarashina3 mini / nano / embedding / rerank / guard / translate",
   "publicPrice": false,
   "original": "公式サイトで料金表を見つけられなかった",
   "released": "2026-10",
   "notes": "",
   "source": [
    "https://www.watch.impress.co.jp/docs/news/2147706.html"
   ],
   "verified": false
  },
  {
   "provider": "さくらインターネット",
   "service": "さくらのAI Engine（従量課金プラン）",
   "model": "llm-jp-3.1-8x13b-instruct4（国立情報学研究所 LLM-jp のモデル）",
   "publicPrice": true,
   "original": "Input 0.15円 / 10,000トークン、Output 0.75円 / 10,000トークン（表示価格は税込）",
   "released": "2025-09",
   "notes": "Chat completions は月3,000リクエストまで無償枠（全体）。超過分は 10,000 トークン単位で課金。",
   "source": [
    "https://ai.sakura.ad.jp/sakura-ai/ai-engine/"
   ],
   "verified": true
  },
  {
   "provider": "さくらインターネット",
   "service": "さくらのAI Engine（従量課金プラン）",
   "model": "gpt-oss-120b",
   "publicPrice": true,
   "original": "Input 0.15円 / 10,000トークン、Output 0.75円 / 10,000トークン（税込）",
   "released": "2025-09",
   "notes": "国内データセンターで処理。パブリックプレビューの他モデル（Qwen3.6-35B-A3B 0.3/1.5円、Kimi-K2.7-Code 0.52/5.04円 など、いずれも 10,000 トークンあたり）もある。",
   "source": [
    "https://ai.sakura.ad.jp/sakura-ai/ai-engine/"
   ],
   "verified": true
  },
  {
   "provider": "さくらインターネット（モデル提供元 PFN・NEC）",
   "service": "さくらのAI Engine（クローズドモデル）",
   "model": "PLaMo 3.0 Prime / cotomi v3",
   "publicPrice": false,
   "original": "単価は公開されていない（個別に問い合わせ）",
   "released": null,
   "notes": "利用には申請と審査が必要。マニュアルサイトに単価が載っているかは未確認。",
   "source": [
    "https://ai.sakura.ad.jp/sakura-ai/ai-engine/"
   ],
   "verified": true
  },
  {
   "provider": "NEC",
   "service": "cotomi（API サービスほか）",
   "model": "cotomi",
   "publicPrice": false,
   "original": "公式ページに料金の記載なし",
   "released": null,
   "notes": "公式の LLM ページを確認したがトークン単価の記載はなかった。",
   "source": [
    "https://jpn.nec.com/LLM/index.html"
   ],
   "verified": true
  },
  {
   "provider": "富士通",
   "service": "Fujitsu Kozuchi / Data Intelligence PaaS",
   "model": "Takane",
   "publicPrice": false,
   "original": "公式サイトで料金表を見つけられなかった",
   "released": null,
   "notes": "",
   "source": [
    "https://global.fujitsu/ja-JP/technology/research"
   ],
   "verified": false
  },
  {
   "provider": "ELYZA（KDDI グループ）",
   "service": "ELYZA LLM API など",
   "model": "ELYZA 系モデル",
   "publicPrice": false,
   "original": "公式サイトで料金表を見つけられなかった",
   "released": null,
   "notes": "",
   "source": [
    "https://elyza.ai/"
   ],
   "verified": false
  },
  {
   "provider": "ストックマーク",
   "service": "Stockmark LLM",
   "model": "Stockmark 系モデル",
   "publicPrice": false,
   "original": "公式サイトで料金表を見つけられなかった",
   "released": null,
   "notes": "",
   "source": [
    "https://stockmark.co.jp/"
   ],
   "verified": false
  },
  {
   "provider": "楽天グループ",
   "service": "Rakuten AI（Rakuten AI for Business など）",
   "model": "Rakuten AI 系 LLM",
   "publicPrice": false,
   "original": "公式サイトで料金表を見つけられなかった",
   "released": null,
   "notes": "",
   "source": [
    "https://corp.rakuten.co.jp/ai/"
   ],
   "verified": false
  }
 ],
 "findings": [
  {
   "title": "単価だけを比べると5年で100分の1以下になった",
   "text": "2021年12月の GPT-3 Davinci は、入力も出力も100万トークンあたり $60 でした。2023年3月の gpt-3.5-turbo は $2 です。2026年9月の GPT-6 Luna は入力 $0.10・出力 $0.50 です。ただし、モデルの性能はそれぞれ違います。"
  },
  {
   "title": "上位モデルの単価は下がる一方ではない",
   "text": "2023年3月の GPT-4 は出力 $60、2025年2月の GPT-4.5 Preview は出力 $150 でした。2026年11月時点でも、GPT-5.5 Pro は出力 $180 です。一方で、各社の上位モデルには出力 $20〜$40 のものも増えています。"
  },
  {
   "title": "同じ系列の値下げも値上げもある",
   "text": "GPT-4o は2024年8月の版で $5/$15 から $2.50/$10 に下がりました。o3 は2025年6月に $2/$8 へ値下げされました。逆に Claude 3.5 Haiku は、前の世代の4倍の $1/$5 で提供が始まりました。Gemini 4 Carbon は導入価格が終わる12月1日に $4/$20 へ上がります。"
  }
 ],
 "subscriptions": {
  "checked_at": "2026-11-27",
  "plans": [
   {
    "provider": "OpenAI",
    "product": "ChatGPT",
    "plan": "Go",
    "usd": 8.0,
    "jpy": null,
    "limits": "文章の対話は無制限（不正利用を防ぐ制限あり）。混雑時は一時的な制限あり",
    "api": "なし（API は別料金）",
    "source": [
     "https://learn.chatgpt.com/docs/pricing",
     "https://help.openai.com/en/articles/11989085-what-is-chatgpt-go",
     "https://openai.com/index/introducing-chatgpt-go/",
     "https://chatgpt.com/pricing"
    ],
    "verified": true
   },
   {
    "provider": "OpenAI",
    "product": "ChatGPT",
    "plan": "Plus",
    "usd": 20.0,
    "jpy": null,
    "limits": "上限あり。混雑時はメッセージ数などが制限される。数は非公開",
    "api": "なし（API は別料金）",
    "source": [
     "https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus",
     "https://learn.chatgpt.com/docs/pricing",
     "https://chatgpt.com/pricing",
     "https://help.openai.com/en/articles/20001626-api-credits-benefit-for-eligible-chatgpt-subscriptions",
     "https://help.openai.com/en/articles/10421635-multicurrency-billing"
    ],
    "verified": true
   },
   {
    "provider": "OpenAI",
    "product": "ChatGPT",
    "plan": "Pro 100",
    "usd": 100.0,
    "jpy": null,
    "limits": "無制限の機能あり（不正利用を防ぐ制限あり）。Pro の3段階で最も少ない",
    "api": "毎月 $100 の API クレジット",
    "source": [
     "https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers",
     "https://learn.chatgpt.com/docs/pricing",
     "https://chatgpt.com/pricing",
     "https://help.openai.com/en/articles/20001626-api-credits-benefit-for-eligible-chatgpt-subscriptions"
    ],
    "verified": true
   },
   {
    "provider": "OpenAI",
    "product": "ChatGPT",
    "plan": "Pro 200",
    "usd": 200.0,
    "jpy": null,
    "limits": "Pro 100 より多い",
    "api": "毎月 $200 の API クレジット",
    "source": [
     "https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers",
     "https://learn.chatgpt.com/docs/pricing",
     "https://chatgpt.com/pricing",
     "https://help.openai.com/en/articles/20001626-api-credits-benefit-for-eligible-chatgpt-subscriptions"
    ],
    "verified": true
   },
   {
    "provider": "OpenAI",
    "product": "ChatGPT",
    "plan": "Pro 500",
    "usd": 500.0,
    "jpy": null,
    "limits": "Pro の3段階で最も多い",
    "api": "毎月 $500 の API クレジット",
    "source": [
     "https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers",
     "https://learn.chatgpt.com/docs/pricing",
     "https://chatgpt.com/pricing",
     "https://help.openai.com/en/articles/20001626-api-credits-benefit-for-eligible-chatgpt-subscriptions"
    ],
    "verified": true
   },
   {
    "provider": "OpenAI",
    "product": "ChatGPT",
    "plan": "Business（Standard seat）",
    "usd": 25.0,
    "jpy": null,
    "limits": "上限あり。Codex の目安は Plus と同じ",
    "api": "1席あたり毎月 $20 の API クレジット（ワークスペースで月 $500 まで）",
    "source": [
     "https://help.openai.com/en/articles/8792828-chatgpt-business-overview",
     "https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business",
     "https://learn.chatgpt.com/docs/pricing",
     "https://help.openai.com/en/articles/20001626-api-credits-benefit-for-eligible-chatgpt-subscriptions",
     "https://chatgpt.com/pricing"
    ],
    "verified": true
   },
   {
    "provider": "OpenAI",
    "product": "ChatGPT",
    "plan": "Business（Premium seat）",
    "usd": 125.0,
    "jpy": null,
    "limits": "Standard より多い。5時間ごとの上限なし",
    "api": "1席あたり毎月 $100 の API クレジット（ワークスペースで月 $500 まで）",
    "source": [
     "https://help.openai.com/en/articles/8792828-chatgpt-business-overview",
     "https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business",
     "https://help.openai.com/en/articles/20001626-api-credits-benefit-for-eligible-chatgpt-subscriptions",
     "https://chatgpt.com/codex/pricing/"
    ],
    "verified": true
   },
   {
    "provider": "Anthropic",
    "product": "Claude",
    "plan": "Pro",
    "usd": 20.0,
    "jpy": null,
    "limits": "5時間ごとと週ごとの上限。5時間あたり Free の5倍以上。メッセージ数は固定されていない",
    "api": "なし（Claude Code はプランの上限の中で使える）",
    "source": [
     "https://claude.com/pricing",
     "https://claude.com/ja/pricing",
     "https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-ultra-and-team-plans"
    ],
    "verified": true
   },
   {
    "provider": "Anthropic",
    "product": "Claude",
    "plan": "Max",
    "usd": 100.0,
    "jpy": null,
    "limits": "5時間ごと・週ごとに Pro の5倍",
    "api": "毎月 $100 の API クレジット（対話型の Claude Code には使えない）",
    "source": [
     "https://claude.com/pricing",
     "https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-ultra-and-team-plans"
    ],
    "verified": true
   },
   {
    "provider": "Anthropic",
    "product": "Claude",
    "plan": "Ultra",
    "usd": 200.0,
    "jpy": null,
    "limits": "5時間ごとの上限なし（認証済みアカウント）。週ごとに Pro の10倍",
    "api": "毎月 $200 の API クレジット（対話型の Claude Code には使えない）",
    "source": [
     "https://claude.com/pricing",
     "https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-ultra-and-team-plans"
    ],
    "verified": true
   },
   {
    "provider": "Anthropic",
    "product": "Claude",
    "plan": "Team（Standard seat）",
    "usd": 25.0,
    "jpy": null,
    "limits": "Pro より多い",
    "api": "1席あたり毎月 $20 の API クレジット（チームで月 $500 まで）",
    "source": [
     "https://claude.com/pricing",
     "https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-ultra-and-team-plans"
    ],
    "verified": true
   },
   {
    "provider": "Anthropic",
    "product": "Claude",
    "plan": "Team（Premium seat）",
    "usd": 125.0,
    "jpy": null,
    "limits": "Standard の5倍",
    "api": "1席あたり毎月 $100 の API クレジット（チームで月 $500 まで）",
    "source": [
     "https://claude.com/pricing",
     "https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-ultra-and-team-plans"
    ],
    "verified": true
   },
   {
    "provider": "Google",
    "product": "Google AI（Gemini アプリ）",
    "plan": "Google AI Plus",
    "usd": 4.99,
    "jpy": "￥725 JPY / 月",
    "limits": "Free の2倍。上限は質問の複雑さや会話の長さなどの計算量で決まる",
    "api": "Gemini API の枠の記載なし",
    "source": [
     "https://gemini.google/us/subscriptions/?hl=en",
     "https://gemini.google/jp/subscriptions/?hl=ja",
     "https://support.google.com/gemini/answer/16275805?hl=en"
    ],
    "verified": true
   },
   {
    "provider": "Google",
    "product": "Google AI（Gemini アプリ）",
    "plan": "Google AI Pro",
    "usd": 19.99,
    "jpy": "￥2,900 JPY / 月",
    "limits": "Free の4倍。5時間ごとに回復し、週ごとの上限もある",
    "api": "Gemini API の枠の記載なし。上限のあとは API の単価で減る AI クレジットを買える",
    "source": [
     "https://gemini.google/us/subscriptions/?hl=en",
     "https://gemini.google/jp/subscriptions/?hl=ja",
     "https://support.google.com/gemini/answer/16275805?hl=en"
    ],
    "verified": true
   },
   {
    "provider": "Google",
    "product": "Google AI（Gemini アプリ）",
    "plan": "Google AI Ultra（5x）",
    "usd": 99.99,
    "jpy": "￥14,500 JPY/月",
    "limits": "AI Pro の5倍",
    "api": "Gemini API の枠の記載なし。AI クレジットを買える",
    "source": [
     "https://gemini.google/us/subscriptions/?hl=en",
     "https://gemini.google/jp/subscriptions/?hl=ja",
     "https://support.google.com/gemini/answer/16275805?hl=en"
    ],
    "verified": true
   },
   {
    "provider": "Google",
    "product": "Google AI（Gemini アプリ）",
    "plan": "Google AI Ultra（20x）",
    "usd": 199.99,
    "jpy": "￥32,000 JPY /月",
    "limits": "AI Pro の20倍",
    "api": "Gemini API の枠の記載なし。AI クレジットを買える",
    "source": [
     "https://gemini.google/us/subscriptions/?hl=en",
     "https://gemini.google/jp/subscriptions/?hl=ja",
     "https://support.google.com/gemini/answer/16275805?hl=en"
    ],
    "verified": true
   },
   {
    "provider": "xAI",
    "product": "The X Subscription（Grok・Cursor・X）",
    "plan": "Plus",
    "usd": 8.0,
    "jpy": null,
    "limits": "週ごとの利用枠（基準の量）",
    "api": "Grok と Cursor で xAI のモデルに使える週ごとの枠",
    "source": [
     "https://docs.x.ai/x-subscription/pricing",
     "https://docs.x.ai/x-subscription/overview",
     "https://docs.x.ai/x-subscription/usage-limits",
     "https://docs.x.ai/x-subscription/x-premium"
    ],
    "verified": true
   },
   {
    "provider": "xAI",
    "product": "The X Subscription（Grok・Cursor・X）",
    "plan": "Premium",
    "usd": 30.0,
    "jpy": null,
    "limits": "週ごとの利用枠が Plus の4倍",
    "api": "Grok と Cursor で xAI のモデルに使える週ごとの枠",
    "source": [
     "https://docs.x.ai/x-subscription/pricing",
     "https://docs.x.ai/x-subscription/overview",
     "https://docs.x.ai/x-subscription/usage-limits",
     "https://docs.x.ai/x-subscription/x-premium"
    ],
    "verified": true
   },
   {
    "provider": "xAI",
    "product": "The X Subscription（Grok・Cursor・X）",
    "plan": "Super",
    "usd": 100.0,
    "jpy": null,
    "limits": "週ごとの利用枠が Plus の15倍",
    "api": "Grok と Cursor で xAI のモデルに使える週ごとの枠",
    "source": [
     "https://docs.x.ai/x-subscription/pricing",
     "https://docs.x.ai/x-subscription/overview",
     "https://docs.x.ai/x-subscription/usage-limits",
     "https://docs.x.ai/x-subscription/x-premium"
    ],
    "verified": true
   },
   {
    "provider": "xAI",
    "product": "The X Subscription（Grok・Cursor・X）",
    "plan": "Ultra",
    "usd": 200.0,
    "jpy": null,
    "limits": "週ごとの利用枠が Plus の50倍",
    "api": "Grok と Cursor で xAI のモデルに使える週ごとの枠",
    "source": [
     "https://docs.x.ai/x-subscription/pricing",
     "https://docs.x.ai/x-subscription/overview",
     "https://docs.x.ai/x-subscription/usage-limits",
     "https://docs.x.ai/x-subscription/x-premium"
    ],
    "verified": true
   },
   {
    "provider": "Microsoft",
    "product": "Microsoft 365（Copilot）",
    "plan": "Microsoft 365 Personal",
    "usd": 9.99,
    "jpy": "¥2,130（月額払い）",
    "limits": "Free より多い。機能ごとに回数の上限あり",
    "api": "なし",
    "source": [
     "https://www.microsoft.com/en-us/copilot/pricing/individuals",
     "https://www.microsoft.com/en-us/microsoft-365/buy/compare-all-microsoft-365-products",
     "https://www.microsoft.com/ja-jp/microsoft-365/buy/compare-all-microsoft-365-products",
     "https://support.microsoft.com/en-us/microsoft-365-copilot/ai-credits-and-limits-for-microsoft-365-subscriptions"
    ],
    "verified": true
   },
   {
    "provider": "Microsoft",
    "product": "Microsoft 365（Copilot）",
    "plan": "Microsoft 365 Family",
    "usd": 12.99,
    "jpy": "¥2,740/月",
    "limits": "Personal と同じ（AI は契約者本人だけ）",
    "api": "なし",
    "source": [
     "https://www.microsoft.com/en-us/copilot/pricing/individuals",
     "https://www.microsoft.com/en-us/microsoft-365/buy/compare-all-microsoft-365-products",
     "https://www.microsoft.com/ja-jp/microsoft-365/buy/compare-all-microsoft-365-products",
     "https://support.microsoft.com/en-us/microsoft-365-copilot/ai-credits-and-limits-for-microsoft-365-subscriptions"
    ],
    "verified": true
   },
   {
    "provider": "Microsoft",
    "product": "Microsoft 365（Copilot）",
    "plan": "Microsoft 365 Premium",
    "usd": 19.99,
    "jpy": "¥3,200（月額払い）",
    "limits": "Copilot の対話は多め、エージェント機能は限られた量",
    "api": "なし",
    "source": [
     "https://www.microsoft.com/en-us/copilot/pricing/individuals",
     "https://www.microsoft.com/en-us/microsoft-365/buy/compare-all-microsoft-365-products",
     "https://www.microsoft.com/ja-jp/copilot/pricing/individuals",
     "https://support.microsoft.com/en-us/microsoft-365-copilot/ai-credits-and-limits-for-microsoft-365-subscriptions"
    ],
    "verified": true
   },
   {
    "provider": "Microsoft",
    "product": "Microsoft 365（Copilot）",
    "plan": "Microsoft 365 Pro",
    "usd": 99.99,
    "jpy": "¥16,000/月",
    "limits": "最も多い",
    "api": "なし",
    "source": [
     "https://www.microsoft.com/en-us/copilot/pricing/individuals",
     "https://www.microsoft.com/ja-jp/copilot/pricing/individuals",
     "https://support.microsoft.com/en-us/microsoft-365-copilot/ai-credits-and-limits-for-microsoft-365-subscriptions"
    ],
    "verified": true
   },
   {
    "provider": "Perplexity",
    "product": "Perplexity",
    "plan": "Pro",
    "usd": 20.0,
    "jpy": null,
    "limits": "Pro Search を広く使える。利用が多い週は上位モデルが制限されることがある",
    "api": "なし（API は別料金）",
    "source": [
     "https://www.perplexity.ai/hub/blog/ai-costs",
     "https://www.perplexity.ai/hub/pricing",
     "https://www.perplexity.ai/help-center/en/articles/10352901-what-is-perplexity-pro",
     "https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you",
     "https://www.perplexity.ai/help-center/en/articles/10353002-billing-faq-for-pro-plan-subscribers",
     "https://www.perplexity.ai/help-center/en/articles/10354847-api-payment-and-billing",
     "https://www.perplexity.ai/help-center/en/articles/13838041-how-credits-work-on-perplexity"
    ],
    "verified": true
   },
   {
    "provider": "Perplexity",
    "product": "Perplexity",
    "plan": "Max",
    "usd": 200.0,
    "jpy": null,
    "limits": "上位モデルを高い上限で使える",
    "api": "なし（API は別料金）",
    "source": [
     "https://www.perplexity.ai/help-center/en/articles/11680686-perplexity-max",
     "https://www.perplexity.ai/hub/pricing",
     "https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you",
     "https://www.perplexity.ai/help-center/en/articles/10352901-what-is-perplexity-pro",
     "https://www.perplexity.ai/help-center/en/articles/13838041-how-credits-work-on-perplexity"
    ],
    "verified": true
   },
   {
    "provider": "Perplexity",
    "product": "Perplexity",
    "plan": "Enterprise Pro",
    "usd": 40.0,
    "jpy": null,
    "limits": "Pro の機能に加えてファイルのアップロードが多い。数値は非公開",
    "api": "なし（API は別料金）",
    "source": [
     "https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you",
     "https://www.perplexity.ai/help-center/en/articles/10354847-api-payment-and-billing"
    ],
    "verified": true
   },
   {
    "provider": "Mistral AI",
    "product": "Mistral Vibe（旧 Le Chat）",
    "plan": "Pro",
    "usd": 14.99,
    "jpy": null,
    "limits": "公正利用の範囲の上限。Free より多い",
    "api": "API の月ごとの割り当てを含む（額は非公開）",
    "source": [
     "https://mistral.ai/pricing/",
     "https://docs.mistral.ai/admin/billing-usage/subscriptions"
    ],
    "verified": true
   },
   {
    "provider": "Mistral AI",
    "product": "Mistral Vibe（旧 Le Chat）",
    "plan": "Team",
    "usd": 24.99,
    "jpy": null,
    "limits": "Pro よりさらに多い",
    "api": "API の月ごとの割り当てを含む（額は非公開）",
    "source": [
     "https://mistral.ai/pricing/",
     "https://docs.mistral.ai/admin/billing-usage/subscriptions"
    ],
    "verified": true
   },
   {
    "provider": "GitHub",
    "product": "GitHub Copilot",
    "plan": "Pro",
    "usd": 10.0,
    "jpy": null,
    "limits": "コード補完は無制限。ほかは毎月 $15 分の AI クレジット",
    "api": "API キーは含まない",
    "source": [
     "https://github.com/features/copilot/plans"
    ],
    "verified": true
   },
   {
    "provider": "GitHub",
    "product": "GitHub Copilot",
    "plan": "Pro+",
    "usd": 39.0,
    "jpy": null,
    "limits": "毎月 $70 分の AI クレジット",
    "api": "API キーは含まない",
    "source": [
     "https://github.com/features/copilot/plans"
    ],
    "verified": true
   },
   {
    "provider": "GitHub",
    "product": "GitHub Copilot",
    "plan": "Max",
    "usd": 100.0,
    "jpy": null,
    "limits": "毎月 $200 分の AI クレジット",
    "api": "API キーは含まない",
    "source": [
     "https://github.com/features/copilot/plans"
    ],
    "verified": true
   }
  ],
  "breakEven": {
   "prices": [
    8,
    20,
    100,
    200
   ],
   "ratio": [
    3,
    1
   ],
   "models": [
    [
     "anthropic",
     "claude-opus-5-5"
    ],
    [
     "anthropic",
     "claude-sonnet-5-5"
    ],
    [
     "openai",
     "gpt-6.2-astra"
    ],
    [
     "openai",
     "gpt-6.2-sol"
    ],
    [
     "google",
     "gemini-4-neon"
    ],
    [
     "xai",
     "grok-4.7"
    ],
    [
     "openai",
     "gpt-6-luna"
    ]
   ]
  }
 },
 "sources": [
  {
   "title": "OpenAI の料金ページ",
   "url": "https://developers.openai.com/api/docs/pricing"
  },
  {
   "title": "Anthropic の料金ページ",
   "url": "https://platform.claude.com/docs/en/about-claude/pricing"
  },
  {
   "title": "Google の料金ページ",
   "url": "https://ai.google.dev/gemini-api/docs/pricing"
  },
  {
   "title": "xAI の料金ページ",
   "url": "https://docs.x.ai/developers/pricing"
  },
  {
   "title": "DeepSeek の料金ページ",
   "url": "https://api-docs.deepseek.com/quick_start/pricing"
  },
  {
   "title": "Mistral AI の料金ページ",
   "url": "https://docs.mistral.ai/inference/pricing"
  },
  {
   "title": "Cohere の料金ページ",
   "url": "https://cohere.com/pricing"
  },
  {
   "title": "Alibaba Cloud（Qwen） の料金ページ",
   "url": "https://www.alibabacloud.com/help/en/model-studio/model-pricing"
  },
  {
   "title": "Moonshot AI（Kimi） の料金ページ",
   "url": "https://platform.kimi.ai/docs/pricing/chat"
  },
  {
   "title": "Z.ai（GLM） の料金ページ",
   "url": "https://docs.z.ai/guides/overview/pricing"
  },
  {
   "title": "MiniMax の料金ページ",
   "url": "https://platform.minimax.io/docs/pricing/overview"
  },
  {
   "title": "AI21 Labs の料金ページ",
   "url": "https://www.ai21.com/pricing/"
  },
  {
   "title": "Meta の料金ページ",
   "url": "https://dev.meta.ai/docs/pricing-rate-limits"
  },
  {
   "title": "Amazon Bedrock の料金",
   "url": "https://aws.amazon.com/bedrock/pricing/"
  },
  {
   "title": "Azure OpenAI（Microsoft Foundry）の料金",
   "url": "https://azure.microsoft.com/en-us/pricing/details/azure-openai/"
  },
  {
   "title": "Google Cloud Vertex AI の料金",
   "url": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
  },
  {
   "title": "ChatGPT の料金",
   "url": "https://chatgpt.com/pricing"
  },
  {
   "title": "Claude の料金",
   "url": "https://claude.com/pricing"
  },
  {
   "title": "Google AI のプラン",
   "url": "https://gemini.google/us/subscriptions/?hl=en"
  },
  {
   "title": "OpenAI の料金ページ（2021-12-04 の Internet Archive）",
   "url": "https://web.archive.org/web/20211204021218/https://openai.com/api/pricing/"
  }
 ]
};
