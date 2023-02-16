import React from 'react';

const NbaAllStarEntries = ({ allNbaAllStar }) => {
    if (!allNbaAllStar.length) {
        return <h3>NO NBA ALL STAR ENTRIES YET</h3>;
    }

    return (
        <section class="nba-entries">
          <h3>NBA ALL STAR ENTRY</h3>
          <div class="nba-entries-container">
            {allNbaAllStar &&
            allNbaAllStar.map(nbaEntry => (
              <div key={nbaEntry._id} class="nba-entry-card">
                <h4>
                  Entry by: {nbaEntry.entryName}
                </h4>
                <div>
                  <p>Captain: {nbaEntry.challengeCaptain}</p>
                </div>
                <div>
                    <h5>Starters</h5>
                  <li>{nbaEntry.starterOne}</li>
                  <li>{nbaEntry.starterTwo}</li>
                  <li>{nbaEntry.starterThree}</li>
                  <li>{nbaEntry.starterFour}</li>
                    <h5>Bench</h5>
                  <li>{nbaEntry.benchOne}</li>
                  <li>{nbaEntry.benchTwo}</li>
                  <li>{nbaEntry.benchThree}</li>
                  <li>{nbaEntry.benchFour}</li>
                    <h5>Challenges</h5>
                    <li>Skills: {nbaEntry.skillsChamp}</li>
                    <li>Dunk: {nbaEntry.dunkChamp}</li>
                    <li>Three: {nbaEntry.threeChamp}</li>
                </div>
              </div>
          ))}
          </div>
        </section>
    )
};

export default NbaAllStarEntries;