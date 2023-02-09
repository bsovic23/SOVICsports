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

export const QUERY_ALL_HISTORY = gql`
query Query {
  allHistory {
    _id
    username
    year
    challenge
    score
    place
    totalpx
  }
}
`;

export const QUERY_HISTORY_FIRSTPLACE = gql`
query {
  historyPlace(place: "1") {
    _id
    username
    year
    challenge
    score
    place
    totalpx
  }
}
`
