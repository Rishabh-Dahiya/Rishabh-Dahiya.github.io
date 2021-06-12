const express = require("express");
const mainController = require("../controller/MainController");
const signupController = require("../controller/SignupController");
const router = express.Router();
const session = require("express-session");
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
router.route("/login.ejs").get(mainController.login);
router.route("/signup.ejs").get(mainController.signup);
   


// API 
route.post('/api/users/',signupController.create);
module.exports = router;