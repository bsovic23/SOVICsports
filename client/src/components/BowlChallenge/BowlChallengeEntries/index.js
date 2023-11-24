import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_CFB_BOWL_PICKEM } from '../../../utils/queries';

// Component Imports
import NavBar from '../../Navbar';

// Data, Functions Imports

function BowlChallengeEntries() {

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/bowlChallenge"},
        {text: "CREATE ENTRY", link: "/bowlChallengeEntry"},
        {text: "ALL ENTRIES", link: "/bowlChallengeEntries"},
        {text: "STANDINGS", link: "/bowlChallengeStandings"},
    ];

    const { loading, data } = useQuery(QUERY_ALL_CFB_BOWL_PICKEM);
    const allBowlPickem = data?.allCfbBowlPickem || [];
    console.log(allBowlPickem);

    return(
        <section class='page' id='bowl-challenge-all-entries'>
            <div>
                <NavBar navElements={navbarChoices} />
            </div>
            <h1>College Football Bowl Challenge</h1>
            <div>
                {loading ? (
                    <div>
                        ... loading
                    </div>
                ) : (
                    <table>
                        <tr>
                            <th>Entry</th>
                            <th>Game 1</th>
                            <th>Game 2</th>
                            <th>Game 3</th>
                            <th>Game 4</th>
                            <th>Game 5</th>
                            <th>Game 6</th>
                            <th>Semifinal 1</th>
                            <th>Semifinal 2</th>
                            <th>Champion</th>
                            <th>Total Points</th>
                        </tr>
                            {allBowlPickem && allBowlPickem.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.entryName}</td>
                                    <td>{entry.game1}</td>
                                    <td>{entry.game2}</td>
                                    <td>{entry.game3}</td>
                                    <td>{entry.game4}</td>
                                    <td>{entry.game5}</td>
                                    <td>{entry.game6}</td>
                                    <td>{entry.semifinal1}</td>
                                    <td>{entry.semifinal2}</td>
                                    <td>{entry.champion}</td>
                                    <td>{entry.titleTotalPoints}</td>
                                </tr>
                            ))}
                    </table>
                )}
            </div>
        </section>
    )
};

export default BowlChallengeEntries;