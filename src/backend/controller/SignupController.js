const linksignup = require("../database/userschema");
async function register(req,res){
    try {
        const registerUser = new linksignup.signupdata({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            gender : req.body.gender,
            dob : req.body.dob,
            number : req.body.number,
            city : req.body.city,
            state : req.body.state,
            country : req.body.country,

        })
        console.log("registerUser");
        const registered = await registerUser.save();
        res.status(201).render(login);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    register : register
}
