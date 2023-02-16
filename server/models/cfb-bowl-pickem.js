const { Schema, model } = require('mongoose');

const bowlPickemSchema = new Schema(
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
        }
    }
);

const bowlPickem = model('bowlPickem', bowlPickemSchema);

module.exports = bowlPickem;