const mongoose = require('mongoose');

const re100 = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: String},
    price: {type: Number}
});

const RE100 = mongoose.model("RE100", re100);
module.exports = {RE100, re100}