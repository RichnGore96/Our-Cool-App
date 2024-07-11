require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

//middleware
const validateSession = require("./src/middleware/validate-session");
const adminValidate = require("./src/middleware/admin-validate");

//controllers

//const stylistController = require("./src/controllers/Employees/stylists.controller");
const clientController = require("./src/controllers/Client/clients.controller");
const appointmentController = require("./src/controllers/General/appointments.controller");
const locationController = require("./src/controllers/General/locations.controller");
const reviewController = require("./src/controllers/General/review.controller");
const adminController = require("./src/controllers/Admin/admin-controller");
const employeeController = require("./src/controllers/Employees/employees.controller");

// express and cors dependencies
app.use(cors());
app.use(express.json());

// MongoDB
const mongoose = require("mongoose");
const validateClient = require("./src/middleware/validate-session");
const MONGO = process.env.MONGODB;
mongoose.set("strictQuery", false);
mongoose.connect(`${MONGO}/Our-cool-App`);

const db = mongoose.connection;
db.once("open", () => {
  console.log(`Connected: ${MONGO}`);
});

//routes
app.use("/clients", clientController);

//app.use("/stylists", stylistController, validateSession);

app.use(
  "/appointments",
  appointmentController,
  validateSession,
  adminValidate,
  validateClient
);

app.use("/locations", locationController, validateSession, adminValidate);

app.use("/reviews", reviewController, validateClient);
app.use("/admin", adminController, validateSession, adminValidate);
app.use("/employees", employeeController);

app.listen(PORT, () => {
  console.log(`Server is on Port: ${PORT}`);
});
