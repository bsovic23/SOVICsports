import React from 'react';

import NbaPlayoffsNavbar from '../../Navbar/nbaPlayoffsNavbar';
import { playerScoreFx, entryScoreTotalFx, sortByScoreNew } from '../../../utils/functions';

function NbaPlayoffsStandings() {
    const userEntries = [
        { userName: '10fifty', players: ['Lebron', 'Tatum', 'Giannis', 'Jokic', 'Embiid', 'Randle', 'Mitchell', 'Quickley', 'Brogdon', 'Portis']},
        { userName: 'Brit Sovic', players: ['Mitchell', 'Embiid', 'Giannis', 'KD', 'Jokic', 'Tatum', 'Ja', 'Poole', 'Schroeder', 'Brogdon']},
        { userName: 'Peter Swain', players: ['Tatum', 'KD', 'Lebron', 'Giannis', 'Curry', 'Embiid', 'Mitchell', 'Brogdon', 'Portis', 'Poole']},
        { userName: 'Maloney', players: ['Curry', 'Booker', 'Tatum', 'Lebron', 'Jokic', 'Embiid', 'Giannis', 'Quickley', 'Poole', 'Brogdon']},
        { userName: 'Ty Sovic', players: ['Tatum', 'Giannis', 'Curry', 'KD', 'Mitchell', 'Lebron', 'Embiid', 'Brogdon', 'Poole', 'Levert']},
        { userName: 'Eggy', players: ['CP3', 'Giannis', 'Embiid', 'Mitchell', 'Jokic', 'Lebron', 'Tatum', 'Monk', 'Poole', 'Quickley']},
        { userName: 'Rob Storey', players: ['Jokic', 'Giannis', 'KD', 'Tatum', 'Curry', 'Embiid', 'Mitchell', 'Bruce Brown', 'Portis', 'Brogdon']},
        { userName: 'Anthony Wright', players: ['Lebron', 'KD', 'Giannis', 'Embiid', 'Tatum', 'Curry', 'KAT', 'Westbrook', 'Quickley', 'Bruce Brown']},
        { userName: 'Alec Zoida', players: ['Giannis', 'KD', 'Curry', 'Embiid', 'Mitchell', 'Jokic', 'Lebron', 'Quickley', 'Brogdon', 'Tyus']},
        { userName: 'Tre', players: ['Giannis', 'Embiid', 'KD', 'Curry', 'Jokic', 'Mitchell', 'Tatum', 'Portis', 'Brogdon', 'Warren']},
        { userName: 'Matt Friedman', players: ['Embiid', 'Booker', 'Jokic', 'Giannis', 'Tatum', 'Bane', 'Mitchell', 'Warren', 'Melton', 'Portis']},
    ];

    const playerScores = [
        { playerName: 'Lebron', score: 171},
        { playerName: 'Tatum', score: 214},
        { playerName: 'Giannis', score: 70},
        { playerName: 'Jokic', score: 189},
        { playerName: 'Embiid', score: 80},
        { playerName: 'Randle', score: 102},
        { playerName: 'Mitchell', score: 116},
        { playerName: 'Curry', score: 268},
        { playerName: 'KD', score: 200},
        { playerName: 'Booker', score: 253},
        { playerName: 'CP3', score: 92},
        { playerName: 'Bane', score: 141},
        { playerName: 'Ja', score: 123},
        { playerName: 'KAT', score: 91},
        { playerName: 'Quickley', score: 65},
        { playerName: 'Brogdon', score: 128},
        { playerName: 'Portis', score: 48},
        { playerName: 'Poole', score: 110},
        { playerName: 'Levert', score: 72},
        { playerName: 'Monk', score: 133},
        { playerName: 'Westbrook', score: 118},
        { playerName: 'Warren', score: 5},
        { playerName: 'Melton', score: 67},
        { playerName: 'Tyus', score: 27},
        { playerName: 'Bruce Brown', score: 85},
        { playerName: 'Schroeder', score: 52}
    ];

    // (1) Score Individual Players (2) Sum the player arrays (3) Sort leader

    const practice = playerScoreFx(userEntries, playerScores);
  
    const userStandings = entryScoreTotalFx(practice);
 
    const standingsDone = sortByScoreNew(userStandings);
    const standingsPlayers = sortByScoreNew(playerScores);

    // const final = sumAndSort(practice);

    return(
        <section class="page" id="nbaplayoffs-entries">
            <div>
                < NbaPlayoffsNavbar />
            </div>
            <h1>NBA Playoffs Challenge Standings</h1>
            <div>
                <p>Standings as of 5/4/2023 morning</p>
            </div>
            <div>
                <tr>
                    <th>Place</th>
                    <th>Entry</th>
                    <th>Score</th>
                </tr>
                {standingsDone && 
                standingsDone.map((standingsInfo, index) => (
                    <tr key="standingsInfo.name">
                        <th>{index + 1}</th>
                        <th>{standingsInfo.name}</th>
                        <th>{standingsInfo.score}</th>
                    </tr>
                ))}
            </div>
            <div>
                <tr>
                    <th>Place</th>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
                {standingsPlayers && 
                standingsPlayers.map((standingsInfo, index) => (
                    <tr key="standingsInfo.playerName">
                        <th>{index + 1}</th>
                        <th>{standingsInfo.playerName}</th>
                        <th>{standingsInfo.score}</th>
                    </tr>
                ))}
            </div>
        </section>
    )
};

export default NbaPlayoffsStandings;