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
            <div>
                Version 1.0 | Updated: 2/16/2023
            </div>
        </section>
    )
};

export default Header;