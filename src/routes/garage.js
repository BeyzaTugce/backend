"use strict";

const express = require("express");
const router = express.Router();

const garageController = require("../controllers/garage");
const middlewares = require("../middlewares");


router.post("/", garageController.createGarage); // create a garage
router.post("/:id", garageController.readGarage); // read a garage
router.post("/:id", garageController.updateGarage); // update a garage
router.post("/:id", garageController.removeGarage); // remove a garage
router.post("/", garageController.listGarages); // list garages


module.exports = router;
