import React from 'react';

import { Link } from 'react-router-dom';

function Homepage() {
    return(
        <section class="homepage">
            <h2>SOVICsports Challenges</h2>
            <div>
            <p>Which challenge would you like to access:</p>
                <button>
                    COMING SOON: NFL Playoffs Create A Team
                </button>
                <button>
                    <Link to="/nbaAllStar" style={{textDecoration: 'none', color: 'black'}}>NBA All Star Weekend</Link>
                </button>
                <button>
                    <Link to="/marchMadness" style={{textDecoration: 'none', color: 'black'}}>PickHoops March Madness</Link>
                </button>
                <button>
                    <Link to="/nbaPlayoffs" style={{textDecoration: 'none', color: 'black'}}>NBA Playoffs Create A Team</Link>
                </button>
                <button>
                    COMING SOON: NFL Weekly Player Survivor Pickem
                </button>
                <button>
                    COMING SOON: College Football Bowl Challenge
                </button>
            </div>
            <div>
                <h2>SOVICsports Year Standings</h2>
                <p>
                    For each challenge you enter, those total points will go towards your year standing. The points leader
                    at the end of the year will win a bonus prize
                </p>
                <button>
                    COMING SOON: SOVICsports Year Standings
                </button>
            </div>
            <div>
                <h2>SOVICsports Challenge History</h2>
                <p>Click the button below to check the history of any SOVICsports challenge</p>
                <button>
                    <Link to="/history" style={{textDecoration: 'none', color: 'black'}}>SOVICsports Challenge History</Link>
                </button>
            </div>
            <div class="homepage">
                <h2>About SOVICsports</h2>
                <p>
                    SOVICsports was unofficially developed in 2016 while I was at Syracuse University. As an avid sports enthusiast,
                    my friends and I would love watching the different sporting events, special weekends, and bowl seasons.
                    <br />
                    <br />
                    Until January 2023, I always took individual emails with entries, and manually coded the results. I would update the groupchats
                    with standings periodically. With the different fun pool groups growing, I decided to make an application that would cut
                    out the middle man, myself, and allow a better user experience with the pools.
                    <br />
                    <br />
                    This site will be the home to many of the sports challenges that occur over the course of the year. And hopefully add an 
                    increased user experience. I envision the application growing with many features as this is just the beta version. The 
                    application allows users to enter their information, and access standings through the application. Other functions such as
                    user history for all sports challenges are included in this application.
                    <br />
                    <br />
                </p>
            <div class="homepage">
                <h2>Support SOVICsports</h2>
                <p>
                    SOVICsports was created to provide the greatest user experience to my friends for these individual sports contests.
                    <br />
                    <br />
                    This project took time (and will continue to take time as I continue to make improvements throughout the year). If 
                    you feel like contrubuting anything, you can always venmo me.
                </p>
            </div>
            </div>
        </section>
    )
};


export default Homepage;