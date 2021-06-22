import mongoose from 'mongoose';
 
const ratingSchema = mongoose.Schema({
    rating: Number,
    ratingComment: String
});
 
const Rating = mongoose.model('Rating', ratingSchema);
 
export default Rating;