import React, { useState } from 'react';

import NavBar from "../Navbar";

// Data Imports
import { bowlPicks2023 } from '../../data/BowlChallenge';

function Admin() {

    const navbarChoices = [
        { text: "HOME", link: "/"},
    ];

    const [password, setPassword] = useState('');
    const [answerEntry, setAnswerEntry] = useState('');

    const handleFormChange = (event) =>{
        event.preventDefault();

        if (password === 'passwordSovic') {
            window.alert('Password Correct')
        } else {
            window.alert('Incorrect Password')
        }
    };

    return(        
        <section class='page' id='admin'>
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <div>
                <h1>Admin</h1>
                <div>
                    <form onSubmit={handleFormChange}>
                        <label>
                            <input
                                type='text'
                                placeholder='Enter Password Here'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            Password:
                        </label>
                    </form>
                </div>
            </div>
            {(password === 'passwordSovic') ? (
                <div>
                    <h2>Password Correct</h2>
                    <form>
                        <div>
                            {bowlPicks2023.map(({points, game, teamOne, teamTwo}) => (
                                <div key={game}>
                                    <label>
                                        <input
                                            type='radio'
                                        />
                                        {teamOne}
                                    </label>
                                    vs.
                                    <label>
                                        <input
                                            type='radio'
                                        />
                                    {teamTwo}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div>
                            <label>Semi Final Winner One (Michigan (1) vs Alabama (4)):</label>
                            <input
                                placeholder='type semi one winner'
                                // value={semifinal1}
                                // onChange={(e) => setSemiFinal1(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Semi Final Winner Two (Washington (2) vs Texas (3)):</label>
                            <input
                                placeholder='type semi two winner'
                                // value={semifinal2}
                                // onChange={(e) => setSemiFinal2(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Champion:</label>
                            <input
                                placeholder='type champion here'
                                // value={champion}
                                // onChange={(e) => setChampion(e.target.value)}
                            />
                        </div>
                    </form>
                    <button class='submit' type='submit'>Submit</button>
                </div>
            ) : (
                <div>
                    Enter the correct password to access admin page
                </div>
            )}
        </section>
    )
};

export default Admin;