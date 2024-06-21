const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastInit: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    shiftStart: {
        type: String,
        required: true,
    },
    shiftEnd: {
        type: String,
        required: true,
    }
});   

module.exports = mongoose.model("Schedule", scheduleSchema)