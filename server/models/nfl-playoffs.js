const { Schema, model } = require('mongoose');

const nflPlayoffsSchema = new Schema(
    {
        entryName: {
            type: String
        },
        year: {
            type: String
        },
        qb: {
            type: String
        },
        rb1: {
            type: String
        },
        rb2: {
            type: String
        },
        wr1: {
            type: String
        },
        wr2: {
            type: String
        },
        te: {
            type: String
        },
        flex: {
            type: String
        },
        captain: {
            type: String
        }
    }
);

const nflPlayoffs = model('nflPlayoffs', nflPlayoffsSchema);

module.exports = nflPlayoffs;