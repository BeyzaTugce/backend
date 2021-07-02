"use strict";

const express = require("express");
const router = express.Router();

const itemController = require("../controllers/item");
const middlewares = require("../middlewares");


router.post("/createGarage", authController.createGarage); // create a garage
router.post("/readGarage", authController.readGarage); // read a garage
router.post("/updateGarage", authController.updateGarage); // update a garage
router.post("/removeGarage", authController.removeGarage); // remove a garage
router.post("/listGarages", authController.listGarages); // list garages


module.exports = router;
