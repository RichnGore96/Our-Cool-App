//my require section

const router = require("express").Router();
const Appointment = require("../../models/appointments.model");
const Client = require("../../models/clients.models");

// error handling function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};

router.post("/", async (req, res) => {
  try {
    const { employee, date, time, service } = req.body;
    const newAppointment = new Appointment({
      employee,
      date,
      time,
      service,
    });
    const client = await Client.find();
    console.log(client);

    const savedAppointment = await newAppointment.save();
    res.status(200).json({
      result: savedAppointment,
      message: "Appointment has been created.",
    });
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
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteAppointment = await Appointment.deleteOne({ _id: id });
      res.status(200).json(deleteAppointment);
    } catch (error) {
      errorResponse(res, error);
    }
  });
});

module.exports = router;
