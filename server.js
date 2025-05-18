const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// JSONボディパーサーを設定
app.use(express.json());

// 静的ファイルを提供するための設定
app.use(express.static(path.join(__dirname, 'dist')));

// APIルートの例
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from CircularTimeTracker API!' });
});

// すべてのルートをクライアントサイドルーティングにフォールバック
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// サーバーの起動
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
