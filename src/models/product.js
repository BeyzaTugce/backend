"use strict";

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tag: Array[String],
    price: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Product", ProductSchema);