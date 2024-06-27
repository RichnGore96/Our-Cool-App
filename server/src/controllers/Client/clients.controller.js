//my require section
const router = require("express").Router();
const Client = require("../../models/clients.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT;

// error handling function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};

router.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;
    // throw error if email is missing 
    if (!email) {
      throw new Error("Email required");
    }

    const client = new Client({
      email,
    });

    const newClient = await client.save();

    const token = jwt.sign(
      { id: newClient._id }, // payload
      SECRET, //message
      { expiresIn: "1 day" } // options
    );
    res.status(200).json({
      client: newClient,
      message: `Welcome! we are glad to have you on our platform`, // message for the new user
      token,
    });
  } catch (error) {
    errorResponse(res, error);
  }
});

module.exports = router;
