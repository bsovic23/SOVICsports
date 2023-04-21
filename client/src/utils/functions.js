// Function takes an array of entry names and score and returns a sorted array

const sortByScore = (array) => {
    const standingsArray = [...array];

    standingsArray.sort((a, b) => {
        return b.score - a.score;
    });

    return standingsArray;
};

export {
    sortByScore
};