const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    record: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) throw new Error('マイナスはないぜ');
        }
    },
    uid: {
        type: String,
        required: true,
        // trim: true,
        lowercase: true,
    },
})

const record = mongoose.model('RECORD', recordSchema);

module.exports = record;