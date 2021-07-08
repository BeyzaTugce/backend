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
    registerDate: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        enum: ["Customer", "Admin"],
        default: "Customer",
    },
    garageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Garage",
    },
    firstname: String,
    surname: String,
    correspondenceAddress: String,
    postcode: Number,
    district: String,
    city: String,
    billingAddress: {
        type: String,
        default: "" },
    phone: String,
    creditCardInfo:{
        type: String,
        default: "" },
    balance: {
        type: Number,
        default: 0
    },
    gender: String,
    birthdate: Date,
    avgRating: {
        type: Number,
        default: 0,
    }
});

UserSchema.set("versionKey", false);


module.exports = mongoose.model("User", UserSchema);