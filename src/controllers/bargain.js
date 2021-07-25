"use strict";

const OfferModel = require("../models/offer");

const getOfferHistory = async (req, res) => {
  try {
    let offer = await OfferModel.findOne({ purchaseId: req.params.id }).exec();
    if (!offer)
      return res.status(404).json({
        error: "Not Found",
        message: `purchase not found`,
      });

    return res.status(200).json(offer);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
};


const createBargainOffer = async (req, res) => {
  try {

    var offer = await OfferModel.findOne({ purchaseId: req.params.id }).exec();
    try {
      if (!offer) {
        try {
            const newOffer = await new OfferModel({
                purchaseId: req.params.id,
                price: req.body.price,
                offerHistory: [req.body.price],
                offerStatus: false,
            });
          let offer = await OfferModel.create(newOffer);
          return res.status(201).json(offer);
        } catch (err) {
          console.log(err);
          return res.status(500).json({
            error: "Internal server error",
            message: err.message,
          });
        }
      } else if (offer) {
     
        let price = req.body.price;
        const filter = { purchaseId: req.params.id };
        const update = {
          price: price,
          $push: { offerHistory: price },
        };
        await OfferModel.findOneAndUpdate(filter, update);
        return res.status(201).json(offer);
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: "Internal server error",
        message: err.message,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

const withdrawBargainOffer = async (req, res) => {
  try {
    const offer = await OfferModel.findOne({ purchaseId: req.params.id });
    if (offer.remove()) {
      return res.status(201).json({ success: true });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
};

module.exports = {
  getOfferHistory,
  createBargainOffer,
  withdrawBargainOffer,
};
