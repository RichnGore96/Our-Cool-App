const router = require("express").Router();
const Location = require("../models/location.model");

// error handling function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};

router.post("/add-location", async (req, res) => {
  try {
    const { salon, address } = req.body;
    const newLocation = new Location({
      salon,
      address,
    });
    const savedLocation = await newLocation.save();
    res.status(200).json(savedLocation);
  } catch (error) {
    // error handling
    errorResponse(res, error);
  }
});

router.get("/get-locations", async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    // error handling
    errorResponse(res, error);
  }
});

module.exports = router;
