import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_NBAALLSTAR } from '../../../utils/queries';

import NbaAllStarEntries from '../../../components/EntryCards/nbaAllStar';
import NbaNavbar from '../../Navbar/nbaNavbar';

const NbaEntries = () => {

    const { loading, data } = useQuery(QUERY_ALL_NBAALLSTAR);

    const allNbaAllStar = data?.allNbaAllStar || [];

    console.log(allNbaAllStar);
    
    return(
        <section class="page" id="allstar-entries-page">
            <div>
                < NbaNavbar />
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