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
              "points": 0
            },
            {
              "playerName": "Jarred Goff",
              "points": 0
            },
            {
              "playerName": "Lamar Jackson",
              "points": 0
            },
            {
              "playerName": "Josh Allen",
              "points": 0
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
              "points": 0
            },
            {
              "playerName": "Rachaard White",
              "points": 0
            },
            {
              "playerName": "Kyren Williams",
              "points": 0
            },
            {
              "playerName": "Aaron Jones",
              "points": 0
            },
            {
              "playerName": "Gus Edwards",
              "points": 0
            },
            {
              "playerName": "James Cook",
              "points": 0
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
              "playerName": "Jake Ferguson",
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
              "points": 0
            },
            {
              "playerName": "Dawson Knox",
              "points": 0
            },
            {
              "playerName": "Travis Kelce",
              "points": 14.1
            },
            {
              "playerName": "CeeDee Lamb",
              "points": 0
            },
            {
              "playerName": "Amon Ra St-Brown",
              "points": 0
            },
            {
              "playerName": "DeVonta Smith",
              "points": 0
            },
            {
              "playerName": "Puka Nacua",
              "points": 0
            },
            {
              "playerName": "Zay Flowers",
              "points": 0
            },
            {
              "playerName": "Stefon Diggs",
              "points": 0
            },
            {
              "playerName": "Rashee Rice",
              "points": 30
            },
            {
              "playerName": "Nico Collins",
              "points": 22
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

        const totalScore = qbScore + rb1Score + rb2Score + wr1Score + wr2Score + teScore + flexScore + captainScore;

        results.push({ entryName: entry.entryName, totalScore, 'captain': entry.captain });
    });

    results.sort((a,b) => b.totalScore - a.totalScore);

    return results;
}

function getPlayerScore(playerName, playerScores) {
    const player = playerScores.find(player => player.playerName === playerName);
    return player ? player.points : 0;
}
