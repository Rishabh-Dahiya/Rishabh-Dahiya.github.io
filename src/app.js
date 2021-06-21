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


/*--------------------app use ---------------------------------------------------*/
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

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
        maxAge: null
    }
}));

app.use(flash());
// global variables. Creating our own middleware. Custom middleware coming from flash
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
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
