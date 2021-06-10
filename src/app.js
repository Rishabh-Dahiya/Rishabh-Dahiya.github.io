const express = require("express");
const path = require("path");
const router = express.Router();
const logger = require("morgan");
const app = express();
const session = require("express-session");
const port = process.env.PORT || 3000;
require("../src/backend/database/conn");
const Signupdetails = require("./backend/database/userschema")
const mainRoutes = require("./backend/routes/MainRoutes")

app.set("views", __dirname+"/client/views");
app.use(express.static(path.join(__dirname, "client/assets")));
app.use(express.static(path.join(__dirname, "client/css")));
app.use(express.static(path.join(__dirname, "client/javascript")));

//setting view engine as ejs
app.set("view engine", 'ejs');

//for rendering ejs in html format.
app.engine("html", require("ejs").renderFile);


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
app.get("/",(req,res)=> {
    res.render("index")
});

//for logging purposes
app.use(logger("dev"));

// Create a new User in our database
app.post("/signup", async (req,res)=> {
   try {
   } catch (error) {
       res.status(400).send(error)
   }
});


// For routing 
app.use("/",mainRoutes);

function index(req,res)
{
    res.render("index");
}

router.route("/").get(index);
app.use("/",index);

app.listen(port,()=>{
    console.log(`Server is running at port number, ${port}`);
})
module.exports = app;