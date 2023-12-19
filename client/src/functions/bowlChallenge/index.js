// College Football Bowl Challenge Standings Function

export const bowlChallengeStandings = (data) => {
    const winners = [
        { winner1: "Jacksonville State", points: 1},
        { winner3: "Appalachian State", points: 1},
        { winner17: "UCLA", points: 2},
        { winner18: "Texas Tech", points: 2},
    ];

    let standings = [];

    for (const entry of data) {
        let totalPoints = 0;

        for (const winner of winners) {
            const gameNumber = parseInt(Object.keys(winner)[0].replace('winner', ''), 10);
            const pickChoice = entry[`game${gameNumber}`];
            const actualWinner = winner[`winner${gameNumber}`];

            if (pickChoice === actualWinner) {
                totalPoints += winner.points;
            }
        }

        standings.push({ entryPerson: entry.entryName, points: totalPoints, champion: entry.champion });
    }
    
    standings.sort((a,b) => b.points - a.points);
    
    return standings;
};
