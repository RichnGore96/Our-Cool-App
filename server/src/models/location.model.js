const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  salon: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model("Location", locationSchema) 

