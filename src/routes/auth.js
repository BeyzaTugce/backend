"use strict";

const express = require("express");
const router = express.Router();

const authController = require("../controllers/authV2");
const middlewares = require("../middlewares");


router.post("/login", authController.login); // login
router.post("/register", authController.register); // register a new user

router.get("/user", middlewares.checkAuthentication,authController.user);
router.get("/buyerseller/:id", authController.buyerseller); // get own username, requires a logged in user
// router.get("/logout", authController.logout); // logout user
module.exports = router;
