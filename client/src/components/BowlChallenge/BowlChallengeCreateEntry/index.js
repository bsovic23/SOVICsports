import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_CFB_BOWL_PICKEM } from '../../../utils/mutations';
import NavBar from '../../Navbar';

// data import
import { bowlPicks2024 } from '../../../data/BowlChallenge';

const BowlChallengeEntry = () => {

    const entryOpen = false;

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/bowlChallenge"},
        {text: "CREATE ENTRY", link: "/bowlChallengeEntry"},
        {text: "ALL ENTRIES", link: "/bowlChallengeEntries"},
        {text: "STANDINGS", link: "/bowlChallengeStandings"},
    ];

    const [matches, setMatches] = useState({
        round1: [
          { team1: 'Tennessee', team2: 'Ohio State' },
          { team1: 'Texas', team2: 'Clemson' },
          { team1: 'Notre Dame', team2: 'Indiana' },
          { team1: 'SMU', team2: 'Penn State' },
        ],
        round2: [
          { team1: '', team2: 'Oregon' },
          { team1: '', team2: 'Arizona State' },
          { team1: '', team2: 'Georgia' },
          { team1: '', team2: 'Boise State' },
        ],
        round3: [{ team1: '', team2: '' }, { team1: '', team2: '' }],
        round4: [{ team1: '', team2: '' }],
        champion: { team1: '' },
    });
    

    const [year, setYear] = useState('2024');
    const [entryName, setEntryName] = useState('');
    const [selectedTeams, setTeam] = useState([]);
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

    const handleWinnerSelection = (round, matchIndex, teamIndex) => {
        setMatches((prevMatches) => {
          const newMatches = { ...prevMatches };
          const winner = newMatches[round][matchIndex][`team${teamIndex + 1}`];
    
          if (round === 'round1') {
            newMatches.round2[matchIndex].team1 = winner;
          } else if (round === 'round2') {
            const nextMatchIndex = Math.floor(matchIndex / 2);
            const nextTeamSlot = matchIndex % 2 === 0 ? 'team1' : 'team2';
            newMatches.round3[nextMatchIndex][nextTeamSlot] = winner;
          } else if (round === 'round3') {
            const nextTeamSlot = matchIndex % 2 === 0 ? 'team1' : 'team2';
            newMatches.round4[0][nextTeamSlot] = winner;
          } else if (round === 'round4') {
            newMatches.champion.team1 = winner;
          }
    
          return newMatches;
        });
      };    

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const gameVariables = {};
        console.log(selectedTeams);
        selectedTeams.forEach(({ game, selectedTeam }) => {
            gameVariables[game] = selectedTeam;
        });

        const roundOne = [
            matches.round1[0].team1, matches.round1[0].team2,
            matches.round1[1].team1, matches.round1[1].team2,
            matches.round1[2].team1, matches.round1[2].team2,
            matches.round1[3].team1, matches.round1[3].team2,
        ];
        const quarterfinals = [
            matches.round2[0].team1, matches.round2[0].team2,
            matches.round2[1].team1, matches.round2[1].team2,
            matches.round2[2].team1, matches.round2[2].team2,
            matches.round2[3].team1, matches.round2[3].team2,
        ];
        const semifinals = [
            matches.round3[0].team1, matches.round3[0].team2,
            matches.round3[1].team1, matches.round3[1].team2,
        ];
        const championship = [
            matches.round4[0].team1, matches.round4[0].team2,
        ];
        const champion = matches.champion.team1;
        
        addCfbBowlPickem({
            variables: {
                entryName: entryName,
                year: year,
                ...gameVariables,
                roundOne1: quarterfinals[0] || '',
                roundOne2: quarterfinals[2] || '',
                roundOne3: quarterfinals[4] || '',
                roundOne4: quarterfinals[6] || '',
                quarterfinals1: semifinals[0] || '',
                quarterfinals2: semifinals[1]  || '',
                quarterfinals3: semifinals[2]  || '',
                quarterfinals4: semifinals[3]  || '',
                semifinal1: championship[0] || '',
                semifinal2: championship[1] || '',
                champion: champion || '',
                titleTotalPoints: titleTotalPoints,
            }
        }).then(() => {
            setEntryName('');
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
                {bowlPicks2024.map(({index, game, points, teamOne, teamOneColor, teamOneColor2, teamTwo, teamTwoColor, teamTwoColor2, spread}) => (
                    <div key={index} id="cfb-matchup" style={{ backgroundColor: getBackgroundColor(points)}}>
                        <div>
                            <div style={{ marginLeft: '4%' }}>
                                <p>{points} Point Game</p>
                                <p>Game {game}</p>
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
                    <div className="round">
                        {matches.round1.map((match, matchIndex) => (
                        <div key={matchIndex} className="matchup">
                            <button
                            type="button"
                            onClick={() => handleWinnerSelection('round1', matchIndex, 0)}
                            >
                            {match.team1}
                            </button>
                            <span>vs</span>
                            <button
                            type="button"
                            onClick={() => handleWinnerSelection('round1', matchIndex, 1)}
                            >
                            {match.team2}
                            </button>
                        </div>
                        ))}
                    </div>
                    <h2>Quarterfinals</h2>
                    <div className="round">
                        {matches.round2.map((match, matchIndex) => (
                        <div key={matchIndex} className="matchup">
                            <button
                            type="button"
                            onClick={() => handleWinnerSelection('round2', matchIndex, 0)}
                            >
                            {match.team1 || ''}
                            </button>
                            <span>vs</span>
                            <button
                            type="button"
                            onClick={() => handleWinnerSelection('round2', matchIndex, 1)}
                            >
                            {match.team2 || ''}
                            </button>
                        </div>
                        ))}
                    </div>
                    <h2>Semifinals</h2>
                    <div className="round">
                        {matches.round3.map((match, matchIndex) => (
                        <div key={matchIndex} className="matchup">
                            <button
                            type="button"
                            onClick={() => handleWinnerSelection('round3', matchIndex, 0)}
                            >
                            {match.team1 || ''}
                            </button>
                            <span>vs</span>
                            <button
                            type="button"
                            onClick={() => handleWinnerSelection('round3', matchIndex, 1)}
                            >
                            {match.team2 || ''}
                            </button>
                        </div>
                        ))}
                    </div>
                    <h2>Championship</h2>
                    <div className="round">
                        {matches.round4.map((match, matchIndex) => (
                        <div key={matchIndex} className="matchup">
                            <button
                            type="button"
                            onClick={() => handleWinnerSelection('round4', matchIndex, 0)}
                            >
                            {match.team1 || ''}
                            </button>
                            <span>vs</span>
                            <button
                            type="button"
                            onClick={() => handleWinnerSelection('round4', matchIndex, 1)}
                            >
                            {match.team2 || ''}
                            </button>
                        </div>
                        ))}
                    </div>
                    <h2>Champion</h2>
                    <div className="champion">
                        <span>{matches.champion.team1 || ''}</span>
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