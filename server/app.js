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
app.use("/stylists", stylistController, validateSession);

app.use("/clients", clientController);

app.listen(PORT, () => {
  console.log(`Server is on Port: ${PORT}`);
});
