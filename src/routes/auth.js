"use strict";

const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");
const middlewares = require("../middlewares");


router.post("/login", authController.login); // login
router.post("/register", authController.register); // register a new user

router.get("/me", middlewares.checkAuthentication, authController.me); // get own username, requires a logged in user
router.get("/logout", middlewares.checkAuthentication, authController.logout); // logout user
module.exports = router;
