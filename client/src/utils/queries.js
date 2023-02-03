import { gql } from '@apollo/client';

export const QUERY_ALL_NBAALLSTAR = gql`
query AllNbaAllStar($username: String) {
    allNbaAllStar(username: $username) {
      _id
      username
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