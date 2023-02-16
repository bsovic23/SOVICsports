import React from 'react';

import { Link } from 'react-router-dom';

const NbaNavbar = () => {
    return(
        <section class="navbar">
             <button>
                <Link to="/nbaAllStar" style={{textDecoration: 'none', color: 'black'}}>CHALLENGE INSTRUCTIONS</Link>
            </button>
            <button>
                <Link to="/nbaEntry" style={{textDecoration: 'none', color: 'black'}}>CREATE ENTRY</Link>
            </button>
            <button>
                <Link to="/nbaEntries" style={{textDecoration: 'none', color: 'black'}}>ALL ENTRIES</Link>
            </button>
            <button>
                STANDINGS
            </button>
        </section>
    )
};

export default NbaNavbar;