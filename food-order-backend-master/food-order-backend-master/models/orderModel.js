const mongoose = require('mongoose');


const orderSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    restaurant: { 
        type: Schema.Types.ObjectId, 
        ref: 'Restaurant', 
        required: true 
    },
    items: [{
        menuItem: { 
            type: Schema.Types.ObjectId, 
            ref: 'MenuItem', 
            required: true 
        },
        quantity: { 
            type: Number, 
            required: true 
        }
    }],
    totalAmount: { 
        type: Number, 
        required: true 
    },
    status: { 
        type: String, 
        default: 'Pending' 
    }, // Pending, In Progress, Completed, Cancelled
    deliveryAddress: { 
        type: String 
    },
    deliveryTime: { 
        type: Date 
    }
}, { timestamps: true });

const Order = mongoose.model('order', orderSchema)

module.exports = { Order }