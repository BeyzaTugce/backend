"use strict";

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    ordered: {
        type: Date,
        default: Date.now
    },
    method: {
        type: ["Delivery", "Pick-Up"],
    },
    shipDate: Date,
    pickUpDate: Date,
    shipAddress: String,
    pickUpAddress: String,
    enum: {
        type: ["New", "Hold", "Shipped", "Delivered", "Closed"],
        default: "New"
    },
    total: Number,
    brokerageFee: Number,
});

module.exports = mongoose.model("Order", OrderSchema);
