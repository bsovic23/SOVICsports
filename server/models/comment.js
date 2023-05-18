const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        commentBy: {
            type: String
        },
        commentDate: {
            type: Date,
            default: Date.now
        },
        commentType: {
            type: String
        },
        commentBody: {
            type: String
        }
    }
);

const comment = model('comment', commentSchema);

module.exports = comment;