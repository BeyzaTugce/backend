"use strict";

const GarageModel = require("../models/garage");


const createGarage = async (req, res) => {
    if (Object.keys(req.body).length === 0)
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });

    try{
        let garage = await GarageModel.create(req.body);
        return res.status(201).json(garage);
    }catch (err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
}

const readGarage = async (req, res) => {
    try {
        let garage = await GarageModel.findById(req.params.id).exec();

        if (!garage)
            return res.status(404).json({
                error: "Not Found",
                message: `Garage not found`,
            });

        return res.status(200).json(garage);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal Server Error",
            message: err.message,
        });
    }
};


const updateGarage = async (req, res) => {
    // check if the body of the request contains all necessary properties
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });
    }

    // handle the request
    try {
        // find and update garage with id
        let garage = await GarageModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        ).exec();

        // return updated movie
        return res.status(200).json(garage);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const removeGarage = async (req, res) => {
    try {
        // find and remove garage
        await GarageModel.findByIdAndRemove(req.params.id).exec();
        return res
            .status(200)
            .json({ message: `Garage with id${req.params.id} was deleted` });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const listGarages = async (req, res) => {
    try{
        let garages = await GarageModel.find({}).exec();
        return res.status(200).json(garages);
    } catch (err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
}


module.exports = {
    createGarage,
    readGarage,
    updateGarage,
    removeGarage,
    listGarages,
};