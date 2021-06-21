const db = require("../database/conn");
const session = require("express-session")

module.exports={
    login: login
};


function login(req, res){
    const {email, password} = req.body;
    if(!(email && password))
        return res.render("login",{
            err: "Please enter all the required details"
        });
    else{
        db.collection('users').findOne({"email": email, "password":password},'*',function(err, result){ 
            if (err){
                console.log(err);
                throw err;
            } 
            else{
                if(result){
                    console.log("user successfully logged in "); 
                    req.flash("success","Login Successful ");
                    req.session.email= result.email;
                    req.session.name=result.name;
                    return res.render("index",{
                        messages : req.flash()
                    });
                }          
                else
                {
                    req.flash("error","Incorrect email or password");
                    res.render("login",{
                        messages : req.flash()
                    });
                    console.log("Incorrect email or password");
                }
            }
        });
    }
}

