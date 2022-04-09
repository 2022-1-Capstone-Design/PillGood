const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const { Schema } = mongoose;
const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    versionKey: false
});
userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', userSchema);