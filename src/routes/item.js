"use strict";

const express = require("express");
const router = express.Router();

const itemController = require("../controllers/item");
const middlewares = require("../middlewares");


router.post("/", itemController.createItem); // create a Item
router.post("/:id", itemController.readItem); // read a Item
router.post("/:id", itemController.updateItem); // update a Item
router.post("/:id", itemController.deleteItem); // remove a Item
router.post("/", itemController.listItems); // list Items


module.exports = router;
