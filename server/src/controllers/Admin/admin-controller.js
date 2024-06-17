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
const Employee = require("../../models/employee.model")

//Error Function
const errorResponse = (res, error) => {
    return res.status(500).json({
      Error: error.message,
    });
  };

router.post("/add-employee", async (req,res) =>{
    
})