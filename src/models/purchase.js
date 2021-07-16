"use strict";

const mongoose = require("mongoose");

const PurchaseSchema = mongoose.Schema({
   /* purchaseId: {
        type: String,
        required: true,
        unique: true,
    },*/
    creationDate: Date,
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    //dateAdded: Date,
    garageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Garage"
    },

    //enum_offer: ["Accepted", "Rejected", "NewOffer"],
    price: Number,
    purchaseStatus: {
        type: ["WaitForAcceptance", "DeliveryScheduling", "Payment", "Rating", "Closed"],
        default: "WaitForAcceptance",
    },
    selectedItemList: {
            type: ["Item"],
            required: true,
    }
});

module.exports = mongoose.model("Purchase", PurchaseSchema);
