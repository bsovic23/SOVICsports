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
        "points": 35.9
      },
      {
        "playerName": "DeVonta Smith",
        "points": 18.8
      },
      {
        "playerName": "CJ Stroud",
        "points": 30.96
      },
      {
        "playerName": "Aaron Jones",
        "points": 54.7
      },
      {
        "playerName": "Devin Singletary",
        "points": 28
      },
      {
        "playerName": "Nico Collins",
        "points": 33.8
      },
      {
        "playerName": "Josh Allen",
        "points": 64.12
      },
      {
        "playerName": "Rachaard White",
        "points": 27.6
      },
      {
        "playerName": "James Cook",
        "points": 24.6
      },
      {
        "playerName": "Dalton Kincaid",
        "points": 24.4
      },
      {
        "playerName": "Dawson Knox",
        "points": 9.3
      },
      {
        "playerName": "Stefon Diggs",
        "points": 18
      },
      {
        "playerName": "Mike Evans",
        "points": 39.5
      },
      {
        "playerName": "Chris Godwin",
        "points": 22.5
      },
      {
        "playerName": "Jarred Goff",
        "points": 34.86
      },
      {
        "playerName": "Lamar Jackson",
        "points": 39.1
      },
      {
        "playerName": "Patrick Mahomes",
        "points": 37.08
      },
      {
        "playerName": "Cristian McCaffrey",
        "points": 31.8
      },
      {
        "playerName": "Jahmyr Gibbs",
        "points": 38.2
      },
      {
        "playerName": "Gus Edwards",
        "points": 4.9
      },
      {
        "playerName": "Isiah Pacheco",
        "points": 33.900000000000006
      },
      {
        "playerName": "George Kittle",
        "points": 18.1
      },
      {
        "playerName": "Isaiah Likely",
        "points": 11.4
      },
      {
        "playerName": "Mark Andrews",
        "points": 0
      },
      {
        "playerName": "Travis Kelce",
        "points": 38.6
      },
      {
        "playerName": "Amon Ra St-Brown",
        "points": 42.7
      },
      {
        "playerName": "Zay Flowers",
        "points": 8.1
      },
      {
        "playerName": "Rashee Rice",
        "points": 38.7
      },
      {
        "playerName": "Brock Purdy",
        "points": 15.5
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
