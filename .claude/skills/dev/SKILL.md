---
name: dev
description: ポートフォリオの開発サーバーを起動してブラウザで開く
---

ポートフォリオの開発サーバーを起動してブラウザで開く。

以下を順番に実行すること：

1. `result/portfolio/` に移動して `npm install` を実行する
2. 別の PowerShell ウィンドウで `npm run dev` を起動する（コマンド: `Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location 'd:\個人用\プライベート\Develop\Portfolio\result\portfolio'; npm run dev"`）
3. 3秒待機する
4. ブラウザで `http://localhost:5173/portfolio/` を開く（コマンド: `Start-Process "http://localhost:5173/portfolio/"`）

完了したらユーザーに「開発サーバーを起動しました。http://localhost:5173/portfolio/ をブラウザで開きました。」と伝える。
