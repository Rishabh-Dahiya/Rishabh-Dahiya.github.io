const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const session = require("express-session");
const mongoStore = require('connect-mongo');
const messages = require('express-messages');
const flash = require('connect-flash');
const db = require("./backend/database/conn");
const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;
const user = require('./backend/database/userschema');
const OtpManager = require("./OtpManager");
const otpRepository = require("./otpRepository");
const otpSender = require("./otpSender");


/*--------------------app use ---------------------------------------------------*/
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//for otp service

// For session
app.use(session({
    secret: "TvastraProject_session/id",
    resave: false,
    saveUninitialized: false ,
    store : mongoStore.create({
        mongoUrl :'mongodb://localhost:27017/tvastra'
    }),
    cookie: {
        path: "/",
        httpOnly: true,
        secure: false,
        maxAge: 1000*60     
    }
}));

app.use(flash());
// global variables. Creating our own middleware. Custom middleware coming from flash
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

const otpManager = new OtpManager(otpRepository, {
    otpLength: 4,
    validityTime: 4,
  });


  app.post("/otp/:token", async(req, res) => {

    const number = req.body.phonenum;

  
    db.collection('users').findOne({"number": number},'*',function(err,result){
        if(err){
            console.log(err);
            throw err;
        }

        else{
            if(result){
                console.log("user found "); 
                req.flash("success","user found");
                const otp = otpManager.create(req.params.token);
                req.body.recieverNumber =result.number;
                console.log("OTP send post");
                console.log(req.body);
                req.session.number={number};
                req.session.name=result.name;
                otpSender.send(otp, req.body);
                console.log(`Your token code is ${otp.token} and otp is ${otp.code}`);
                res.redirect('/otp');
            }          
            else
            {
                req.flash("error","User not present");
                res.render("signup",{
                    messages : req.flash()
                });
                console.log("Incorrect email or password");
            }
        }
    })
  
  });




  app.post("/verifyotp/:token", (req, res) => {
    var code = req.body.otp ;
    console.log(code);
    
    const verificationResults = otpManager.VerificationResults;
    const verificationResult = otpManager.verify(
      req.params.token,
      code
    );
    let statusCode;
    let bodyMessage;
  
    switch (verificationResult) {
      case verificationResults.valid:

        req.flash("success", "Welcome");
                req.flash("success", "Login Successfull");
        
        return res.redirect("/index");
        break;
      case verificationResults.notValid:
        req.session.destroy(()=>{
          console.log("session destroyed");
        });
        return res.redirect("/phonelogin");
        break;
      case verificationResults.checked:
        req.session.destroy(()=>{
          console.log("session destroyed");
        });
        return res.redirect("/phonelogin");
        break;
      case verificationResults.expired:
        req.session.destroy(()=>{
          console.log("session destroyed");
        });
        return res.redirect("/phonelogin");
        break;
      default:

        req.session.destroy(()=>{
          console.log("session destroyed");
        });
        return res.redirect("/phonelogin");
    }
    res.status(statusCode).send(bodyMessage);
  });

/*-------------------connection to controller and routes-------------------------*/
const Signupdetails = require("./backend/database/userschema")
const mainRoutes = require("./backend/routes/MainRoutes")
require("../src/backend/database/conn");


/*------------------------Setting it to public-------------------*/
app.set("views", __dirname+"/client/views");
app.use("/img",express.static(path.join(__dirname, "client/images")));
app.use("/css",express.static(path.join(__dirname, "client/css")));
app.use("/js",express.static(path.join(__dirname, "client/scripts")));
app.use("/font",express.static(path.join(__dirname, "client/fonts")));


// For routing 
app.use("/",mainRoutes);


//for logging purposes
app.use(logger("dev"));





//setting view engine as ejs
app.set("view engine", 'ejs');


//for rendering ejs in html format.
app.engine("html", require("ejs").renderFile);


   

app.listen(port,()=>{
    console.log(`Server is running at port number, ${port}`);
})
