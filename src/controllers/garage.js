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

        // return gotten movie
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

const deleteGarage = async (req, res) => {
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
};

//TODO: Do not use that anymore instead use createItem in Item model
const createItem = async (req, res) => {
    try {
        let garageId = req.params.id;

        let itemObject = {
            garageId: garageId,
            name: req.params.name,
            info: req.params.info,
            tags: req.params.tags,
            price: req.params.price,
            image: req.params.image,
        };
        await GarageModel.findByIdAndUpdate(garageId, {
            $push: { items: itemObject },
        });
    } catch (err) {
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
        console.log("GARAGE:"+garage);
        console.log("ITEMS:"+items);

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




module.exports = {
    createGarage,
    updateGarage,
    deleteGarage,
    listGarages,
    readItems,
    createItem,
    readSeller,
    readGarage,
};