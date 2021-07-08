"use strict";

const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order");
const middlewares = require("../middlewares");


router.post("/", orderController.createOrder); // create a Item
router.get("/:id",orderController.readOrder); // read a Item
//router.post("/:id", pickUpController.updatePickUp); // update a Item
//router.post("/:id", pickUpController.deletePickUp); // remove a Item


module.exports = router;
