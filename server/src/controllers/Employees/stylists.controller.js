const router = require("express").Router();
const User = require("../../models/stylists.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT;

// error handling function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};

router.post("/register", async (req, res) => {
  // Signup Route

  try {
    const { firstName, lastName, email, password } = req.body;

    const user = new User({
      firstName,
      lastName,
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


//login secetion

router.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body; // deconstruct

      const user = await User.findOne({ email }); // find user

      // check if user exist
      if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ message: 'Invalid email or password' });
      }

      // create token for our validated session
      const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1 day' });

      res.status(200).json({
          user,
          message: `successfully logged In: ${email}`,
          token
      });
  } catch (error) {
      errorResponse(res, error);
  }
});

//Confirm/Check-In Clients

//Display All Appointments by 


module.exports = router;