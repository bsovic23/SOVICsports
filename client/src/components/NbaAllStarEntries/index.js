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
                  Entry by: {nbaEntry.username}
                </h4>
                <div>
                  <p>Captain: {nbaEntry.challengeCaptain}</p>
                </div>
                <div>
                  <ul>
                    <h5>Lineup</h5>
                  <li>starter: {nbaEntry.starterOne}</li>
                  <li>starter: {nbaEntry.starterTwo}</li>
                  <li>starter: {nbaEntry.starterThree}</li>
                  <li>starter: {nbaEntry.starterFour}</li>
                  <li>bench: {nbaEntry.benchOne}</li>
                  <li>bench: {nbaEntry.benchTwo}</li>
                  <li>bench: {nbaEntry.benchThree}</li>
                  <li>bench: {nbaEntry.benchFour}</li>
                  </ul>
                  <ul>
                    <h5>Challenges</h5>
                    <li>Skills: {nbaEntry.skillsChamp}</li>
                    <li>Dunk: {nbaEntry.dunkChamp}</li>
                    <li>Three: {nbaEntry.threeChamp}</li>
                  </ul>
                </div>
              </div>
          ))}
          </div>
        </section>
    )
};

export default NbaAllStarEntries;