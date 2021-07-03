"use strict";

const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    garageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Garage"
    },
    name: {
        type: String,
        required: true,
    },
    info: {
        type: String
    },
    tags: {
        type: [String]
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: Buffer,
        contentType: String,
        required: true
    },
});

module.exports = mongoose.model("Item", ItemSchema);