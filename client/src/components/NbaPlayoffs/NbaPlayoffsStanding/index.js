import React from 'react';

import NbaPlayoffsNavbar from '../../Navbar/nbaPlayoffsNavbar';

function NbaPlayoffsStandings() {
    return(
        <section class="page" id="nbaplayoffs-entries">
            <div>
                < NbaPlayoffsNavbar />
            </div>
            <h1>NBA Playoffs Challenge Standings</h1>
            <div>
                <p>Standings updated as of the (insert game here)</p>
            </div>
            <div>
                STANDINGS COMPONENT INSERTED HERE
            </div>
        </section>
    )
};

export default NbaPlayoffsStandings;