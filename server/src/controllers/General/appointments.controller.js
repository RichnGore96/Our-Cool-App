//my require section

const router = require("express").Router();
const validateClient = require("../../middleware/validate-session");
const Appointment = require("../../models/appointments.model");

// error handling function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};

//book appointment

router.post("/", validateClient, async (req, res) => {
  try {
    const { employee, date, time, service } = req.body;
    const newAppointment = new Appointment({
      employee,
      date,
      time,
      service,
      owner_id: req.client._id,
    });

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

router.get("/get-appointments", validateClient, async (req, res) => {
  try {
    const appointments = await Appointment.find({ owner_id: req.client._id });
    res.status(200).json(appointments);
  } catch (error) {
    // error handling
    errorResponse(res, error);
  }
});
// get an appointment by id
router.get("/get-appointment/:id", validateClient, async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById({
      _id: id,
      owner_id: req.client._id,
    });
    res.status(200).json(appointment);
  } catch (error) {
    // error handling
    errorResponse(res, error);
  }
  router.delete("/:id", validateClient, async (req, res) => {
    try {
      const { id } = req.params;
      const deleteAppointment = await Appointment.deleteOne({
        _id: id,
        owner_id: req.client._id,
      });
      deleteAppointment.deletedCount
        ? res.status(200).json({
            message: `Your appointment has been removed`,
          })
        : res.status(404).json({
            message: `Information not found.`,
          });
    } catch (error) {
      errorResponse(res, error);
    }
  });
});

module.exports = router;
