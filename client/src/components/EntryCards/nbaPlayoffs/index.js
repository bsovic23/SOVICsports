import React from 'react';

const NbaPlayoffsCards = ({ allNbaPlayoffs }) => {
    if (!NbaPlayoffsCards.length) {
        return <h2>No NBA PLAYOFFS TEAM ENTRIES</h2>
    } 

    return(
        <section class="nba-entries-cards">
            <div class="nba-entries-container">
            <table border="1">
                <tr class="table-header">
                    <th>Entry Name</th>
                    <th>Starter One</th>
                    <th>Starter Two</th>
                    <th>Starter Three</th>
                    <th>Starter Four</th>
                    <th>Starter Five</th>
                    <th>Starter Six</th>
                    <th>Starter Seven</th>
                    <th>Bench One</th>
                    <th>Bench Two</th>
                    <th>Bench Three</th>
                </tr>
                {allNbaPlayoffs &&
                allNbaPlayoffs.map(nbaEntry => (
                <tr>
                    <th key={nbaEntry._id}>
                    {nbaEntry.entryName}
                    </th>
                    <td>Starter 1</td>
                    <td>Starter 2</td>
                    <td>Starter 3</td>
                    <td>Starter 4</td>
                    <td>Starter 5</td>
                    <td>Starter Six</td>
                    <td>Starter Seven</td>
                    <td>Bench One</td>
                    <td>Bench Two</td>
                    <td>Bench Three</td>
                </tr>
                ))}
            </table>          
            </div>
        </section>
    )
};

export default NbaPlayoffsCards;