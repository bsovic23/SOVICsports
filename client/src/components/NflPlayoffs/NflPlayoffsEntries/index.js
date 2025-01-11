import React from 'react';

// Component Imports
import NavBar from '../../Navbar';

// Data Imports
import { NflPlayoffsPlayers } from '../../../data/NflPlayoffs';

// GraphQL Imports
import { QUERY_ALL_NFL_PLAYOFFS } from '../../../utils/queries';
import { useQuery } from '@apollo/client';

const NflPlayoffsEntries = () => {

    // 0 = entryName only    1 = full entry details
    const showEntries = 1;

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/nflPlayoffs"},
        {text: "CREATE ENTRY", link: "/nflPlayoffsEntry"},
        {text: "ALL ENTRIES", link: "/nflPlayoffsEntries"},
        {text: "STANDINGS", link: "/nflPlayoffsStandings"},
    ];

    const { loading, data } = useQuery(QUERY_ALL_NFL_PLAYOFFS);
    const allNflPlayoffsEntries = data?.allNflPlayoffs || [];
    console.log(allNflPlayoffsEntries);
    const allNflPlayoffsEntries2024 = allNflPlayoffsEntries.filter((data) => data.year === '2024');


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
                        {allNflPlayoffsEntries2024 && allNflPlayoffsEntries2024.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.entryName}</td>
                        {showEntries === 1 && (
                            <>
                            <td class={NflPlayoffsPlayers.find(player => player.playerName === entry.captain)?.eliminated === 'yes' ? 'eliminated' : 'active'}>{entry.captain}</td>
                            <td class={NflPlayoffsPlayers.find(player => player.playerName === entry.qb)?.eliminated === 'yes' ? 'eliminated' : 'active'}>{entry.qb}</td>
                            <td class={NflPlayoffsPlayers.find(player => player.playerName === entry.rb1)?.eliminated === 'yes' ? 'eliminated' : 'active'}>{entry.rb1}</td>
                            <td class={NflPlayoffsPlayers.find(player => player.playerName === entry.rb2)?.eliminated === 'yes' ? 'eliminated' : 'active'}>{entry.rb2}</td>
                            <td class={NflPlayoffsPlayers.find(player => player.playerName === entry.wr1)?.eliminated === 'yes' ? 'eliminated' : 'active'}>{entry.wr1}</td>
                            <td class={NflPlayoffsPlayers.find(player => player.playerName === entry.wr2)?.eliminated === 'yes' ? 'eliminated' : 'active'}>{entry.wr2}</td>
                            <td class={NflPlayoffsPlayers.find(player => player.playerName === entry.te)?.eliminated === 'yes' ? 'eliminated' : 'active'}>{entry.te}</td>
                            <td class={NflPlayoffsPlayers.find(player => player.playerName === entry.flex)?.eliminated === 'yes' ? 'eliminated' : 'active'}>{entry.flex}</td>
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