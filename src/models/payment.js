import mongoose from 'mongoose';
 
const paymentSchema = mongoose.Schema({
    paid: Date,
    total: Number,
    details: String,
    approved: Boolean,
    transferred: Boolean
});
 
const Payment = mongoose.model('Payment', paymentSchema);
 
export default Payment;