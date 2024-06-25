require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

//middleware
const validateSession = require("./src/middleware/validate-session");
//controllers
const stylistController = require("./src/controllers/stylists.controller");
const clientController = require("./src/controllers/clients.controller");
const appointmentController = require("./src/controllers/appointments.controller");
const locationController = require("./src/controllers/locations.controller");
const reviewController = require("./src/controllers/review.controller");
// express and cors dependencies
app.use(cors());
app.use(express.json());

// require mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const MONGO = process.env.MONGODB;
const db = mongoose.connection;
mongoose.connect(`${MONGO}/Our-cool-App`);
db.once("open", () => {
  console.log(`Connected: ${MONGO}`);
});

//routes
app.use("/clients", clientController);

app.use("/stylists", stylistController, validateSession);


app.use("/appointments", appointmentController, validateSession);

app.use("/locations", locationController, validateSession);

app.use("/reviews", reviewController, validateSession);

app.listen(PORT, () => {
  console.log(`Server is on Port: ${PORT}`);
});
