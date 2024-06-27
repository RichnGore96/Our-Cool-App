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

  // See all appointments
  router.get("/get-employee", async (req, res) => {
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
router.patch("/_employee", async (req,res) => {
    try {
    const { employee } = req.params

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


module.exports = router