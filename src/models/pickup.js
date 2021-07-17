"use strict";

const mongoose = require("mongoose");

const PickupSchema = mongoose.Schema({
    /*purchaseId: {
        type: String,
        required: true,
        unique: true,
    },*/
    availableDates: [Date],
    pickupLocation: String,
});

module.exports = mongoose.model("Pickup", PickupSchema);

