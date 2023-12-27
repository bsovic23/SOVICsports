import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { MUTATION_CFB_BOWL_PICKEM } from '../../utils/mutations';
import { QUERY_ALL_CFB_BOWL_PICKEM } from '../../utils/queries';
import NavBar from "../Navbar";

// Data Imports
import { bowlPicks2023 } from '../../data/BowlChallenge';

function Admin() {

    const navbarChoices = [
        { text: "HOME", link: "/"},
    ];

    const [password, setPassword] = useState('');

    const existingData = {};

    const [year, setYear] = useState('2023');
    const [entryName, setEntryName] = useState('adminAnswers');
    const [selectedTeams, setTeam] = useState(existingData.selectedTeams || []);
    const [semifinal1, setSemiFinal1] = useState(existingData.semifinal1 || '');
    const [semifinal2, setSemiFinal2] = useState(existingData.semifinal2 || '');
    const [champion, setChampion] = useState(existingData.champion || '');

    /*
    const { loading, data, refetch } = useQuery(QUERY_ALL_CFB_BOWL_PICKEM);
    const allBowlPickem = data?.allCfbBowlPickem || [];

    const adminAnswersEntry = allBowlPickem.find(entry => entry.entryName === 'adminAnswers');
    console.log(adminAnswersEntry);
    const existingData = adminAnswersEntry || {};

    useEffect(() => {
        refetch();

        if (existingData.selectedTeams !== undefined && !isEqual(existingData.selectedTeams, selectedTeams)) {
            setTeam(existingData.selectedTeams);
        }
        if (existingData.semifinal1 !== undefined && existingData.semifinal1 !== semifinal1) {
            setSemiFinal1(existingData.semifinal1);
        }
        if (existingData.semifinal2 !== undefined && existingData.semifinal2 !== semifinal2) {
            setSemiFinal2(existingData.semifinal2);
        }
        if (existingData.champion !== undefined && existingData.champion !== champion) {
            setChampion(existingData.champion);
        }
    }, []);
    */

    const [addCfbBowlPickem] = useMutation(MUTATION_CFB_BOWL_PICKEM);

    const handleButtonClick = (game, selectedTeam) => {
        const updatedTeams = [...selectedTeams];
        const existingPickIndex = updatedTeams.findIndex((currentPicks) => currentPicks.game === game);
    
        if (existingPickIndex !== -1) {
            updatedTeams[existingPickIndex] = { game, selectedTeam };
        } else {
            updatedTeams.push({ game, selectedTeam });
        }
    
        setTeam(updatedTeams);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const gameVariables = {};
        selectedTeams.forEach(({ game, selectedTeam }) => {
            gameVariables[game] = selectedTeam;
        });
        
        addCfbBowlPickem({
            variables: {
                entryName: entryName,
                year: year,
                ...gameVariables,
                semifinal1: semifinal1,
                semifinal2: semifinal2,
                champion: champion,
            }
        }).then(() => {
            window.alert("Your entry has been updated!");
        }).catch(error => {
            console.error("Error submitting entry:", error);
        });
    };

    return(        
        <section class='page' id='admin'>
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <div>
                <h1>Admin</h1>
                <div>
                    <label>
                        <input
                            type='text'
                            placeholder='Enter Password Here'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        Password:
                    </label>
                </div>
            </div>
            {(password === 'passwordSovic') ? (
                <div>
                    <h2>Password Correct</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label>Entry Name:</label>
                            <input
                                type='text'
                                placeholder='Enter Entry Name'
                                value={entryName}
                                onChange={(e) => setEntryName(e.target.value)}
                            />
                        </div>
                        <div>
                            {bowlPicks2023.map(({game, teamOne, teamTwo}) => (
                                <div key={game}>
                                    <label>
                                        <input
                                            type='radio'
                                            name={game}
                                            value={teamOne}
                                            onChange={() => handleButtonClick(game, teamOne)}
                                        />
                                        {teamOne}
                                    </label>
                                    vs.
                                    <label>
                                        <input
                                            type='radio'
                                            name={game}
                                            value={teamTwo}
                                            onChange={() => handleButtonClick(game, teamTwo)}
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
                                value={semifinal1}
                                onChange={(e) => setSemiFinal1(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Semi Final Winner Two (Washington (2) vs Texas (3)):</label>
                            <input
                                placeholder='type semi two winner'
                                value={semifinal2}
                                onChange={(e) => setSemiFinal2(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Champion:</label>
                            <input
                                placeholder='type champion here'
                                value={champion}
                                onChange={(e) => setChampion(e.target.value)}
                            />
                        </div>
                        <button class='submit' type='submit'>Submit</button>
                    </form>
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