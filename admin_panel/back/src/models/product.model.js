const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { //Buisness unit
        type: String,
        //required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        //required: true,
    },
    price: {
        type: Number,
        //required: true
    },
    description: {
        type: String,
        //required: true
    },
    quantite: {
        type: Number,
        //required: true
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;