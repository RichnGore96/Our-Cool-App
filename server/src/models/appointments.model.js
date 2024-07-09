const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    employee: {
      type: String,
      ref: "Employee",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      ref: "Client",
    },
    email: {
      type: String,
      required: true,
    },
    owner_id: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Appointment", appointmentSchema);
