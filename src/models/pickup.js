"use strict";

const mongoose = require("mongoose");

const PickupSchema = mongoose.Schema({
   // orderId: Number,
    availableDates: [Date],
    pickupLocation: String,
});

module.exports = mongoose.model("Pickup", PickupSchema);

