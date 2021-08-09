const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userappointment = new Schema({
  name: {
    type: String,
    allowNull: false,
  },
  city: {
    type: String,
    allowNull: false,
  },
  state: {
    type: String,
    allowNull: false,
  },
  number: {
    type: Number,
    allowNull: false,
  },
  gender: {
    type: String,
    allowNull: false,
  },
  dateofbirth: {
    type: String,
    allowNull: false,
  },
  appointdate: {
    type: String,
    allowNull: false,
  },
  instance: {
    type: String,
    allowNull: false,
  },
  status: {
    type: String,
    allowNull: false,
  },
  prevrecord: {
    type: String,
  },
  appointdetails: {
    type: String,
    allowNull: false,
  },
});

const appointment = mongoose.model("Appointments", userappointment);
module.exports = appointment;
