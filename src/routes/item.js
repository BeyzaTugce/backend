"use strict";

const express = require("express");
const router = express.Router();

const itemController = require("../controllers/item");
const middlewares = require("../middlewares");


router.post("/createItem", itemController.createItem); // create a Item
router.post("/readItem", itemController.readItem); // read a Item
router.post("/updateItem", itemController.updateItem); // update a Item
router.post("/removeItem", itemController.removeItem); // remove a Item
router.post("/listItems", itemController.listItems); // list Items


module.exports = router;
