"use strict";

const GarageModel = require("../models/garage");
const UserModel = require("../models/user");
const ItemModel = require("../models/item");

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
};

const readGarage = async (req, res) => {
    try {

        let garage = await GarageModel.findById(req.params.id);

        // if no garage with id is found, return 404
        if (!garage)
            return res.status(404).json({
                error: "No garage can found",
                message: `garage not found`,
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
    try {
        let garage = await GarageModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        ).exec();
        return res.status(200).json(garage);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const deleteGarage = async (req, res) => {
    try {
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
        return res.status(200).json({ garages: garages });
    } catch (err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const readItems = async (req, res) => {
    try {
        let garage = await GarageModel.findById(req.params.id);
        let items = await ItemModel.find({"garageId": garage.id}).exec();
        //console.log("ITEMS in controller:"+items);

        if (!items)
            return res.status(404).json({
                error: "Not Found",
                message: `Item not found`,
            });

        return res.status(200).json({ items: items });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const readSeller = async (req, res) => {
    try {
       let garage = await GarageModel.findById(req.params.id);
        let seller = await UserModel.findById(garage.user);
        if (!seller)
            return res.status(404).json({
                error: "Not Found",
                message: `Seller not found`,
            });
        return res.status(200).json(seller);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const readGarageByUser = async (req, res) => {
    try {
        let loggedInUser = await UserModel.findById(req.userId); //.select("garageId").exec();
        let garage = await GarageModel.find({user : loggedInUser._id});
        console.log(garage);
        console.log(loggedInUser);


        //let seller = await UserModel.findById(garage.user);
        if (!garage)
            return res.status(404).json({
                error: "Not Found",
                message: `Garage not found`,
            });
        return res.status(200).json(garage);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};




module.exports = {
    createGarage,
    updateGarage,
    deleteGarage,
    listGarages,
    readItems,
    readSeller,
    readGarage,
    readGarageByUser,
};