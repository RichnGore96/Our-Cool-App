const router = require("express").Router();
const Review = require("../models/review.model");


// error handling function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};

router.post("/post-review", async (req, res) => {
  try {
    const { review } = req.body;
    const newReview = new Review({
      review,
      owner_id: req.client._id,
    });
    const savedReview = await newReview.save();
    res.status(200).json(savedReview);
  } catch (error) {
    // error handling
    errorResponse(res, error);
  }
});

router.get("/get-review", async (req, res) => {
  try {
    const review = await review.find();
    res.status(200).json(review);
  } catch (error) {
    // error handling
    errorResponse(res, error);
  }
});

module.exports = router;
