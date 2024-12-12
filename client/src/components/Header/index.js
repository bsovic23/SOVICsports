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
                Version 2.02.03 | Updated: 12/11/2024 | <Link to='/applicationUpdates' style={{textDecoration: 'none', color: 'black'}}>Click here to see whats new</Link> | <Link to='/Admin' style={{textDecoration: 'none', color: 'black'}}>Admin Access</Link>
            </p>
        </section>
    )
};

export default Header;