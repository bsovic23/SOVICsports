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