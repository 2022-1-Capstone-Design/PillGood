const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const { Schema } = mongoose;
const likeSchema = new Schema({
    user_id: {
        type: Number,
        required: true,
        ref: 'User'
    },
    product_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },   
}, { versionKey: false });
likeSchema.plugin(findOrCreate);

module.exports = mongoose.model('Like', likeSchema);