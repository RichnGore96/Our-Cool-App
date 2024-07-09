const jwt = require("jsonwebtoken");
const Clients = require("../models/clients.models");

const User = require("../models/user.model");

// error handling function
const validateSession = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const decoded = jwt.verify(token, process.env.JWT);

    const user = await User.findById(decoded.id);
    const client = await Clients.findById(decoded.id);

    if (!user) throw new Error("not a valid user");
    if (!client) throw new Error("you have not been registered yet");
    req.user = user;

    return next();
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = validateSession;
