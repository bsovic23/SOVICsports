import React from 'react';

import NavBar from '../../components/Navbar';

const BowlChallenge = () => {

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/bowlChallenge"},
        {text: "CREATE ENTRY", link: "/bowlChallengeEntry"},
        {text: "ALL ENTRIES", link: "/bowlChallengeEntries"},
        {text: "STANDINGS", link: "/bowlChallengeStandings"},
    ];

    return(
        <section id='bowlchallenge' class='page'>
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <h1>COLLEGE FOOTBALL BOWL CHALLENGE</h1>
            <div>
                <h2>Instructions</h2>
                <div>
                    <h3>Choose the winner of each bowl game</h3>
                    <li>You will receive points based on each correct pick you make</li>
                    <li>Each set of bowl games are worth a different number of points</li>
                </div>
            </div>
        </section>
    )
};

export default BowlChallenge;