import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
    return(
        <section class="header">
            <div>
                <Link to="/" className="header-link">
                    <h1>SOVICsports</h1>
                </Link>
            </div>
            <p>
                Version 1.0 | Updated: 2/16/2023
            </p>
        </section>
    )
};

export default Header;