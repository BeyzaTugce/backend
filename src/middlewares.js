"use strict";

const jwt = require("jsonwebtoken");

const config = require("./config");

const UserModel = require("./models/user");
const AdminModel = require("./models/admin");
const OrderModel = require("./models/order");

const allowCrossDomain = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");

    // intercept OPTIONS method
    if ("OPTIONS" == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
};

const checkAuthentication = (req, res, next) => {
    const token = req.header('x-auth-token');
  
    // Check for token
    if (!token)
      return res.status(401).json({ msg: 'No token, authorization denied' });
  
    try {
      // Verify token
      const decoded = jwt.verify(token, config.JwtSecret);
      // Add user from payload
      req.user = decoded;
      next();
    } catch (e) {
      res.status(400).json({ msg: 'Token is not valid' });
    }
};

const checkIsAdmin = async (req, res, next) => {
    // checkAuthentication must be executed before this method
    // if not req.userId is not defined
    let user = await UserModel.findById(req.userId);

    if (user.role === "admin") {
        // if the user is an admin continue with the execution
        next();
    } else {
        // if the user is no admin return that the user has not the rights for this action
        return res.status(403).send({
            error: "Forbidden",
            message: "You have not the rights for this action.",
        });
    }
};

const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render("error", { error: err });
};

module.exports = {
    allowCrossDomain,
    checkAuthentication,
    checkIsAdmin,
    errorHandler
};