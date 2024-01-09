import React from 'react';

// Component Imports
import NavBar from '../../Navbar';

// GraphQL Imports
// QUERY ALL ENTRIES NFL PLAYOFFS GRAPHQL

const NflPlayoffsEntries = () => {

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/nflPlayoffs"},
        {text: "CREATE ENTRY", link: "/nflPlayoffsEntry"},
        {text: "ALL ENTRIES", link: "/nflPlayoffsEntries"},
        {text: "STANDINGS", link: "/nflPlayoffStandings"},
    ];

    return(
        <section class='page' id='nfl-playoffs-all-entries'>
            <div>
                <NavBar navElements={navbarChoices} />
            </div>
            <h1>College Football Bowl Challenge</h1>
            <div>
                ENTRIES SO FAR SECTION
            </div>
        </section>
    )
};

export default NflPlayoffsEntries;