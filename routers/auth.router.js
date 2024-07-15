const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller")



//Create a signup
router.post("/signup",authController.signup);



module.exports = router;