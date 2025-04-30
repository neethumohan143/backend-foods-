const mongoose = require('mongoose');


const menuItemSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    price: { 
        type: Number, 
        required: true 
    },
    restaurant: { 
        type: Schema.Types.ObjectId, 
        ref: 'Restaurant' 
    }
}, { timestamps: true });

const Menuitem = mongoose.model('menuitem', menuItemSchema)

module.exports = { Menuitem }