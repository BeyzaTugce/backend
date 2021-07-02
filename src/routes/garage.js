"use strict";

const express = require("express");
const router = express.Router();

const garageController = require("../controllers/garage");
const middlewares = require("../middlewares");


router.post("/createGarage", garageController.createGarage); // create a garage
router.post("/readGarage", garageController.readGarage); // read a garage
router.post("/updateGarage", garageController.updateGarage); // update a garage
router.post("/removeGarage", garageController.removeGarage); // remove a garage
router.post("/listGarages", garageController.listGarages); // list garages


module.exports = router;
