import React from 'react';

import { Link } from 'react-router-dom';

function Homepage() {
    return(
        <section>
            What would you like to do:
            <div>
                <button>
                    <Link to="/nbaAllStar">NBA All Star Weekend</Link>
                </button>
                <button>
                    COMING SOON: NFL Playoffs Create A Team
                </button>
                <button>
                    COMING SOON: College Football Bowl Challenge
                </button>
                <button>
                    COMING SOON: NBA Playoffs Create A Team
                </button>
                <button>
                    COMING SOON: Pickhoops March Madness
                </button>
                <button>
                    COMING SOON: NFL Weekly Player Survivor Pickem
                </button>
            </div>
        </section>
    )
};


export default Homepage;