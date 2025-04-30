const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    address: {
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    cuisine: { 
        type: String 
    },
    menuItem: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'MenuItem' 
    }]
}, { timestamps: true });

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = { Restaurant }