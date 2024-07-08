const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.String,
    ref: "Employee",
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
