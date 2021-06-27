"use strict";

const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
    message: String,
});

module.exports = mongoose.model("Message", MessageSchema);

