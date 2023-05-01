// Takes user entries array of objects
// Takes array of player scores
// Replaces the player name with their current score

const playerScoreFx = ( userEntries, playerScores ) => {
    const result = userEntries.map(userEntriesObj => {
        const individualPlayer = userEntriesObj.players.map(player => {
            const scoreFx = playerScores.find(score => score.playerName === player);
            return scoreFx ? scoreFx.score : player;
        });
        return { ...userEntriesObj, players: individualPlayer};
    })
    return result;
};

// Takes the individual player scores and creates a summed score for each entry

const entryScoreTotalFx = (array) => {
    const resultArray = [];
    for (const obj of array) {
        const entry = obj.userName;
        const scores = obj.players;
        const totalScore = scores.reduce((acc, score) => score + acc, 0);
        resultArray.push({ name: entry, score: totalScore});
    }
    return resultArray;
};

// Sort the entry totals from highest to lowest

const sortByScoreNew = (array) => {
    const standingsArray = [...array];

    standingsArray.sort((a, b) => {
        return b.score - a.score;
    });

    return standingsArray;
};

// Exported Functions

export {
    playerScoreFx,
    entryScoreTotalFx,
    sortByScoreNew
};