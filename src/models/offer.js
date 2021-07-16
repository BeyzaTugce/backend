"use strict";

const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
    bargainId: String,
    offerHistory: {
        type: [Number],
        default: []
    },
    price: {
        type: Number,
        required: true
    },
    offerStatus:  {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Offer", OfferSchema);