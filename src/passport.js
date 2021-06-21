const passport = require('passport');
const LocalStratergy = require('passport-local').Strategy;
const db = require('./backend/database/conn');
const User = db.models.users;

const verifyCallback = (email,password,done)=>{
    
};

const stratergy = new LocalStratergy();