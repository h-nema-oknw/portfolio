# FORGE — フレームワーク使用ガイド

**F**ramework for **O**rganized, **R**eviewed, **G**oal-driven **E**xecution

Claude Code を使ったエージェント駆動開発フレームワーク。  
要件定義から最終検証まで、AI が自律的にフェーズを実行・評価・改善しながらシステムを完成させる。

---

## 特徴

- **汎用** — WEBサイト・業務システム・API・CLIツールなど、あらゆるシステム開発に対応
- **自己評価ループ** — エージェントが成果物を採点し、80点未満なら自動修正して再評価
- **フェーズ構成が動的** — Phase 1 の要件定義結果に基づいてフェーズ数・内容が決まる
- **ゴール駆動** — KPI・成功基準・失敗定義を Phase 1 で明確化し、最終検証で照合
- **再現性** — `.claude/` と `CLAUDE.md` を置くだけで同じフローを別プロジェクトで再現できる

---

## クイックスタート

```bash
# 1. フレームワークファイルをプロジェクトにコピー
cp -r /path/to/FORGE/.claude  ./
cp /path/to/FORGE/CLAUDE.md   ./

# 2. Claude Code で初期化
/init

# 3. 要件定義インタビュー（対話形式）
/phase1-interview

# 4. Phase 2〜最終フェーズをノンストップで自律実行
/run-all
```

---

## コマンド一覧

| コマンド | 説明 |
|---|---|
| `/init` | 標準ディレクトリ構成を作成し、フレームワークを初期化する |
| `/phase1-interview` | アンケート形式で要件定義・仕様書・工程計画・git ポリシーを設定する |
| `/run-phase [N]` | 指定フェーズを単体で自律実行する（省略時は最初の未着手フェーズ） |
| `/run-all` | Phase 2〜最終フェーズをノンストップで順次自律実行する |
| `/git-policy` | エージェントの git コミットポリシーを確認・変更する |
| `/forge-help` | このガイドを表示する |

---

## フェーズ構成

```
Phase 1     固定  要件定義・仕様策定・工程計画・git ポリシー設定   /phase1-interview
Phase 2     動的  プロトタイプ・MVP 作成                          /run-phase 2
Phase 3〜N-1 動的  実装・調整（プロジェクト規模に応じて増減）
Phase N     固定  最終検証・納品判定                             /run-phase N
```

Phase 1 と最終検証フェーズは必須。中間フェーズは Phase 1 の結果によって自動設計される。

---

## ディレクトリ構成

```
プロジェクトルート/
├── CLAUDE.md                  フレームワーク設定（固定・編集禁止）
├── README.md                  プロジェクト固有の説明（自由記述）
├── help.md                    FORGEフレームワーク使用ガイド（このファイル）
├── .claude/
│   └── skills/
│       ├── init/              /init スキル
│       ├── phase1-interview/  /phase1-interview スキル
│       ├── run-phase/         /run-phase スキル
│       ├── run-all/           /run-all スキル
│       ├── git-policy/        /git-policy スキル
│       └── forge-help/        /forge-help スキル
│
├── agents/
│   ├── criteria.md            評価指標（固定・編集禁止）
│   └── phases/
│       └── phase{N}/
│           ├── plan.md        エージェントが生成する実施方針
│           └── task.md        エージェントが生成するタスク指示
│
├── config/
│   └── git-policy.md          git コミットポリシー設定（/git-policy で管理）
│
├── docs/
│   ├── refs/                  参考資料置き場（Phase 1 前に配置）
│   ├── requirements.md        要件定義書        ┐
│   ├── spec/                                   │ Phase 1 で生成
│   │   ├── basic.md           基本仕様書        │ 以降は読み取り専用
│   │   └── detail.md          詳細仕様書        ┘
│   └── phases.md              工程計画・進捗管理
│
├── result/                    成果物（Phase 2 以降で生成）
└── reports/                   フェーズ実行レポート
```

---

## Phase 1 で生成されるファイル

| ファイル | 内容 |
|---|---|
| `config/git-policy.md` | git コミットポリシー設定（許可 / 禁止） |
| `docs/requirements.md` | 要件・非要件・ゴール・KPI・失敗定義・ターゲット・参考資料 |
| `docs/spec/basic.md` | システム概要・機能一覧・画面構成・システム構成図 |
| `docs/spec/detail.md` | 技術スタック・仕様値・データ設計・API仕様・コーディング規約 |
| `docs/phases.md` | フェーズ定義・タスク一覧・進捗状態 |

`docs/` 配下のファイルは **Phase 2 以降のエージェントによる書き込みを禁止**する。

---

## Phase 1 インタビューの流れ

```
Step 0-R   docs/refs/ の参考資料を読み込み・外部URLを取得・分析
Step A-1   プロジェクト基本情報
Step A-1-G ゴール設定の明確化（KPI・成功基準・失敗定義）
Step A-2   ターゲット・ユーザー
Step A-3   機能要件・非機能要件
Step A-4   デザイン・UX（UI がある場合）
Step A-5   技術的制約・環境・コーディング規約
Step A-6   git コミットポリシー（許可 / 禁止 を選択）
Step B-1   技術スタックを 2〜3 案提案
Step B-2   技術スタック合意
Step C-0   config/git-policy.md を生成
Step C-1〜4 docs/ 配下の 4ファイルを生成
```

---

## 自己評価ループ（各フェーズ共通）

```
plan.md 作成
    ↓
Stage 1 採点（100点満点）
    ├─ ≥80点 → task.md 作成 → タスク実行
    └─ <80点 → 改善 → 再採点（最大5回）
                              ↓
                        Stage 2 採点（100点満点）
                            ├─ ≥80点 → レポート出力 → 次フェーズへ
                            └─ <80点 → 改善 → 再採点（最大5回）
```

---

## git 操作ポリシー

操作レベルは Phase 1 のインタビューで設定し、`config/git-policy.md` と `.claude/settings.json` に保存される。  
後から変更したい場合は `/git-policy` スキルを使う。

| レベル | 名称 | Claude の操作 | 人間の操作 |
|---|---|---|---|
| **0** | 禁止 | ファイル編集のみ | コミット・プッシュ・PR・マージ全部 |
| **1** | コミットのみ（試験運用） | Step 7 完了後にコミット | プッシュ・PR作成・マージ |
| **2** | PR作成まで（本運用） | コミット＋プッシュ＋最終フェーズ後にPR作成 | レビュー＆マージ |

- コミットタイミング：Step 7（引き継ぎ記述）完了後
- PR 作成タイミング：最終フェーズの全 Step 完了後（1プロジェクト1PR）
- `main` への直接プッシュ・force push は全レベルで**禁止**
- `main` ブランチでの実行は全レベルで**禁止**

---

## GitHub ブランチ保護の設定（レベル 2 使用時は必須）

レベル 2（PR作成まで）を使用する場合は、GitHub 側で以下を設定すること。  
これにより、Claude が誤って main に push しようとしても GitHub 側でブロックされる（最終防衛ライン）。

```
リポジトリ → Settings → Branches → Add branch ruleset

対象: main
有効化する項目:
  ✅ Require a pull request before merging（PR必須）
  ✅ Require approvals: 1（1名以上のレビュー必須）
  ✅ Block force pushes（force push 禁止）
  ✅ Do not allow bypassing the above settings
```

---

## ルール・制約

- `main` ブランチでの実行は禁止（必ず作業用ブランチを切ること）
- 成果物は `result/` 配下にのみ作成
- Phase 1 生成ファイル（`docs/requirements.md`・`docs/spec/`）は Phase 2 以降で書き込み禁止
- `config/git-policy.md` と `.claude/settings.json` の更新は `/git-policy` スキル経由のみ許可
- main への直接プッシュ・force push は常に禁止（全レベル共通）

---

## 新規プロジェクトへの適用手順

1. このリポジトリから `.claude/` フォルダ・`CLAUDE.md`・`help.md` をコピーする
2. 新プロジェクトのルートに配置する
3. Claude Code を開いて `/init` を実行する
4. `/phase1-interview` で要件定義・git ポリシーを設定する
5. `/run-all` で実装〜最終検証まで自律実行する
6. プロジェクト固有の説明を `README.md` に記述する
