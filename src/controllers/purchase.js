"use strict";

const PurchaseModel = require("../models/purchase");


const createPurchase = async (req, res) => {
    if (Object.keys(req.body).length === 0)
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });

    try{
        let purchase = await PurchaseModel.create(req.body);
        return res.status(201).json(purchase);
    }catch (err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const readPurchase = async (req, res) => {
    try {
        let purchase = await PurchaseModel.findById(req.params.id).exec();

        if (!purchase)
            return res.status(404).json({
                error: "Not Found",
                message: `purchase not found`,
            });

        return res.status(200).json(purchase);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal Server Error",
            message: err.message,
        });
    }
};


const updatePurchase = async (req, res) => {
    
    // check if the body of the request contains all necessary properties
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });
    }

    // handle the request
    try {
        //console.log( "dsa"+ req.body._id);
        // find and update garage with id
        let purchase = await PurchaseModel.findByIdAndUpdate(
            req.body._id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        ).exec();

        // return updated movie
        return res.status(200).json(purchase);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const deletePurchase = async (req, res) => {
    try {
        // find and remove garage
        await PurchaseModel.findByIdAndRemove(req.params.id).exec();
        return res
            .status(200)
            .json({ message: `Purchase with id${req.params.id} was deleted` });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const listPurchases = async (req, res) => {
    try{
        let purchases = await PurchaseModel.find({}).exec();
        return res.status(200).json({ purchases: purchases });
    } catch (err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};



module.exports = {
    createPurchase,
    readPurchase,
    updatePurchase,
    deletePurchase,
    listPurchases,
};