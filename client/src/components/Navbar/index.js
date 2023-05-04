import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = ({navElements}) => {
    return(
        <section class='navbar'>
            {navElements.map((button) => (
                <button key={button.text}>
                    <Link to={button.link} style={{textDecoration: 'none', color: 'black'}}>
                        {button.text}
                    </Link>
                </button>
            ))}
        </section>
    )
};

export default NavBar;