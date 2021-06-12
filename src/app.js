const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyparser = require("body-parser");
const session = require("express-session");
const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;


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


//parse request to body-parser
app.use(bodyparser.urlencoded({
    extended:true
}))


//setting view engine as ejs
app.set("view engine", 'ejs');


//for rendering ejs in html format.
app.engine("html", require("ejs").renderFile);


// For session
app.use(session({
    secret: "KonfinitySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        path: "/",
        httpOnly: true,
        secure: false,
        maxAge: null
    }
}));



// Create a new User in our database
app.post("/signup", async (req,res)=> {
   try {
   } catch (error) {
       res.status(400).send(error)
   }
});



app.listen(port,()=>{
    console.log(`Server is running at port number, ${port}`);
})
