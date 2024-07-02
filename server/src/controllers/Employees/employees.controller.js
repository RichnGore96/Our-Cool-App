const router = require("express").Router();
const Employees = require("../../models/employees.model");
const Appointment = require("../../models/appointments.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT;

const errorResponse = (res, error) => {
  return res.status(200).json({
    Error: error.message,
  });
};

// register
router.post("/register", async (req, res) => {
  // Signup Route

  try {
    const { email, password } = req.body;

    const user = new Employees({
      email,
      password: bcrypt.hashSync(password, 7),
    });

    const newUser = await user.save();

    const token = jwt.sign(
      { id: newUser._id }, // payload
      SECRET, //message
      { expiresIn: "1 day" } // options
    );

    res.status(200).json({
      user: newUser,
      message: `Welcome! ${
        firstName + " " + lastName
      } we are glad to have you on our platform`, // message for the new user
      token,
    });
  } catch (error) {
    errorResponse(res, error);
  }
});
// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body; // get email and password from request body

    const user = await Employees.findOne({ email }); // find user

    // check if user exist
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // create token for our validated session
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1 day" });

    res.status(200).json({
      user,
      message: `successfully logged In: ${email}`,
      token,
    });
  } catch (error) {
    errorResponse(res, error);
  }
});

// See all appointments
router.get("/get-appointments", async (req, res) => {
  try {
    const getAllAppmts = await Appointment.find();

    getAllAppmts.length > 0
      ? res.status(200).json({
          result: getAllAppmts,
        })
      : null;
  } catch (err) {
    errorResponse(res, err);
  }
});

// Add an appointment
router.post("/add-appointment", async (req, res) => {
  try {
    const { employee, date, time, service } = req.body;
    const newAppointment = new Appointment({
      employee,
      date,
      time,
      service,
      email: req.user.email,
    });
    const savedAppointment = await newAppointment.save();
    res.status(200).json(savedAppointment);
  } catch (error) {
    // error handling
    errorResponse(res, error);
  }
});

// manage appointments
router.patch("/_employee", async (req, res) => {
  try {
    const { employee } = req.params;

    const appmtInfo = req.body;

    const update = await Appointment.findOneAndUpdate(
      { _id: employee },
      appmtInfo,
      { new: true }
    );
    console.log(update);

    res.status(200).json({
      message: `${update.employee}'s appointment updated!`,
      update,
    });
  } catch (err) {
    errorResponse(res, err);
  }
});

module.exports = router;
