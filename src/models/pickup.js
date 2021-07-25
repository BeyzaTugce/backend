"use strict";

const mongoose = require("mongoose");

const PickupSchema = mongoose.Schema({
    availableDates: [Date],
    pickupLocation: String,
});

module.exports = mongoose.model("Pickup", PickupSchema);

