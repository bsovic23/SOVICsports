// Import Individual Models

const cfbBowlPickem = require('./cfb-bowl-pickem');
const nbaAllStar = require('./nba-All-Star');
const history = require('./history');
const nbaPlayoffs = require('./nba-playoffs');
const comment = require('./comment');
const nflPlayoffs = require('./nfl-playoffs');

// Export Grouped Models

module.exports = {
    cfbBowlPickem,
    nbaAllStar,
    history,
    nbaPlayoffs,
    comment,
    nflPlayoffs
};