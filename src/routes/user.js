"use strict";

const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const middlewares = require("../middlewares");

router.get("/", userController.listUsers); // List all users
router.get("/:id", userController.readUser); // Read a user by Id
router.get("/buyer/:id", userController.readBuyer); // Read a user by Id
router.get("/seller/:id", userController.readSeller); // Read a user by Id
router.put("/:id", userController.updateUser); // update a Item
router.delete(
    "/:id",
    middlewares.checkAuthentication,
    middlewares.checkIsAdmin,
    userController.deleteUser
); // Delete a user by Id, needs logged in user with the admin role

module.exports = router;