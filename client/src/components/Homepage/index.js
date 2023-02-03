import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_NBAALLSTAR } from '../../utils/queries';

const Homepage = () => {

    const { loading, data } = useQuery(QUERY_ALL_NBAALLSTAR);

    const allNbaAllStar = data?.allNbaAllStar || [];

    console.log(allNbaAllStar);
    
    return(
        <section>
            <div>
                <div>NBA ALL STAR LISTS</div>
            </div>
        </section>
    )
};

export default Homepage;