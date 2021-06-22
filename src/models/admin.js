"use strict";

const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
unique: true,
    name: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("Admin", AdminSchema);