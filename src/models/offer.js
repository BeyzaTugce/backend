"use strict";

const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
    purchaseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Purchase"
    },
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