const {
    nbaAllStar
} = require('../models');

const resolvers = {

    Query: {
        getNbaAllStar: async () => {
            return nbaAllStar.find().sort({ enteredAt: -1 });
        }
    },

    Mutation: {
        addNbaAllStar: async (parent, args) => {
            const nbaAllStarEntry = await nbaAllStar.create(args);

            return nbaAllStarEntry;
        }
    }
};

module.exports = resolvers;