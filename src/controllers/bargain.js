"use strict";

const OfferModel = require("../models/offer");

const getOfferHistory = (req, res) => {
    OfferModel.findOne({"bargainId": req.params.id})
        .then(offers => res.json(offers))

};

const createBargainOffer = async (req, res) => {

    try {
        var offer = await OfferModel.findOne({"bargainId": req.params.id}).exec();
        if (!offer) {
            console.log(offer);
            console.log("aaaaa");
            const newOffer = await new OfferModel({
                bargainId: req.params.id,
                senderUserName: req.body.senderUserName,
                receiverUserName: req.body.receiverUserName,
                price: req.body.price,
                bargainOffer: req.body.price,
            });
            newOffer.save().then(offer => res.json(offer));
        }
        else {
            let price = req.body.price;
            const filter = {"bargainId": req.params.id }
            const update = {
                "price": price,
                "$push": { "bargainOffer": price }}
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
        const offer = await OfferModel.findOne({"bargainId": req.params.id});
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