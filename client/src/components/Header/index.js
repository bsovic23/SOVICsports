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
                Version 1.01.02 | Updated: 08/06/2023 | Click here to see whats new
            </p>
        </section>
    )
};

export default Header;