import React from 'react';

import { Link } from 'react-router-dom';

function NbaPlayoffsNavbar() {
    return(
        <section class="navbar">
            <button>
                <Link to="/nbaPlayoffs" style={{textDecoration: 'none', color: 'black'}}>CHALLENGE INSTRUCTIONS</Link>
            </button>
            <button>
                <Link to="/nbaPlayoffsEntry" style={{textDecoration: 'none', color: 'black'}}>CREATE ENTRY</Link>
            </button>
            <button>
                <Link to="/nbaPlayoffsEntries" style={{textDecoration: 'none', color: 'black'}}>ALL ENTRIES</Link>
            </button>
            <button>
                <Link to="/nbaPlayoffsStandings" style={{textDecoration: 'none', color: 'black'}}>STANDINGS</Link>
            </button>
        </section>
    )
};

export default NbaPlayoffsNavbar;