"use strict";

const UserModel = require("../models/user");

const readUser = async (req, res) => {
    try {
        let user = await UserModel.findById(req.params.id).exec();

        if (!user)
            return res.status(404).json({
                error: "Not Found",
                message: `User not found`,
            });

        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal Server Error",
            message: err.message,
        });
    }
};


const updateUser = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });
    }
    try {
        let user = await UserModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        ).exec();
        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        await UserModel.findByIdAndRemove(req.params.id).exec();
        return res
            .status(200)
            .json({ message: `User with id${req.params.id} was deleted` });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const listUsers = async (req, res) => {
    try{
        let users = await UserModel.find({}).exec();
        return res.status(200).json({ users: users });
    } catch (err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
}

const readSeller = async (req, res) => {
    try {
        let user = await UserModel.findById(req.params.id).exec();

        if (!user)
            return res.status(404).json({
                error: "Not Found",
                message: `User not found`,
            });

        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal Server Error",
            message: err.message,
        });
    }
};

const readBuyer = async (req, res) => {
    try {
        let user = await UserModel.findById(req.params.id).exec();

        if (!user)
            return res.status(404).json({
                error: "Not Found",
                message: `User not found`,
            });

        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal Server Error",
            message: err.message,
        });
    }
};



module.exports = {
    readUser,
    updateUser,
    deleteUser,
    listUsers,
    readSeller,
    readBuyer,
};