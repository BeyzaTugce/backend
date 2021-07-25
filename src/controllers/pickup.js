"use strict";

const PickUpModel = require("../models/pickup");


const createPickUp = async (req, res) => {
    if (Object.keys(req.body).length === 0)
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });

    try{
        let pickup = await PickUpModel.create(req.body);
        return res.status(201).json(pickup);
    }catch (err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const readPickUp = async (req, res) => {
    try {
        let pickup = await PickUpModel.findById(req.params.id).exec();

        if (!pickup)
            return res.status(404).json({
                error: "Not Found",
                message: `pickup not found`,
            });

        return res.status(200).json(pickup);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal Server Error",
            message: err.message,
        });
    }
};


const updatePickup = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });
    }
    try {
        let pickup = await PickUpModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        ).exec();
        return res.status(200).json(pickup);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const deletePickUp = async (req, res) => {
    try {
        await PickUpModel.findByIdAndRemove(req.params.id).exec();
        return res
            .status(200)
            .json({ message: `PickUp with id${req.params.id} was deleted` });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};



module.exports = {
    createPickUp,
    readPickUp,
    updatePickup,
    deletePickUp,
};