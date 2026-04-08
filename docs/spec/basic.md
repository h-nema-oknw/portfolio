# 根間大輝 ポートフォリオ — 基本仕様書

## 1. システム概要

根間大輝の個人ポートフォリオサイト。転職活動・副業獲得の場面で先方に共有し、自己紹介・経歴・技術スキル・制作実績を視覚的に伝えることを目的とする。

Three.js によるパーティクル背景と GSAP によるスクロールアニメーションを組み合わせた、HIPHOP × IT デジタルをコンセプトとした没入感のあるデザインを採用する。GitHub Pages（静的ファイル）でホスティングし、Vite でビルドする。

---

## 2. ページ・セクション構成

| # | セクション名 | 概要 |
|---|---|---|
| - | ナビゲーション | 固定ヘッダー。セクションリンク + ダークモード切替 |
| 1 | Hero | 氏名・肩書き・グリッチアニメーション・Three.js パーティクル背景・CTA ボタン |
| 2 | About | 自己紹介文・実績数値カード（3D ホバーエフェクト）・ターミナル風プロフィール |
| 3 | Skills | 言語・ツール・AI活用スキルの一覧（スキルバー + カテゴリラベル） |
| 4 | Career | 職歴タイムライン・資格一覧 |
| 5 | Works | 制作実績カード（外部 GitHub Pages URL リンク・埋め込み対応） |
| 6 | Links | SNS・関連リンク一覧・メールアドレス |
| - | フッター | コピーライト |

---

## 3. 画面・コンポーネント構成

```
index.html
├── <nav>              固定ナビゲーション（ロゴ・リンク・ダークモードトグル）
├── <section#hero>     Three.js canvas + グリッチ見出し + 説明文 + CTA
├── <section#about>    数値カード × 4 + 自己紹介文 + ターミナルブロック
├── <section#skills>   スキル行リスト（名称・カテゴリ・バー・年数）
├── <section#career>   タイムラインリスト（期間・社名・役職・業務内容）
├── <section#works>    実績カードグリッド（サムネイル・タイトル・技術スタック・リンク）
├── <section#links>    SNS アイコン + メール
└── <footer>           コピーライト
```

---

## 4. システム構成図（簡易）

```
[ローカル開発]
  src/
  ├── main.js          Three.js + GSAP 初期化
  ├── index.html
  └── style.css
       ↓ vite build
[GitHub リポジトリ: portfolio]
  dist/  ← 静的ファイル
       ↓ GitHub Actions (gh-pages branch へデプロイ)
[GitHub Pages]
  https://{username}.github.io/portfolio/
```

---

## 5. 外部連携・依存サービス

| サービス / ライブラリ | 用途 |
|---|---|
| Three.js | パーティクル背景（WebGL） |
| GSAP + ScrollTrigger | スクロールアニメーション・テキスト演出 |
| Google Fonts | フォント（Space Grotesk / Space Mono） |
| GitHub Pages | ホスティング |
| GitHub Actions | CI/CD（自動ビルド・デプロイ） |

---

## 6. 非機能要件サマリー

| 項目 | 要件 |
|---|---|
| パフォーマンス | Vite による最適化ビルド。画像は遅延読み込み。Three.js は軽量設定 |
| レスポンシブ | PC（1440px 基準）・タブレット・スマートフォン（375px 以上）対応 |
| ブラウザ対応 | Chrome・Firefox・Safari・Edge の最新版 |
| セキュリティ | GitHub Pages に依存。ソースコードの不正改修はリポジトリ権限で管理 |
| 保守性 | コンテンツ（テキスト・リンク）は HTML または JS の定数として集約し、非エンジニアでも編集しやすい構成にする |
| アクセシビリティ | 基本的な alt 属性・aria-label を付与。キーボードナビゲーション対応 |
