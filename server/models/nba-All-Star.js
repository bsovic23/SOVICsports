const { Schema, model } = require('mongoose');

const nbaAllStarSchema = new Schema(
    {
        entryName: {
            type: String
        },
        enteredAt: {
            type: Date,
            default: Date.now
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
        benchOne: {
            type: String
        },
        benchTwo: {
            type: String
        }, 
        benchThree: {
            type: String
        },
        benchFour: {
            type: String
        },
        skillsChamp: {
            type: String
        },
        threeChamp: {
            type: String
        },
        dunkChamp: {
            type: String
        },
        challengeCaptain: {
            type: String
        }
    }
);

const nbaAllStar = model('nbaAllStar', nbaAllStarSchema);

module.exports = nbaAllStar;