// College Football Bowl Challenge Standings Function

// Updated up to 12/28 BC SMU game

export const bowlChallengeStandings = (data) => {
    const winners = [
        { winner1: "James Madison", points: 1 },
        { winner2: "UNLV", points: 1 },
        { winner3: "Sam Houston", points: 1 },
        { winner4: "Ohio", points: 1 },
        { winner17: "Memphis", points: 2 },
        { winner28: "Florida", points: 3 },
        { winner37: "Notre Dame", points: 5 },
    ];

    let standings = [];

    for (const entry of data) {
        let totalPoints = 0;

        for (const winner of winners) {
            const gameNumber = parseInt(Object.keys(winner)[0].replace('winner', ''), 10);

            if (gameNumber <= 34) {
                // Handling regular games (game1 to game34)
                const pickChoice = entry[`game${gameNumber}`];
                const actualWinner = winner[`winner${gameNumber}`];
                if (pickChoice === actualWinner) {
                    totalPoints += winner.points;
                }
            } else if (gameNumber >= 35 && gameNumber <= 38) {
                // Handling postseason games (roundOne, quarterfinals, semifinals, champion)
                const roundMapping = {
                    35: 'roundOne1',
                    36: 'roundOne2',
                    37: 'roundOne3',
                    38: 'roundOne4',
                };
                const roundKey = roundMapping[gameNumber] || `semifinal${gameNumber - 38}`;
                const pickChoiceRound = entry[roundKey];
                const actualWinnerRound = winner[`winner${gameNumber}`];

                if (pickChoiceRound === actualWinnerRound) {
                    totalPoints += winner.points;
                }
            } else if (gameNumber === 39) {
                // Handling champion (final game)
                const pickChoiceChampion = entry['champion'];
                const actualWinnerChampion = winner[`winner${gameNumber}`];
                if (pickChoiceChampion === actualWinnerChampion) {
                    totalPoints += winner.points;
                }
            }
        }

        standings.push({
            entryPerson: entry.entryName,
            points: totalPoints,
            roundOne1: entry.roundOne1,
            roundOne2: entry.roundOne2,
            roundOne3: entry.roundOne3,
            roundOne4: entry.roundOne4,
            semifinal1: entry.semifinal1,
            semifinal2: entry.semifinal2,
            champion: entry.champion,
        });
    }

    standings.sort((a, b) => b.points - a.points);

    return standings;
};