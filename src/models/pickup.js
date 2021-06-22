import mongoose from 'mongoose';
 
const pickupSchema = mongoose.Schema({
    availableDates: [Date],
    pickupLocation: String
});
 
const Pickup = mongoose.model('Pickup', pickupSchema);
 
export default Pickup;