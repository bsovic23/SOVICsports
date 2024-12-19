// College Football Bowl Challenge Standings Function

// Updated up to 12/28 BC SMU game

export const bowlChallengeStandings = (data) => {
    const winners = [
        { winner1: "James Madison", points: 1},
        { winner2: "UNLV", points: 1},
        { winner17: "Memphis", points: 2},
    ];

    let standings = [];

    for (const entry of data) {
        let totalPoints = 0;

        for (const winner of winners) {
            const gameNumber = parseInt(Object.keys(winner)[0].replace('winner', ''), 10);
            
            const pickChoice = entry[`game${gameNumber}`];
            const actualWinner = winner[`winner${gameNumber}`];

            if (gameNumber === 38) {
                // Handling final (game38)
                const finalKey = 'champion';
                const pickChoiceFinal = entry[finalKey];
                const actualWinnerSemifinal = winner[`winner${gameNumber}`];

                if (pickChoiceFinal === actualWinnerSemifinal) {
                    totalPoints += winner.points;
                }
            } else if (gameNumber >= 36) {
                // Handling semifinals (game36 and game37)
                const semifinalKey = `semifinal${gameNumber - 35}`;
                const pickChoiceSemifinal = entry[semifinalKey];
                const actualWinnerSemifinal = winner[`winner${gameNumber}`];

                if (pickChoiceSemifinal === actualWinnerSemifinal) {
                    totalPoints += winner.points;
                }
            } else {
                // Regular games (game1 to game35)
                if (pickChoice === actualWinner) {
                    totalPoints += winner.points;
                }
            }
        }

        standings.push({ entryPerson: entry.entryName, points: totalPoints, semifinal1: entry.semifinal1, semifinal2: entry.semifinal2, champion: entry.champion });
    }
    
    standings.sort((a, b) => b.points - a.points);
    
    return standings;
};