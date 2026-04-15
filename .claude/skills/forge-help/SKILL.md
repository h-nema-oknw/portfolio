---
name: forge-help
description: FORGE フレームワークの使い方ガイド（help.md）を表示する
---

# /forge-help — FORGE フレームワーク使用ガイドの表示

`help.md` を読み込んで内容をそのまま表示する。

---

## 実行手順

### Step 1 — help.md を読み込む

プロジェクトルートの `help.md` を読み込む。

**ファイルが存在する場合：**
読み込んだ内容をそのまま表示する。追加の解説・要約・省略は行わない。

**ファイルが存在しない場合：**

```
help.md が見つかりませんでした。

FORGE フレームワークのファイルが正しくコピーされているか確認してください。
- 必要なファイル: CLAUDE.md / help.md / .claude/skills/
- 参照: https://github.com/OIS-h-nema/FORGEwithClaude
```

---

## 禁止事項

- `help.md` の内容を要約・省略しない（全文をそのまま表示する）
- `help.md` を編集しない（読み取り専用）
- 表示以外の処理（ファイル生成・git 操作等）を行わない
