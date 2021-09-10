const mongoose = require('mongoose');

const highGrade = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: String},
    price: {type: Number}
});

const HighGrade = mongoose.model("HighGrade", highGrade);
module.exports = {HighGrade, highGrade};