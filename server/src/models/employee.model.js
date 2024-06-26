const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName: {
            type: String,
            required: true,
    },
    lastName: {
            type: String,
            required: true,
    },
    startDate: {
            type: String,
            required: true,
    },
    email: {
        type: String,
        required: true
    },
    ifAdmin: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Employee", employeeSchema)