const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String},
    mediaUrl: {type: String},
    quantity: {type: Number, required: true},
    details: {
        totalReviews: {type: Number},
        rating: {type: Number},
        availabilityStatus: {type: String},
        productCategory: {type: String},
    }
});

const ProductModel = ProductModel.model('ProductModel');

module.exports = ProductModel;