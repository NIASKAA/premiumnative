const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {converge} = require('./converge')
const {highGrade} = require('./highGrade')
const {realGrade} = require('./realGrade')
const {masterGrade} = require('./masterGrade')
const {perfectGrade} = require('./perfectGrade')
const {sdGrade} = require('./sdGrade')
const {re100} = require('./RE100')
const {ensemble} = require('./ensemble')
const {gFrame} = require('./Gframe')

const profileSchema = new mongoose.Schema({
    username: {type: String, require: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, unique: true, required: true, match: [/.+@.+\..+/, 'Must use a valid email address']},
    gotConverges: [converge],
    gotHighGrades: [highGrade],
    gotRealGrades: [realGrade],
    gotMasterGrades: [masterGrade],
    gotPerfectGrades: [perfectGrade],
    gotSDGrades: [sdGrade],
    gotRE100s: [re100],
    gotEnsemble: [ensemble],
    gotGFrame: [gFrame],
    convergeWish: [converge],
    highGradeWish: [highGrade],
    realGradeWish: [realGrade],
    masterGradeWish: [masterGrade],
    perfectGradeWish: [perfectGrade],
    sdGradeWish: [sdGrade],
    re100Wish: [re100],
    ensembleWish: [ensemble],
    gFrameWish: [gFrame]
});

profileSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
      }
    next();
})

profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const model = mongoose.model("ProfileData", profileSchema);

module.exports = model;