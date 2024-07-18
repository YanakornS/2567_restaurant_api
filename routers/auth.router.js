const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

//http://localhost:5000/api/v1/auth/

//Create a signup
router.post("/signup", authController.signup);

//Chack a signin
router.post("/signin", authController.signin);

module.exports = router;


