const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    calories: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) throw new Error('マイナスはないぜ');
        }
    }
})

const food = mongoose.model('FOOD', foodSchema);

module.exports = food;