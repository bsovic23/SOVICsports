const {
    nbaAllStar,
    cfbBowlPickem,
    history,
    nbaPlayoffs,
    comment
} = require('../models');

const resolvers = {

    Query: {
        // Get All All star Entries
        // [X] Query works in apollo studio
        allNbaAllStar: async () => {
            return nbaAllStar.find().sort({ enteredAt: -1 });
        },
        // Get All History
        // [X] Query works in apollo studio
        allHistory: async () => {
            return history.find()
        },

        // Get history by username
        // [X] Query works in apollo studio
        historyUsername: async (parent, { username }) => {
            return history.find({ username });
        },

        // Get history by challenge
        // [X] Query works in apollo studio
        historyChallenge: async (parent, { challenge }) => {
            return history.find({ challenge }).sort({year: -1});
        },
        // Get history by for all first place finishes
        // [X] Query works in apollo studio
        historyFirstPlace: async (parent, { place }) => {
            return history.find({ place });
        },
        // Get All NBA Playoffs
        //
        allNbaPlayoffs: async () => {
            return nbaPlayoffs.find();
        },
        // Bowl Pickem
        //
        allCfbBowlPickem: async () => {
            return cfbBowlPickem.find();
        },
        // Get all Comments
        allComments: async () => {
            return comment.find();
        }
    },
    Mutation: {
        // [X] Mutation works in apollo studio
        addNbaAllStar: async (parent, args) => {
            const nbaAllStarEntry = await nbaAllStar.create(args);
            
            return nbaAllStarEntry;
        },

        addHistory: async(parent, args) => {
            const historyEntry = await history.create(args);

            return historyEntry;
        },
        
        addNbaPlayoffs: async(parent, args) => {
            const nbaPlayoffsEntry = await nbaPlayoffs.create(args);

            return nbaPlayoffsEntry;
        },

        addCfbBowlPickem: async(parent, args) => {
            const bowlPickemEntry = await cfbBowlPickem.create(args);

            return bowlPickemEntry;
        },

        addComment: async (parent, args) => {
            const commentEntry = await comment.create(args);

            return commentEntry;
        }
    }
};

module.exports = resolvers;