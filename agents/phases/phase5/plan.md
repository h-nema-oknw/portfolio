# Phase 5 実施方針 — 最終検証

作成日: 2026-04-15
担当: エージェント（自律実行）

---

## フェーズの目標

`docs/phases.md` Phase 5 より:
> 成果物が仕様・ゴールを満たしていることを確認し、GitHub Pages 公開の判定を行う。

---

## 前フェーズ引き継ぎ事項の反映

Phase 4 レポートより:
- `renderer.js`・`animations.js`・`content.js`・`index.html`・`style.css` が完成済み
- `deploy.yml` はリポジトリルート（`/.github/workflows/deploy.yml`）に正しく配置済み
- GitHub URL（`https://github.com/h-nema-oknw`）・Email（`drunkhouse.k29h@gmai.com`）は設定済み
- `works[].url` は空文字列（後から設定）のまま
- `public/favicon.ico` は空ファイル
- `npm install` が `result/portfolio/` で実行済みかの確認が必要

---

## 検証タスクの分類

### A. エージェントが自律実行できるもの（CLI・コードレビュー）

| # | タスク | 手法 |
|---|---|---|
| A1 | ローカルビルド確認 | `npm run build` を実行しエラーがないことを確認 |
| A2 | 全セクション HTML 照合 | `index.html` を仕様書（basic.md）と照合 |
| A3 | コンテンツデータ検証 | `content.js` の全フィールドを仕様書と照合 |
| A4 | deploy.yml 正確性確認 | 仕様書 Section 5 の設定値と完全照合 |
| A5 | アニメーション設定値確認 | `animations.js` の仕様値（ease・duration・stagger等）を照合 |
| A6 | Three.js 設定値確認 | `particles.js` の仕様値（パーティクル数・サイズ等）を照合 |
| A7 | レスポンシブ CSS 確認 | `style.css` の `@media` ブレークポイントを確認 |
| A8 | ダークモード CSS 確認 | CSS カスタムプロパティのライト/ダーク両対応を確認 |
| A9 | SEO / OGP メタ情報確認 | 仕様書 Section 6 の値と照合 |
| A10 | アクセシビリティ確認 | `aria-label`・`aria-hidden`・`alt` 属性の付与状況確認 |
| A11 | ゴール・KPI 達成確認 | requirements.md のゴール・失敗定義に対して照合 |
| A12 | 発見した問題の修正 | A1〜A11 で発見した問題を修正（`result/` 配下のみ） |

### B. 人間が実施すべきもの（ブラウザ・デプロイ確認）

| # | タスク | 理由 |
|---|---|---|
| B1 | Three.js パーティクル・GSAP 動作確認 | ブラウザの視覚確認が必要 |
| B2 | ダークモード切替の目視確認 | ブラウザの視覚確認が必要 |
| B3 | PC・タブレット・スマートフォンのレスポンシブ目視確認 | 実機 / DevTools による確認が必要 |
| B4 | Chrome・Firefox・Safari・Edge クロスブラウザ確認 | 各ブラウザが必要 |
| B5 | デプロイ実施 | `result/portfolio/dist/` の中身を `D:\個人用\プライベート\Develop\portfolio\` にコピーし commit + push |
| B6 | 公開 URL での表示確認 | デプロイ完了後に `https://h-nema-oknw.github.io/portfolio/` にアクセス |

---

## 実施方針（A1〜A12）

### A1 — ビルド検証

`npm run build` を `result/portfolio/` で実行し、exit code 0 を確認する。
エラーがあれば原因を特定して修正する。

### A2〜A10 — コードレビュー

仕様書（`docs/spec/detail.md`）の各セクションと成果物を 1:1 で照合する。
不一致・漏れ・ミスがあれば即座に修正する。

### A11 — ゴール達成確認

`docs/requirements.md` の以下を確認する:
- 最重要ゴール: GitHub Pages で公開可能な状態か
- 失敗定義 3 件に抵触していないか

### A12 — 問題修正

A1〜A11 で発見した問題を `result/` 配下のファイルに対して修正する。

---

## 仕様値メモ（docs/spec/detail.md より）

### カラーパレット
- `--bg`: `#050505` / `--gold`: `#C9A35A` / `--terra`: `#C17F59` / `--olive`: `#7A8B5A`

### アニメーション設定値
- GSAP ease: `power4.out`
- Hero テキストリビール duration: `1.0s`、stagger: `0.12s`
- スクロール fade-in: `0.8s`
- スキルバー: `1.5s`、ease: `power2.out`
- カード 3D tilt: `±14deg`
- マーキー: `22s`、repeat: `-1`

### Three.js 設定値
- パーティクル数: `2000`
- 分布: X: ±10, Y: ±10, Z: ±7.5
- カメラ Z: `5`
- サイズ: `0.04`（sizeAttenuation: true）
- 不透明度: `0.55`

### デプロイ設定
- Vite base: `/portfolio/`
- publish_dir: `result/portfolio/dist`
- working-directory: `result/portfolio`

---

## 注意事項・リスク

- `works[].url` が空文字列のまま → 仕様に「後から設定」とあるため許容
- `favicon.ico` が空ファイル → 同上
- エージェントは `main` に直接 push しない。GitHub Actions 実行確認（B5）はユーザーが行う
- B1〜B6 の目視確認はエージェントが代替できないため、最終レポートに「ユーザー確認事項」として明記する
