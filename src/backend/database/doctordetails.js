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
    description:{
        type:String,
        unique:false,
        allowNull: false
    },
    image:{
        type:String
    },
    hospital:{
        type:String,
        required: true
    },
    achievement:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    awards:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    },
    fees:{
        type:String,
        required:true
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

const docdetails = mongoose.model("DOCDETAIL",userschema);
module.exports = docdetails; 