const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    /*   required: true, */
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Client", clientSchema);
