const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
  }
});

module.exports = mongoose.model("Review", reviewSchema);
