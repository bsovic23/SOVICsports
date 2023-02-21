import React from 'react';

const NbaPlayoffsCards = ({ allNbaPlayoffs }) => {
    if (!NbaPlayoffsCards.length) {
        return <h2>No NBA PLAYOFFS TEAM ENTRIES</h2>
    } 

    return(
        <section class="nba-entries">
            <div class="nba-entries-container">
                {allNbaPlayoffs &&
                allNbaPlayoffs.map(nbaEntry => (
                    <div key={nbaEntry._id} class="nba-entry-card">
                        <h3>
                            Entry: {nbaEntry.EntryName}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default NbaPlayoffsCards;