import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_CFB_BOWL_PICKEM } from '../../../utils/mutations';
import NavBar from '../../Navbar';

// data import
import { bowlPicks2023 } from '../../../data/BowlChallenge';

const BowlChallengeEntry = () => {

    const entryOpen = true;

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/bowlChallenge"},
        {text: "CREATE ENTRY", link: "/bowlChallengeEntry"},
        {text: "ALL ENTRIES", link: "/bowlChallengeEntries"},
        {text: "STANDINGS", link: "/bowlChallengeStandings"},
    ];

    const [year, setYear] = useState('2024');
    const [entryName, setEntryName] = useState('');
    const [selectedTeams, setTeam] = useState([]);
    const [bracketPicks, setBracketPicks] = useState({
        semi1: '',
        semi2: '',
        champion: ''
    });
    const [titleTotalPoints, setTitleTotalPoints] = useState('');
    const [matches, setMatches] = useState({
        round1: [
          { team1: 'Team A', team2: 'Team B' },
          { team1: 'Team C', team2: 'Team D' },
          { team1: 'Team E', team2: 'Team F' },
          { team1: 'Team G', team2: 'Team H' }
        ],
        round2: [
          { team1: '', team2: '' },
          { team1: '', team2: '' }
        ]
      });

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

    const handleWinnerSelection = (round, matchIndex, teamIndex, event) => {
        event.preventDefault(); // Prevent form submission
        const newMatches = { ...matches };
        
        // Update the winner in the current round
        const winner = newMatches[round][matchIndex][`team${teamIndex + 1}`];
        
        // Set the winner in the next round
        const nextRound = round === 'round1' ? 'round2' : 'round3'; // Assuming there might be a third round
        if (newMatches[nextRound]) {
            const nextMatchIndex = Math.floor(matchIndex / 2);
            const nextTeamSlot = matchIndex % 2 === 0 ? 'team1' : 'team2';
            newMatches[nextRound][nextMatchIndex][nextTeamSlot] = winner;
        }

        setMatches(newMatches);
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
                semifinal1: bracketPicks.semi1,
                semifinal2: bracketPicks.semi2,
                champion: bracketPicks.champion,
                titleTotalPoints: titleTotalPoints,
            }
        }).then(() => {
            setEntryName('');
            setBracketPicks({ semi1: '', semi2: '', champion: '' });
            setTitleTotalPoints('');
            window.alert("Your entry has been submitted!");
        }).catch(error => {
            console.error("Error submitting entry:", error);
        });
    };

    return(
        <section className='form-section'>
            <div>
                <NavBar navElements={navbarChoices} />
            </div>
            <h1>
                College Football Bowl Challenge
            </h1>
            {entryOpen ? (
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
                <div className="bracket">
                    <h2>Round 1</h2>
                    <div className="round" id="round-1">
                        {matches.round1.map((match, matchIndex) => (
                        <div key={matchIndex} className="matchup">
                            <button onClick={(e) => handleWinnerSelection('round1', matchIndex, 0, e)}>
                            {match.team1}
                            </button>
                            <span>vs</span>
                            <button onClick={(e) => handleWinnerSelection('round1', matchIndex, 1, e)}>
                            {match.team2}
                            </button>
                        </div>
                        ))}
                    </div>
                    <h2>Round 2</h2>
                    <div className="round" id="round-2">
                        {matches.round2.map((match, matchIndex) => (
                        <div key={matchIndex} className="matchup">
                            <button>
                            {match.team1 ? match.team1 : 'TBD'}
                            </button>
                            <span>vs</span>
                            <button>
                            {match.team2 ? match.team2 : 'TBD'}
                            </button>
                        </div>
                        ))}
                    </div>
                </div>
                <div>
                    <label>Tiebreaker #1: Title Game Total Points Without Going Over:</label>
                    <input
                        placeholder='type total points here'
                        value={titleTotalPoints}
                        onChange={(e) => setTitleTotalPoints(e.target.value)}
                    />
                </div>
                <button className='submit' type='submit'>Submit</button>
            </form>
            ) : (
                <p>The deadline to submit an entry has passed</p>
            )}
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