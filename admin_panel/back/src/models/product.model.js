const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    Name: { //Buisness unit
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    prix: {
        type: Number,
        required: true
    },
    quantité: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;