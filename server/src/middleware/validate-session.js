const jwt = require("jsonwebtoken");
const User = require("../models/stylists.model");

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

module.exports = validateSession;
