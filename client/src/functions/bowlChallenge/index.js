// College Football Bowl Challenge Standings Function

// Updated up to 12/28 BC SMU game

export const bowlChallengeStandings = (data) => {
    const winners = [
        { winner1: "Jacksonville State", points: 1},
        { winner2: "Georgia Tech", points: 1},
        { winner3: "Appalachian State", points: 1},
        { winner4: "Duke", points: 1},
        { winner5: "Northern Illinois", points: 1},
        { winner6: "Air Force", points: 1},
        { winner7: "Georgia State", points: 1},
        { winner8: "South Alabama", points: 1},
        { winner9: "Wyoming", points: 1},
        { winner10: "UTSA", points: 1},
        { winner11: "Minnesota", points: 1},
        { winner12: "Texas State", points: 1},
        { winner14: "Kansas", points: 2},
        { winner15: "Virginia Tech", points: 2},
        { winner16: "Memphis", points: 2},
        { winner17: "UCLA", points: 2},
        { winner18: "Texas Tech", points: 2},
        { winner19: "Northwestern", points: 2},
        { winner20: "Tennessee", points: 3},
        { winner21: "LSU", points: 3},
        { winner22: "Clemson", points: 3},
        { winner23: "USC", points: 3},
        { winner24: "Oklahoma State", points: 3},
        { winner25: "Boston College", points: 3},
        { winner26: "Kansas State", points: 3},
        { winner27: "Notre Dame", points: 3},
        { winner28: "Rutgers", points: 3},
        { winner29: "West Virginia", points: 3},
        { winner30: "Maryland", points: 3},
        { winner31: "Oregon", points: 5},
        { winner32: "Georgia", points: 5},
        { winner33: "Ole Miss", points: 5},
        { winner34: "Missouri", points: 5},
        { winner35: "Arizona", points: 5},
        { winner36: "Michigan", points: 8},
        { winner37: "Washington", points: 8},
        { winner38: "Michigan", points: 12},
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

        standings.push({ entryPerson: entry.entryName, points: totalPoints, champion: entry.champion });
    }
    
    standings.sort((a, b) => b.points - a.points);
    
    return standings;
};