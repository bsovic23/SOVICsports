const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    type User {
        _id: ID
        username: String
        firstname: String
        lastname: String
        password: String
        favoriteSport: String
        favoriteTeam: String
    }

    type nbaAllStar {
        _id: ID
        username: String
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
        username: String
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

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String): User
        allNbaAllStar(username: String): [nbaAllStar]
        allHistory: [history]
    }

    type Mutation {
        login(username: String, password: String): Auth
        addUser(username: String, firstname: String, lastname: String, password: String, favoriteSport: String, favoriteTeam: String): Auth
        addNbaAllStar(starterOne: String, starterTwo: String, starterThree: String, starterFour: String, benchOne: String, benchTwo: String, benchThree: String, benchFour: String, skillsChamp: String, threeChamp: String, dunkChamp: String, challengeCaptain: String): nbaAllStar
        addBowlPickem(year: String, game1: String, game2: String, game3: String): bowlPickem
        addHistory(username: String, year: String, challenge: String, score: String, place: String, totalpx: String): history
    }
`;

module.exports = typeDefs;