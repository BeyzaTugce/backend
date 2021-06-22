import mongoose from 'mongoose';
 
const shipmentSchema = mongoose.Schema({
    shippingId: Number,
    shippingType: String
});
 
const Shipment = mongoose.model('Pickup', shipmentSchema);
 
export default Shipment;