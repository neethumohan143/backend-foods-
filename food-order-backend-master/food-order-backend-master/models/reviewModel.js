const mongoose = require('mongoose');


const reviewSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    menuItem: { 
        type: Schema.Types.ObjectId, 
        ref: 'Menu', 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true, 
        min: 1, 
        max: 5 
    },
    comment: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = { Review }