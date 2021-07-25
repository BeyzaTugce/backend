"use strict";

const express = require("express");
const router = express.Router();

const pickUpController = require("../controllers/pickUp");

router.post("/", pickUpController.createPickUp);
router.get("/:id", pickUpController.readPickUp);


module.exports = router;
