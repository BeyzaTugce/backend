"use strict";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const config = require("../config");
const UserModel = require("../models/user");

const login = async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  // handle the request
    // get the user form the database
  try {
    const user = await UserModel.findOne({ email });
    if (!user) throw Error('User does not exist');

  // check if the password is valid
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Invalid credentials');
     
    const token = jwt.sign({ id: user._id }, config.JwtSecret, { expiresIn: 86400 });
    if (!token) throw Error('Couldnt sign the token');

    res.status(200).json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
    
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (user) throw Error('User already exists');

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Something went wrong with bcrypt');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('Something went wrong hashing the password');

    const newUser = new UserModel({
      username,
      email,
      password: hash,
      firstname:req.body.firstname,
      surname: req.body.surname,
      phone: req.body.phone,
      birthdate: req.body.birthdate,
      gender: req.body.gender,
      district: req.body.district,
      postcode: req.body.postcode,
      city: req.body.city,
      correspondenceAddress: req.body.correspondenceAddress,
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error('Something went wrong saving the user');

    const token = jwt.sign({ id: savedUser._id }, config.JwtSecret, {
      expiresIn: 86400
    });

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email
      }
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const me = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select('-password');
    if (!user) throw Error('User does not exist');
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};

const logout = (req, res) => {
  res.status(200).json({ token: null });
};

module.exports = {
  login,
  register,
  logout,
  me
};
