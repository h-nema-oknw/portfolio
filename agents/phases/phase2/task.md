# Phase 2 タスク指示書 — プロジェクト基盤構築

## 禁止事項（必ず守ること）

- npm install・npm create・git コマンドは実行しない
- `result/portfolio/` 以外にファイルを作成しない
- `docs/spec/detail.md` に記載のない技術・設定値を使用しない
- `docs/` ファイル（phases.md 除く）を編集しない

---

## タスク 1: ディレクトリ構造の作成

以下のディレクトリを作成する（ファイルは後続タスクで作成）：

```
result/portfolio/
result/portfolio/src/
result/portfolio/src/modules/
result/portfolio/src/data/
result/portfolio/public/
result/portfolio/public/images/
result/portfolio/public/images/works/
result/portfolio/.github/
result/portfolio/.github/workflows/
```

---

## タスク 2: package.json の作成

`result/portfolio/package.json` を以下の内容で作成する：

```json
{
  "name": "portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "gsap": "^3.12.0",
    "three": "^0.164.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

---

## タスク 3: vite.config.js の作成

`result/portfolio/vite.config.js` を以下の内容で作成する：

```js
export default {
  base: '/portfolio/',
}
```

---

## タスク 4: GitHub Actions deploy.yml の作成

`result/portfolio/.github/workflows/deploy.yml` を以下の内容で作成する（仕様書 Section 5 に完全準拠）：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm ci

      - run: npm run build

      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## タスク 5: src/style.css の作成

`result/portfolio/src/style.css` を作成する。以下の仕様値を正確に使用すること。

### カラーパレット（docs/spec/detail.md Section 3 より）

```css
:root {
  --bg: #050505;
  --bg2: #0C0C0C;
  --bg-light: #F2EDE3;
  --bg2-light: #EBE4D8;
  --text: #EDE8E0;
  --muted: #6A6560;
  --gold: #C9A35A;
  --terra: #C17F59;
  --olive: #7A8B5A;
  --border: rgba(201, 163, 90, 0.15);
}
```

### 含める要素

1. CSS リセット（box-sizing・margin・padding）
2. body スタイル（背景・テキスト・フォント）
3. スキャンライン（`body::before`）: repeating-linear-gradient、2px 間隔、opacity: 0.06
4. ノイズ（`body::after`）: SVG feTurbulence data URI、baseFrequency: 0.9、opacity: 0.5
5. フォント変数（Space Grotesk・Space Mono）
6. セクション共通スタイル（padding・max-width: 1200px）
7. ナビゲーション基本スタイル（fixed・top: 0・z-index: 100）
8. ダークモード対応（`[data-theme="light"]` セレクタで bg/bg2/text を切替）
9. スクロールバースタイル
10. ユーティリティクラス（`.section-title`・`.container`・`.visually-hidden`）

---

## タスク 6: index.html の作成

`result/portfolio/index.html` を作成する。

### 必須要素（docs/spec/detail.md Section 6 より）

- `<html lang="ja">`
- `<title>Daiki Nema — Full-Stack Engineer</title>`
- meta description: `沖縄拠点のフルスタックエンジニア、根間大輝のポートフォリオ。VBA・PHP・SQL Server・AI活用など`
- OGP: `og:title = "Daiki Nema — Portfolio"`、`og:description` = 上記と同一
- Google Fonts preconnect + stylesheet（Space Grotesk 300/400/500/600/700・Space Mono 400/700）
- `<link rel="stylesheet" href="/src/style.css">`（← Vite dev では `/src/` 、build では解決される）
- `<link rel="icon" href="/portfolio/favicon.ico">`

### セクション構造

```html
<nav id="nav"> ... </nav>
<main>
  <section id="hero"> ... </section>
  <section id="about"> ... </section>
  <section id="skills"> ... </section>
  <section id="career"> ... </section>
  <section id="works"> ... </section>
  <section id="links"> ... </section>
</main>
<footer> ... </footer>
<script type="module" src="/src/main.js"></script>
```

各セクションは骨格のみ（Phase 3・4 で内部実装）。ただし：
- nav にはロゴ・セクションリンク（Hero/About/Skills/Career/Works/Links）・ダークモードトグルボタンを含める
- hero には `.hero-canvas`（Three.js 用）・グリッチ見出し（氏名）・肩書き・CTA ボタンのプレースホルダーを含める
- footer には `© 2024 Daiki Nema. All rights reserved.` を含める

---

## タスク 7: src/main.js の作成

`result/portfolio/src/main.js` を作成する。Phase 3 で実装する各モジュールの import スタブを含める：

```js
import './style.css';
import { initParticles } from './modules/particles.js';
import { initAnimations } from './modules/animations.js';
import { initDarkMode } from './modules/darkMode.js';

// Phase 3・4 で実装
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initParticles();
  initAnimations();
});
```

---

## タスク 8: src/modules/ スタブファイルの作成

### particles.js

```js
// Phase 3 で実装: Three.js パーティクル背景
// 設定値: パーティクル数 2000、カメラ Z=5、サイズ 0.04、不透明度 0.55
export function initParticles() {
  // TODO: Phase 3 で実装
}
```

### animations.js

```js
// Phase 3 で実装: GSAP アニメーション
// ease: power4.out / ヒーロー duration: 1.0s stagger: 0.12s / スクロール: 0.8s
export function initAnimations() {
  // TODO: Phase 3 で実装
}
```

### darkMode.js

```js
// Phase 4 で実装: ダークモード切替
export function initDarkMode() {
  const toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;
  const html = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);
  toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}
```

---

## タスク 9: src/data/content.js の作成

`result/portfolio/src/data/content.js` を作成する（docs/spec/detail.md Section 4 に完全準拠）：

- `profile`・`stats`・`skills`・`career`・`works`・`links` を export する
- スキルデータは仕様書記載の 6 項目を使用
- キャリアは仕様書サンプルデータ（沖縄情報システム株式会社、2018.02 — Present）を使用
- works・links の url は空文字列（後から設定）

---

## タスク 10: プレースホルダー画像の配置

以下のプレースホルダーを作成する（SVG 形式で実装）：

- `result/portfolio/public/images/profile.jpg` — 400×400 の SVG プレースホルダー（.jpg 拡張子だが SVG 内容）
  ※ 後から実際の画像に差し替えること
- `result/portfolio/public/images/logo.svg` — SVG ロゴプレースホルダー
- `result/portfolio/public/images/works/work-01.jpg` — 800×450 の SVG プレースホルダー
- `result/portfolio/public/favicon.ico` — 最小限のプレースホルダー（空ファイルで可）

---

## タスク 11: 成果物の確認

全ファイルが作成されたことを確認する（ファイル一覧を取得して確認）。
