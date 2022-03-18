const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model('User', userSchema);