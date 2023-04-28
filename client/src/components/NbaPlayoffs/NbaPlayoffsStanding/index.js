import React from 'react';

import NbaPlayoffsNavbar from '../../Navbar/nbaPlayoffsNavbar';
import { sortByScore } from '../../../utils/functions';

function NbaPlayoffsStandings() {
    const userEntries = [
        { userName: 'Brit Sovic'},
    ];

    const playerScores = [
        { playerName: 'Lebron', score: '114'},
        { playerName: 'Tatum', score: '133'},
        { playerName: 'Giannis', score: '70'},
        { playerName: 'Jokic', score: '136'},
        { playerName: 'Embiid', score: '65'},
        { playerName: 'Randle', score: '77'},
        { playerName: 'Mitchell', score: '116'},
        { playerName: 'Curry', score: '157'},
        { playerName: 'KD', score: '147'},
        { playerName: 'Booker', score: '191'},
        { playerName: 'CP3', score: '73'},
        { playerName: 'Bane', score: '126'},
        { playerName: 'Ja', score: '113'},
        { playerName: 'KAT', score: '91'},
        { playerName: 'Quickley', score: '50'},
        { playerName: 'Brogdon', score: '63'},
        { playerName: 'Portis', score: '48'},
        { playerName: 'Poole', score: '69'},
        { playerName: 'Levert', score: '72'},
        { playerName: 'Monk', score: '91'},
        { playerName: 'Westbrook', score: '118'},
        { playerName: 'Warren', score: '5'},
        { playerName: 'Melton', score: '48'},
        { playerName: 'Tyus', score: '24'},
        { playerName: 'Bruce Brown', score: '62'},
        { playerName: 'Schroeder', score: '26'}
    ];

    const userScores = [
        { name: '10fifty', score: 929 },
        { name: 'Brit Sovic', score: 965 },
        { name: 'Peter Swain', score: 1039 },
        { name: 'Maloney', score: 1105 },
        { name: 'Ty Sovic', score: 1063 },
        { name: 'Eggy', score: 952 },
        { name: 'Rob Storey', score: 1024 },
        { name: 'Anthony Wright', score: 1042 },
        { name: 'Alec Zoida', score: 994 },
        { name: 'Tre', score: 967 },
        { name: 'Matt Friedman', score: 943 },
    ];

    const userStandings = sortByScore(userScores);

    return(
        <section class="page" id="nbaplayoffs-entries">
            <div>
                < NbaPlayoffsNavbar />
            </div>
            <h1>NBA Playoffs Challenge Standings</h1>
            <div>
                <p>Standings updated as of 4/28 9:31 am ET</p>
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