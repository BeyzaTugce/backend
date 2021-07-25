"use strict";

const mongoose = require("mongoose");

const PurchaseSchema = mongoose.Schema({
    creationDate: Date,
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    garageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Garage"
    },
    price: Number,
    purchaseStatus: {
        type: String,
        enum: ["WaitForAcceptance", "DeliveryScheduling", "DeliveryScheduled", "Payment","Order", "Rating", "Closed"],
        default: "WaitForAcceptance",
    },
    selectedItemList: {
            type: ["Item"],
            required: true,
    },
    method: {
        type: String,
        enum: ["Shipment", "PickUp", "Both"],
        default: "",
    },
    pickUpDate: Date,
    shipAddress: String,
    availableDates: [Date],
    pickupLocation: {
        type: String,
        default: "",
    },
    rating: Number,
    ratingComment: String
});

module.exports = mongoose.model("Purchase", PurchaseSchema);
