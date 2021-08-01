const db = require("../database/conn");
const multer = require("multer");
const signupdata = require("../database/doctordetails");

function signup(req, res) {
  const {
    name,
    email,
    password,
    number,
    gender,
    dateofbirth,
    city,
    state,
    country,
    isdoctor,
  } = req.body;

  if (!(name && email && password))
    return res.render("signup", {
      msg: "Please enter all the required details",
    });
  else {
    var data = {
      name: name,
      email: email,
      password: password,
      number: number,
      gender: gender,
      dateofbirth: dateofbirth,
      city: city,
      state: state,
      country: country,
      isdoctor: isdoctor,
    };

    db.collection("users").findOne(
      { email: email, number: number },
      "*",
      function (err, result) {
        if (err) {
          console.log(err);
          throw err;
        } else {
          if (result) {
            console.log("user already present");
            req.flash("warning", "Please try with different email");
            res.render("signup", {
              messages: req.flash(),
            });
          } else {
            db.collection("users").insertOne(data, function (err, collection) {
              if (err) {
                console.log(err);
                throw err;
              } else {
                console.log("checking is doctor " + isdoctor);
                if (isdoctor) {
                    req.session.name = data.name;
                    req.session.email = data.email;
                    req.session.number = data.number;
                    req.session.city = data.city;
                    req.session.state = data.state;
                    req.session.country = data.country;
                    req.session.dateofbirth = data.dateofbirth;
                    req.session.gender = data.gender;
                    console.log("this is before rendering doctoro-signup " + data.name);
                 res.render("doctor-signup");
                } else {
                  console.log("Record inserted Successfully" + collection);
                  req.flash("success", "Record inserted succesfully");
                  res.render("login", {
                    messages: req.flash(),
                  });
                }
              }
            });
          }
        }
      }
    );
  }
}

const docdetailsregister = async (req, res) => {
    const {
      description,
      hospital,
      achievement,
      qualification,
      awards,
      specialization,
      fees,
      experience,
    } = req.body;
    console.log("this is req.boyd " + req.body)
    const email = req.session.email;
    try {
        console.log("inside try block");
      const user = new signupdata({
        description :description,
        hospital:hospital,
        achievement:achievement,
        experience:experience,
        qualification:qualification,
        awards:awards,
        specialization:specialization,
        fees:fees,  
        name: req.session.name,
        email: req.session.email,
        city: req.session.city,
        gender: req.session.gender,
        dateofbirth: req.session.dateofbirth,
        number: req.session.number,
        state: req.session.state,
        city: req.session.city,
        country: req.session.country,
      });
      console.log("this is the fees " + req.body.fees);
      const register = await user.save();
      if (register) {
        req.session.description = description;
        req.session.hospital = hospital;
        req.session.achievement = achievement;
        req.session.experience = experience;
        req.session.qualification = qualification;
        req.session.awards = awards;
        req.session.specialization = specialization;
        req.session.fees = fees;
        console.log("saved successfully" + description);
        req.flash("success", "Welcome");
        req.flash("success", "Signup Successfull");
        return res.redirect("/index");
      }
    } catch (err) {
      console.log(err);
      return res.redirect("/docdetails");
    }
  };
module.exports = {
  signup: signup,
  docdetailsregister: docdetailsregister
};
