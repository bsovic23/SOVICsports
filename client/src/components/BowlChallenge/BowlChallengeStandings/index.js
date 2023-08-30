import React from 'react';
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

    const { loading, data } = useQuery(QUERY_ALL_CFB_BOWL_PICKEM);
    const allBowlPickem = data?.allCfbBowlPickem || [];

    const standingsCurrent = bowlChallengeStandings(allBowlPickem);

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
                    {standingsCurrent &&
                        standingsCurrent.map((entries, index) => (
                            <div key={index}>
                                <p>name:{entries.entryPerson}</p>
                                <p>points:{entries.points}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
};

export default BowlChallengeStandings;