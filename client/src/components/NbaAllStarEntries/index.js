import React from 'react';

const NbaAllStarEntries = ({ allNbaAllStar }) => {
    if (!allNbaAllStar.length) {
        return <h3>NO NBA ALL STAR ENTRIES YET</h3>;
    }

    return (
        <div>
        <h3>NBA ALL STAR ENTRY</h3>
        {allNbaAllStar &&
          allNbaAllStar.map(nbaEntry => (
            <div key={nbaEntry._id}>
              <p>
                Entry by: {nbaEntry.username}
              </p>
              <div>
                <p>Captain: {nbaEntry.challengeCaptain}</p>
              </div>
            </div>
          ))}
      </div>
    )
};

export default NbaAllStarEntries;