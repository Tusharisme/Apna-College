const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  review: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
