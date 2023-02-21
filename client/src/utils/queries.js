import { gql } from '@apollo/client';

export const QUERY_ALL_NBAALLSTAR = gql`
query AllNbaAllStar {
  allNbaAllStar {
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

export const QUERY_ALL_NBAPLAYOFFS = gql`
query Query {
  allNbaPlayoffs {
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