export const nflPlayoffsPlayerPointsFx = (data) => {

  const nflPlayoffsPlayerPointsSorted = data.sort((a,b) => (b.points - a.points));

  return nflPlayoffsPlayerPointsSorted;

};


export const nflPlayoffsStandingsFx = (data) => {

    const nlfPlayoffsPlayerPoints = [
      {
        "playerName": "Jerome Ford",
        "points": 7.2
      },
      {
        "playerName": "Raheem Mostert",
        "points": 4
      },
      {
        "playerName": "David Njoku",
        "points": 16.3
      },
      {
        "playerName": "Tyreek Hill",
        "points": 17.2
      },
      {
        "playerName": "Dak Prescott",
        "points": 35.62
      },
      {
        "playerName": "Kyren Williams",
        "points": 8
      },
      {
        "playerName": "Jake Ferguson",
        "points": 37.3
      },
      {
        "playerName": "CeeDee Lamb",
        "points": 23.5
      },
      {
        "playerName": "Puka Nacua",
        "points": 35.3
      },
      {
        "playerName": "DeVonta Smith",
        "points": 18.8
      },
      {
        "playerName": "Jarred Goff",
        "points": 14.78
      },
      {
        "playerName": "Lamar Jackson",
        "points": 0
      },
      {
        "playerName": "Josh Allen",
        "points": 33.52
      },
      {
        "playerName": "Patrick Mahomes",
        "points": 18.58
      },
      {
        "playerName": "CJ Stroud",
        "points": 23.06
      },
      {
        "playerName": "Cristian McCaffrey",
        "points": 0
      },
      {
        "playerName": "Jahmyr Gibbs",
        "points": 16.8
      },
      {
        "playerName": "Rachaard White",
        "points": 0
      },
      {
        "playerName": "Aaron Jones",
        "points": 35.1
      },
      {
        "playerName": "Gus Edwards",
        "points": 0
      },
      {
        "playerName": "James Cook",
        "points": 10.4
      },
      {
        "playerName": "Isiah Pacheco",
        "points": 15.8
      },
      {
        "playerName": "Devin Singletary",
        "points": 16
      },
      {
        "playerName": "George Kittle",
        "points": 0
      },
      {
        "playerName": "Isaiah Likely",
        "points": 0
      },
      {
        "playerName": "Mark Andrews",
        "points": 0
      },
      {
        "playerName": "Dalton Kincaid",
        "points": 13.4
      },
      {
        "playerName": "Dawson Knox",
        "points": 7.4
      },
      {
        "playerName": "Travis Kelce",
        "points": 14.1
      },
      {
        "playerName": "Amon Ra St-Brown",
        "points": 21
      },
      {
        "playerName": "Zay Flowers",
        "points": 0
      },
      {
        "playerName": "Stefon Diggs",
        "points": 8.7
      },
      {
        "playerName": "Rashee Rice",
        "points": 30
      },
      {
        "playerName": "Nico Collins",
        "points": 22
      },
      {
        "playerName": "Mike Evans",
        "points": 6.3
      },
      {
        "playerName": "Chris Godwin",
        "points": 12.5
      }
    ]
    
    const results = [];

    data.forEach(entry => {
        const qbScore = getPlayerScore(entry.qb, nlfPlayoffsPlayerPoints);
        const rb1Score = getPlayerScore(entry.rb1, nlfPlayoffsPlayerPoints);
        const rb2Score = getPlayerScore(entry.rb2, nlfPlayoffsPlayerPoints);
        const wr1Score = getPlayerScore(entry.wr1, nlfPlayoffsPlayerPoints);
        const wr2Score = getPlayerScore(entry.wr2, nlfPlayoffsPlayerPoints);
        const teScore = getPlayerScore(entry.te, nlfPlayoffsPlayerPoints);
        const flexScore = getPlayerScore(entry.flex, nlfPlayoffsPlayerPoints);
        const captainScore = getPlayerScore(entry.captain, nlfPlayoffsPlayerPoints);

        const totalPoints = qbScore + rb1Score + rb2Score + wr1Score + wr2Score + teScore + flexScore + captainScore;
        let totalScore = totalPoints.toFixed(2)

        results.push({ entryName: entry.entryName, totalScore, 'captain': entry.captain });
    });

    results.sort((a,b) => b.totalScore - a.totalScore);

    return results;
}

function getPlayerScore(playerName, playerScores) {
    const player = playerScores.find(player => player.playerName === playerName);
    return player ? player.points : 0;
}
