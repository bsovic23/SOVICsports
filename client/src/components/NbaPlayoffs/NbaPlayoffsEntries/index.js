import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_NBAPLAYOFFS } from '../../../utils/queries';

import NbaPlayoffsCards from '../../EntryCards/nbaPlayoffs';
import NbaPlayoffsNavbar from '../../Navbar/nbaPlayoffsNavbar';

const NbaPlayoffsEntries = () => {
    const { loading, data } = useQuery(QUERY_ALL_NBAPLAYOFFS);

    const allNbaPlayoffs = data?.allNbaPlayoffs || [];

    return(
        <section class="nba-playoffs">
            <div>
                < NbaPlayoffsNavbar />
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