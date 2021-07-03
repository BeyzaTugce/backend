"use strict";

const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
    bargainId: String,
    senderUserName: String,
    receiverUserName: String,
    bargainOffer: [Number],
    price: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Offer", OfferSchema);