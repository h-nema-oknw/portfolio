# Phase 2 実施プラン — プロジェクト基盤構築

## フェーズ目標

Vite プロジェクトを `result/portfolio/` に初期化し、GitHub Actions デプロイ環境を整え、
デザイントークン（CSS カスタムプロパティ）・グローバルスタイル・index.html 骨格・
コンテンツデータファイルを構築する。

---

## 前フェーズからの引き継ぎ事項

Phase 1 の report は存在しないため（Phase 1 はインタラクティブに完了）、引き継ぎ事項なし。  
`result/` 配下には Phase 1 のサンプルファイル（`sample-case1.html`・`sample-case2.html`）が存在するが、
Phase 2 成果物は `result/portfolio/` に格納するため干渉しない。

---

## タスク一覧と実施方針

### 1. Vite プロジェクト初期化（`result/portfolio/`）

- `result/portfolio/` ディレクトリを作成し、Vite + Vanilla JS 構成のファイル群を手動生成する
- **npm install は実行しない**（ファイル作成のみ。人間が手動で実行する）
- `npm create vite` は CI 環境では使用できないため、必要ファイルを直接作成する

### 2. package.json・vite.config.js の設定

- `package.json` に必要な依存パッケージを記載（`three@^0.164.0`・`gsap@^3.12.0`）
- `vite.config.js` に `base: '/portfolio/'` を設定（GitHub Pages のサブパス対応）

### 3. GitHub Actions デプロイワークフロー作成（deploy.yml）

- `result/portfolio/.github/workflows/deploy.yml` を作成
- `main` ブランチ push 時に `npm ci → npm run build → peaceiris/actions-gh-pages@v3` を実行
- node-version: 20 を使用
- `docs/spec/detail.md` セクション 5 の仕様に完全準拠

### 4. CSS カスタムプロパティ定義

- `result/portfolio/src/style.css` に `:root` でカラー変数を定義
- `docs/spec/detail.md` セクション 3「カラーパレット」の全変数を正確に使用：
  - `--bg: #050505`、`--bg2: #0C0C0C`、`--bg-light: #F2EDE3`、`--bg2-light: #EBE4D8`
  - `--text: #EDE8E0`、`--muted: #6A6560`
  - `--gold: #C9A35A`、`--terra: #C17F59`、`--olive: #7A8B5A`
  - `--border: rgba(201,163,90,0.15)`
- アニメーション設定もカスタムプロパティ化（`--ease-default`・`--duration-scroll` 等）

### 5. グローバルスタイル・リセット CSS の作成

- CSS リセット（box-sizing・margin・padding）
- body にスキャンライン（`body::before`）・ノイズ（`body::after`）エフェクトを実装
  - スキャンライン: `repeating-linear-gradient`（2px 間隔、opacity: 0.06）
  - ノイズ: SVG feTurbulence（baseFrequency: 0.9, opacity: 0.5）
- セクション共通スタイル（padding・max-width）
- ナビゲーション基本スタイル
- フォント設定（Space Grotesk / Space Mono）

### 6. index.html の骨格作成（セクション構造・SEO メタ情報）

- `lang="ja"`、`<title>Daiki Nema — Full-Stack Engineer</title>`
- meta description・OGP タグを `docs/spec/detail.md` セクション 6 の値で設定
- Google Fonts（Space Grotesk 300/400/500/600/700・Space Mono 400/700）を `<link>` で読み込み
- セクション骨格: `<nav>`・`#hero`・`#about`・`#skills`・`#career`・`#works`・`#links`・`<footer>`
- `<script type="module" src="/src/main.js">` でエントリポイントを接続

### 7. フォント（Space Grotesk / Space Mono）の導入

- index.html の `<head>` に Google Fonts の `<link>` タグを記述（preconnect 含む）
- style.css の `font-family` に反映

### 8. コンテンツデータファイル作成（`src/data/content.js`）

- `docs/spec/detail.md` セクション 4 の仕様に完全準拠
- `profile`・`skills`・`career`・`works`・`links` の各オブジェクトをエクスポート
- スキルデータは仕様記載の 6 項目を使用（VBA/Access 8年 95%・T-SQL 8年 90% など）
- キャリアデータは職務経歴書（`docs/refs/職務経歴書_根間様.pdf`）の内容から生成
  - ※ PDF 参照が困難な場合は仕様書記載のサンプルデータのみ使用し、後から更新する設計を明示

### 9. プレースホルダー画像の配置（profile・logo・works）

- `result/portfolio/public/images/` ディレクトリを作成
- `result/portfolio/public/images/works/` ディレクトリを作成
- プレースホルダーとして各画像パスに対応した SVG または空ファイルを配置
  - `profile.jpg`（SVG プレースホルダー）
  - `logo.svg`（SVG プレースホルダー）
  - `works/work-01.jpg`（SVG プレースホルダー）
- `favicon.ico`（空ファイルまたは最小限の ico）

---

## 注意事項・リスク

- **npm install は実行しない**: エージェントはファイル作成のみ。依存インストールは人間が手動実施。
- **git 操作は行わない**: コミット・プッシュは人間が実施。
- **docs/ ファイルは読み取り専用**: 編集不可（phases.md の Step 7 更新のみ例外）。
- `result/` 以外に成果物ファイルを作成しない。
- `docs/spec/detail.md` に記載のない技術・設定値を使用しない。
- 画像プレースホルダーは後から差し替えることを前提に、SVG でシンプルに実装する。
- `src/main.js` はモジュールエントリポイントとして最低限の初期化コードを記述し、
  Phase 3 以降の実装につなげるスタブを用意する。

---

## 成果物一覧（予定）

| ファイル | 内容 |
|---|---|
| `result/portfolio/index.html` | SEO メタ・全セクション骨格 |
| `result/portfolio/package.json` | 依存定義（three・gsap） |
| `result/portfolio/vite.config.js` | base: /portfolio/ |
| `result/portfolio/.github/workflows/deploy.yml` | GitHub Actions |
| `result/portfolio/src/style.css` | CSS トークン・グローバルスタイル |
| `result/portfolio/src/main.js` | エントリポイント（スタブ） |
| `result/portfolio/src/data/content.js` | コンテンツデータ |
| `result/portfolio/src/modules/particles.js` | Three.js スタブ |
| `result/portfolio/src/modules/animations.js` | GSAP スタブ |
| `result/portfolio/src/modules/darkMode.js` | ダークモードスタブ |
| `result/portfolio/public/images/profile.jpg` | SVG プレースホルダー |
| `result/portfolio/public/images/logo.svg` | SVG プレースホルダー |
| `result/portfolio/public/images/works/work-01.jpg` | SVG プレースホルダー |
| `result/portfolio/public/favicon.ico` | プレースホルダー |
