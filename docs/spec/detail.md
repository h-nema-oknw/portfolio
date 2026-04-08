# 根間大輝 ポートフォリオ — 詳細仕様書

## 1. 技術スタック

| 技術 / ツール | バージョン | 選定理由 |
|---|---|---|
| Vite | ^5.x | 高速ビルド・GitHub Pages 静的出力との相性◎ |
| JavaScript (ES Modules) | ES2022+ | 既存スキルで保守しやすい |
| Three.js | ^0.164.x | WebGL パーティクル背景 |
| GSAP | ^3.12.x | スクロールアニメーション・テキスト演出 |
| GSAP ScrollTrigger | ^3.12.x | スクロール連動アニメーション |
| Google Fonts | - | Space Grotesk / Space Mono |
| GitHub Pages | - | 静的ホスティング |
| GitHub Actions | - | 自動ビルド・デプロイ |

---

## 2. ディレクトリ構成（result/ 配下）

```
result/
└── portfolio/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml       GitHub Actions デプロイ設定
    ├── src/
    │   ├── main.js              エントリーポイント（Three.js + GSAP 初期化）
    │   ├── style.css            グローバルスタイル
    │   ├── modules/
    │   │   ├── particles.js     Three.js パーティクル背景
    │   │   ├── animations.js    GSAP アニメーション定義
    │   │   └── darkMode.js      ダークモード切替ロジック
    │   └── data/
    │       └── content.js       コンテンツデータ（経歴・スキル・実績等）
    └── public/
        ├── images/
        │   ├── profile.jpg      プロフ写真プレースホルダー
        │   ├── logo.svg         ロゴプレースホルダー
        │   └── works/           実績サムネイル
        └── favicon.ico
```

---

## 3. 仕様値・設定値

### カラーパレット

| 変数名 | 値 | 用途 |
|---|---|---|
| `--bg` | `#050505` | ページ背景（ダークモード） |
| `--bg2` | `#0C0C0C` | セクション背景（ダークモード） |
| `--bg-light` | `#F2EDE3` | ページ背景（ライトモード） |
| `--bg2-light` | `#EBE4D8` | セクション背景（ライトモード） |
| `--text` | `#EDE8E0` | メインテキスト |
| `--muted` | `#6A6560` | サブテキスト・ラベル |
| `--gold` | `#C9A35A` | メインアクセント（ウォームゴールド） |
| `--terra` | `#C17F59` | サブアクセント（テラコッタ） |
| `--olive` | `#7A8B5A` | サブアクセント（オリーブ） |
| `--border` | `rgba(201,163,90,0.15)` | ボーダー・区切り線 |

### フォント

| 用途 | フォント | ウェイト |
|---|---|---|
| 見出し・本文 | Space Grotesk | 300 / 400 / 500 / 600 / 700 |
| モノスペース（ラベル・コード風 UI） | Space Mono | 400 / 700 |

### アニメーション設定

| 項目 | 値 |
|---|---|
| GSAP デフォルト ease | `power4.out` |
| ヒーロー テキストリビール duration | `1.0s`（stagger: `0.12s`） |
| スクロール fade-in duration | `0.8s` |
| スキルバー width アニメーション | `1.5s`、ease: `power2.out` |
| カード 3D tilt 最大角度 | `±14deg` |
| マーキー speed | `22s`（GSAP repeat: -1） |
| グリッチ発動間隔 | `6s` 周期 |

### Three.js パーティクル設定

| 項目 | 値 |
|---|---|
| パーティクル数 | `2000` |
| 分布範囲 | X: ±10, Y: ±10, Z: ±7.5 |
| カメラ Z 位置 | `5` |
| パーティクルサイズ | `0.04`（sizeAttenuation: true） |
| 不透明度 | `0.55` |
| 回転速度 | Y: `0.12t`、X: `0.06t` |
| マウス影響度 | X: `0.3`、Y: `0.2` |
| スクロール カメラドリフト | `-scrollY * 0.003` |

### エフェクト

| エフェクト | 実装方法 |
|---|---|
| スキャンライン | `body::before` repeating-linear-gradient（2px 間隔、opacity: 0.06） |
| ノイズ | `body::after` SVG feTurbulence（baseFrequency: 0.9, opacity: 0.5） |
| グリッドオーバーレイ | Hero 内 `::before`（60px グリッド、radial-gradient マスク） |
| グリッチ | CSS animation + `::before`/`::after` 擬似要素（6s 周期） |
| スクロールインジケーター | `@keyframes scroll-pulse` 2s infinite |
| ナビドット | `@keyframes pulse` 2s infinite（box-shadow 拡散） |

---

## 4. コンテンツデータ仕様（`src/data/content.js`）

コンテンツは `content.js` に集約し、HTML への埋め込みは JS で動的生成する。

```js
export const profile = {
  name: { en: 'Daiki Nema', ja: '根間 大輝' },
  title: 'Full-Stack Engineer',
  location: 'Okinawa, JP',
  email: '',          // 後から設定
  github: '',         // 後から設定
  description: '...'
};

export const skills = [
  { name: 'VBA / Access', category: 'BACKEND',  years: 8, level: 95 },
  { name: 'T-SQL / SQL Server', category: 'DATABASE', years: 8, level: 90 },
  { name: 'PHP',          category: 'BACKEND',  years: 7, level: 85 },
  { name: 'JavaScript',   category: 'FRONTEND', years: 7, level: 80 },
  { name: 'HTML / CSS',   category: 'FRONTEND', years: 7, level: 85 },
  { name: 'Claude Code / Copilot', category: 'AI × DEV', years: 1, level: 75 },
  // 追加可能
];

export const career = [
  {
    period: '2018.02 — Present',
    company: '沖縄情報システム株式会社',
    role: 'Software Engineer',
    description: '...',
    tags: ['VBA', 'PHP', 'SQL Server', 'Access']
  },
  // 追加可能
];

export const works = [
  {
    num: '01',
    title: 'SILPS — LPG 販売管理システム',
    description: '...',
    stack: ['Access VBA', 'SQL Server', 'PHP'],
    url: '',          // GitHub Pages URL
    tag: 'Business System'
  },
  // 追加可能
];

export const links = [
  { label: 'GitHub',   url: '', icon: 'github'   },
  { label: 'Email',    url: 'mailto:', icon: 'mail' },
  // 追加可能
];
```

---

## 5. ホスティング・デプロイ仕様

| 項目 | 内容 |
|---|---|
| ホスティングサービス | GitHub Pages |
| リポジトリ名 | `portfolio` |
| 公開 URL | `https://{username}.github.io/portfolio/` |
| デプロイ方法 | GitHub Actions（`main` ブランチへの push で自動実行） |
| 対象ブランチ | `main`（開発） → `gh-pages`（公開） |
| ビルドコマンド | `npm run build` |
| 出力ディレクトリ | `dist/` |
| Vite base 設定 | `/portfolio/` |

### GitHub Actions ワークフロー概要（`.github/workflows/deploy.yml`）

```yaml
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 6. SEO / メタ情報

| 項目 | 値 |
|---|---|
| `<title>` | `Daiki Nema — Full-Stack Engineer` |
| `description` | `沖縄拠点のフルスタックエンジニア、根間大輝のポートフォリオ。VBA・PHP・SQL Server・AI活用など` |
| OGP `og:title` | `Daiki Nema — Portfolio` |
| OGP `og:description` | 上記 description と同一 |
| OGP `og:image` | `/portfolio/images/og.png`（後から設定） |
| `lang` | `ja` |
| favicon | `/portfolio/favicon.ico`（後から設定） |

---

## 7. コーディング規約

> 各言語の標準慣例に準拠。以下は本プロジェクト固有の指定のみ記載。

- コンテンツデータは `src/data/content.js` に集約し、HTML への直書きは避ける
- CSS カスタムプロパティ（`--変数名`）で色・フォントを管理する
- Three.js・GSAP の初期化は `src/modules/` に分割して `main.js` からインポートする
- コメントは日本語・英語どちらでも可
