"use strict"

const express = require("express");
const router = express.Router();

const bargainController = require("../controllers/bargain");

router.post("/:id", bargainController.createBargainOffer);
router.get("/:id", bargainController.getOfferHistory);
router.delete("/:id", bargainController.withdrawBargainOffer);


module.exports = router;
