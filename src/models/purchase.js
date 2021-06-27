"use strict";

const mongoose = require("mongoose");

const PurchaseSchema = mongoose.Schema({
    created: Date,
    dateAdded: Date,
    garageId: String,
    enum_offer: ["Accepted", "Rejected", "NewOffer"],
    price: Number,
    enum_purchase: {
        type: ["WaitForAcceptance", "DeliveryScheduling", "Payment", "Rating", "Closed"],
        default: "WaitForAcceptance",
    }
});

module.exports = mongoose.model("Product", PurchaseSchema);
