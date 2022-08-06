const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId: {type: String},
    name: {type: String},
    price: {type: Number},
    quantity: {type: Number},
    totalPrice: {type: Number},
    image: {type: String},
});

const CartModel = mongoose.model('CartModel', cartSchema);

module.exports = CartModel;