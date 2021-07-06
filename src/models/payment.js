"use strict";

const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
    paid: {
        type: Date,
        default: Date.now
    },
    total: Number,
    details: String,
    approved: Boolean,
    transferred: Boolean,
});

module.exports = mongoose.model("Payment", PaymentSchema);

