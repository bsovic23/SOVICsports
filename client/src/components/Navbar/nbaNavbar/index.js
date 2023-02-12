import React from 'react';

import { Link } from 'react-router-dom';

const NbaNavbar = () => {
    return(
        <section class="navbar">
             <button>
                <Link to="/nbaAllStar">CHALLENGE INSTRUCTIONS</Link>
            </button>
            <button>
                <Link to="/nbaEntry">CREATE ENTRY</Link>
            </button>
            <button>
                <Link to="/nbaEntries">ALL ENTRIES</Link>
            </button>
            <button>
                STANDINGS
            </button>
        </section>
    )
};

export default NbaNavbar;