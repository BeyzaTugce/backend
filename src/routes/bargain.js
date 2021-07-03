"use strict"

const express = require("express");
const router = express.Router();

const bargainController = require("../controllers/bargain");
const middlewares = require("../middlewares");

router.post("/:id", bargainController.createBargainOffer);
router.get("/", bargainController.getOfferHistory);
//router.post("/", bargainController.updateBargainOffer);


module.exports = router;
