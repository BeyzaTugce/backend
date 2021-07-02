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
    tags: Array[String],
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