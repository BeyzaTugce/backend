"use strict";

const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    info: {
        type: String
    },
    tag: Array[String],
    price: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Item", ItemSchema);