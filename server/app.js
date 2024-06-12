require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//Controllers

// MongoDB
const mongoose = require("mongoose");
const MONGO = process.env.MONGODB;
mongoose.set("strictQuery", false);
mongoose.connect(`${MONGO}/Our-cool-App`);

const db = mongoose.connection;
db.once("open", () => {
  console.log(`Connected: ${MONGO}`);
});

app.listen(PORT, () => {
console.log(`Server is on Port: ${PORT}`);
});
