"use strict";

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    ordered: {
        type: Date,
        default: Date.now
    },
   /* method: {
        type: String,
        enum:  ["Delivery", "Pick-Up"],
        default: "",
    },
    shipDate: Date,
    pickUpDate: Date,
    shipAddress: String,
    pickUpAddress: String,*/
    enum: {
        type: String,
        enum:  ["New", "Hold", "Shipped", "Delivered", "Closed"],
        default: "New",
    },
    //total: Number,
    brokerageFee: Number,
});

module.exports = mongoose.model("Order", OrderSchema);
