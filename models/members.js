// models/profile.js
const mongoose = require("mongoose");

const membersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  gender: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  address: { type: String, required: true },
  baptised: { type: String, required: true },
  file: { type: String }, // Assuming the file will be stored as a string representing the file path
});

module.exports = mongoose.model("Member", membersSchema);
