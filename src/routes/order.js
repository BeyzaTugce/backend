"use strict";

const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order");

router.post("/", orderController.createOrder);
router.put("/:id", orderController.updateOrder);
router.post("/:id", orderController.deleteOrder);
router.get("/:id",orderController.readOrder);
router.get("/item/:id", orderController.readItems);
router.get("/", orderController.readOrderByUser);


module.exports = router;
