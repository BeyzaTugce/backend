"use strict";

const OrderModel = require("../models/order");
const UserModel = require("../models/user");
const ItemModel = require("../models/item");


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

const listOrders = async (req, res) => {
    try{
        let orders = await OrderModel.find({}).exec();
        return res.status(200).json(orders);
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
        let order = await OrderModel.findById(req.params.id);
        let items = await ItemModel.find({"orderId": order.id}).exec();
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
        let order = await OrderModel.findById(req.params.id);
        let seller = await UserModel.findById(order.user);
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

const readOrderByUser = async (req, res) => {
    try {
        console.log(req.params.id);
        let order = await OrderModel.find({user : req.params.id});
        console.log(order);
        console.log(user);


        //let seller = await UserModel.findById(garage.user);
        if (!order)
            return res.status(404).json({
                error: "Not Found",
                message: `Garage not found`,
            });
        return res.status(200).json(order);
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
    listOrders,
    readItems,
    readSeller,
    readOrderByUser
};