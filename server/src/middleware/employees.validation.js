const jwt = require("jsonwebtoken");
const Employee = require("../models/employees.model");
const SECRET = process.env.JWT;

const validateEmployeeSession = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
  
      const decoded = jwt.verify(token, process.env.JWT);
  
      const user = await Employee.findById(decoded.id);
  
      if (!user) throw new Error("not a valid user");
      req.user = user;
  
  
     return next();
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  module.exports = validateEmployeeSession;
  