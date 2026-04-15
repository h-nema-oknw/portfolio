# Phase 4 実施プラン — 全セクションコンテンツ実装

## フェーズ目標

`index.html` の静的ハードコードを解消し、`content.js` からの動的レンダリングに移行する。
また、Hero CTA ボタン・マーキー・GSAP 初期状態・タブレットレスポンシブを実装し、
Phase 4 の全タスクを完了させる。

---

## 引き継ぎ事項（Phase 3 からの持ち越し）

- `particles.js`・`animations.js`・`darkMode.js` は Phase 2 の時点で全実装済み（Phase 3 スキップ）
- マーキーのみ未実装として持ち越し
- `animations.js` はアニメーション先（to）を定義しているが、初期状態（from）が CSS に設定されていない要素がある
  → `s-label`・`card-3d`・`about-p`・`terminal`・`career-item`・`sk-row`・`work-item`・`link-card` に初期 y/x をセットする必要あり

---

## 各タスクの実施方針

### タスク 1 — ナビゲーション（スムーススクロール）

**方針**: `html { scroll-behavior: smooth; }` が style.css に既に定義済みのためネイティブスムーススクロールで対応済み。
追加 JS 実装は不要。

### タスク 2 — Hero セクション（CTA ボタン追加）

**方針**:
- `animations.js` が `.hero-cta` を参照しているが `index.html` に存在しない（バグ）
- style.css に `.hero-cta`・`.btn`・`.btn-glow`・`.btn-ghost` は定義済み
- `index.html` の `.hero-desc` 直後に以下を追加：
  ```html
  <div class="hero-cta">
    <a href="#works" class="btn btn-glow">View Works →</a>
    <a href="#about" class="btn btn-ghost">About Me</a>
  </div>
  ```

### タスク 3 — 動的レンダリング（content.js → HTML）

**仕様**（docs/spec/detail.md Section 4）:
> コンテンツは `content.js` に集約し、HTML への埋め込みは JS で動的生成する

**方針**:
- `src/modules/renderer.js` を新規作成
- 以下の 4 セクションをレンダリング対象とする：
  - **Skills**: `.skills-list` を content.js `skills` から生成
  - **Career**: `.career-list` と `.quals` を `career`・`qualifications` から生成
  - **Works**: `.works-list` を `works` から生成
  - **Links**: `.links-grid` を `links` から生成
- `index.html` の該当セクション内の静的 HTML を空のコンテナ div に置換
- `main.js` の DOMContentLoaded 内で `initRenderer()` を呼び出す

### タスク 4 — About セクション（現状維持）

**方針**: 自己紹介文・ターミナル・数値カードは人物固有のコンテンツでデータ化する意義が低い。
`index.html` の現行 HTML をそのまま使用する。

### タスク 5 — content.js への大学エントリ追加

**方針**: `index.html` の career には大学（2009.04—2013.03）が含まれているが `content.js` にない。
動的レンダリングへの移行前に `content.js` に追加する。

### タスク 6 — マーキー実装

**仕様**（docs/spec/detail.md Section 3）:
> マーキー speed: `22s`（GSAP repeat: -1）

**方針**:
- `index.html` の `#skills` セクション内、`.skills-list` の上部に `.marquee-wrap` を追加
- スキル名（content.js の skills.name）を内容とする2連複製要素で無限ループ
- GSAP `gsap.to(track, { x: '-50%', duration: 22, ease: 'none', repeat: -1 })` で実装
- スタイルは style.css に追加

### タスク 7 — GSAP 初期状態セットアップ

**方針**: `animations.js` は `gsap.to()` で要素をアニメーションさせているが、
一部の要素は CSS に初期 transform が設定されておらず slide 効果が発動しない。
`animations.js` に `gsap.set()` ブロックを追加：

| セレクタ | 初期状態 |
|---|---|
| `.s-label` | `{ x: -20, opacity: 0 }` |
| `.card-3d` | `{ y: 30, opacity: 0 }` |
| `.about-p` | `{ y: 20, opacity: 0 }` |
| `.terminal` | `{ y: 20, opacity: 0 }` |
| `.career-item` | `{ y: 20, opacity: 0 }` |
| `.quals` | `{ y: 20, opacity: 0 }` |
| `.sk-row` | `{ x: -20, opacity: 0 }` |
| `.work-item` | `{ x: -20, opacity: 0 }` |
| `.link-card` | `{ y: 20, opacity: 0 }` |

※ `hero-*` 要素は CSS に `opacity: 0` のみ設定（GSAP timeline から開始するため set 不要）

### タスク 8 — ダークモード切替ロジック

**状態**: `src/modules/darkMode.js` は Phase 2 で実装済み。追加作業なし。

### タスク 9 — レスポンシブ対応

**方針**:
- style.css に `@media (max-width: 768px)` は実装済み
- タブレット対応として `@media (max-width: 1024px)` ブレークポイントを追加：
  - container padding 縮小
  - `.sk-row` grid 調整
  - `.about-body` grid 調整
  - `.career-item` grid 調整

---

## 仕様値参照（docs/spec/detail.md）

| 項目 | 値 |
|---|---|
| マーキー speed | `22s`（GSAP repeat: -1） |
| カラー `--gold` | `#C9A35A` |
| カラー `--terra` | `#C17F59` |
| カラー `--muted` | `#6A6560` |
| フォント mono | `Space Mono` |

---

## 制約・注意事項

- `result/` 配下のみにファイルを作成・編集する
- `docs/spec/detail.md` に記載のない技術・ライブラリは使用しない
- `docs/requirements.md`・`docs/spec/basic.md`・`docs/spec/detail.md` は編集しない
- git 操作は行わない

---

## 作成・編集ファイル一覧

| ファイル | 操作 |
|---|---|
| `result/portfolio/index.html` | 編集（CTA ボタン追加、動的レンダリング対象セクションをコンテナに変更、マーキー HTML 追加） |
| `result/portfolio/src/data/content.js` | 編集（career に大学エントリ追加） |
| `result/portfolio/src/modules/renderer.js` | 新規作成（動的レンダリング関数群） |
| `result/portfolio/src/modules/animations.js` | 編集（gsap.set 初期状態追加、マーキー GSAP 追加） |
| `result/portfolio/src/main.js` | 編集（renderer.js の initRenderer 呼び出し追加） |
| `result/portfolio/src/style.css` | 編集（マーキー CSS・タブレット breakpoint 追加） |
