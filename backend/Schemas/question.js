const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
    name: String
});

const subSchema = new Schema({
    name: String,
    question: [questionSchema]
});

const mainSchema = new Schema({
    main_category: String,
    sub_category: [subSchema]
}, { versionKey: false });

module.exports = mongoose.model('Question', mainSchema);