"use strict";

const express = require("express");
const router = express.Router();

const pickUpController = require("../controllers/pickUp");
const middlewares = require("../middlewares");


router.post("/", pickUpController.createPickUp); // create a Item
router.post("/:id", pickUpController.readPickUp); // read a Item
//router.post("/:id", pickUpController.updatePickUp); // update a Item
//router.post("/:id", pickUpController.deletePickUp); // remove a Item


module.exports = router;
