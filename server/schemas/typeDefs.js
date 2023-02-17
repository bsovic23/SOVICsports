const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type nbaAllStar {
        _id: ID
        entryName: String
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

    type bowlPickem {
        _id: ID
        entryName: String
        enteredAt: String
        year: String
        game1: String
        game2: String
        game3: String
    }

    type history {
        _id: ID
        username: String
        year: String
        challenge: String
        score: String
        place: String
        totalpx: String
    }

    type nbaPlayoffs {
        _id: ID
        entryName: String
        starterOne: String
        starterTwo: String
        starterThree: String
        starterFour: String
        starterFive: String
        starterSix: String
        starterSeven: String
        benchOne: String
        benchTwo: String
        benchThree: String
    }

    type Query {
        allNbaAllStar(entryName: String): [nbaAllStar]
        allHistory: [history]
        historyUsername(username: String): [history]
        historyChallenge(challenge: String): [history]
        historyFirstPlace(place: String): [history]
        allNbaPlayoffs: [nbaPlayoffs]
    }

    type Mutation {
        addNbaAllStar(entryName: String, starterOne: String, starterTwo: String, starterThree: String, starterFour: String, benchOne: String, benchTwo: String, benchThree: String, benchFour: String, skillsChamp: String, threeChamp: String, dunkChamp: String, challengeCaptain: String): nbaAllStar
        addBowlPickem(entryName: String, year: String, game1: String, game2: String, game3: String): bowlPickem
        addHistory(entryName: String, year: String, challenge: String, score: String, place: String, totalpx: String): history
        addNbaPlayoffs(entryName: String, starterOne: String, starterTwo: String, starterThree: String, starterFour: String, starterFive: String, starterSix: String, starterSeven: String, benchOne: String, benchTwo: String, benchThree: String): nbaPlayoffs
    }
`;

module.exports = typeDefs;