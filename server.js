const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

// ミドルウェア
app.use(express.json());
app.use(cors());

// ルーティング
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/ranking', (req, res) => {
  const ranking = [
    { name: 'Alice', score: 100 },
    { name: 'Bob', score: 90 },
    // ...（他のランキングデータ）
  ];
  res.json(ranking);
});

app.post('/ranking', (req, res) => {
  const newRanking = req.body;  // リクエストボディから新しいランキングデータを取得
  console.log('新しいランキング:', newRanking);
  res.json({ message: 'ランキングを受け取りました' });
});

// サーバの起動
app.listen(port, () => {
  console.log(`サーバが http://localhost:${port} で起動しています`);
});
