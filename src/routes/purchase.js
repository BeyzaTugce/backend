"use strict";

const express = require("express");
const router = express.Router();

const purchaseController = require("../controllers/purchase");
const middlewares = require("../middlewares");


router.post("/", purchaseController.createPurchase); // create a purchase
router.get("/:id", purchaseController.readPurchase); // read a purchase
router.get("/", purchaseController.listPurchases); // list garages
router.put("/", purchaseController.updatePurchase); // update a Item


module.exports = router;
