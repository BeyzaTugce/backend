"use strict";

const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    garageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Garage"
    },
    username: {
        type: String,
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
        type: [String],
        default:[],
    },
});

module.exports = mongoose.model("Item", ItemSchema);