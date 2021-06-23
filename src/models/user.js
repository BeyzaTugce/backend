"use strict";

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    userName: {
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
    },
    registerDate: Date,
    role: {
        type: String,
        enum: ["Customer", "Admin"],
    },
});

UserSchema.set("versionKey", false);


module.exports = mongoose.model("User", UserSchema);