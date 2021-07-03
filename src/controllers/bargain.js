"use strict";

const OfferModel = require("../models/offer");

const getOfferHistory = async (req, res) => {
    await OfferModel.find({"name": "Mert"})
        .then(offers => res.json(offers))
    // try {
    //     let offer = await BargainModel.findById(req.params.id).exec();

    //     if (!offer)
    //         return res.status(404).json({
    //             error: "Not Found",
    //             message: `User not found`,
    //         });

    //     return res.status(200).json(offer);
    // } catch (err) {
    //     console.log(err);
    //     return res.status(500).json({
    //         error: "Internal Server Error",
    //         message: err.message,
    //     });
    // }
};

const createBargainOffer = async (req, res) => {
    // try{
    //     let garage = await GarageModel.create(req.body);
    //     return res.status(201).json(garage);
    // }catch (err){
    //     console.log(err);
    //     return res.status(500).json({
    //         error: "Internal server error",
    //         message: err.message,
    //     });
    // }
    try {
        var offer = await OfferModel.findOne({"bargainId": req.params.id}).exec();
        if (!offer) {
            console.log(offer);
            console.log("aaaaa");
            let offers = [];
            offers.push(req.body.price);
            const newOffer = await new OfferModel({
                bargainId: req.params.id,
                senderUserName: req.body.senderUserName,
                receiverUserName: req.body.receiverUserName,
                price: req.body.price,
                bargainOffer: offers,
            });
            newOffer.save().then(offer => res.json(offer));
        }
        else {
            await OfferModel.findOneAndUpdate({"$push": { "bargainOffer": req.body.price }})
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


module.exports = {
    getOfferHistory,
    createBargainOffer,
};