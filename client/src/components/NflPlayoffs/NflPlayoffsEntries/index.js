import React from 'react';

// Component Imports
import NavBar from '../../Navbar';

// GraphQL Imports
import { QUERY_ALL_NFL_PLAYOFFS } from '../../../utils/queries';
import { useQuery } from '@apollo/client';

const NflPlayoffsEntries = () => {

    const showEntries = 0;

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/nflPlayoffs"},
        {text: "CREATE ENTRY", link: "/nflPlayoffsEntry"},
        {text: "ALL ENTRIES", link: "/nflPlayoffsEntries"},
        {text: "STANDINGS", link: "/nflPlayoffStandings"},
    ];

    const { loading, data } = useQuery(QUERY_ALL_NFL_PLAYOFFS);
    const allNflPlayoffsEntries = data?.allNflPlayoffs || [];

    return(
        <section class='page' id='nfl-playoffs-all-entries'>
            <div>
                <NavBar navElements={navbarChoices} />
            </div>
            <h1>College Football Bowl Challenge</h1>
            <div>
                {loading ? (
                    <div>
                        ...loading
                    </div>
                ) : (
                    <table>
                        <tr>
                            <th>Entry</th>
                            {showEntries === 1 && (
                            <>
                            <th>Captain</th>
                            <th>Quarterback</th>
                            <th>Running Back</th>
                            <th>Running Back</th>
                            <th>Wide Receiver</th>
                            <th>Wide Receiver</th>
                            <th>Tight End</th>
                            <th>FLEX</th>
                            </>
                            )}
                        </tr>
                        {allNflPlayoffsEntries && allNflPlayoffsEntries.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.entryName}</td>
                        {showEntries === 1 && (
                            <>
                            <td>{entry.captain}</td>
                            <td>{entry.qb}</td>
                            <td>{entry.rb}</td>
                            <td>{entry.rb}</td>
                            <td>{entry.wr}</td>
                            <td>{entry.wr}</td>
                            <td>{entry.te}</td>
                            <td>{entry.flex}</td>
                            </>
                        )}
                        </tr>
                        ))}
                    </table>
                )}
            </div>
        </section>
    )
};

export default NflPlayoffsEntries;