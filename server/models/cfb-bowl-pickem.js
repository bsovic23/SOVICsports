const { Schema, model } = require('mongoose');

const cfbBowlPickemSchema = new Schema(
    {
        entryName: {
            type: String
        },
        enteredAt:{
            type: Date,
            default: Date.now
        },
        year: {
            type: String
        },
        game1: {
            type: String
        },
        game2: {
            type: String
        },
        game3: {
            type: String
        },
        game4: {
            type: String
        },
        game5: {
            type: String
        },
        game6: {
            type: String
        },
        game7: {
            type: String
        },
        game8: {
            type: String
        },
        game9: {
            type: String
        },
        game10: {
            type: String
        },
        game11: {
            type: String
        },
        game12: {
            type: String
        },
        game13: {
            type: String
        },
        game14: {
            type: String
        },
        game15: {
            type: String
        },
        game16: {
            type: String
        },
        game17: {
            type: String
        },
        game18: {
            type: String
        },
        game19: {
            type: String
        },
        game20: {
            type: String
        },
        game21: {
            type: String
        },
        game22: {
            type: String
        },
        game23: {
            type: String
        },
        game24: {
            type: String
        },
        game25: {
            type: String
        },
        game26: {
            type: String
        },
        game27: {
            type: String
        },
        game28: {
            type: String
        },
        game29: {
            type: String
        },
        game30: {
            type: String
        },
        game31: {
            type: String
        },
        game32: {
            type: String
        },
        game33: {
            type: String
        },
        game34: {
            type: String
        },
        game35: {
            type: String
        },
        semifinal1: {
            type: String
        },
        semifinal2: {
            type: String
        },
        champion: {
            type: String
        },
        titleTotalPoints: {
            type: String
        }
    }
);

const cfbBowlPickem = model('cfbBowlPickem', cfbBowlPickemSchema);

module.exports = cfbBowlPickem;