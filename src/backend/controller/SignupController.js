
const db = require("../database/conn");
const multer=require('multer');
const signupdata = require("../database/userschema");

function signup(req, res){
    const {name, email, password,number,gender, dateofbirth, city, state, country,isdoctor} = req.body;
    if(!(name && email && password))
        return res.render("signup",{
            msg: "Please enter all the required details"
        });
    else{
        var data = { 
            "name": name, 
            "email":email, 
            "password":password, 
            "number":number,
            "gender":gender,
            "dateofbirth":dateofbirth,
            "city":city,
            "state":state,
            "country":country,
            "isdoctor":isdoctor
        } 

        db.collection('users').findOne({"email": email , "number":number},'*',function(err, result){
            if(err){
             console.log(err);
             throw err;
            }
            else{
                if(result){
                   console.log("user already present");
                   req.flash("warning","Please try with different email");
                   res.render("signup",{
                    messages : req.flash()
                   });
                }          
            else {
                db.collection('users').insertOne(data,function(err, collection){ 
                    if (err){
                        console.log(err);
                        throw err;
                    } 
                    else{
                        console.log("Record inserted Successfully"+collection); 
                        req.flash("success","Record inserted succesfully");
                        res.render("login",{
                            messages : req.flash()
                        });
                    }
                          
                }); 
            }
        }
   })
}}


module.exports={
    signup: signup
};