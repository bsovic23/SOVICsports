import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_HISTORY } from '../../utils/queries';

import AllHistoryCards from '../../components/HistoryCards';

const History = () => {

    const { loading, data } = useQuery(QUERY_ALL_HISTORY);

    const allHistory = data?.allHistory || [];

    console.log(allHistory);
    
    return(
        <section>
             <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <AllHistoryCards allHistory={allHistory} />
                )}
            </div>
        </section>
    )
};

export default History;