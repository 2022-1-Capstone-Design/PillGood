const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodSchema = new Schema({
    INDEX: Number,
    NAME: String
}, { versionKey: false })

module.exports = mongoose.model('food', foodSchema);