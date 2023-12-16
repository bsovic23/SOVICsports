// College Football Bowl Challenge Standings Function

export const bowlChallengeStandings = (data) => {
    /* const winners = [
        { winner1: "Georgia", points: 1},
    ]; */

    const winners = []; // blank until winners updated
    let standings = [];

    for (const entries of data) {
        let totalPoints = 0;

        for (let i=0; i < winners.length; i++) {
                const pickChoice = entries[`game${i+1}`];
                const actualWinner = winners[i][`winner${i + 1}`];

                if (pickChoice === actualWinner) {
                    totalPoints += winners[i].points;
                } else continue;
            }
        
        standings.push({entryPerson: entries.entryName, points: totalPoints, champion: entries.champion});
        }
    
    standings.sort((a,b) => b.points - a.points);
    
    return standings;
};
