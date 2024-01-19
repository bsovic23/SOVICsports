import React from 'react';

import { Link } from 'react-router-dom';

import Admin from '../Admin';

function Header() {
    return(
        <section class="header">
            <div>
                <Link to="/" className="header-link">
                    <h1>SOVICsports</h1>
                </Link>
            </div>
            <p>
                Version 1.01.05 | Updated: 01/19/2024 | <Link to='/applicationUpdates' style={{textDecoration: 'none', color: 'black'}}>Click here to see whats new</Link> | <Link to='/Admin' style={{textDecoration: 'none', color: 'black'}}>Admin Access</Link>
            </p>
        </section>
    )
};

export default Header;