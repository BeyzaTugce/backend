"use strict";

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    ordered: {
        type: Date,
        default: Date.now
    },
    enum: {
        type: String,
        enum:  ["New", "Hold", "Shipped", "Delivered", "Closed"],
        default: "New",
    },
    brokerageFee: Number,
});

module.exports = mongoose.model("Order", OrderSchema);
