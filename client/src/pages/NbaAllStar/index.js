import React from 'react';
import NbaNavbar from '../../components/Navbar/nbaNavbar';

const NbaAllStar = () => {
    return(
        <section class="nba-all-star-page">
            <div>
                <NbaNavbar />
            </div>
            <h1>WELCOME TO THE NBA ALL STAR CHALLENGE</h1>
            <div>
                <h2>Instructions</h2>
                <div>
                    <h3>Choose 8 players from the all star game</h3>
                    <li>4 must be starters</li>
                    <li>4 must be bench players</li>
                    <li>Of the 8 players, one player is your captain (who earns 1.5 times points)</li>
                </div>
                <div>
                    <h3>Choose an additional player from each challenge below</h3>
                    <li>Slam Dunk Contest Winner</li>
                    <li>3-Point Contest Winner</li>
                    <li>Skills Challenge Winner</li>
                </div>
                <div>
                    <h3>Scoring</h3>
                    <li>You receive 1 point for each point your player scores in the all star game</li>
                    <li>You receive 15 additional points if you chose the MVP of the all star game</li>
                    <li>You receive 10 points if you choose the Skills Challenge winner</li>
                    <li>You receive 10 points if you choose the Dunk Challenge winner</li>
                    <li>You receive 10 points if you choose the 3-Point Contest winner</li>
                </div>
                <div>
                    <h3>Bonus Points</h3>
                    <li>If you choose a player on the winning All Star Game team you receive an extra 5 points per player you chose on the winning team</li>
                </div>
            </div>
        </section>
    )
};

export default NbaAllStar;