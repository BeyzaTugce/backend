"use strict";

const mongoose = require("mongoose");

const ShipmentSchema = mongoose.Schema({
    shippingId: Number,
    shippingType: String
});

module.exports = mongoose.model("Shipment", ShipmentSchema);
