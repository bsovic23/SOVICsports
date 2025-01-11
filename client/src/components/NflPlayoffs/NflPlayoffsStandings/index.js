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

    // 0 = entryName only    1 = full entry details
    const showEntries = 1;

    const navbarChoices = [
        { text: "CHALLENGE INSTRUCTIONS", link: "/nflPlayoffs" },
        { text: "CREATE ENTRY", link: "/nflPlayoffsEntry" },
        { text: "ALL ENTRIES", link: "/nflPlayoffsEntries" },
        { text: "STANDINGS", link: "/nflPlayoffsStandings" },
    ];

    // Calculating Standings
    const { loading, data } = useQuery(QUERY_ALL_NFL_PLAYOFFS);
    const allNflPlayoffs = data?.allNflPlayoffs || [];
    const nflPlayoffs2024 = allNflPlayoffs.filter((data) => data.year === '2024');
    const nflPlayoffsStandings = nflPlayoffsStandingsFx(nflPlayoffs2024);

    // Calculating Player Points Standings
    const playerPointsSorted = nflPlayoffsPlayerPointsFx(NflPlayoffsPlayerPoints);

    return (
        <section className="page" id="nfl-playoffs-standings">
            <div>
                <NavBar navElements={navbarChoices} />
            </div>
            <h1>NFL Playoffs Challenge Standings</h1>
            <p>Updated: </p>
            <div>
                {loading ? (
                    <div>...loading</div>
                ) : (
                    <div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Place</th>
                                        <th>Entry Name</th>
                                        {showEntries === 1 && (
                                            <>
                                                <th>Total Points</th>
                                                <th>Captain</th>
                                            </>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {nflPlayoffsStandings &&
                                        nflPlayoffsStandings.map((entries, index) =>
                                            entries.entryPerson !== 'adminAnswers' && (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{entries.entryName}</td>
                                                    {showEntries === 1 && (
                                                        <>
                                                            <td>{entries.totalScore}</td>
                                                            <td>{entries.captain}</td>
                                                        </>
                                                    )}
                                                </tr>
                                            )
                                        )}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h3>Player Points Leaders</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Player Name</th>
                                        <th>Player Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {playerPointsSorted.map((entry, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{entry.playerName}</td>
                                            <td>{entry.points}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NflPlayoffsStandings;