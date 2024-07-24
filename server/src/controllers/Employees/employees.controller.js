const router = require("express").Router();

const User = require("../../models/user.model");
const Employee = require("../../models/employee.model");
const Appointment = require("../../models/appointments.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT;

const errorResponse = (res, error) => {
    return res.status(200).json({
      Error: error.message,
    });
  };

  // Signup Route
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const employee = await Employee.findOne({ email: email });

    if (!employee) {
      return res.status(404).json({ message: "Employee email not found." });
    }

    else{
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
          return res.status(400).json({ msssage: "User already registered on system." });
        }
        else{
          const hashedPassword = bcrypt.hashSync(password, 13);
          const newUser = new User({
            email,
            password: hashedPassword,
          });
          const savedUser = await newUser.save();
      
          const token = jwt.sign(
            { id: savedUser._id }, // payload
            SECRET, //message
            { expiresIn: "1 day" } // options
          );
      
          res.status(200).json({
            user: savedUser,
            message: `Welcome! we are glad to have you on our platform.`, // message for the new user
            token,
          });
        }
      }
  } catch (error) {
    errorResponse(res, error);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body; // get email and password from request body
    const registeredUser = await User.findOne({ email: email }); // find user
    
    // check if user exists
    if (registeredUser) {
      const passcheck = await bcrypt.compare(password, registeredUser.password);
      if (passcheck) {
        const token = jwt.sign({ id: registeredUser._id }, SECRET, { expiresIn: "1 day" });
        return res.status(200).json({
          user: registeredUser,
          message: `Successfully logged in: ${email}`,
          token,
        });
      } else if(!passcheck){
        return res.status(401).json({
          message: `Incorrect password`,
        });
      }
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
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
    const { employee, date, time, service, client, email } = req.body;
    const newAppointment = new Appointment({
      employee,
      date,
      time,
      service,
      client,
      email,
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
        {_id: employee}, 
        appmtInfo, 
        {new: true}
    )
    console.log(update);

    res.status(200).json({
        message: `${update.employee}'s appointment updated!`,
        update
    })

} catch (err) {
    errorResponse(res,err);
}

});
// add time


module.exports = router;
