// Import Individual Models

const bowlPickem = require('./cfb-bowl-pickem');
const nbaAllStar = require('./nba-All-Star');
const history = require('./history');
const nbaPlayoffs = require('./nba-playoffs');
const comment = require('./comment');

// Export Grouped Models

module.exports = {
    bowlPickem,
    nbaAllStar,
    history,
    nbaPlayoffs,
    comment
};