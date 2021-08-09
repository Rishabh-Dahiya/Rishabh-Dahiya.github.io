const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userfeedback = new Schema({
  name: {
    type: String,
    allowNull: false,
  },
  email: {
    type: String,
    allowNull: false,
  },
  subject:{
    type: String,
    allowNull: false,
  },
  message: {
    type: String,
    allowNull: false,
  },
});

const askquery = new Schema({
  name: {
    type: String,
    allowNull: false,
  },
  email: {
    type: String,
    allowNull: false,
  },
  number : {
    type: String,
    allowNull : false
  },
  query: {
    type: String,
    allowNull: false,
  },
});


const message = mongoose.model("Appointments", userfeedback);
const query = mongoose.model("Queries", query);
module.exports = message;
