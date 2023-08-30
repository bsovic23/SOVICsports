// College Football Bowl Challenge Standings Function

export const bowlChallengeStandings = (data) => {

    const winners = [
        { winner1: "Georgia", points: 1},
        { winner2: "Penn State", points: 2},
        { winner3: "Auburn", points: 3},
        { winner4: "USC", points: 4},
        { winner5: "Washington", points: 4},
        { winner6: "Syracuse", points: 4},
    ];

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
        
        standings.push({entryPerson: entries.entryName, points: totalPoints});
        }
    
    return standings;
};
