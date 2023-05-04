import React from 'react';

import NavBar from '../../components/Navbar';

const BowlChallenge = () => {

    const bowlChallengePicks = [];

    const navbarChoices = [
        {text: "Element1", link: "/nbaAllStar"},
        {text: "Element2", link: "/nbaAllStar"},
        {text: "Element3", link: "/nbaAllStar"}
    ];

    return(
        <section class='bowlchallenge'>
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <h1>COLLEGE FOOTBALL BOWL CHALLENGE</h1>
        </section>
    )
};

export default BowlChallenge;