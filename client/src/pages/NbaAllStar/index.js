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
                <h2>Choosing Your Team</h2>
                    <ol>
                        <li>
                            <h3>Choose 8 players from the all star game</h3>
                            <ul>
                                <li>4 must be starters</li>
                                <li>4 must be bench players</li>
                                <li>Of the 8 players, one player is your captain (who earns 1.5 times points)</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Choose an additional player from each challenge below</h3>
                            <ul>
                                <li>Slam Dunk Contest Winner</li>
                                <li>3-Point Contest Winner</li>
                                <li>Skills Challenge Winner</li>
                            </ul>
                        </li>
                    </ol>
            </div>
            <div>
                <h2>Scoring</h2>
                <li>You receive 1 point for each point your player scores in the all star game</li>
                <li>You receive 15 additional points if you chose the MVP of the all star game</li>
                <li>You receive 10 points if you choose the Skills Challenge winner</li>
                <li>You receive 10 points if you choose the Dunk Challenge winner</li>
                <li>You receive 10 points if you choose the 3-Point Contest winner</li>
                <h2>Bonus Points</h2>
                <li>If you choose a player on the winning All Star Game team you receive an extra 5 points per player you chose on the winning team</li>
            </div>
        </section>
    )
};

export default NbaAllStar;