import React from 'react';
import { useQuery } from '@apollo/client';

// component imports
import NavBar from '../../Navbar';

// function imports
import { nflPlayoffsPlayerPointsFx, nflPlayoffsStandingsFx } from '../../../functions/NflPlayoffsFx';

// graphQL imports
import { QUERY_ALL_NFL_PLAYOFFS } from '../../../utils/queries';

// data imports
import { NflPlayoffsPlayerPoints } from '../../../data/NflPlayoffsPlayerPoints';

const NflPlayoffsStandings = () => {

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/nflPlayoffs"},
        {text: "CREATE ENTRY", link: "/nflPlayoffsEntry"},
        {text: "ALL ENTRIES", link: "/nflPlayoffsEntries"},
        {text: "STANDINGS", link: "/nflPlayoffsStandings"},
    ];

    // Calculating Standings
    const { loading, data } = useQuery(QUERY_ALL_NFL_PLAYOFFS);
    const allNflPlayoffs = data?.allNflPlayoffs || [] ;

    const nflPlayoffsStandings = nflPlayoffsStandingsFx(allNflPlayoffs);

    // Calculating Player Points Standings
    const playerPointsSorted = nflPlayoffsPlayerPointsFx(NflPlayoffsPlayerPoints);

    return(
        <section class='page' id='nfl-playoffs-standings'>
            <div>
                <NavBar navElements={navbarChoices} />
            </div>
            <h1>NFL Playoffs Challenge Standings</h1>
            <p>Updated: 1.16.23 9:00 am ET</p>
            <div>
                {loading ? (
                    <div>...loading</div>
                ) : (
                    <div>
                        <div>
                            <table>
                                <tr>
                                    <th>Place</th>
                                    <th>Entry Name</th>
                                    <th>Total Points</th>
                                    <th>Captain</th>
                                </tr>
                                {nflPlayoffsStandings &&
                                    nflPlayoffsStandings.map((entries, index) => (entries.entryPerson !== 'adminAnswers' && 
                                    (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{entries.entryName}</td>
                                        <td>{entries.totalScore}</td>
                                        <td>{entries.captain}</td>
                                    </tr>
                                    )
                                    ))}
                            </table>
                        </div>
                        <div>
                            <h3>Player Points Leaders</h3>
                            <table>
                                <tr>    
                                    <th>Rank</th>
                                    <th>Player Name</th>
                                    <th>Player Points</th>
                                </tr>
                                {playerPointsSorted.map((entry, index) => (
                                <tr
                                    key={index}
                                >
                                    <td>{index + 1}</td>
                                    <td>{entry.playerName}</td>
                                    <td>{entry.points}</td>
                                </tr>
                                ))
                                }
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
};

export default NflPlayoffsStandings;