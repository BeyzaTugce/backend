"use strict";

const ItemModel = require("../models/item");


const createItem = async (req, res) => {
    if (Object.keys(req.body).length === 0)
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });

    try{
        let item = await ItemModel.create(req.body);
        return res.status(201).json(item);
    }catch (err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
}

const readItem = async (req, res) => {
    try {
        let item = await ItemModel.findById(req.params.id).exec();

        if (!item)
            return res.status(404).json({
                error: "Not Found",
                message: `Item not found`,
            });

        return res.status(200).json(item);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal Server Error",
            message: err.message,
        });
    }
};


const updateItem = async (req, res) => {
    // check if the body of the request contains all necessary properties
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });
    }

    // handle the request
    try {
        // find and update item with id
        let item = await ItemModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        ).exec();

        // return updated movie
        return res.status(200).json(item);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const removeItem = async (req, res) => {
    try {
        // find and remove item
        await ItemModel.findByIdAndRemove(req.params.id).exec();
        return res
            .status(200)
            .json({ message: `Item with id${req.params.id} was deleted` });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const listItems = async (req, res) => {
    try{
        let items = await ItemModel.find({}).exec();
        return res.status(200).json(items);
    } catch (err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
}


module.exports = {
    createItem,
    readItem,
    updateItem,
    removeItem,
    listItems,
};