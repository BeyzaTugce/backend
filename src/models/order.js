import mongoose from 'mongoose';
 
const orderSchema = mongoose.Schema({
    ordered: Date,
    shipped: Date,
    ship_to: String,
    enum: {
        type: ["New", "Hold", "Shipped", "Delivered", "Closed"],
        default: "New"
    },
    total: Number,
    brokerageFee: Number
});
 
const Order = mongoose.model('Order', orderSchema);
 
export default Order;