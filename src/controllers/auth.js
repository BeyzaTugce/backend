"use strict";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const config = require("../config");
const UserModel = require("../models/user");



const login = async (req, res) => {
    res.send("LOGIN");
};


const register = async (req, res) => {
    // check if the body of the request contains all necessary properties
    if(!Object.prototype.hasOwnProperty.call(req.body, "password"))
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body must contain a password property",
        });

    if(!Object.prototype.hasOwnProperty.call(req.body, "userName"))
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body must contain a user name property",
        });

    if(!Object.prototype.hasOwnProperty.call(req.body, "email"))
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body must contain a email property",
        });
    
    try {
        // hash the password before storing it in the database
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        
        const user = {
            userName: req.body.userName,
            password: hashedPassword,
            email: req.body.email,
        };

        // create the user in the database
        let retUser = await UserModel.create(user);
        // if user is registered without errors
        // create a token
        const token = jwt.sign(
            {
                _id: retUser._id,
                userName: retUser.username,
                email: retUser.email,
            },
            config.JwtSecret,
            {
                expiresIn: 86400, // expires in 24 hours
            }
        );

        // return generated token
        res.status(200).json({
            token: token,
        });
    } catch (err) {
        if (err.code == 11000) {
            return res.status(400).json({
                error: "User exists",
                message: err.message,
            });
        } else {
            return res.status(500).json({
                error: "Internal server error",
                message: err.message,
            });
        }
    }
};


const logout = async (req, res) => {
    res.status(200).send({ token: null });
};


module.exports = {
    login,
    register,
    logout,
};