import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_NBAPLAYOFFS } from '../../../utils/queries';

import NbaPlayoffsCards from '../../EntryCards/nbaPlayoffs';
import NavBar from '../../Navbar';

const NbaPlayoffsEntries = () => {

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/nbaPlayoffs"},
        {text: "CREATE ENTRY", link: "/nbaPlayoffsEntry"},
        {text: "ALL ENTRIES", link: "/nbaPlayoffsEntries"},
        {text: "STANDINGS", link: "/nbaPlayoffsStandings"}
    ];

    const { loading, data } = useQuery(QUERY_ALL_NBAPLAYOFFS);

    const allNbaPlayoffs = data?.allNbaPlayoffs || [];

    return(
        <section class="page" id="nbaplayoffs-entries">
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <h1>ALL NBA PLAYOFF ENTRIES</h1>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <NbaPlayoffsCards allNbaPlayoffs={allNbaPlayoffs} />
                )}
            </div>
        </section>
    )
};

export default NbaPlayoffsEntries;