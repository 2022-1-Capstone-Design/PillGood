const mongoose = require("mongoose");

const { Schema } = mongoose;
const scoreSchema = new Schema(
  {
    ref: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    score: [Number],
  },
  { versionKey: false }
);

module.exports = mongoose.model("Score", scoreSchema);
