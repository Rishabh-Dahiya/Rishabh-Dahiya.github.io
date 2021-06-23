
const db = require("../database/conn");
module.exports={
    signup: signup
};

function signup(req, res){
    const {name, email, password,number,gender, dateofbirth, city, state, country} = req.body;
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
            "country":country
        } 

        db.collection('users').findOne({"email": email},'*',function(err, result){
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
                        req.session.email= email;
                        req.session.name=name;
                        console.log(req.session.email,req.session.name);
                        res.render("login",{
                            messages : req.flash()
                        });
                    }
                          
                }); 
            }
        }
   })
}}