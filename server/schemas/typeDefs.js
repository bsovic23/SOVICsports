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
        year: String
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

    type comment {
        _id: ID
        commentBy: String
        commentDate: String
        commentType: String
        commentBody: String
    }

    type cfbBowlPickem {
        _id: ID
        entryName: String
        enteredAt: String
        year: String
        game1: String
        game2: String
        game3: String
        game4: String
        game5: String
        game6: String
        game7: String
        game8: String
        game9: String
        game10: String
        game11: String
        game12: String
        game13: String
        game14: String
        game15: String
        game16: String
        game17: String
        game18: String
        game19: String
        game20: String
        game21: String
        game22: String
        game23: String
        game24: String
        game25: String
        game26: String
        game27: String
        game28: String
        game29: String
        game30: String
        game31: String
        game32: String
        game33: String
        game34: String
        roundOne1: String
        roundOne2: String
        roundOne3: String
        roundOne4: String
        quarterfinals1: String
        quarterfinals2: String
        quarterfinals3: String
        quarterfinals4: String
        semifinal1: String
        semifinal2: String
        champion: String
        titleTotalPoints: String
    }

    type nflPlayoffs {
        _id: ID
        entryName: String
        year: String
        qb: String
        rb1: String
        rb2: String
        wr1: String
        wr2: String
        te: String
        flex: String
        captain: String
    }

    type Query {
        allNbaAllStar(entryName: String): [nbaAllStar]
        allHistory: [history]
        historyUsername(username: String): [history]
        historyChallenge(challenge: String): [history]
        historyFirstPlace(place: String): [history]
        allNbaPlayoffs: [nbaPlayoffs]
        allCfbBowlPickem: [cfbBowlPickem]
        allComments: [comment]
        allNflPlayoffs: [nflPlayoffs]
    }

    type Mutation {
        addNbaAllStar(entryName: String, starterOne: String, starterTwo: String, starterThree: String, starterFour: String, benchOne: String, benchTwo: String, benchThree: String, benchFour: String, skillsChamp: String, threeChamp: String, dunkChamp: String, challengeCaptain: String): nbaAllStar
        addHistory(entryName: String, year: String, challenge: String, score: String, place: String, totalpx: String): history
        addNbaPlayoffs(entryName: String, year: String, starterOne: String, starterTwo: String, starterThree: String, starterFour: String, starterFive: String, starterSix: String, starterSeven: String, benchOne: String, benchTwo: String, benchThree: String): nbaPlayoffs
        addCfbBowlPickem(entryName: String, enteredAt: String, year: String, game1: String, game2: String, game3: String, game4: String, game5: String, game6: String, game7: String, game8: String, game9: String, game10: String, game11: String, game12: String, game13: String, game14: String, game15: String, game16: String, game17: String, game18: String, game19: String, game20: String, game21: String, game22: String, game23: String, game24: String, game25: String, game26: String, game27: String, game28: String, game29: String, game30: String, game31: String, game32: String, game33: String, game34: String, roundOne1: String, roundOne2: String, roundOne3: String, roundOne4: String, quarterfinals1: String, quarterfinals2: String, quarterfinals3: String, quarterfinals4: String, semifinal1: String, semifinal2: String, champion: String, titleTotalPoints: String): cfbBowlPickem 
        addComment(commentBy: String, commentDate: String, commentType: String, commentBody: String): comment
        addNflPlayoffs(entryName: String, year: String, qb: String, rb1: String, rb2: String, wr1: String, wr2: String, te: String, flex: String, captain: String): nflPlayoffs
    }
`;

module.exports = typeDefs;