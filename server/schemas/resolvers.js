const {
    nbaAllStar,
    bowlPickem,
    User
} = require('../models');

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password');
    
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        // [X] Query works in apollo studio
        // Get All All star Entries
        allNbaAllStar: async (parent, { username }) => {
            const params = username ? { username } : {};
            return nbaAllStar.find().sort({ enteredAt: -1 });
        },

        // Get All Users
        //
        users: async () => {
            return User.find()
                .select('-__v -password');
        },

        // Get One User
        //
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password');
        }


    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { user, token };
        },

        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const passwordSuccess = await user.isCorrectPassword(password);

            if (!passwordSuccess) {
                throw new AuthenticationError('Incorrect Password');
            }

            const token = signToken(user);
            return { user, token };
        },

        // [X] Mutation works in apollo studio
        addNbaAllStar: async (parent, args, context) => {
            if (context.user) {

            const nbaAllStarEntry = await nbaAllStar.create({ ...args, username: context.user.username });
            
            await User.findByIdAndUpdate(
                {_id: context.user._id },
                { $push : { allNbaAllStar: nbaAllStarEntry._id }},
                { new: true }
            );

            return nbaAllStarEntry;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addBowlPickem: async(parent, args, context) => {
            if (context.user) {
            
            const bowlPickemEntry = await bowlPickem.create({...args, username: context.user.username }); 

            await User.findByIdAndUpdate(
                {_id: context.user._id },
                { $push : { bowlPickem: bowlPickemEntry._id }},
                { new: true }
            );

            return bowlPickemEntry;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;