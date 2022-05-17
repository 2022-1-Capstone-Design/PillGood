const mongoose = require("mongoose");

const {Schema} = mongoose;

const pillfoodSchema = new Schema({
    category_name: String,
    product: [Number],
    food: [Number],
    nutrient: [String]
}, { _id:  false });

const bmiSchema = new Schema({
    bmi_figure: Number,
    bmi_result: String
}, { _id: false });

const resultSchema = new Schema({
    kakao_id: Number,
    user_date: {type: Date, default: () => new Date( ).setHours(new Date( ).getHours( ) + 9)},
    user_name: String,
    BMI: bmiSchema,
    age: Number,
    result: [pillfoodSchema]
}, {versionKey: false});

module.exports = mongoose.model('Result', resultSchema);

