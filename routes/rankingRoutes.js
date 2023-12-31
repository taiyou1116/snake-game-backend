const express = require('express');
const app = express();
const cors = require('cors');

const recordModel = require('../models/record');

const corsOptions = {
    origin: 'https://taiyou1116.com',
    optionsSuccessStatus: 204,
}

app.use(cors(corsOptions));
app.use(express.json());

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
app.patch('/record/:uid', async(req, res) => {
    try {
        const updatedRecord = await recordModel.findOneAndUpdate(
            { uid: req.params.uid },  // ここでuidフィールドを指定
            req.body,
            { new: true }
        );
        res.status(200).send(updatedRecord);

    } catch(err) {
        res.status(500).send(err);
    }
})

module.exports = app;