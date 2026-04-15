---
name: git-policy
description: エージェントの git 操作レベルを確認・変更する。config/git-policy.md と .claude/settings.json を同期して更新する。
---

# /git-policy — Git 操作ポリシー管理

`config/git-policy.md`（ポリシー記録）と `.claude/settings.json`（allowedTools の実体）を同期して更新します。

## 操作レベルの定義

| レベル | 名称 | Claude の操作 | 人間の操作 |
|---|---|---|---|
| **0** | 禁止 | ファイル編集のみ | コミット・プッシュ・PR・マージ全部 |
| **1** | コミットのみ（試験運用） | フェーズ完了後にコミット | プッシュ・PR作成・マージ |
| **2** | PR作成まで（本運用） | コミット＋プッシュ＋最終フェーズ後にPR作成 | レビュー＆マージ |

---

## 禁止事項

- `config/git-policy.md` と `.claude/settings.json` 以外のファイルを編集しない
- main への直接プッシュ・force push の許可設定を追加しない
- git 操作（コミット・プッシュ）は行わない

---

## 実行手順

---

### Step 1 — 現在の設定を読み込む

`config/git-policy.md` を読み込んで現在のレベルを確認する。

**ファイルが存在しない場合：**

```
## Git 操作ポリシー — 現在の設定

設定ファイル（config/git-policy.md）が見つかりませんでした。
デフォルト設定（レベル 0: 禁止）が適用されています。
```

**ファイルが存在する場合：**

```
## Git 操作ポリシー — 現在の設定

| 項目 | 値 |
|---|---|
| 操作レベル | [0: 禁止 / 1: コミットのみ / 2: PR作成まで] |
| コミット | [- / 許可 / 許可] |
| プッシュ（作業ブランチ） | [- / - / 許可] |
| PR 作成（最終フェーズ後） | [- / - / 許可] |
| main への直接プッシュ | 禁止（変更不可） |
| force push | 禁止（変更不可） |
| 最終更新 | [更新日] |
```

---

### Step 2 — 変更メニューを表示する

```
## 変更しますか？

1. レベル 0（禁止）に変更          — コミット・プッシュはすべて人間が手動
2. レベル 1（コミットのみ）に変更   — フェーズ完了時に自動コミット、プッシュ・PRは手動 ★試験運用向け
3. レベル 2（PR作成まで）に変更    — 自動コミット＋プッシュ＋最終フェーズ後にPR作成 ★本運用向け
4. 変更せずに終了

番号を入力してください。
```

---

### Step 3 — 設定を保存する

選択に応じて `config/git-policy.md` と `.claude/settings.json` の**両方を更新**する。

---

#### 「1」を選択した場合（レベル 0: 禁止）

**`config/git-policy.md`** に書き込む：

```markdown
# Git 操作ポリシー

このファイルはエージェントの git 操作レベル設定です。
`/git-policy` スキルでいつでも変更できます。

## 操作レベル

| 項目 | 値 |
|---|---|
| **操作レベル** | **0: 禁止** |
| コミット | - |
| プッシュ（作業ブランチ） | - |
| PR 作成（最終フェーズ後） | - |
| main への直接プッシュ | 禁止（変更不可） |
| force push | 禁止（変更不可） |

## 最終更新

| 更新日 | 更新元 |
|---|---|
| [今日の日付] | git-policy スキル |
```

**`.claude/settings.json`** に書き込む：

```json
{
  "allowedTools": [
    "Bash(git status)",
    "Bash(git branch --show-current)"
  ]
}
```

完了メッセージ：

```
## 更新完了 — レベル 0（禁止）

git 操作レベルを「禁止」に変更しました。
コミット・プッシュはすべて人間が手動で行ってください。
次回のフェーズ実行（/run-phase）から反映されます。
```

---

#### 「2」を選択した場合（レベル 1: コミットのみ）

**`config/git-policy.md`** に書き込む：

```markdown
# Git 操作ポリシー

このファイルはエージェントの git 操作レベル設定です。
`/git-policy` スキルでいつでも変更できます。

## 操作レベル

| 項目 | 値 |
|---|---|
| **操作レベル** | **1: コミットのみ（試験運用）** |
| コミット | 許可 |
| プッシュ（作業ブランチ） | - |
| PR 作成（最終フェーズ後） | - |
| main への直接プッシュ | 禁止（変更不可） |
| force push | 禁止（変更不可） |

## コミット詳細

| 項目 | 値 |
|---|---|
| タイミング | Step 7（引き継ぎ記述）完了後 |
| 対象パス | `result/` `agents/phases/phase{N}/` `reports/phase{N}_report.md` `docs/phases.md` |
| メッセージ形式 | `phase{N}: [フェーズ名] 完了` |

## 最終更新

| 更新日 | 更新元 |
|---|---|
| [今日の日付] | git-policy スキル |
```

**`.claude/settings.json`** に書き込む：

```json
{
  "allowedTools": [
    "Bash(git status)",
    "Bash(git branch --show-current)",
    "Bash(git add result/*)",
    "Bash(git add agents/phases/*)",
    "Bash(git add reports/*)",
    "Bash(git add docs/phases.md)",
    "Bash(git add config/git-policy.md)",
    "Bash(git commit -m *)"
  ]
}
```

完了メッセージ：

```
## 更新完了 — レベル 1（コミットのみ）

git 操作レベルを「コミットのみ」に変更しました。
各フェーズの Step 7 完了後に自動コミットします。
プッシュ・PR作成は人間が手動で行ってください。
次回のフェーズ実行（/run-phase）から反映されます。
```

---

#### 「3」を選択した場合（レベル 2: PR作成まで）

**`config/git-policy.md`** に書き込む：

```markdown
# Git 操作ポリシー

このファイルはエージェントの git 操作レベル設定です。
`/git-policy` スキルでいつでも変更できます。

## 操作レベル

| 項目 | 値 |
|---|---|
| **操作レベル** | **2: PR作成まで（本運用）** |
| コミット | 許可 |
| プッシュ（作業ブランチ） | 許可 |
| PR 作成（最終フェーズ後） | 許可 |
| main への直接プッシュ | 禁止（変更不可） |
| force push | 禁止（変更不可） |

## コミット・プッシュ詳細

| 項目 | 値 |
|---|---|
| コミットタイミング | Step 7（引き継ぎ記述）完了後 |
| プッシュタイミング | コミット直後（各フェーズ） |
| 対象パス | `result/` `agents/phases/phase{N}/` `reports/phase{N}_report.md` `docs/phases.md` |
| メッセージ形式 | `phase{N}: [フェーズ名] 完了` |
| PR 作成タイミング | 最終フェーズの全 Step 完了後 |
| PR ベースブランチ | main |

## 最終更新

| 更新日 | 更新元 |
|---|---|
| [今日の日付] | git-policy スキル |
```

**`.claude/settings.json`** に書き込む：

```json
{
  "allowedTools": [
    "Bash(git status)",
    "Bash(git branch --show-current)",
    "Bash(git add result/*)",
    "Bash(git add agents/phases/*)",
    "Bash(git add reports/*)",
    "Bash(git add docs/phases.md)",
    "Bash(git add config/git-policy.md)",
    "Bash(git commit -m *)",
    "Bash(git push origin *)",
    "Bash(gh pr create *)"
  ]
}
```

完了メッセージ：

```
## 更新完了 — レベル 2（PR作成まで）

git 操作レベルを「PR作成まで」に変更しました。
各フェーズの Step 7 完了後に自動コミット＋プッシュします。
最終フェーズ完了後に PR を自動作成します（人間がレビュー＆マージ）。
次回のフェーズ実行（/run-phase）から反映されます。

⚠️  レベル 2 を使用する場合は GitHub のブランチ保護設定を確認してください。
   Settings → Branches → main に以下を設定すると安全です：
   - Require a pull request before merging
   - Require approvals: 1
   - Block force pushes
   詳細は /forge-help を参照してください。
```

---

#### 「4」を選択した場合

```
変更をキャンセルしました。設定は変更されていません。
```

---

## 注意事項

- `config/git-policy.md` が存在しない場合（Phase 1 未完了）でも「1〜3」を選択すると新規作成する
- `git push origin *` は作業ブランチへの push のみ許可する意図。main への直接 push は CLAUDE.md ルールと GitHub ブランチ保護で防ぐ
- 設定変更は即時反映される（.claude/settings.json の更新により次のコマンドから有効）
