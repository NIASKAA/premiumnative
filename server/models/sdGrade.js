const mongoose = require('mongoose');

const sdGrade = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: String},
    price: {type: Number}
});

const SDGrade = mongoose.model("SDGrade", sdGrade);
module.exports = {SDGrade, sdGrade};