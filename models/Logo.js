const mongoose = require("mongoose");

const logoScheam = mongoose.Schema({
    logoText: {type: String},
    logoImage: {type: String}
});

const LogoModel = mongoose.model("LogoModel", logoScheam);

module.exports = LogoModel;