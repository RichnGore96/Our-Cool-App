//my require section

const router = require("express").Router();
const Appointment = require("../../models/appointments.model");

// error handling function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};

router.post("/", async (req, res) => {
  try {
    const { employee, date, client, time, service } = req.body;
    const newAppointment = new Appointment({
      employee,
      date,
      time,
      service,
      client
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
// get an appointment by id
router.get("/get-appointment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById({ _id: id });
    res.status(200).json(appointment);
  } catch (error) {
    // error handling
    errorResponse(res, error);
  }
});

module.exports = router;
