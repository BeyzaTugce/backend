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
router.post("/item/:id", garageController.getItems); //get items in a garage
router.post("/user/:id", garageController.getUser); //get the user of the garage


module.exports = router;
