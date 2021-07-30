function signup(req,res){
    if(!req.session.email){
        res.render("signup");
         }
         else{
             req.flash("error","Please logout first");
             res.render("index",{
                 messages : req.flash(),
                 username : res.name
             })
         }
}

function doctor_signup(req,res){
    res.render("doctor-signup")
}
function login(req, res){
    if(!req.session.email){
   res.render("login");
    }
    else{
        req.flash("error","Please logout first");
        res.render("index",{
            messages : req.flash(),
            username : req.session.name
        })
    }
}
function logout(req,res){
    
    req.session.destroy();
    console.log("session destroyed");
    res.render("login");
}
function healthy(req, res){
    
    res.render("healthy",{
        username : res.name,sessionnumber : res.number
    });
}

function about_hospital(req, res){
    
    res.render("about-hospital",{
        username : res.name,sessionnumber : res.number
    });
}
function index(req,res){
    console.log(req.session);
    if (req.session.email || req.session.user)
    {
    res.render("index");
    }   
    else{
        console.log("session not found");
    res.render("login")
    }
}


function doctor(req, res){
    
    res.render("doctor",{
        username : res.name,sessionnumber : res.number
    });
}
function appointment(req,res){
    
    res.render("appointment",{
        username : res.name,sessionnumber : res.number
    });
}

function contactus(req, res){
    
    res.render("contactus",{
        username : res.name,sessionnumber : res.number
    });
}

function about_doctor(req, res){
    
    res.render("about-doctor",{
        username : res.name,sessionnumber : res.number
    });
}


function faq(req, res){
    
    res.render("faq",{
        username : res.name,sessionnumber : res.number
    });
}
function hospital(req, res){
    
    res.render("hospital",{
        username : res.name,sessionnumber : res.number
    });
}
function query(req, res){
    
    res.render("query",{
        username : res.name,sessionnumber : res.number
    });
}
function treatment(req, res){
    
    res.render("treatment",{
        username : res.name,sessionnumber : res.number
    });
}
function tvastra_plus(req, res){
    
    res.render("tvastra-plus",{
        username : res.name,sessionnumber : res.number
    });
}
function otp(req,res){
    res.render("otp");
}
function otp_password(req,res){
    res.render("otp-password")
}
function password_user(req,res){
    res.render("password-user");
}
function phonelogin(req,res){
    res.render("phonelogin")
}


module.exports = {
    login:login,
    signup:signup,
    index:index,
    tvastra_plus:tvastra_plus,
    about_hospital:about_hospital,
    about_doctor:about_doctor,
    faq:faq,
    hospital:hospital,
    doctor:doctor,
    treatment:treatment,
    query:query,
    healthy:healthy,
    contactus:contactus,
    appointment:appointment,
    otp:otp,
    otp_password:otp_password,
    phonelogin:phonelogin,
    logout:logout,
    password_user:password_user,
    doctor_signup:doctor_signup
};