import React from 'react';

import NbaPlayoffsNavbar from '../../Navbar/nbaPlayoffsNavbar';
import { sortByScore } from '../../../utils/functions';

function NbaPlayoffsStandings() {
    const userScores = [
        { name: '10fifty', score: 372 },
        { name: 'Brit Sovic', score: 375 },
        { name: 'Peter Swain', score: 487 },
        { name: 'Maloney', score: 482 },
        { name: 'Ty Sovic', score: 480 },
        { name: 'Eggy', score: 400 },
        { name: 'Rob Storey', score: 461 },
        { name: 'Anthony Wright', score: 467 },
        { name: 'Alec Zoida', score: 436 },
        { name: 'Tre', score: 441 },
        { name: 'Matt Friedman', score: 425 },
    ];

    const userStandings = sortByScore(userScores);

    return(
        <section class="page" id="nbaplayoffs-entries">
            <div>
                < NbaPlayoffsNavbar />
            </div>
            <h1>NBA Playoffs Challenge Standings</h1>
            <div>
                <p>Standings updated as of 4/21 9:00 am ET</p>
            </div>
            <div>
                <tr>
                    <th>Place</th>
                    <th>Entry</th>
                    <th>Score</th>
                </tr>
                {userStandings && 
                userStandings.map((standingsInfo, index) => (
                    <tr key="standingsInfo.name">
                        <th>{index + 1}</th>
                        <th>{standingsInfo.name}</th>
                        <th>{standingsInfo.score}</th>
                    </tr>
                ))}
            </div>
        </section>
    )
};

export default NbaPlayoffsStandings;