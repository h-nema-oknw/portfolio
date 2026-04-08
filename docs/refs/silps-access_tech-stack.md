# SILPS Access VBA アプリケーション 技術スタック棚卸

> 調査日: 2026-04-07  
> 対象: `C:\Users\h.nema\Desktop\SILPS\PG\.Dev\SILPSPG.accdb.AsText.20260406_1048`  
> アプリケーション: SILPS（LPG販売管理システム）

---

## オブジェクト構成

| オブジェクト種別 | 件数 |
|----------------|------|
| フォーム (.form) | 613 |
| レポート (.report) | 615 |
| VBAモジュール (.module) | 186 |
| テーブル (.table) | 402 |
| クエリ (.query) | 198 |
| マクロ (.macro) | 2 |
| **合計** | **2,016** |

---

## 言語・プラットフォーム

| 項目 | 内容 |
|------|------|
| 言語 | VBA (Visual Basic for Applications) |
| ホスト | Microsoft Access 2016+ |
| ファイル形式 | .accdb |
| VBA Version | 21 (Required: 20) |
| 文字セット | 日本語対応（TabularCharSet=128, TabularFamily=50） |

---

## データアクセス技術

### ADO (ActiveX Data Objects) — メイン

| オブジェクト | 変数名 | 用途 |
|------------|--------|------|
| `ADODB.Connection` | `xADO_CON` | SQL Serverへのグローバル接続 |
| `ADODB.Command` | `SPCMD` | ストアドプロシージャ実行 |
| `ADODB.Recordset` | 各所で使用 | レコード操作 |

### DAO (Data Access Objects) — ローカルAccess用

| オブジェクト | 用途 |
|------------|------|
| `DAO.Database` (`CurrentDb()`) | Accessネイティブ操作 |
| `DAO.QueryDef` | クエリ定義アクセス |
| `DAO.Recordset` | ローカルテーブル操作 |

---

## 外部ライブラリ・COM参照

| ライブラリ | 生成方法 | 用途 | モジュール |
|-----------|---------|------|-----------|
| **Microsoft Excel** | `CreateObject("Excel.Application")` | Excelファイル生成・操作 | `@MDB内コントロール一括変更` |
| **Microsoft Outlook** | `CreateObject("Outlook.Application")` | メール送信・フォルダアクセス (MAPI) | `Outlook_Outlook起動と終了` |
| **Scripting.FileSystemObject** | `CreateObject("Scripting.FileSystemObject")` | テキストファイル出力・ファイル操作 | `@QueryStringExport` |

---

## Windows API

```vba
Declare PtrSafe Sub Sleep Lib "kernel32" (ByVal dwMilliseconds As Long)
```

- 64ビット対応（`PtrSafe` キーワード使用）
- 用途: Outlook連携処理内の待機（10秒スリープ）

---

## データベース接続

### SQL Server（バックエンド）

- 接続方式: ADODB（グローバル接続 `xADO_CON`）
- ストアドプロシージャを多用（200+ 呼び出し箇所）
- 主なプロシージャ命名例:
  - `SELECT_顧客_設定検索`
  - `SELECT_顧客_全賃借_地点別`
  - `UPD_売上_売上データID`
  - `DEL_コード削除_OIS顧客マスタ関連`

### Access ローカル（DAO）

- 用途: ワークテーブル（`W_*`）、システムテーブル（`SYS_*`）操作

---

## 外部システム連携

| 連携先 | モジュール | 目的 |
|--------|-----------|------|
| GMO クレジット決済 | `GMO_クレジット決済.module` | GMOペイメントゲートウェイ |
| SMBC クレジット決済 | `SMBC_クレジット決済.module` | SMBC クレジット精算 |
| リウコム クレジット決済 | `リウコム_クレジット決済.module` | リウコム決済処理 |
| 自振（自動振替） | `自振宣言BAT.module` | 銀行口座自動引落しバッチ |
| エコア配送 | `エコア配送データ取込.module` | 配送データ取込 |
| Outlook / MAPI | `Outlook_Outlook起動と終了.module` | メール通知・送信 |
| Excel | `@MDB内コントロール一括変更.module` | データエクスポート |
| ファイルシステム | `@QueryStringExport.module` | テキスト出力 |

---

## 命名規則・オブジェクト構造

| プレフィックス | 意味 | 例 |
|--------------|------|-----|
| `M_` | マスタ管理 | `M_顧客`, `M_メーカー`, `M_料金表` |
| `SQL_` | SQL Serverプロシージャ系 | `SQL_顧客`, `SQL_配送地点` |
| `V_` | ビュー・集計ロジック | `V_検針請求書`, `V_売上入金` |
| `W_` | ワークテーブル | `W_GMO払う`, `W_メータFPD作成` |
| `SYS_` | システムテーブル | `SYS_初期設定`, `SYS_バージョン情報` |
| `DR` | ドロップダウン参照 | `DRメーカー`, `DR保安_メータ設定` |
| `@` | 保守・ユーティリティモジュール | `@保守_カスタマイズ履歴`, `@コード一括変更` |
| `$` | コアシステムモジュール | `$スタートアップ処理`, `$マスタ取込み処理` |

---

## 業務ドメイン

本システムは **LPG（液化石油ガス）販売管理** を対象とした業務システム。

| ドメイン | 内容 |
|---------|------|
| 顧客管理 | 顧客マスタ・契約情報 |
| 容器管理 | LPGボンベ・タンク管理 |
| 検針 | ガスメーター検針記録 |
| 配送 | 配送・物流管理 |
| 売上 | 売上・収益計算 |
| 入金 | 集金・入金消込 |
| 保安 | 安全点検記録 |
| 料金 | 料金表・単価管理 |
| 自振 | 銀行自動振替処理 |

---

## 技術スタック サマリー

| カテゴリ | 技術 | バージョン | 使用頻度 |
|---------|------|-----------|---------|
| フロントエンド | Microsoft Access | 2016+ | 主 |
| バックエンドDB | SQL Server | - | 主 |
| 言語 | VBA | Access 2016+ | 主 |
| データアクセス | ADO (ADODB) | - | 高（100+箇所） |
| データアクセス | DAO | - | 中（ローカルのみ） |
| Windows API | kernel32.dll | - | 低（Sleep のみ） |
| COMオブジェクト | Excel | 動的生成 | 中 |
| COMオブジェクト | Outlook | 動的生成 | 中 |
| COMオブジェクト | FileSystemObject | 動的生成 | 低 |
| 外部決済 | GMO / SMBC / リウコム | - | 中（3系統） |

---

## 備考

- スタートアップ: `AutoExec` マクロ → `fncAutoExec()` → `StartUP()` の順に呼び出し
- 環境設定: `$ENVIRON` テーブルにてKEY-VALUE管理
- バージョン管理: `$バージョン情報` テーブルで管理
- 最終コード更新: 2026年2月5日（コメント内記述より）
