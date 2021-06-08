const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const port = process.env.PORT || 3000;
require("../src/backend/database/conn");


app.set("views", __dirname+"/client/views");
app.use(express.static(path.join(__dirname, "client/assets")));
app.use(express.static(path.join(__dirname, "client/fonts")));
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
app.get("/doctor",(req,res)=> {
    res.render("doctor")
});
app.get("/hospital",(req,res)=> {
    res.render("hospital")
});
app.get("/treatment",(req,res)=> {
    res.render("treatment")
});
app.get("/login",(req,res)=> {
    res.render("login")
});
app.get("/signup",(req,res)=> {
    res.render("signup")
});
app.get("/healthy",(req,res)=> {
    res.render("healthy")
});


app.listen(port,()=>{
    console.log('server is running at port number 3000');
})