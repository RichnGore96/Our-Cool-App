//my require section

const router = require("express").Router();
const Appointment = require("../../models/appointments.model");

// error handling function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};

router.post("/book-appointment", async (req, res) => {
  try {
    const { date, time, client, stylist } = req.body;
    const newAppointment = new Appointment({
      date,
      time,
      client,
      stylist,
    });
    const savedAppointment = await newAppointment.save();
    res.status(200).json(savedAppointment);
  } catch (error) {
    // error handling
    errorResponse(res, error);
  }
});

router.get("/get-appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    // error handling
    errorResponse(res, error);
  }
});

module.exports = router;
