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
            <h1>College Football Bowl Challenge</h1>
            <div>
                <h2>Instructions</h2>
                <div>
                    <h3>Choose the winner of each bowl game</h3>
                    <li>You will receive points based on each correct pick you make</li>
                    <li>Each set of bowl games are worth a different number of points</li>
                </div>
                <div>
                    <li>I advise you to make your picks seperately and then when
                        ready, fill out the form. If you submit an entry and need
                        to make a change, please refill out the form and let me know 
                        which duplicate entry I need to delete from the database
                    </li>
                </div>
            </div>
        </section>
    )
};

export default BowlChallenge;