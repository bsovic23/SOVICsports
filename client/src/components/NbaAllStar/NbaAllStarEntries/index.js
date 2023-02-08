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
        <section>
            <div>
                <NbaNavbar />
            </div>
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