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

const deleteItem = async (req, res) => {
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
        return res.status(200).json({items : items});
    } catch (err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
}

const search = async (req, res) => {
    const name = req.query.name;
    const nameRegex = new RegExp(name, 'g');
    const items = await ItemModel.find({
        $or: [
            {name: nameRegex},
            {type: nameRegex}
        ], status: "hasapproved"
    }, {name: 1, info: 1, tags: 1, price: 1, image: 1, garageId: 1});
    res.status(200).json(items);
};

const filter = async (req, res) => {
    const {
        itemIds,
        rating,
        price,
    } = req.body;

    const mapPriceRange = (price) => {
        if (price === '0') {
            return {price: {"$lte": 24, "$gte": 0}};
        } else if (price === '25') {
            return {price: {"$lte": 49, "$gte": 25}};
        } else if (price === '50') {
            return {price: {"$lte": 74, "$gte": 50}};
        } else if (price === '75') {
            return {price: {"$lte": 100, "$gte": 75}};
        }
    }

    const query = {};
    if (itemIds.length !== 0) query._id = {$in: itemIds};
    if (price.length !== 0) query.$or = price.map(mapPriceRange);
    if (rating.length !== 0) query.rating = {$in: rating};
    query.status = 'hasapproved';
    const item = await itemModel.find(query, {
        name: 1, info: 1, tags: 1, price: 1, image: 1, garageId: 1
    });

    res.status(200).json(item);
};


module.exports = {
    createItem,
    readItem,
    updateItem,
    deleteItem,
    listItems,
    search,
    filter,
};