const express = require('express');
const app = express();

const foodModel = require('../models/food');

app.use(express.json());

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

module.exports = app;