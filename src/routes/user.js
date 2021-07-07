"use strict";

const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const middlewares = require("../middlewares");

router.get("/", userController.listUsers); // List all users
router.get("/:id", userController.readUser); // Read a user by Id
router.put(
    "/:id",
    middlewares.checkAuthentication,
    userController.updateUser
); // Update a user by Id, needs logged in user
router.delete(
    "/:id",
    middlewares.checkAuthentication,
    middlewares.checkIsAdmin,
    userController.deleteUser
); // Delete a user by Id, needs logged in user with the admin role

module.exports = router;