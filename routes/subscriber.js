const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

const cleanBody = require("../middlewares/cleanBody");
const mongoose = require("mongoose");


router.post("/", async (req, res) => {
  try {
  
    console.log('req',req.body)
    let subscriber = new Subscriber({
      email: req.body.email,
      address: req.body.address,
    
    });
    console.log('Subscriber',subscriber)

    const newSubscriber = await subscriber.save();
    return res.status(200).json({
      success: true,
      message: "Done!",
      subscribe: newSubscriber,
    });

    // return res.redirect("/")
  } catch (error) {
    console.error("signup-error", error);
    return res.json({
      error: true,
      message: "Cannot Register",
    });
  }
});




module.exports = router;
