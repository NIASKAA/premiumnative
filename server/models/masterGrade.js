const mongoose = require('mongoose');

const masterGrade = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: String},
    price: {type: Number}
});

const MasterGrade = mongoose.model("MasterGrade", masterGrade);
module.exports = {MasterGrade, masterGrade};