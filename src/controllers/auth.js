"use strict";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const config = require("../config");




const login = async (req, res) => {
    res.send("LOGIN");
};


const register = async (req, res) => {
    res.send("REGISTER");
};


const logout = async (req, res) => {
    res.send("LOGOUT");
};


module.exports = {
    login,
    register,
    logout,
};