const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    image: {type: String, required: true},
});

const CartModel = mongoose.model('CartModel');

module.exports = CartModel;