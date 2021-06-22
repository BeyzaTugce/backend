import mongoose from 'mongoose';
 
const customerSchema = mongoose.Schema({
    name: String,
    correspondanceAddress: String,
    billingAddress: String,
    phone: String,
    creditCardInfo: String,
    balance: {
        type: Number,
        default: 0
    },
    gender: String,
    birthday: Date,
    avgRating: {
        type: Number,
        default: 0
    }
});
 
const Customer = mongoose.model('Customer', customerSchema);
 
export default Customer;