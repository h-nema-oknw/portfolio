# OIS-Web 技術スタック棚卸

> 調査日: 2026-04-07  
> 対象リポジトリ: `c:\inetpub\wwwroot\ois-web` (GitHub: `okijoh-lpg/sp_ois`)

---

## 言語

| 言語 | 用途 |
|------|------|
| PHP | バックエンド（メイン、手続き型） |
| JavaScript | フロントエンド |
| CSS | スタイリング |
| SQL (T-SQL) | SQL Server クエリ |

---

## フレームワーク・主要ライブラリ

### フロントエンドフレームワーク

| 名前 | バージョン | 用途 |
|------|-----------|------|
| **AngularJS** | 1.6.9 | フロントエンドフレームワーク（SPA部分） |
| **jQuery** | 1.11.0 / 2.2.4 | DOM操作・Ajax |
| **jQuery UI** | 1.11.4 | UIコンポーネント |

### jQueryプラグイン

| 名前 | バージョン | 用途 |
|------|-----------|------|
| jquery.datetimepicker | - | 日時ピッカー |
| jquery.validationEngine | - | フォームバリデーション（日本語対応） |
| jquery.blockUI | 2.70 | モーダルブロック |
| jquery.magnific-popup | 1.1.0 | ライトボックス・ポップアップ |
| jquery.scrollshow | - | スクロールアニメーション |
| jquery.smoothscroll | - | スムーススクロール |

### モーダル・ギャラリー

| 名前 | バージョン | 用途 |
|------|-----------|------|
| Remodal | 1.0.7 | モーダルダイアログ |
| Lity | - | ライトボックス |
| Galleria | 1.5.1 | 画像ギャラリー |

### ユーティリティ

| 名前 | バージョン | 用途 |
|------|-----------|------|
| html5shiv | 3.7.0 | IE8向けHTML5サポート |
| css3-mediaqueries | 1.0 | IE向けメディアクエリ対応 |
| dateformat.js | - | 日付フォーマット |

---

## バックエンド

| 名前 | 用途 |
|------|------|
| PHP PDO (sqlsrv) | DB接続 |
| PHP セッション管理 | 認証・セッション（名前: `silps`、有効期限: 9時間） |
| `ua.class.php` | ユーザーエージェント判定（PC / タブレット / スマホ） |
| `myFunction.php` | 汎用ユーティリティ関数 |
| `myConvert.php` | 文字コード変換（SJIS / UTF-8） |
| `myLog.php` | ログ出力 |
| `inc_silps.php` | SILPSシステム共通インクルード |
| `inc.php` | DB設定・接続 |

---

## インフラ・サーバー

| 項目 | 内容 |
|------|------|
| Webサーバー | IIS (`c:\inetpub\wwwroot`) |
| OS | Windows 11 Pro (10.0.26200) |
| データベース | SQL Server 2022 (`LPG-NEMA\SQL22` / `nema_SILPSSQL`) |
| DBドライバー | PHP PDO + sqlsrv |
| データ保存先 | `D:\DhoanData\` |
| アクセスURL | `http://LPG-NEMA/ois-web/` / `http://192.168.1.182/ois-web/` |

---

## ビルド・パッケージ管理

**なし。**  
`package.json`、`composer.json`、`npm`、`webpack` 等は一切使われておらず、全ライブラリをファイルとして静的に管理。

---

## コードベース統計

| 種別 | ファイル数 |
|------|-----------|
| PHP | 139 |
| JavaScript | 1,215 |
| CSS | 61 |
| 画像 (PNG/JPG/GIF) | 112 |
| **合計** | **3,192** |

---

## リポジトリ

- **Git** / GitHub (`okijoh-lpg/sp_ois`) — ブランチ: `main`
- 最終コミット: 2026-03-19

---

## 注目点・技術的負債

- **AngularJS 1.6.9** は2021年12月にEOL（End of Life）
- **jQuery 1.11** は2014年リリースの古いバージョン
- **IE向けポリフィル**（html5shiv、css3-mediaqueries）が残存
- ビルドプロセスなし、依存関係の自動管理なし（手動ファイル管理）
- `db_config.json` に認証情報が平文で記述されている（セキュリティリスク）
- レスポンシブ対応は CSS ファイル分離方式（`pc.css` / `tablet.css` / `sp.css`）
- テーブル名・カラム名に日本語を使用
