const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false}
});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;