// This component will not use the generic EntryForm since different format
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_CFB_BOWL_PICKEM } from '../../../utils/mutations';
import NavBar from '../../Navbar';

// data import
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

    const [addCfbBowlPickem] = useMutation(MUTATION_CFB_BOWL_PICKEM);

    const handleButtonClick = (event, winner, game) => {
        event.preventDefault();
        const updatedTeams = [...selectedTeams];
        const existingPickIndex = updatedTeams.findIndex((currentPicks) => currentPicks.game === game);
    
        if (existingPickIndex !== -1) {
            updatedTeams[existingPickIndex] = { game, selectedTeam: winner };
        } else {
            updatedTeams.push({ game, selectedTeam: winner });
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
                        placeholder='Type Entry Name Here'
                        value={entryName}
                        onChange={(e) => setEntryName(e.target.value)}
                    />
                </div>
                {bowlPicks2023.map(({index, game, points, teamOne, teamOneColor, teamOneColor2, teamTwo, teamTwoColor, teamTwoColor2, spread}) => (
                    <div key={index} id="cfb-matchup" style={{ backgroundColor: getBackgroundColor(points)}}>
                        <div>
                            <div style={{ marginLeft: '4%' }}>
                                <p>{points} Point Game</p>
                                <p>{game}</p>
                                <p>{spread}</p>
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <button 
                                    style={{ 
                                        backgroundColor: teamOneColor, 
                                        borderColor: teamOneColor2, 
                                        borderWidth: '12px', 
                                        height: '75px', 
                                        width: '250px', 
                                        fontWeight: 'bold', 
                                        fontSize: '20px',
                                        marginRight: '10px' 
                                    }}
                                    onClick={(e) => handleButtonClick(e, teamOne, game)}
                                >
                                {teamOne}
                                </button>
                                vs.
                                <button 
                                    style={{ 
                                        backgroundColor: teamTwoColor, 
                                        borderColor: teamTwoColor2, 
                                        borderWidth: '12px', 
                                        height: '75px', 
                                        width: '250px', 
                                        fontWeight: 'bold', 
                                        fontSize: '20px',
                                        marginLeft: '10px'  
                                    }}
                                    onClick={(e) => handleButtonClick(e, teamTwo, game)}
                                >
                                {teamTwo}
                                </button>
                            </div>
                        </div>
                        <div>
                            {selectedTeams.map((pick) => (
                                pick.game === game && (
                                    <div key={pick.selectedTeam}>
                                        Team Selected: {pick.selectedTeam}
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                ))}
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

function getBackgroundColor(points) {
    switch (points) {
      case 1:
        return 'gray';
      case 2:
        return '#D3D3D3';
        case 3:
            return 'gray';
            case 5:
                return '#D3D3D3';
      default:
        return 'white';
    }
  }

export default BowlChallengeEntry;