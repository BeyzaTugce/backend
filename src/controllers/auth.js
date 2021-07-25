// "use strict";

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// const config = require("../config");
// const UserModel = require("../models/user");

// const login = async (req, res) => {
//   // check if the body of the request contains all necessary properties
//   if (!Object.prototype.hasOwnProperty.call(req.body, "password"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a password property",
//     });

//   if (!Object.prototype.hasOwnProperty.call(req.body, "email"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a email property",
//     });

//   // handle the request
//   try {
//     // get the user form the database
//     let user = await UserModel.findOne({
//       email: req.body.email,
//     }).exec();

//     // check if the password is valid
//     const isPasswordValid = bcrypt.compareSync(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordValid) return res.status(401).send({ token: null });

//     // if user is found and password is valid
//     // create a token
//     const token = jwt.sign(
//       { _id: user._id, email: user.email, 
//         role: user.role,
//         username: user.username,
//         firstname: user.firstname,
//         surname: user.surname,
//         phone: user.phone,
//         birthdate: user.birthdate,
//         registeredDate:user.registeredDate,
//         gender: user.gender,
//         district: user.district,
//         postcode: user.postcode,
//         city: user.city,
//         correspondenceAddress: user.correspondenceAddress,
      
//       },
//       config.JwtSecret,
//       {
//         expiresIn: 86400, // expires in 24 hours
//       }
//     );

//     return res.status(200).json({
//       token: token,
//     });
//   } catch (err) {
//     return res.status(404).json({
//       error: "User Not Found",
//       message: err.message,
//     });
//   }
// };

// const register = async (req, res) => {
//   // check if the body of the request contains all necessary properties
//   if (!Object.prototype.hasOwnProperty.call(req.body, "password"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a password property",
//     });

//   if (!Object.prototype.hasOwnProperty.call(req.body, "username"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a username property",
//     });
//   if (!Object.prototype.hasOwnProperty.call(req.body, "email"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a email property",
//     });
//   if (!Object.prototype.hasOwnProperty.call(req.body, "firstname"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a firstname property",
//     });
//   if (!Object.prototype.hasOwnProperty.call(req.body, "surname"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a surname property",
//     });
//   if (!Object.prototype.hasOwnProperty.call(req.body, "phone"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a phone property",
//     });
//   if (!Object.prototype.hasOwnProperty.call(req.body, "birthdate"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a birthdate property",
//     });
//   if (!Object.prototype.hasOwnProperty.call(req.body, "surname"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a surname property",
//     });
//     if (!Object.prototype.hasOwnProperty.call(req.body, "gender"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a gender property",
//     });
//     if (!Object.prototype.hasOwnProperty.call(req.body, "city"))
//     return res.status(400).json({
//       error: "Bad Request",
//       message: "The request body must contain a city property",
//     });

//   // handle the request
//   try {
//     // hash the password before storing it in the database
//     const hashedPassword = bcrypt.hashSync(req.body.password, 8);

//     // create a user object
//     const user = {
//       email: req.body.email,
//       username: req.body.username,
//       firstname:req.body.firstname,
//       surname: req.body.surname,
//       password: hashedPassword,
//       phone: req.body.phone,
//       birthdate: req.body.birthdate,
//       registeredDate: req.body.registeredDate,
//       gender: req.body.gender,
//       district: req.body.district,
//       postcode: req.body.postcode,
//       city: req.body.city,
//       correspondenceAddress: req.body.correspondenceAddress,
//     };

//     // create the user in the database
//     let retUser = await UserModel.create(user);

//     // if user is registered without errors
//     // create a token
//     const token = jwt.sign(
//       {
//         _id: retUser._id,
//         username: retUser.username,
//         role: retUser.role,
//       },
//       config.JwtSecret,
//       {
//         expiresIn: 86400, // expires in 24 hours
//       }
//     );

//     // return generated token
//     res.status(200).json({
//       token: token,
//     });
//   } catch (err) {
//     if (err.code == 11000) {
//       return res.status(400).json({
//         error: "User exists",
//         message: err.message,
//       });
//     } else {
//       return res.status(500).json({
//         error: "Internal server error",
//         message: err.message,
//       });
//     }
//   }
// };

// const me = async (req, res) => {
//   try {
//     // get own user name from database
//     let user = await UserModel.findById(req.userId).select("username").exec();

//     if (!user)
//       return res.status(404).json({
//         error: "Not Found",
//         message: `User not found`,
//       });

//     return res.status(200).json(user);
//   } catch (err) {
//     return res.status(500).json({
//       error: "Internal Server Error",
//       message: err.message,
//     });
//   }
// };

// const logout = (req, res) => {
//   res.status(200).send({ token: null });
// };

// module.exports = {
//   login,
//   register,
//   logout,
//   me,
// };
