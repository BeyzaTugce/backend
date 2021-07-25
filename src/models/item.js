"use strict";

const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    garageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Garage"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    deadline: {
        type: Date,
        default: Date.now,
        required: true,
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
    },
});

module.exports = mongoose.model("Item", ItemSchema);