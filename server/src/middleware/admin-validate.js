const jwt = require("jsonwebtoken");
const Employee = require("../models/employee.model");

// Error handling function
const validateAdminSession = async (req, res, next) => {
try {
    const token = req.headers.authorization;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const employee = await Employee.findById(decoded.id);

    // if (!employee) {
    // throw new Error("Not a valid employee");
    // }

    if (!employee.ifAdmin) {
    throw new Error("Not authorized as admin");
    }

    req.employee = employee;
    return next();
} catch (error) {
    res.status(401).json({ message: error.message });
}
};

module.exports = validateAdminSession;