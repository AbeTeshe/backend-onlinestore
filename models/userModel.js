const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const userModel = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

const UserModel = mongoose.model('UserModel');

module.exports = UserModel;