import { gql } from "@apollo/client";

export const MUTATION_NBA_ALLSTAR = gql`
mutation AddNbaAllStar($entryName: String, $starterOne: String, $starterTwo: String, $starterThree: String, $starterFour: String, $benchOne: String, $benchTwo: String, $benchThree: String, $benchFour: String, $skillsChamp: String, $threeChamp: String, $dunkChamp: String, $challengeCaptain: String) {
    addNbaAllStar(entryName: $entryName, starterOne: $starterOne, starterTwo: $starterTwo, starterThree: $starterThree, starterFour: $starterFour, benchOne: $benchOne, benchTwo: $benchTwo, benchThree: $benchThree, benchFour: $benchFour, skillsChamp: $skillsChamp, threeChamp: $threeChamp, dunkChamp: $dunkChamp, challengeCaptain: $challengeCaptain) {
      _id
      entryName
      enteredAt
      starterOne
      starterTwo
      starterThree
      starterFour
      benchOne
      benchTwo
      benchThree
      benchFour
      skillsChamp
      threeChamp
      dunkChamp
      challengeCaptain
    }
  }
`;

export const MUTATION_NBA_PLAYOFFS = gql`
mutation Mutation($entryName: String, $starterOne: String, $starterTwo: String, $starterThree: String, $starterFour: String, $starterFive: String, $starterSix: String, $starterSeven: String, $benchOne: String, $benchTwo: String, $benchThree: String) {
  addNbaPlayoffs(entryName: $entryName, starterOne: $starterOne, starterTwo: $starterTwo, starterThree: $starterThree, starterFour: $starterFour, starterFive: $starterFive, starterSix: $starterSix, starterSeven: $starterSeven, benchOne: $benchOne, benchTwo: $benchTwo, benchThree: $benchThree) {
    _id
    entryName
    starterOne
    starterTwo
    starterThree
    starterFour
    starterFive
    starterSix
    starterSeven
    benchOne
    benchTwo
    benchThree
  }
}
`;

export const MUTATION_LOGIN = gql`
mutation Login($entryName: String, $password: String) {
  login(entryName: $entryName, password: $password) {
    user {
      _id
      entryName
      firstname
      lastname
      password
      favoriteSport
      favoriteTeam
    }
    token
  }
}
`

export const MUTATION_COMMENT = gql`
  mutation Mutation($commentBy: String, $commentDate: String, $commentType: String, $commentBody: String) {
    addComment(commentBy: $commentBy, commentDate: $commentDate, commentType: $commentType, commentBody: $commentBody) {
      _id
      commentBy
      commentDate
      commentType
      commentBody
    }
  }
`

export const MUTATION_CFB_BOWL_PICKEM = gql`
  mutation Mutation($entryName: String, $enteredAt: String, $year: String, $game1: String, $game2: String, $game3: String, $game4: String, $game5: String, $game6: String, $game7: String, $game8: String, $game9: String, $game10: String, $game11: String, $game12: String, $game13: String, $game14: String, $game15: String, $game16: String, $game17: String, $game18: String, $game19: String, $game20: String, $game21: String, $game22: String, $game23: String, $game24: String, $game25: String, $game26: String, $game27: String, $game28: String, $game29: String, $game30: String, $game31: String, $game32: String, $game33: String, $game34: String, $game35: String, $semifinal1: String, $semifinal2: String, $champion: String, $titleTotalPoints: String) {
    addCfbBowlPickem(entryName: $entryName, enteredAt: $enteredAt, year: $year, game1: $game1, game2: $game2, game3: $game3, game4: $game4, game5: $game5, game6: $game6, game7: $game7, game8: $game8, game9: $game9, game10: $game10, game11: $game11, game12: $game12, game13: $game13, game14: $game14, game15: $game15, game16: $game16, game17: $game17, game18: $game18, game19: $game19, game20: $game20, game21: $game21, game22: $game22, game23: $game23, game24: $game24, game25: $game25, game26: $game26, game27: $game27, game28: $game28, game29: $game29, game30: $game30, game31: $game31, game32: $game32, game33: $game33, game34: $game34, game35: $game35, semifinal1: $semifinal1, semifinal2: $semifinal2, champion: $champion, titleTotalPoints: $titleTotalPoints) {
    _id
    entryName
    enteredAt
    year
    game1
    game2
    game3
    game4
    game5
    game6
    game7
    game8
    game9
    game10
    game11
    game12
    game13
    game14
    game15
    game16
    game17
    game18
    game19
    game20
    game21
    game22
    game23
    game24
    game25
    game26
    game27
    game28
    game29
    game30
    game31
    game32
    game33
    game34
    game35
    semifinal1
    semifinal2
    champion
    titleTotalPoints
  }
}
`;