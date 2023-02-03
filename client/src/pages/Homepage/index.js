import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_NBAALLSTAR } from '../../utils/queries';

import NbaAllStarEntries from '../../components/NbaAllStarEntries';

const Homepage = () => {

    const { loading, data } = useQuery(QUERY_ALL_NBAALLSTAR);

    const allNbaAllStar = data?.allNbaAllStar || [];

    console.log(allNbaAllStar);
    
    return(
        <section>
            <div className="col-12 mb-3">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <NbaAllStarEntries allNbaAllStar={allNbaAllStar} />
                )}
            </div>
        </section>
    )
};

export default Homepage;