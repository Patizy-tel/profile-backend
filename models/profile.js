// models/profile.js
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String }, // Assuming the file will be stored as a string representing the file path
});

module.exports = mongoose.model("Profile", profileSchema);
