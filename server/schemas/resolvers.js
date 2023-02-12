const {
    nbaAllStar,
    bowlPickem,
    User,
    history
} = require('../models');

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {
        // [X] Query works in apollo studio
        // Get All All star Entries
        allNbaAllStar: async (parent, { username }) => {
            const params = username ? { username } : {};
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
        }
    }
};

module.exports = resolvers;