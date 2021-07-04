"use strict";

const mongoose = require("mongoose");

const ShipmentSchema = mongoose.Schema({
    orderId: Number,
    shippingId: Number,
    shippingType: String
});

module.exports = mongoose.model("Shipment", ShipmentSchema);
