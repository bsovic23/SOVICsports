import React from 'react';

import NavBar from '../../Navbar';
import { playerScoreFx, entryScoreTotalFx, sortByScoreNew } from '../../../utils/functions';

function NbaPlayoffsStandings() {

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/nbaPlayoffs"},
        {text: "CREATE ENTRY", link: "/nbaPlayoffsEntry"},
        {text: "ALL ENTRIES", link: "/nbaPlayoffsEntries"},
        {text: "STANDINGS", link: "/nbaPlayoffsStandings"}
    ];

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
        { playerName: 'Lebron', score: 302},
        { playerName: 'Tatum', score: 376},
        { playerName: 'Giannis', score: 70},
        { playerName: 'Jokic', score: 348},
        { playerName: 'Embiid', score: 218},
        { playerName: 'Randle', score: 171},
        { playerName: 'Mitchell', score: 116},
        { playerName: 'Curry', score: 401},
        { playerName: 'KD', score: 324},
        { playerName: 'Booker', score: 376},
        { playerName: 'CP3', score: 92},
        { playerName: 'Bane', score: 141},
        { playerName: 'Ja', score: 123},
        { playerName: 'KAT', score: 91},
        { playerName: 'Quickley', score: 77},
        { playerName: 'Brogdon', score: 202},
        { playerName: 'Portis', score: 48},
        { playerName: 'Poole', score: 139},
        { playerName: 'Levert', score: 72},
        { playerName: 'Monk', score: 139},
        { playerName: 'Westbrook', score: 118},
        { playerName: 'Warren', score: 21},
        { playerName: 'Melton', score: 92},
        { playerName: 'Tyus', score: 27},
        { playerName: 'Bruce Brown', score: 144},
        { playerName: 'Schroeder', score: 100}
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
                < NavBar navElements={navbarChoices} />
            </div>
            <h1>NBA Playoffs Challenge Standings</h1>
            <div>
                <p>Standings as of end of Round 2</p>
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