import React from 'react';

import { Link } from 'react-router-dom';

const NbaNavbar = () => {
    return(
        <section class="navbar">
            <button>
                <Link to="/nbaEntries">ALL ENTRIES</Link>
            </button>
            <button>
                CREATE ENTRY
            </button>
            <button>
                STANDINGS
            </button>
        </section>
    )
};

export default NbaNavbar;