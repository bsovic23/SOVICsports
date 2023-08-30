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

    return(
        <section class='page'>
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
                    <div>
                        {allBowlPickem && allBowlPickem.map((entry, index) => (
                            <div key={index}>
                                Entry: {entry.entryName}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
};

export default BowlChallengeEntries;