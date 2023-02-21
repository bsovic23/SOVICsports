import React from 'react';

import { Link } from 'react-router-dom';

function NbaPlayoffsNavbar() {
    return(
        <section class="nba-playoffs-navbar">
            <button>
                <Link to="/nbaplayoffs" style={{textDecoration: 'none', color: 'black'}}>CHALLENGE INSTRUCTIONS</Link>
            </button>
            <button>
                <Link to="/nbaplayoffsEntry" style={{textDecoration: 'none', color: 'black'}}>CREATE ENTRY</Link>
            </button>
            <button>
                <Link to="/nbaplayoffsEntries" style={{textDecoration: 'none', color: 'black'}}>ALL ENTRIES</Link>
            </button>
            <button>
                Standings
            </button>
        </section>
    )
};

export default NbaPlayoffsNavbar;