const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    ref: "Client",
    required: true,
  },
  stylist: {
    type: String,
    ref: "Stylist",
    required: true,
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
