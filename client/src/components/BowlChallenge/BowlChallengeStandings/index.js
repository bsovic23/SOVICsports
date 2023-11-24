import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_CFB_BOWL_PICKEM } from '../../../utils/queries';

// Component Imports
import Navbar from '../../Navbar';

// Data, Functions, Imports
import { bowlChallengeStandings } from '../../../functions/bowlChallenge';

const BowlChallengeStandings = () => {

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/bowlChallenge"},
        {text: "CREATE ENTRY", link: "/bowlChallengeEntry"},
        {text: "ALL ENTRIES", link: "/bowlChallengeEntries"},
        {text: "STANDINGS", link: "/bowlChallengeStandings"},
    ];

    const { loading, data, refetch } = useQuery(QUERY_ALL_CFB_BOWL_PICKEM);
    const allBowlPickem = data?.allCfbBowlPickem || [];

    const standingsCurrent = bowlChallengeStandings(allBowlPickem);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return(
        <section class='page' id='bowl-challenge-standings'>
            <div>
                <Navbar navElements={navbarChoices} />
            </div>
            <h1>College Football Bowl Challenge Standings</h1>
            <div>
                {loading ? (
                    <div>
                        ...loading
                    </div>
                ) : (
                    <div>
                        <table>
                            <tr>
                                <th>Place</th>
                                <th>Entry Name</th>
                                <th>Points</th>
                                <th>Champion Picked</th>
                            </tr>
                            {standingsCurrent &&
                                standingsCurrent.map((entries, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{entries.entryPerson}</td>
                                        <td>{entries.points}</td>
                                        <td>{entries.champion}</td>
                                    </tr>
                            ))}             
                        </table>
                    </div>
                )}
            </div>
        </section>
    )
};

export default BowlChallengeStandings;