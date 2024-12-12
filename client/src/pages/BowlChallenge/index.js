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
                    <li>Each set of bowl games are worth a different number of points (1, 2, 3, 5, 8, 12)</li>
                    <li>Tiebreaker #1 will be closest total points</li>
                    <li>Tiebreaker #2, if two or more people are equal points difference, will be most 1 point games correctly picked</li>
                </div>
                <div>
                    <li>I advise you to make your picks seperately and then when
                        ready, fill out the form. If you submit an entry and need
                        to make a change, please refill out the form and let me know 
                        which duplicate entry I need to delete from the database
                    </li>
                    <li>
                        After you complete an entry, check the "ALL ENTRIES" tab. If
                        you see your entry name, then your entry was submitted
                    </li>
                    <li>
                        After the first game locks, all entries are locked. Unfortunately
                        if there is an injury/sub to a team later in the bowl season, to be
                        fair to everyone, no one can make an adjustment (since all entries will
                        be visible after the first game)
                    </li>
                </div>
            </div>
        </section>
    )
};

export default BowlChallenge;