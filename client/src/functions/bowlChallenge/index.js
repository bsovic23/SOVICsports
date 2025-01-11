// College Football Bowl Challenge Standings Function

// Updated up to 12/27 BC SMU game

export const bowlChallengeStandings = (data) => {
    const winners = [
        { winner1: "James Madison", points: 1 },
        { winner2: "UNLV", points: 1 },
        { winner3: "Sam Houston", points: 1 },
        { winner4: "Ohio", points: 1 },
        { winner5: "UTSA", points: 1 },
        { winner6: "Northern Illinois", points: 1 },
        { winner7: "South Florida", points: 1 },
        { winner8: "Toledo", points: 1 },
        { winner9: "Kansas State", points: 1 },
        { winner10: "Buffalo", points: 1 },
        { winner11: "Arkansas State", points: 1 },
        { winner12: "East Carolina", points: 1 },
        { winner13: "Texas State", points: 1 },
        { winner14: "Army", points: 1 },
        { winner15: "Miami (OH)", points: 1 },
        { winner16: "Minnesota", points: 2 },
        { winner17: "Memphis", points: 2 },
        { winner18: "Arkansas", points: 2 },
        { winner19: "UCONN", points: 2 },
        { winner20: "Nebraska", points: 2 },
        { winner21: "TCU", points: 2 },
        { winner22: "Navy", points: 2 },
        { winner23: "Vanderbilt", points: 2 },
        { winner24: "University of Southern California (USC)", points: 3 },
        { winner25: "Missouri", points: 3 },
        { winner26: "LSU", points: 3 },
        { winner27: "Louisville", points: 3 },
        { winner28: "Florida", points: 3 },
        { winner29: "Syracuse", points: 3 },
        { winner30: "BYU", points: 3 },
        { winner31: "Iowa State", points: 3 },
        { winner32: "Alabama", points: 3 },
        { winner33: "Illinois", points: 3 },
        { winner34: "Ole Miss", points: 3 },
        { winner35: "Ohio State", points: 5 },
        { winner36: "Texas", points: 5 },
        { winner37: "Notre Dame", points: 5 },
        { winner38: "Penn State", points: 5 },
        { winner39: "Ohio State", points: 7 },
        { winner40: "Texas", points: 7 },
        { winner41: "Notre Dame", points: 7 },
        { winner42: "Penn State", points: 7 },
        { winner43: "Ohio State", points: 9 },
        { winner44: "Notre Dame", points: 9 },
        // winner 45 14 points
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
                // Handling roundOne (games 35-38)
                const roundMapping = {
                    35: 'roundOne1',
                    36: 'roundOne2',
                    37: 'roundOne3',
                    38: 'roundOne4',
                };
                const roundKey = roundMapping[gameNumber];
                const pickChoiceRound = entry[roundKey];
                const actualWinnerRound = winner[`winner${gameNumber}`];

                if (pickChoiceRound === actualWinnerRound) {
                    totalPoints += winner.points;
                }
            } else if (gameNumber >= 39 && gameNumber <= 42) {
                // Handling quarterfinals (games 39-42)
                const quarterfinalsMapping = {
                    39: 'quarterfinals1',
                    40: 'quarterfinals2',
                    41: 'quarterfinals3',
                    42: 'quarterfinals4',
                };
                const quarterfinalKey = quarterfinalsMapping[gameNumber];
                const pickChoiceQuarterfinal = entry[quarterfinalKey];
                const actualWinnerQuarterfinal = winner[`winner${gameNumber}`];

                if (pickChoiceQuarterfinal === actualWinnerQuarterfinal) {
                    totalPoints += winner.points;
                }
            } else if (gameNumber >= 43 && gameNumber <= 44) {
                // Handling semifinals (games 43-44)
                const semifinalMapping = {
                    43: 'semifinal1',
                    44: 'semifinal2',
                };
                const semifinalKey = semifinalMapping[gameNumber];
                const pickChoiceSemifinal = entry[semifinalKey];
                const actualWinnerSemifinal = winner[`winner${gameNumber}`];

                if (pickChoiceSemifinal === actualWinnerSemifinal) {
                    totalPoints += winner.points;
                }
            } else if (gameNumber === 45) {
                // Handling champion (game 45)
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
            quarterfinals1: entry.quarterfinals1,
            quarterfinals2: entry.quarterfinals2,
            quarterfinals3: entry.quarterfinals3,
            quarterfinals4: entry.quarterfinals4,
            semifinal1: entry.semifinal1,
            semifinal2: entry.semifinal2,
            champion: entry.champion,
        });
    }

    standings.sort((a, b) => b.points - a.points);

    return standings;
};