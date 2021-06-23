"use strict";

const mongoose = require("mongoose");

const RatingSchema = mongoose.Schema({
    rating: Number,
    ratingComment: String
});

module.exports = mongoose.model("Rating", RatingSchema);

