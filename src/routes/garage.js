"use strict";

const express = require("express");
const router = express.Router();

const garageController = require("../controllers/garage");
const itemController = require("../controllers/item");
const middlewares = require("../middlewares");


router.post("/", garageController.createGarage); // create a garage
router.post("/:id", garageController.updateGarage); // update a garage
router.post("/:id", garageController.deleteGarage); // remove a garage
router.post("/", garageController.listGarages); // list garages
router.post("/item/:id", garageController.readItems); //get items in a garage
router.post("/item", garageController.createItem); //add an item
router.get("/seller/:id", garageController.readSeller); //get the user of the garage
router.get("/:id", garageController.readGarage);
router.get("/", garageController.readGarageByUser);


module.exports = router;
