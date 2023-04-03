const mongoose = require("mongoose");
const { roles } = require("../Utils/constante");

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  adress: {
    type: "String",
    required: true,
  },
  phoneNumber: {
    type: "Number",
    required: true,
  },
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: [roles.admin, roles.client],
    default: roles.client,
  },
  status:{
    type: "string",
  }
});

module.exports = mongoose.model("Users", userSchema);
