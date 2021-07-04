const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userschema = new Schema({
    name:{
        type: String,
        allowNull: false
    },
    email:{
        type: String,
        unique: true,
        allowNull: false
    },
    password:{
        type: String,
        allowNull:false
    },
    number:{
        type: Number,
        allowNull:false,
        unique:true  
    },
    gender:{
        type: String,
        allowNull: false
    },
    dateofbirth:{
        type: Number,
        allowNull: false
    },
    city:{
        type: String,
        allowNull: false
    },
    state:{
        type: String,
        allowNull: false
    },

    country:{
        type: String,
        allowNull: false
    }
})

const signupdata = mongoose.model("Signupdata",userschema);
module.exports = signupdata; 