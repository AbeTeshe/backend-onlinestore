const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId: {type: String, reqired: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    image: {type: String, required: true},
});

const CartModel = mongoose.model('CartModel', cartSchema);

module.exports = CartModel;