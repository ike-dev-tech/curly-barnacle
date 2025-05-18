import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

// JSONボディパーサーを設定
app.use(express.json());

// ルートエンドポイント
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>円形タイムトラッキングアプリ</title>
        <style>
          body { font-family: sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #4A90E2; }
        </style>
      </head>
      <body>
        <h1>円形タイムトラッキングアプリ</h1>
        <p>アプリケーションは現在デプロイプロセス中です。</p>
        <p>サーバーは正常に動作しています。このページが表示されていればデプロイは成功しています。</p>
      </body>
    </html>
  `);
});

// APIエンドポイントの例
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'サーバーは正常に動作しています' });
});

// サーバーの起動
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
