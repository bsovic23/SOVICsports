import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
    return(
        <section class="header">
            <div>
                <Link to="/">
                    <h1>SOVICsports</h1>
                </Link>
            </div>
        </section>
    )
};

export default Header;