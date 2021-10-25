const mongoose = require('mongoose');

const gFrame = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: String},
    price: {type: Number}
});

const GFrame = mongoose.model("GFrame", gFrame);

module.exports = {GFrame, gFrame};