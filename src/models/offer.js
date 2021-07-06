"use strict";

const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
    bargainId: String,
    buyerUserName: String,
    sellerUserName: String,
    offerHistory: [Number],
    price: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Offer", OfferSchema);