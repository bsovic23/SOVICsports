const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type nbaAllStar {
        _id: ID
        enteredAt: String
        starterOne: String
        starterTwo: String
        starterThree: String
        starterFour: String
        benchOne: String
        benchTwo: String
        benchThree: String
        benchFour: String
        skillsChamp: String
        threeChamp: String
        dunkChamp: String
        challengeCaptain: String
    }

    type Query {
        getNbaAllStar: [nbaAllStar]
    }

    type Mutation {
        addNbaAllStar(starterOne: String, starterTwo: String, starterThree: String, starterFour: String, benchOne: String, benchTwo: String, benchThree: String, benchFour: String, skillsChamp: String, threeChamp: String, dunkChamp: String, challengeCaptain: String): nbaAllStar
    }
`;

module.exports = typeDefs;