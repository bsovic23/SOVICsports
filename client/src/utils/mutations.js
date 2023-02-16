import { gql } from "@apollo/client";

export const MUTATION_NBA_ALLSTAR = gql`
mutation AddNbaAllStar($starterOne: String, $starterTwo: String, $starterThree: String, $starterFour: String, $benchOne: String, $benchTwo: String, $benchThree: String, $benchFour: String, $skillsChamp: String, $threeChamp: String, $dunkChamp: String, $challengeCaptain: String) {
    addNbaAllStar(starterOne: $starterOne, starterTwo: $starterTwo, starterThree: $starterThree, starterFour: $starterFour, benchOne: $benchOne, benchTwo: $benchTwo, benchThree: $benchThree, benchFour: $benchFour, skillsChamp: $skillsChamp, threeChamp: $threeChamp, dunkChamp: $dunkChamp, challengeCaptain: $challengeCaptain) {
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