const express = require('express');
const app = express();
const cors = require('cors');

const recordModel = require('../models/record');

app.use(express.json());
app.use(cors());

// データ取得
app.get('/records', async(req, res) => {
    const records = await recordModel.find({});

    try {
        res.send(records);
    } catch(err) {
        res.status(500).send(err);
    }
})

// データ格納
app.post('/record', async(req, res) => {
    const record = new recordModel(req.body);

    try {
        await record.save();
        res.send(record);
    } catch(err) {
        res.status(500).send(err);
    }
})

// データ部分修正
app.patch('/record/:id', async(req, res) => {
    try {
        await recordModel.findByIdAndUpdate(req.params.id, req.body);
        await recordModel.save();
    } catch(err) {
        res.status(500).send(err);
    }
})

// データ削除
app.delete('/record/:id', async(req, res) => {
    try {
        await recordModel.findByIdAndDelete(req.params.id);
    } catch(err) {
        res.status(500).send(err);
    }
})

module.exports = app;