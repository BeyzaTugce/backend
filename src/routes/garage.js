"use strict";

const express = require("express");
const router = express.Router();

const garageController = require("../controllers/garage");


router.post("/", garageController.createGarage); // create a garage
router.put("/:id", garageController.updateGarage); // update a garage
router.post("/:id", garageController.deleteGarage); // remove a garage
router.get("/", garageController.listGarages); // list garages
router.get("/item/:id", garageController.readItems); //get items in a garage
router.get("/seller/:id", garageController.readSeller); //get the user of the garage
router.get("/:id", garageController.readGarage);
router.get("/user", garageController.readGarageByUser);
router.delete("/:id", garageController.deleteGarage); // remove a garage


module.exports = router;
