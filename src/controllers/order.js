"use strict";

const OrderModel = require("../models/order");


const createOrder = async (req, res) => {
    if (Object.keys(req.body).length === 0)
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });

    try{
        let order = await OrderModel.create(req.body);
        return res.status(201).json(order);
    }catch (err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const readOrder = async (req, res) => {
    try {
        let order = await OrderModel.findById(req.params.id).exec();

        if (!order)
            return res.status(404).json({
                error: "Not Found",
                message: `order not found`,
            });

        return res.status(200).json(order);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal Server Error",
            message: err.message,
        });
    }
};


const updateOrder = async (req, res) => {
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
        let order = await OrderModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        ).exec();

        // return updated movie
        return res.status(200).json(order);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const deleteOrder = async (req, res) => {
    try {
        // find and remove garage
        await OrderModel.findByIdAndRemove(req.params.id).exec();
        return res
            .status(200)
            .json({ message: `Order with id${req.params.id} was deleted` });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};



module.exports = {
    createOrder,
    readOrder,
    updateOrder,
    deleteOrder,
};