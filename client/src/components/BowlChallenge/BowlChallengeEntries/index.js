import React, { useState, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_CFB_BOWL_PICKEM } from '../../../utils/queries';

// Component Imports
import NavBar from '../../Navbar';

// Data, Functions Imports

function BowlChallengeEntries() {

    const [dataShow, setDataShow] = useState(0);

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/bowlChallenge"},
        {text: "CREATE ENTRY", link: "/bowlChallengeEntry"},
        {text: "ALL ENTRIES", link: "/bowlChallengeEntries"},
        {text: "STANDINGS", link: "/bowlChallengeStandings"},
    ];

    const { loading, data } = useQuery(QUERY_ALL_CFB_BOWL_PICKEM);
    const allBowlPickem = data?.allCfbBowlPickem || [];

    useEffect(() => {
        const deadline = new Date("2023-12-01T23:59:59");
        const currentDate = new Date();

        if (currentDate > deadline) {
            setDataShow(1);
        }
    }, []);

    return(
        <section class='page' id='bowl-challenge-all-entries'>
            <div>
                <NavBar navElements={navbarChoices} />
            </div>
            <h1>College Football Bowl Challenge</h1>
            <div>
                {loading ? (
                    <div>
                        ... loading
                    </div>
                ) : (
                    <table>
                        <tr>
                            <th>Entry</th>
                        {dataShow === 1 && (
                        <>
                            <th>Game 1</th>
                            <th>Game 2</th>
                            <th>Game 3</th>
                            <th>Game 4</th>
                            <th>Game 5</th>
                            <th>Game 6</th>
                            <th>Game 7</th>
                            <th>Game 8</th>
                            <th>Game 9</th>
                            <th>Game 10</th>
                            <th>Game 11</th>
                            <th>Game 12</th>
                            <th>Game 13</th>
                            <th>Game 14</th>
                            <th>Game 15</th>
                            <th>Game 16</th>
                            <th>Game 17</th>
                            <th>Game 18</th>
                            <th>Game 19</th>
                            <th>Game 20</th>
                            <th>Game 21</th>
                            <th>Game 22</th>
                            <th>Game 23</th>
                            <th>Game 24</th>
                            <th>Game 25</th>
                            <th>Game 26</th>
                            <th>Game 27</th>
                            <th>Game 28</th>
                            <th>Game 29</th>
                            <th>Game 30</th>
                            <th>Game 31</th>
                            <th>Game 32</th>
                            <th>Game 33</th>
                            <th>Game 34</th>
                            <th>Game 35</th>
                            <th>Semifinal 1</th>
                            <th>Semifinal 2</th>
                            <th>Champion</th>
                            <th>Total Points</th>
                        </>
                        )}
                        </tr>
                            {allBowlPickem && allBowlPickem.map((entry, index) => (entries.entryName !== 'adminAnswers' && (
                                <tr key={index}>
                                    <td>{entry.entryName}</td>
                            {dataShow === 1 && (
                            <>
                                    <td>{entry.game1}</td>
                                    <td>{entry.game2}</td>
                                    <td>{entry.game3}</td>
                                    <td>{entry.game4}</td>
                                    <td>{entry.game5}</td>
                                    <td>{entry.game6}</td>
                                    <td>{entry.game7}</td>
                                    <td>{entry.game8}</td>
                                    <td>{entry.game9}</td>
                                    <td>{entry.game10}</td>
                                    <td>{entry.game11}</td>
                                    <td>{entry.game12}</td>
                                    <td>{entry.game13}</td>
                                    <td>{entry.game14}</td>
                                    <td>{entry.game15}</td>
                                    <td>{entry.game16}</td>
                                    <td>{entry.game17}</td>
                                    <td>{entry.game18}</td>
                                    <td>{entry.game19}</td>
                                    <td>{entry.game20}</td>
                                    <td>{entry.game21}</td>
                                    <td>{entry.game22}</td>
                                    <td>{entry.game23}</td>
                                    <td>{entry.game24}</td>
                                    <td>{entry.game25}</td>
                                    <td>{entry.game26}</td>
                                    <td>{entry.game27}</td>
                                    <td>{entry.game28}</td>
                                    <td>{entry.game29}</td>
                                    <td>{entry.game30}</td>
                                    <td>{entry.game31}</td>
                                    <td>{entry.game32}</td>
                                    <td>{entry.game33}</td>
                                    <td>{entry.game34}</td>
                                    <td>{entry.game35}</td>
                                    <td>{entry.semifinal1}</td>
                                    <td>{entry.semifinal2}</td>
                                    <td>{entry.champion}</td>
                                    <td>{entry.titleTotalPoints}</td>
                            </>
                            )}
                                </tr>
                            )))}
                    </table>
                )}
            </div>
        </section>
    )
};

export default BowlChallengeEntries;