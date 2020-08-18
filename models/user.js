const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  V_NV: {
    type: String,
    required: true
  }
});

const user = (module.exports = mongoose.model("user", userSchema));
