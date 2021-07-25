"use strict";

const express = require("express");
const router = express.Router();

const itemController = require("../controllers/item");


router.post("/", itemController.createItem); // create a Item
router.get("/:id", itemController.readItem); // read a Item
router.put("/:id", itemController.updateItem); // update a Item
router.delete("/:id", itemController.deleteItem); // remove a Item
router.get("/", itemController.listItems); // list Items


module.exports = router;
