export const nflPlayoffsPlayerPointsFx = (data) => {

  const nflPlayoffsPlayerPointsSorted = data.sort((a,b) => (b.points - a.points));

  return nflPlayoffsPlayerPointsSorted;

};


export const nflPlayoffsStandingsFx = (data) => {

  const nlfPlayoffsPlayerPoints = [
      {
        "playerName": "Jared Goff",
        "points": 0
      },
      {
        "playerName": "Jahmyr Gibbs",
        "points": 0
      },
      {
        "playerName": "Amon-Ra St Brown",
        "points": 0
      },
      {
        "playerName": "Sam LaPorta",
        "points": 0
      },
      {
        "playerName": "Saquon Barkley",
        "points": 17.3
      },
      {
        "playerName": "AJ Brown",
        "points": 2
      },
      {
        "playerName": "DeVonta Smith",
        "points": 9.5
      },
      {
        "playerName": "Bucky Irving",
        "points": 16.3
      },
      {
        "playerName": "Mike Evans",
        "points": 22.2
      },
      {
        "playerName": "Cade Otton",
        "points": 5.2
      },
      {
        "playerName": "Kyren Williams",
        "points": 18.2
      },
      {
        "playerName": "Puka Nacua",
        "points": 10.1
      },
      {
        "playerName": "Justin Jefferson",
        "points": 10.8
      },
      {
        "playerName": "Terry McLaurin",
        "points": 21.9
      },
      {
        "playerName": "Zach Ertz",
        "points": 4.3
      },
      {
        "playerName": "Josh Jacobs",
        "points": 21.1
      },
      {
        "playerName": "Tucker Kraft",
        "points": 8.6
      },
      {
        "playerName": "Patrick Mahomes",
        "points": 0
      },
      {
        "playerName": "DeAndre Hopkins",
        "points": 0
      },
      {
        "playerName": "Travis Kelce",
        "points": 0
      },
      {
        "playerName": "Josh Allen",
        "points": 25.5
      },
      {
        "playerName": "James Cook",
        "points": 21
      },
      {
        "playerName": "Lamar Jackson",
        "points": 23.1
      },
      {
        "playerName": "Derrick Henry",
        "points": 33.6
      },
      {
        "playerName": "Rashod Bateman",
        "points": 10.4
      },
      {
        "playerName": "Mark Andrews",
        "points": 5.2
      },
      {
        "playerName": "Dalton Schultz",
        "points": 4.3
      },
      {
        "playerName": "Ladd McConkey",
        "points": 41.7
      },
      {
        "playerName": "Najee Harris",
        "points": 17
      },
      {
        "playerName": "Courtland Sutton",
        "points": 18
      }
    ];
    
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
