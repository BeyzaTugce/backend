import mongoose from 'mongoose';
 
const purchaseSchema = mongoose.Schema({
    created: Date,
    dateAdded: Date,
    garageId: String,
    enum_offer: ["Accepted", "Rejected", "NewOffer"],
    price: Number,
    enum_purchase: {
        type: ["WaitForAcceptance", "DeliveryScheduling", "Payment", "Rating", "Closed"],
        default: "WaitForAcceptance"
    }
});
 
const Purchase = mongoose.model('Payment', purchaseSchema);
 
export default Purchase;