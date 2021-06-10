const express = require("express");
const mainController = require("../controller/MainController");
const router = express.Router();
const session = require("express-session");
const app = express();

router.route("/").get(mainController.index);

router.route("/healthy").get(mainController.healthy);
router.route("/about_hospital").get(mainController.about_hospital);
router.route("/appointment").get(mainController.appointment);
router.route("/contactus").get(mainController.contactus);
router.route("/about_doctor").get(mainController.about_doctor);
router.route("/doctor").get(mainController.doctor);
router.route("/faq").get(mainController.faq);
router.route("/hospital").get(mainController.hospital);
router.route("/query").get(mainController.query);
router.route("/treatment").get(mainController.treatment);
router.route("/tvastra_plus").get(mainController.tvastra_plus);
   
module.exports = router;