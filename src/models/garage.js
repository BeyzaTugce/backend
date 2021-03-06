"use strict";

const mongoose = require("mongoose");


const GarageSchema = new mongoose.Schema({
    dateCreated: {
        type: Date,
        default: Date.now,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    isPromoted: {
        type: Boolean,
        default: false,
    },
    discount: {
        type: Boolean,
        default: false,
    },
    bargain: {
        type: Boolean,
        default: false,
    },
    pickup: {
        type: Boolean,
        default: false,
    },
    shipment: {
        type: Boolean,
        default: false,
    }
});


module.exports = mongoose.model("Garage", GarageSchema);