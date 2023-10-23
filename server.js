const express = require('express');
const app = express();
const mongoose  = require('mongoose');
require('dotenv').config();

const recordRouter = require('./routes/rankingRoutes');

app.use(recordRouter);

const port = 3000;

// db
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("きたあ"))
  .catch((eer) => console.log(eer));

// サーバの起動
app.listen(port, () => {
  console.log(`サーバが http://localhost:${port} で起動しています`);
});