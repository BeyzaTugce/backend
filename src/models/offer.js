"use strict";

const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
    name: String,
    bargainOffer: Array[Number],
    price: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Offer", OfferSchema);