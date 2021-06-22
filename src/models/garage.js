"use strict";

const mongoose = require("mongoose");

const GarageSchema = new mongoose.Schema({
    created: {
        type: DateTime,
        required: true,
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
    shipmentType: {
        type: String,
        enum: ["PickUp", "Shipment"],
    },
    
});

module.exports = mongoose.model("Garage", GarageSchema);