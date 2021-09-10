const mongoose = require('mongoose');

const perfectGrade = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: String},
    price: {type: Number}
});

const PerfectGrade = mongoose.model("PerfectGrade", perfectGrade);
module.exports = {PerfectGrade, perfectGrade};