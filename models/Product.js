const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String},
    mediaUrl: {type: String},
    quantity: {type: Number, required: true},
});

const ProductModel = mongoose.model('ProductModel', productSchema);

module.exports = ProductModel;