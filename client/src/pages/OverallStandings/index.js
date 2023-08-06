import React from 'react';

// Import util functions
import { overallStandingsTotal } from '../../functions/overallStandingsFx';

const OverallStandings = () => {

    
    const finishStandings = [
        // Nba Playoffs Challenge
        {playerName: 'Mike Maloney', place: 1},
        {playerName: 'Rob Storey', place: 2},
        {playerName: 'Tre LaMora', place: 3},
        {playerName: 'Brit Sovic', place: 4},
        {playerName: '10fifty', place: 5},
        {playerName: 'Alec Zoida', place: 6},
        {playerName: 'Eggy', place: 7},
        {playerName: 'Anthony Wright', place: 8},
        {playerName: 'Ty Sovic', place: 9},
        {playerName: 'Peter Swain', place: 10},
        {playerName: 'Matt Friedman', place: 11},
        // Nba All Star Challenge
        {playerName: 'Tre LaMora', place: 1},
        {playerName: 'Brit Sovic', place: 1},
        {playerName: 'Ty Sovic', place: 1},
        // NFL Playoffs Challenge
    ];

    const standingsData = overallStandingsTotal(finishStandings);

    return(
        <section class="overall-standings">
            <h1>2023 SOVICSports Overall Standings</h1>
            <p>Each SOVICsports challenge allows the user to gain points towards a total standing.
                At the end of the year, the total standings leader will be awarded a grand prize.
            </p>
            <table border="1">
                <tr>
                    <th>Entry</th>
                    <th>Score</th>
                </tr>
                {Object.keys(standingsData).map((user) => (
                    <tr key={user}>
                        <th>{user}</th>
                        <th>{standingsData[user]}</th>
                    </tr>
                ))}
            </table>
        </section>
    )
};

export default OverallStandings;