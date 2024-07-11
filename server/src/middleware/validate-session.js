const jwt = require("jsonwebtoken");
const Client = require("../models/clients.models");

const User = require("../models/user.model");

// error handling function
const validateSession = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const decoded = jwt.verify(token, process.env.JWT);

    const user = await User.findById(decoded.id);

    if (!user) throw new Error("not a valid user");

    req.user = user;

    return next();
  } catch (error) {
    res.json({ message: error.message });
  }
};

const validateClient = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const decoded = jwt.verify(token, process.env.JWT);

    const client = await Client.findById(decoded.id);

    if (!client) throw new Error("not a valid client");

    req.client = client;

    return next();
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = validateSession;
module.exports = validateClient;
