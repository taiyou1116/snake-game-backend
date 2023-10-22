const express = require('express');
const app = express();
const cors = require('cors');

const foodModel = require('../models/food');

app.use(express.json());
app.use(cors());

// データ取得
app.get('/foods', async(req, res) => {
    const foods = await foodModel.find({});

    try {
        res.send(foods);
    } catch(err) {
        res.status(500).send(err);
    }
})

// データ格納
app.post('/food', async(req, res) => {
    const food = new foodModel(req.body);

    try {
        await food.save();
        res.send(food);
    } catch(err) {
        res.status(500).send(err);
    }
})

// データ部分修正
app.patch('/food/:id', async(req, res) => {
    try {
        await foodModel.findByIdAndUpdate(req.params.id, req.body);
        await foodModel.save();
    } catch(err) {
        res.status(500).send(err);
    }
})

// データ削除
app.delete('/food/:id', async(req, res) => {
    try {
        await foodModel.findByIdAndDelete(req.params.id);
    } catch(err) {
        res.status(500).send(err);
    }
})

module.exports = app;