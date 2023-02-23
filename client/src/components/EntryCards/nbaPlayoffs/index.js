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
                <tr class="entry">
                    <th key={nbaEntry._id}>
                    {nbaEntry.entryName}
                    </th>
                    <td>{nbaEntry.starterOne}</td>
                    <td>{nbaEntry.starterTwo}</td>
                    <td>{nbaEntry.starterThree}</td>
                    <td>{nbaEntry.starterFour}</td>
                    <td>{nbaEntry.starterFive}</td>
                    <td>{nbaEntry.starterSix}</td>
                    <td>{nbaEntry.starterSeven}</td>
                    <td>{nbaEntry.benchOne}</td>
                    <td>{nbaEntry.benchTwo}</td>
                    <td>{nbaEntry.benchThree}</td>
                </tr>
                ))}
            </table>          
            </div>
        </section>
    )
};

export default NbaPlayoffsCards;