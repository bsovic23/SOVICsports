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
        "playerName": "CJ Stroud",
        "points": 30.96
      },
      {
        "playerName": "Aaron Jones",
        "points": 50.2
      },
      {
        "playerName": "Devin Singletary",
        "points": 25.5
      },
      {
        "playerName": "Nico Collins",
        "points": 31.3
      },
      {
        "playerName": "Jarred Goff",
        "points": 14.78
      },
      {
        "playerName": "Lamar Jackson",
        "points": 36.08
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
        "playerName": "Cristian McCaffrey",
        "points": 28.3
      },
      {
        "playerName": "Jahmyr Gibbs",
        "points": 16.8
      },
      {
        "playerName": "Rachaard White",
        "points": 8
      },
      {
        "playerName": "Gus Edwards",
        "points": 4.4
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
        "playerName": "George Kittle",
        "points": 16.1
      },
      {
        "playerName": "Isaiah Likely",
        "points": 10.4
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
        "points": 6.1
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
