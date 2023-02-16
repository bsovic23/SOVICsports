import React from 'react';

const NbaAllStarEntries = ({ allNbaAllStar }) => {
    if (!allNbaAllStar.length) {
        return <h2>NO NBA ALL STAR ENTRIES YET</h2>;
    }

    return (
        <section class="nba-entries-cards">
          <div class="nba-entries-container">
            {allNbaAllStar &&
            allNbaAllStar.map(nbaEntry => (
              <div key={nbaEntry._id} class="nba-entry-card">
                <h3>
                  Entry: {nbaEntry.entryName}
                </h3>
                <div>
                  <p>Captain: {nbaEntry.challengeCaptain}</p>
                </div>
                <div>
                    <h4>Starters</h4>
                  <li>{nbaEntry.starterOne}</li>
                  <li>{nbaEntry.starterTwo}</li>
                  <li>{nbaEntry.starterThree}</li>
                  <li>{nbaEntry.starterFour}</li>
                    <h4>Bench</h4>
                  <li>{nbaEntry.benchOne}</li>
                  <li>{nbaEntry.benchTwo}</li>
                  <li>{nbaEntry.benchThree}</li>
                  <li>{nbaEntry.benchFour}</li>
                    <h4>Challenges</h4>
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