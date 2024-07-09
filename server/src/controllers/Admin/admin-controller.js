/* Controller properties:
- MUST have admin position AND admin validate session token.
- Adds employees to roster.
- Removes employees from roster.
- Can view and change employee schedules by name or ID.
- Can view all employee appointments and change if needed.
*/

const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT;
const Employee = require("../../models/employee.model");
const Appointment = require("../../models/appointments.model");
const Schedule = require("../../models/schedule.model");
// const adminValidate = require('../../middleware/admin-validate')
// const validateSession = require('../../middleware/validate-session')

//Error Function
const errorResponse = (res, error) => {
return res.status(500).json({
Error: error.message,
});
};

// Add Employees
router.post("/", async (req, res) => {
try {
const { firstName, lastName, startDate, email, ifAdmin } = req.body;

const employees = new Employee({
    firstName,
    lastName,
    startDate,
    email,
    ifAdmin,
});

const newEmployee = await employees.save();

res.status(200).json({
    result: newEmployee,
    message: `${newEmployee.firstName} successfully added to system.`,
});
} catch (err) {
errorResponse(res, err);
}
});

// Remove Employees
router.delete("/:id", async (req, res) => {
try {
const { id } = req.params;

const deleteEmployee = await Employee.deleteOne({ _id: id });

deleteEmployee.deletedCount
    ? res.status(200).json({
        message: `${Employee.firstName}+${Employee.lastName} has been removed from the system.`,
    })
    : res.status(404).json({
        message: `Information not found.`,
    });
} catch (err) {
errorResponse(res, err);
}
});

// Display All Appointments
router.get("/appointments", async (req, res) => {
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

// Change One Appointment
router.patch("/_id", async (req, res) => {
try {
const { id } = req.params;

const appmtInfo = req.body;

const update = await Appointment.findOneAndUpdate(
    { _id: id },
    appmtInfo,
    { new: true }
);
console.log(update);

res.status(200).json({
    message: `${update.client}'s appointment updated!`,
    update,
});
} catch (err) {
errorResponse(res, err);
}
});

//Display All Schedules
router.get("display-schedules", async (req, res) => {
try {
const getAllShifts = await Schedule.find();

getAllShifts.length > 0
    ? res.status(200).json({
        result: getAllShifts,
    })
    : null;
} catch (err) {
errorResponse(res, err);
}
});

// Change One Schedule
router.patch("/:id", async (req, res) => {
try {
const { id } = req.params;

const info = req.body;

const update = await Schedule.findOneAndUpdate({ _id: id }, info, {
    new: true,
});
console.log(update);

res.status(200).json({
    message: `${update.firstName}'s schedule updated!`,
    update,
});
} catch (err) {
errorResponse(res, err);
}
});

//Create Schedule
router.post("/", async (req, res) => {
try {
const { firstName, lastInit, date, shiftStart, shiftEnd } = req.body;


const schedule = new Schedule({
    firstName,
    lastInit,
    date,
    shiftStart,
    shiftEnd,
});

const newSchedule = await schedule.save();

res.status(200).json({
    result: newSchedule,
    message: `${newSchedule.firstName} successfully added to system.`,
});
} catch (err) {
errorResponse(res, err);
}
});

module.exports = router;
