"use strict";

// Configuration variables
const port = process.env.PORT || "4000";
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://team_03:hejYg2CEeKJ08XH9@team03.tqhf8.mongodb.net/MyGarage?retryWrites=true&w=majority";
const JwtSecret = process.env.JWT_SECRET || "very secret secret";


module.exports = {
    port,
    mongoURI,
    JwtSecret,
};
