"use strict";

const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");
const middlewares = require("../middlewares");


router.post("/login", authController.login); // login
router.post("/register", authController.register); // register a new user


module.exports = router;
