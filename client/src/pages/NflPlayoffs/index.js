import React from 'react';

import NavBar from '../../components/Navbar';

const NflPlayoffs = () => {

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/nflPlayoffs"},
        {text: "CREATE ENTRY", link: "/nflPlayoffsEntry"},
        {text: "ALL ENTRIES", link: "/nflPlayoffsEntries"},
        {text: "STANDINGS", link: "/nflPlayoffsStandings"},
    ];

    return(
        <section id='bowlchallenge' class='page'>
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <h1>NFL Playoffs Challenge</h1>
            <div>
                <h2>Instructions</h2>
                <div>
                    <h3>Create a team:</h3>
                    <li>Choose one player maximum per team so that you have a QB, RB, RB, WR, WR, TE, FLEX (extra RB, WR, or TE)</li>
                    <li>Rememeber, a player with a bye scores 0 points for first round, but player with a bye is also more likely to make Super Bowl</li>
                    <li>You will receive points for touchdowns, yards, and catches for each players game</li>
                    <li>One of your players will be your captain. The captains total scoring (including bonuses) will be multiplied by 2</li>
                </div>
                <div>
                    <h3>Bonus Points:</h3>
                    <li>Win AFC/NFC Championship: +5 points</li>
                    <li>Win Super Bowl: +10 points</li>
                    <li>Win Super Bowl MVP: +15 points</li>
                </div>
            </div>
        </section>
    )
};

export default NflPlayoffs;