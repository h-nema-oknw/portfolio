# Phase 5 タスク指示 — 最終検証

---

## Task 1 — ローカルビルド確認（A1）

`result/portfolio/` ディレクトリで `npm run build` を実行する。

```bash
cd result/portfolio && npm run build
```

- exit code 0 → 正常
- エラーが出た場合 → エラーメッセージを確認し原因を修正してから再実行

---

## Task 2 — セクション構成の仕様照合（A2）

`result/portfolio/index.html` と `docs/spec/basic.md` の「2. ページ・セクション構成」を照合する。

確認項目:
- `<nav>` 固定ヘッダー（ロゴ・リンク・ダークモードトグル）が存在するか
- `#hero` セクション（Three.js canvas・グリッチ見出し・説明文・CTA）が存在するか
- `#about` セクション（数値カード × 3・自己紹介文・ターミナルブロック）が存在するか
- `#skills` セクション（スキル行リスト）が存在するか
- `#career` セクション（タイムライン・資格一覧）が存在するか
- `#works` セクション（実績カード）が存在するか
- `#links` セクション（SNS・メール）が存在するか
- `<footer>` コピーライトが存在するか

不足があれば `result/portfolio/index.html` を修正する。

---

## Task 3 — コンテンツデータ検証（A3）

`result/portfolio/src/data/content.js` の各フィールドを確認する。

確認項目:
- `profile.name.en` / `profile.name.ja` が設定されているか
- `profile.title`・`profile.location` が設定されているか
- `profile.email`・`profile.github` が設定されているか（空でないか）
- `skills` が 6 項目（name / category / years / level）で定義されているか
- `career` に少なくとも 3 件の経歴が存在するか
- `qualifications` が存在するか
- `works` が 2 件以上存在するか
- `links` に GitHub・Email が含まれるか

問題があれば修正する。

---

## Task 4 — deploy.yml 検証（A4）

`/.github/workflows/deploy.yml` を `docs/spec/detail.md` Section 5 と照合する。

確認項目:
- `on.push.branches: [main]` になっているか
- `working-directory: result/portfolio` が install・build の両ステップに設定されているか
- `publish_dir: result/portfolio/dist` になっているか
- `github_token: ${{ secrets.GITHUB_TOKEN }}` が設定されているか

問題があれば修正する。

---

## Task 5 — アニメーション設定値照合（A5）

`result/portfolio/src/modules/animations.js` を `docs/spec/detail.md` Section 3 と照合する。

確認項目:
- Hero テキストリビール: `duration: 1.0`・`stagger: 0.12`・`ease: 'power4.out'`
- スクロール fade-in: `duration: 0.8`
- スキルバー: `duration: 1.5`・`ease: 'power2.out'`
- カード 3D tilt: `14deg`
- マーキー: `duration: 22`・`repeat: -1`
- `gsap.set()` 初期状態が全アニメーション対象要素に設定されているか

問題があれば修正する。

---

## Task 6 — Three.js 設定値照合（A6）

`result/portfolio/src/modules/particles.js` を `docs/spec/detail.md` Section 3 と照合する。

確認項目:
- パーティクル数: `2000`
- 分布範囲: X ±10, Y ±10, Z ±7.5
- カメラ Z 位置: `5`
- パーティクルサイズ: `0.04`（sizeAttenuation: true）
- 不透明度: `0.55`
- 回転速度: Y `0.12t`、X `0.06t`
- マウス影響度: X `0.3`、Y `0.2`
- スクロールカメラドリフト: `-scrollY * 0.003`

問題があれば修正する。

---

## Task 7 — レスポンシブ CSS 確認（A7）

`result/portfolio/src/style.css` のメディアクエリを確認する。

確認項目:
- `@media (max-width: 768px)` ブロックが存在するか（モバイル）
- `@media (max-width: 1024px)` ブロックが存在するか（タブレット）
- 各ブレークポイントで主要要素のレイアウト調整が定義されているか

---

## Task 8 — ダークモード CSS 確認（A8）

`result/portfolio/src/style.css` のダークモード / ライトモード対応を確認する。

確認項目:
- `--bg`（`#050505`）・`--bg2`（`#0C0C0C`）がダーク用に定義されているか
- `--bg-light`（`#F2EDE3`）・`--bg2-light`（`#EBE4D8`）がライト用に定義されているか
- `[data-theme="light"]` セレクタが CSS に存在するか

---

## Task 9 — SEO / OGP メタ情報確認（A9）

`result/portfolio/index.html` の `<head>` を `docs/spec/detail.md` Section 6 と照合する。

確認項目:
- `<title>`: `Hiroki Nema — Full-Stack Engineer`（または Daiki Nema）
- `<meta name="description">`: 沖縄拠点のフルスタックエンジニア紹介文
- `<meta property="og:title">`: `Hiroki Nema — Portfolio`
- `lang="ja"` が html タグに設定されているか

---

## Task 10 — アクセシビリティ確認（A10）

`result/portfolio/index.html` のアクセシビリティ属性を確認する。

確認項目:
- `<nav>` に `aria-label` があるか
- `<section>` に `aria-label` があるか
- Three.js canvas と装飾要素に `aria-hidden="true"` があるか
- ダークモードトグルボタンに `aria-label` があるか
- `<a>` リンクで意味のあるテキストまたは `aria-label` があるか

---

## Task 11 — ゴール・KPI 達成確認（A11）

`docs/requirements.md` のゴール・失敗定義と照合する。

確認項目（コード・設定レベルで確認できる範囲）:
- GitHub Pages 公開可能な状態か（deploy.yml・Vite base 設定・ビルド成功）
- アニメーション・インタラクション実装済みか（animations.js・particles.js が存在し、コードが正しいか）
- デザイン性（仕様書のカラーパレット・フォント・エフェクトが実装されているか）

失敗定義との照合:
- × GitHub Pages で公開できない → deploy.yml が正しく配置されていれば回避済み
- × アニメーション・インタラクションなし → animations.js・particles.js が実装済みで回避
- × デザイン性が低い凡庸な仕上がり → アースカラー・グリッチ・マーキー等が実装済み

---

## Task 12 — 発見問題の修正（A12）

Task 1〜11 で発見した問題を修正する。
修正対象: `result/` 配下のファイルのみ。

---

## Task 13 — 人間確認事項の最終確認リスト作成（B まとめ）

レポートに以下の「ユーザー確認事項」セクションを設ける。

```
【ユーザーが実施する確認】
B1: npm run dev でローカルサーバーを起動し、Three.js パーティクルと GSAP アニメーションを目視確認
B2: ダークモードボタンをクリックしてライト/ダーク切替を目視確認
B3: DevTools でモバイル（375px）・タブレット（768px）・PC（1440px）のレイアウトを確認
B4: Chrome・Firefox・Safari・Edge での動作確認
B5: 20260415_Phase5 ブランチを main にマージして GitHub Actions のデプロイを確認
B6: https://h-nema-oknw.github.io/portfolio/ にアクセスして公開表示を確認
```
