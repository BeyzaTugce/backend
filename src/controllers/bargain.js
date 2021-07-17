"use strict";

const OfferModel = require("../models/offer");

const getOfferHistory = (req, res) => {
    OfferModel.findOne({"purchaseId": req.params.purchaseId})
        .then(offers => res.json(offers))
};

const createBargainOffer = async (req, res) => {

    try {
        var offer = await OfferModel.findOne({"purchaseId": req.params.purchaseId}).exec();
        if (!offer) {
            const newOffer = await new OfferModel({
                purchaseId: req.params.purchaseId,
                price: req.body.price,
                offerHistory: [req.body.price],
                offerStatus: false,
            });
            newOffer.save().then(offer => res.json(offer));
        }
        else {
            let price = req.body.price;
            const filter = {"purchaseId": req.params.purchaseId }
            const update = {
                "price": price,
                "$push": { "offerHistory": price }}
            await OfferModel.findOneAndUpdate(filter, update)
        }
        return res.status(201).json(offer);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal Server Error",
            message: err.message,
        });
    }
};

const withdrawBargainOffer = async (req, res) => {
    try {
        const offer = await OfferModel.findOne({"purchaseId": req.params.purchaseId});
        if(offer.remove()) {
            return res.status(201).json({ success: true });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal Server Error",
            message: err.message,
        });
    }
}


module.exports = {
    getOfferHistory,
    createBargainOffer,
    withdrawBargainOffer,
};