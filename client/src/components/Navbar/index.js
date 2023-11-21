import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = ({navElements}) => {
    return(
        <section class='navbar'>
            {navElements.map((button) => (
                <Link to={button.link} style={{textDecoration: 'none', color: 'black'}}>
                    <button key={button.text}>{button.text}</button>
                </Link>
            ))}
        </section>
    )
};

export default NavBar;