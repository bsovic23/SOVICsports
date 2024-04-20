const { Schema, model } = require('mongoose');

const nbaPlayoffsSchema = new Schema(
    {
        entryName: {
            type: String
        },
        year: {
            type: String
        },
        starterOne: {
            type: String
        },
        starterTwo: {
            type: String
        },
        starterThree: {
            type: String
        },
        starterFour: {
            type: String
        },
        starterFive: {
            type: String
        },
        starterSix: {
            type: String
        },
        starterSeven: {
            type: String
        },
        benchOne: {
            type: String
        },
        benchTwo: {
            type: String
        },
        benchThree: {
            type: String
        }
    }
);

const nbaPlayoffs = model('nbaPlayoffs', nbaPlayoffsSchema);

module.exports = nbaPlayoffs;

