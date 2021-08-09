const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userschema = new Schema({
  name: {
    type: String,
    allowNull: false,
  },
  email: {
    type: String,
    unique: true,
    allowNull: false,
  },
  description: {
    type: String,
    allowNull: false,
  },
  image: {
    type: String,
  },
  hospital: {
    type: String,
    allowNull: false
   
  },
  achievement: {
    type: String,
    allowNull: false
  },
  qualification: {
    type: String,
    allowNull: false
  },
  awards: {
    type: String,
    allowNull: false
  },
  specialization: {
    type: String,
    allowNull: false
  },
  fees: {
    type: String,
    allowNull: false
  },
  password: {
    type: String,
    allowNull: false,
  },
  number: {
    type: Number,
    allowNull: false,
    unique: true,
  },
  gender: {
    type: String,
    allowNull: false,
  },
  dateofbirth: {
    type : String,
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

  country: {
    type: String,
    allowNull: false,
  },
  expierence: {
    type: String,
    allowNull: false,
  },
});

const docdetails = mongoose.model("DOCDETAIL", userschema);
module.exports = docdetails;
