"use strict";

const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order");
const itemController = require("../controllers/item");
const middlewares = require("../middlewares");


router.post("/", orderController.createOrder);
router.put("/:id", orderController.updateOrder);
router.post("/:id", orderController.deleteOrder);
router.get("/:id",orderController.readOrder);
router.get("/item/:id", orderController.readItems);
//router.get("/seller/:id", orderController.readSeller);
router.get("/", orderController.readOrderByUser);
//router.post("/:id", pickUpController.updatePickUp); // update a Item
//router.post("/:id", pickUpController.deletePickUp); // remove a Item


module.exports = router;
