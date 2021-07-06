"use strict";

const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    ordered: {
        type: Date,
        default: Date.now
    },
    shipped: Date,
    ship_to: String,
    enum: {
        type: ["New", "Hold", "Shipped", "Delivered", "Closed"],
        default: "New"
    },
    total: Number,
    brokerageFee: Number,
});

module.exports = mongoose.model("Order", OrderSchema);
