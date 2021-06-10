function signup(req,res){
    res.render("signup");
}
function login(req, res){
    res.render("login.ejs", {err:"some error with main controller"});
}
function healthy(req, res){
    res.render("healthy");
}

function about_hospital(req, res){
    res.render("about-hospital");
}
function index(req,res){
    res.render("index");
}

function appointment(req,res){
    res.render("appointment");
}

function contactus(req, res){
    res.render("contactus");
}

function about_doctor(req, res){
    res.render("about-doctor");
}

function doctors(req, res){
    res.render("doctor");
}

function faq(req, res){
    res.render("faq");
}
function hospital(req, res){
    res.render("hospital");
}
function query(req, res){
    res.render("query");
}
function treatment(req, res){
    res.render("treatment");
}
function tvastra_plus(req, res){
    res.render("tvastra-plus");
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
    doctors:doctors,
    treatment:treatment,
    query:query,
    healthy:healthy,
    contactus:contactus
};