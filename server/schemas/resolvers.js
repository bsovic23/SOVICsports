const {
    nbaAllStar,
    bowlPickem,
    history,
    nbaPlayoffs
} = require('../models');

const resolvers = {

    Query: {
        // [X] Query works in apollo studio
        // Get All All star Entries
        allNbaAllStar: async () => {
            return nbaAllStar.find().sort({ enteredAt: -1 });
        },
        // Get All History
        // 
        allHistory: async () => {
            return history.find()
        },

        // Get history by username
        //
        historyUsername: async (parent, { username }) => {
            return history.find({ username });
        },

        // Get history by challenge
        //
        historyChallenge: async (parent, { challenge }) => {
            return history.find({ challenge }).sort({year: -1});
        },

        historyFirstPlace: async (parent, { place }) => {
            return history.find({ place });
        },

        // Get All NBA Playoffs
        //
        allNbaPlayoffs: async () => {
            return nbaPlayoffs.find();
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
        }
    }
};

module.exports = resolvers;