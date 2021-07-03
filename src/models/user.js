"use strict";

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    loginStatus: {
        type: String,
        enum: ["LoggedIn", "Idle", "LoggedOut"],
        default: "LoggedOut",
    },
    registerDate: Date,
    role: {
        type: String,
        enum: ["Customer", "Admin"],
        default: "Customer",
    },
    firstname: String,
    surname: String,
    correspondenceAddress: String,
    postcode: Number,
    district: String,
    city: String,
    billingAddress: String,
    phone: String,
    creditCardInfo: String,
    balance: {
        type: Number,
        default: 0
    },
    gender: String,
    birthday: Date,
    avgRating: {
        type: Number,
        default: 0,
    }
});

UserSchema.set("versionKey", false);


module.exports = mongoose.model("User", UserSchema);