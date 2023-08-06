export const overallStandingsTotal = (data) => {
    let totalScore = {};

    for (const obj of data) {
        const user = obj.playerName;
        const score = obj.place;
        totalScore[user] = (totalScore[user] || 0) + score;
    }

    const sortedEntries = Object.entries(totalScore).sort((a,b) => b[1] - a[1]);

    const sortedScores = Object.fromEntries(sortedEntries);

    return sortedScores;
};
