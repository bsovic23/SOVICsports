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
                Version 1.01.03 | Updated: 11/24/2023 | <Link to='/applicationUpdates' style={{textDecoration: 'none', color: 'black'}}>Click here to see whats new</Link>
            </p>
        </section>
    )
};

export default Header;