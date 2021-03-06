"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const middlewares = require("./middlewares");

const auth  = require("./routes/auth");
const garage  = require("./routes/garage");
const item  = require("./routes/item");
const user = require("./routes/user");
const bargain = require("./routes/bargain");
const pickup = require("./routes/pickup");
const order= require("./routes/order");
const purchase= require("./routes/purchase");


const api = express();

// Adding Basic Middlewares
api.use(helmet());
api.use(bodyParser.json({limit: '3mb'}));
api.use(bodyParser.urlencoded({limit: '3mb', extended: false}));
api.use(middlewares.allowCrossDomain);


// Basic route
api.get('/', (req, res) => {
    res.json({
        name: 'SEBA Master MyGarage Backend'
    });
});

// API routes
api.use('/auth', auth);
api.use('/garage', garage);
api.use('/item', item);
api.use('/user', user);
api.use('/bargain', bargain);
api.use('/pickup', pickup);
api.use('/order', order);
api.use('/purchase', purchase);


module.exports = api;