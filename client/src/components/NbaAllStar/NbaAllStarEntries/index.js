import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_NBAALLSTAR } from '../../../utils/queries';

import NbaAllStarEntries from '../../../components/EntryCards/nbaAllStar';
import NavBar from '../../../components/Navbar';

const NbaEntries = () => {

    const { loading, data } = useQuery(QUERY_ALL_NBAALLSTAR);

    const allNbaAllStar = data?.allNbaAllStar || [];

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/nbaAllStar"},
        {text: "CREATE ENTRY", link: "/nbaEntry"},
        {text: "ALL ENTRIES", link: "/nbaEntries"},
        {text: "STANDINGS", link: "/nbaAllStar"}
    ];
    
    return(
        <section class="page" id="allstar-entries-page">
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <h1>ALL NBA ALL STAR ENTRIES</h1>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <NbaAllStarEntries allNbaAllStar={allNbaAllStar} />
                )}
            </div>
        </section>
    )
};

export default NbaEntries;