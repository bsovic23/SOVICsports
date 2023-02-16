const { Schema, model } = require('mongoose');

const historySchema = new Schema(
    {
        entryName: {
            type: String
        },
        year: {
            type: String
        },
        challenge: {
            type: String
        },
        score: {
            type: String
        },
        place: {
            type: String
        },
        totalpx: {
            type: String
        }
    }
);

const history = model('history', historySchema);

module.exports = history;