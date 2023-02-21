import React from 'react';

import NbaPlayoffsNavbar from '../../components/Navbar/nbaPlayoffsNavbar';

function NbaPlayoffs() {
    return(
        <section class="nba-playoffs-page">
            <div>
                < NbaPlayoffsNavbar />
            </div>
            <h1>WELCOME TO THE NBA PLAYOFFS CHALENGE</h1>
            <div>
                <h2>Instructions</h2>
                <div>
                    <h3>Choose 10 players from any teams in the NBA playoffs</h3>
                    <li>7 must be starters</li>
                    <li>3 must be bench players</li>
                    <li>You can only choose a maximum of 2 players per playoff team if you want (BUT BOTH CANNOT be starters on the same team. EX: One must be a starter and one must be a bench player)</li>
                </div>
                <div>
                    <h3>Scoring</h3>
                    <p>The points scoring below only results for each players chosen for your challenge team</p>
                    <li>1 point for each point the player scores during the entire NBA Playoffs</li>
                    <li>5 points for a playoff series win</li>
                    <li>10 points for a conference final series (ECF, WCF) win</li>
                    <li>15 points for a NBA Finals series win</li>
                    <li>20 points for a NBA Finals MVP</li>
                    <li>NBA FINALS POINTS BONUS: All points (excluding series/mvp points) scored in the NBA finals are doubled</li>
                </div>
            </div>
        </section>
    )
};

export default NbaPlayoffs;