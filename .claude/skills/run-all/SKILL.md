---
name: run-all
description: Phase 2 から最終フェーズまでをノンストップで順番に自律実行する
---

# 全フェーズ一括実行

## 概要

`docs/phases.md` を読み込み、Phase 2 から最終フェーズまでを**人間の介入なしに順番に自律実行**する。

## 前提条件

以下がすべて揃っていること。揃っていない場合は中断してユーザーに通知する。

| 確認項目 | 確認方法 |
|---|---|
| Phase 1 完了済み | `docs/phases.md` が存在し、Phase 1 が【完了】 |
| 仕様書が存在する | `docs/requirements.md`・`docs/spec/basic.md`・`docs/spec/detail.md` が存在する |
| 作業ブランチ上にいる | `git branch --show-current` が `main` でない |

---

## 実行手順

### Step 0 — 前提確認

1. `git branch --show-current` でブランチを確認する。`main` の場合は即座に中断：
   > 現在 `main` ブランチ上にいます。作業用ブランチを切ってから再実行してください。

2. `docs/phases.md` を読み込む。存在しない場合は中断：
   > docs/phases.md が見つかりません。先に /phase1-interview を実行してください。

3. `docs/requirements.md`・`docs/spec/basic.md`・`docs/spec/detail.md` の存在を確認する。
   いずれかが存在しない場合は中断：
   > 仕様書が不足しています。先に /phase1-interview を完了させてください。

4. 実行対象フェーズの一覧を `docs/phases.md` から抽出する：
   - Phase 1 は除外する
   - 【完了】のフェーズは除外する（再実行しない）
   - 残ったフェーズを番号順に並べる

5. 実行計画を表示してユーザーに確認を求める：

```
## 実行計画

以下のフェーズを順番に実行します。

[Phase 2: フェーズ名]
[Phase 3: フェーズ名]
...
[Phase N: 最終検証]

途中でエラーが発生した場合は自動的に停止します。
開始してよいですか？（「OK」で実行開始）
```

ユーザーが承認したら Step 1 へ進む。

---

### Step 1 — フェーズの順次実行

対象フェーズを番号順に、以下のループで実行する。

**各フェーズの実行内容（`.claude/skills/run-phase/SKILL.md` と同じ手順）：**

#### 1. 仕様・引き継ぎの読み込み

- `docs/requirements.md`・`docs/spec/basic.md`・`docs/spec/detail.md`・`agents/criteria.md` を読み込む
- 直前フェーズの `reports/phase{N-1}_report.md` が存在すれば読み込む

#### 2. plan.md の作成と自己評価ループ（最大5回）

- `agents/phases/phase{N}/plan.md` を作成する
- `agents/criteria.md` の Stage 1 基準で採点（100点満点）
- スコア ≥ 80 → task.md 作成へ進む
- スコア < 80 → 改善して再評価（最大5回）
- 5回失敗 → **このフェーズで停止**（Step 2 へ）

#### 3. task.md の作成

- `agents/phases/phase{N}/task.md` を作成する

#### 4. タスクの実行

- `task.md` の手順を上から順に実行する
- 成果物はすべて `result/` 配下に作成・編集する
- `docs/spec/detail.md` の仕様値を正確に使用する

#### 5. 成果物の自己評価ループ（最大5回）

- `agents/criteria.md` の Stage 2 基準で採点（100点満点）
- スコア ≥ 80 → レポート出力へ進む
- スコア < 80 → 改善して再評価（最大5回）
- 5回失敗 → **このフェーズで停止**（Step 2 へ）

#### 6. レポート出力

- `reports/phase{N}_report.md` を出力する
- `docs/phases.md` の対象フェーズを【完了】に更新する

#### 7. Notion への進捗反映

- `docs/requirements.md` に記載された Notion ページに完了ステータスを反映する

---

### Step 2 — フェーズ失敗時の停止処理

いずれかのフェーズが合格スコアに達しなかった場合：

1. `reports/phase{N}_resume.md` を出力する（再開用プロンプト）：
   - 停止したフェーズ番号と理由
   - 完了済みフェーズの一覧
   - 未完了フェーズの一覧
   - 次回セッションで `/run-all` または `/run-phase {N}` で再開できる旨

2. 以下を表示して停止する：

```
## 実行停止

Phase {N}（フェーズ名）で合格スコアに達しませんでした。

完了済み: Phase 2〜{N-1}
未完了:   Phase {N}〜{最終}

reports/phase{N}_resume.md に再開用プロンプトを出力しました。
修正後、以下のコマンドで再開できます：
  /run-phase {N}   — 停止フェーズから再開
  /run-all         — 未完了フェーズをすべて再実行
```

---

### Step 3 — 全フェーズ完了時のメッセージ

すべてのフェーズが【完了】になった場合：

```
## 全フェーズ完了

すべてのフェーズが正常に完了しました。

完了フェーズ：
- Phase 2: [フェーズ名] ✓
- ...
- Phase N: 最終検証 ✓

成果物: result/
レポート: reports/

git commit でコードを保存してください。
```

---

## 禁止事項

- `docs/requirements.md`・`docs/spec/basic.md`・`docs/spec/detail.md`・`docs/refs/`・`agents/criteria.md` を編集しない（Phase 1 専用ファイル）
- `result/` 以外に成果物ファイルを作成しない
- git 操作（コミット・プッシュ）は行わない
- `main` ブランチ上での実行を行わない
