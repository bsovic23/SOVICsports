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

export const QUERY_ALL_CFB_BOWL_PICKEM = gql`
query allCfbBowlPickem {
  allCfbBowlPickem {
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