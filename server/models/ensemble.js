const mongoose = require('mongoose');

const ensemble = new mongoose.Scheme({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: String},
    price: {type: Number}
});

const Ensemble = mongoose.model("Ensemble", ensemble);

module.exports = {Ensemble, ensemble};