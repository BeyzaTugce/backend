"use strict";

const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
    paid: Date,
    total: Number,
    details: String,
    approved: Boolean,
    transferred: Boolean,
});

module.exports = mongoose.model("Payment", PaymentSchema);

