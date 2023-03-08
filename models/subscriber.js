const mongoose = require("mongoose");



const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required:true
  },
  address: {
    type: String,
    required:true
  },

});

module.exports = mongoose.model("subscriber", subscriberSchema);
