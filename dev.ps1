# ポートフォリオ開発サーバー起動スクリプト
# 使い方: PowerShell で .\dev.ps1 を実行

$portfolioDir = "$PSScriptRoot\result\portfolio"
$devUrl = "http://localhost:5173/portfolio/"

Write-Host ""
Write-Host "=== Portfolio Dev Server ===" -ForegroundColor Cyan
Write-Host "ディレクトリ: $portfolioDir" -ForegroundColor Gray

# パッケージインストール
Set-Location $portfolioDir
Write-Host ""
Write-Host "[1/3] npm install 中..." -ForegroundColor Yellow
npm install

# 別ウィンドウで開発サーバーを起動
Write-Host ""
Write-Host "[2/3] 開発サーバーを起動中 (別ウィンドウで起動します)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$portfolioDir'; npm run dev"

# サーバーの起動を待機
Write-Host ""
Write-Host "[3/3] 起動待機中 (3秒)..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

# デフォルトブラウザでURL を開く
Write-Host ""
Write-Host "ブラウザを起動します: $devUrl" -ForegroundColor Green
Start-Process $devUrl

Write-Host ""
Write-Host "開発サーバーが起動しました。" -ForegroundColor Cyan
Write-Host "サーバーを停止するには、別ウィンドウで Ctrl+C を押してください。" -ForegroundColor Gray
