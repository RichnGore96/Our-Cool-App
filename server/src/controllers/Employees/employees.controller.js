const router = require("express").Router();
const Employee = require("../models/employees.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT;

const errorResponse = (res, error) => {
    return res.status(200).json({
      Error: error.message,
    });
  };
// login
  router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body; // get email and password from request body
  
        const employees = await Employee.findOne({ email }); // find user
  
        // check if user exist
        if (!employees || !(await bcrypt.compare(password, employees.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
  
        // create token for our validated session
        const token = jwt.sign({ id: employees._id }, SECRET, { expiresIn: '1 day' });
  
        res.status(200).json({
            employees,
            message: `successfully logged In: ${email}`,
            token
        });
    } catch (error) {
        errorResponse(res, error);
    }
  });

  // See all appointments
  router.get("/get-employees", async (req, res) => {
    try {

        const getAllAppmts = await Appointment.find();

        getAllAppmts.length > 0 ?
            res.status(200).json({
                result: getAllAppmts
            }) : null

    } catch (err) {
        errorResponse(res,err);
    }
});

// manage appointments
router.patch("/_employees", async (req,res) => {
    try {
    const { employees } = req.params

    const appmtInfo = req.body;

    const update = await Appointment.findOneAndUpdate(
        {_id: employees}, 
        appmtInfo, 
        {new: true}
    )
    console.log(update);

    res.status(200).json({
        message: `${update.employees}'s appointment updated!`,
        update
    })

} catch (err) {
    errorResponse(res,err);
}

});
// add time


module.exports = router