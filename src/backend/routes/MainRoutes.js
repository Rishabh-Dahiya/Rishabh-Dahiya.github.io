const express = require("express");
const mainController = require("../controller/MainController");
const signupController = require("../controller/SignupController");
const loginController = require("../controller/LoginController")
const router = express.Router();
const session = require("express-session");
const middle= require("../controller/middle");
const FunctionController = require("../controller/FunctionController");
const app = express();

router.route("/").get(mainController.login);
router.route('/index.ejs').get(middle.redirectprofile,mainController.index);
router.route("/doctor.ejs").get(middle.redirectprofile,mainController.doctor);
router.route("/healthy.ejs").get(middle.redirectprofile,mainController.healthy);
router.route("/about-hospital.ejs").get(middle.redirectprofile,mainController.about_hospital);
router.route("/about-doctor.ejs").get(middle.redirectprofile,mainController.about_doctor);
router.route("/faq.ejs").get(middle.redirectprofile,mainController.faq);
router.route("/hospital.ejs").get(middle.redirectprofile,mainController.hospital);
router.route("/query.ejs").get(middle.redirectprofile,mainController.query);
router.route("/treatment.ejs").get(middle.redirectprofile,mainController.treatment);
router.route("/tvastra-plus.ejs").get(middle.redirectprofile,mainController.tvastra_plus);
router.route("/otp-password.ejs").get(mainController.otp_password); 
router.route("/password-user.ejs").get(mainController.password_user);
router.route("/phone-login.ejs").get(mainController.phonelogin);
router.route("/logout.ejs").get(middle.redirectprofile,mainController.logout);
router.route("/dashboard.ejs").get(middle.redirectprofile,mainController.dashboard);
   
//post
router.route("/login.ejs").get(middle.redirectprofile,mainController.login);
router.route("/login").post(loginController.login);
router.route("/signup.ejs").get( mainController.signup);
router.route("/signup").post(signupController.signup);
router.route('/doctor-signup.ejs').get(middle.redirectprofile,mainController.doctor_signup);
router.route("/password-user").post(loginController.checkuserid);
router.route("/otp-password").post(loginController.changepassword);
router.route("/appointment.ejs").get(middle.redirectprofile,mainController.appointment);
router.route("/appointment").post(FunctionController.bookingappointment);
router.route("/contactus.ejs").get(middle.redirectprofile,mainController.contactus);
router.route("/feedbackmessages").post(FunctionController.feedbackmessage);
router.route("/askquery").post(FunctionController.askquery);
router.route("/uploadcv").post(FunctionController.cv)
router.route("/otp").get(mainController.otp);
router.route('/signup').get(mainController.signup);




module.exports = router;