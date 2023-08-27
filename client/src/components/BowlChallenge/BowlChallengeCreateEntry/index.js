// This component will not use the generic EntryForm since different format
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_CFB_B0WL_PICKEM } from '../../../utils/mutations';
import NavBar from '../../Navbar';

// import bowl picks data
import { bowlPicks2023 } from '../../../data/BowlChallenge';

const BowlChallengeEntry = () => {

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/bowlChallenge"},
        {text: "CREATE ENTRY", link: "/bowlChallengeEntry"},
        {text: "ALL ENTRIES", link: "/bowlChallengeEntries"},
        {text: "STANDINGS", link: "/bowlChallengeStandings"},
    ];

    const [year, setYear] = useState('2023');
    const [entryName, setEntryName] = useState('');
    const [selectedTeams, setTeam] = useState([]);
    const [semifinal1, setSemiFinal1] = useState('');
    const [semifinal2, setSemiFinal2] = useState('');
    const [champion, setChampion] = useState('');
    const [titleTotalPoints, setTitleTotalPoints] = useState('');

    const [addCfbBowlPickem] = useMutation(MUTATION_CFB_B0WL_PICKEM);

    const handleButtonClick = (event, winner, game) => {
        event.preventDefault();
        const updatedTeams = [...selectedTeams];
        const existingPickIndex = updatedTeams.findIndex((currentPicks) => currentPicks.game === game);
        
        if (existingPickIndex !== -1) {
          updatedTeams[existingPickIndex] = { game: winner };
        } else {
          updatedTeams.push({ game: winner });
        }
    
        setTeam(updatedTeams);
      };

      const handleFormSubmit = (event) => {
        event.preventDefault();
    
        const formattedPicks = selectedTeams.reduce((formatted, currentPick) => {
            const gameKey = `${bowlPicks2023.find(game => game.teamOne === currentPick.game || game.teamTwo === currentPick.game).game}`;
            formatted[gameKey] = currentPick.game;
            return formatted;
        }, {});
        
        addCfbBowlPickem({
            variables: {
                entryName: entryName,
                year: year,
                ...formattedPicks,
                semifinal1: semifinal1,
                semifinal2: semifinal2,
                champion: champion,
                titleTotalPoints: titleTotalPoints,
            }
        }).then(() => {
            setEntryName('');
            setSemiFinal1('');
            setSemiFinal2('');
            setChampion('');
            setTitleTotalPoints('');
            window.alert("Your entry has been submitted!");
        }).catch(error => {
            console.error("Error submitting entry:", error);
        });
    };

    return(
        <section class='form-section'>
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <h1>
                College Football Bowl Challenge
            </h1>
           <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Entry Name:</label>
                    <input
                        placeholder='Enter your name here'
                        value={entryName}
                        onChange={(e) => setEntryName(e.target.value)}
                    />
                </div>
                {bowlPicks2023.map(({index, game, points, teamOne, teamOneColor, teamOneColor2, teamTwo, teamTwoColor, teamTwoColor2}) => (
                    <div key={index}>
                        <p>{points} Point Game</p>
                        <p>Game #{game}</p>
                        <button 
                            style={{ backgroundColor: teamOneColor, borderColor: teamOneColor2, borderWidth: "10px" }}
                            onClick={(e) => handleButtonClick(e, teamOne, game)}
                        >{teamOne}
                        </button>
                        vs.
                        <button 
                            style={{ backgroundColor: teamTwoColor, borderColor: teamTwoColor2, borderWidth: "10px" }}
                            onClick={(e) => handleButtonClick(e, teamTwo, game)}
                        >{teamTwo}
                        </button>
                    </div>
                ))}
                <div>
                    <label>Semi Final Winner One:</label>
                    <input
                        placeholder='type winner here'
                        value={semifinal1}
                        onChange={(e) => setSemiFinal1(e.target.value)}
                    />
                </div>
                <div>
                    <label>Semi Final Winner Two:</label>
                    <input
                        placeholder='type winner here'
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
                <div>
                    <label>Tiebreaker #1: Title Game Total Points Without Going Over:</label>
                    <input
                        placeholder='type total points here'
                        value={titleTotalPoints}
                        onChange={(e) => setTitleTotalPoints(e.target.value)}
                    />
                </div>
                <button class='submit' type='submit'>Submit</button>
           </form>
        </section>
    )
};

export default BowlChallengeEntry;