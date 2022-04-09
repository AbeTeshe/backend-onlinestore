const mongoose = require('mongoose');

const userProfileSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phoneNumber: {type: String},
    country: {type: String, required: true},
    city: {type: String, required: true},
    addressLine1: {type: String, required: true},
    zipCode: {type: String, required: true},
    shippingDivision: {type: String},
    shippingOption: {type: String},
    isActive: {type: Boolean, default: true},
});

const UserProfileModel = mongoose.model('UserProfileModel', userProfileSchema);

module.exports = UserProfileModel;