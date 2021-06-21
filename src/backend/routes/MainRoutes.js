const express = require("express");
const mainController = require("../controller/MainController");
const signupController = require("../controller/SignupController");
const loginController = require("../controller/LoginController")
const router = express.Router();
const session = require("express-session");
const middle= require("../controller/middle");
const app = express();

router.route("/").get(mainController.index);
router.route("/doctor.ejs").get(mainController.doctor);
router.route("/healthy.ejs").get(mainController.healthy);
router.route("/about-hospital.ejs").get(mainController.about_hospital);
router.route("/appointment.ejs").get(mainController.appointment);
router.route("/contactus.ejs").get(mainController.contactus);
router.route("/about-doctor.ejs").get(mainController.about_doctor);
router.route("/faq.ejs").get(mainController.faq);
router.route("/hospital.ejs").get(mainController.hospital);
router.route("/query.ejs").get(mainController.query);
router.route("/treatment.ejs").get(mainController.treatment);
router.route("/tvastra-plus.ejs").get(mainController.tvastra_plus);
router.route("/otp.ejs").get(mainController.otp);
router.route("/otp-password.ejs").get(mainController.otp_password); 
   
//post
router.route("/login.ejs").get(middle.redirectprofile,mainController.login);
router.route("/login").post(loginController.login);
router.route("/signup.ejs").get(middle.redirectprofile, mainController.signup);
router.route("/signUp").post(signupController.signup);



module.exports = router;