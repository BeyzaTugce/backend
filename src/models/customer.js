"use strict";

const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
    name: String,
    surname: String,
    correspondanceAddress: String,
    billingAddress: String,
    phone: String,
    creditCardInfo: String,
    balance: {
        type: Number,
        default: 0
    },
    gender: String,
    birthday: Date,
    avgRating: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model("Customer", CustomerSchema);
