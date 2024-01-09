import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; 

// Data Import
import { NflPlayoffsPlayers } from '../../../data/NflPlayoffs';

// Component Imports
import NavBar from '../../Navbar';

// GraphQL Imports
import { MUTATION_NFL_PLAYOFFS } from '../../../utils/mutations';

const NflPlayoffsEntry = () => {

    const entryOpen = true;

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/nflPlayoffs"},
        {text: "CREATE ENTRY", link: "/nflPlayoffsEntry"},
        {text: "ALL ENTRIES", link: "/"},
        {text: "STANDINGS", link: "/"},
    ];

    // Entry Variables
    const [showModal, setShowModal] = useState(false);
    const [year, setYear] = useState('2023');
    const [entryName, setEntryName] = useState('');
    const [players, setPlayers] = useState({
        qb: 'select QB',
        rb1: 'select RB',
        rb2: 'select RB',
        wr1: 'select WR',
        wr2: 'select WR',
        te: 'select TE',
        flex: 'select FLEX',
        captain: 'select CAPTAIN'
    });
    const [positionData, setPositionData] = useState('');

    const [addNflPlayoffs] = useMutation(MUTATION_NFL_PLAYOFFS);

    const handlePositionClick = (positionSlot, positionClick) => {
        let playerChoices;

        if ((positionSlot !== 'flex') && (positionSlot !== 'captain')) {
            const positionSlotIdentifier = positionSlot;
            playerChoices = NflPlayoffsPlayers.filter(
                (player) => player.position === positionClick
            ).map(player => ({ ...player, 'slot': positionSlotIdentifier }));
        } else if (positionSlot === 'flex') {
            const positionSlotIdentifier = positionSlot;
            playerChoices = NflPlayoffsPlayers.filter(
                (player) => (player.position === 'wr') || (player.position === 'rb') || (player.position === 'te')
            ).map(player => ({ ...player, 'slot': positionSlotIdentifier }));
        } else if (positionSlot === 'captain') {
            const positionSlotIdentifier = positionSlot;
            const selectedPlayers = Object.values(players).filter(player => player !== 'select QB' && player !== 'select RB' && player !== 'select WR' && player !== 'select TE' && player !== 'select FLEX');
            playerChoices = NflPlayoffsPlayers
                .filter(player => selectedPlayers.includes(player.playerName))
                .map(player => ({ ...player, 'slot': positionSlotIdentifier, 'selected': players[player.slot] === player.playerName }));
        } else console.log("error");
        
        setPositionData(playerChoices);
        setShowModal(true);
    };

    const handlePlayerClicked = (slot, player) => {
        setPlayers(prevPlayers => ({
            ...prevPlayers,
            [slot]: player
        }))
        setShowModal(false);
    }

    const submitForm = (event) => {
        event.preventDefault();

        addNflPlayoffs({
            variables: {
                entryName: entryName,
                year: year,
                qb: players.qb,
                rb1: players.rb1,
                rb2: players.rb2,
                wr1: players.wr1,
                wr2: players.wr2,
                te: players.te,
                flex: players.flex,
                captain: players.captain
            }
        }).then(() => {
            setEntryName('');
            setPlayers({
                qb: 'select QB',
                rb1: 'select RB',
                rb2: 'select RB',
                wr1: 'select WR',
                wr2: 'select WR',
                te: 'select TE',
                flex: 'select FLEX',
                captain: 'select CAPTAIN'
            });
            window.alert("Your entry has been submitted!");
        }).catch(error => {
            console.error("Error submitting entry:", error);
        });
    }

    return(
        <section class='form-section'>
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <h1>
                NFL Playoffs Challenge
            </h1>
            {entryOpen ? (
                <div>
                    <p>Please Read the Instructions Before Filling OUT</p>
                    <form onSubmit={submitForm}>
                        <div>
                            <label>
                                Entry Name:
                                <input
                                    type='text'
                                    value={entryName}
                                    onChange={(e) => setEntryName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div id='nfl-section-1'>
                            <button type='button' onClick={() => handlePositionClick('qb', 'qb')}>QB: {players['qb']}</button>
                            <button type='button' onClick={() => handlePositionClick('rb1', 'rb')}>RB: {players['rb1']}</button>
                            <button type='button' onClick={() => handlePositionClick('rb2', 'rb')}>RB: {players['rb2']}</button>
                            <button type='button' onClick={() => handlePositionClick('wr1', 'wr')}>WR: {players['wr1']}</button>
                            <button type='button' onClick={() => handlePositionClick('wr2', 'wr')}>WR: {players['wr2']}</button>
                            <button type='button' onClick={() => handlePositionClick('te', 'te')}>TE: {players['te']}</button>
                            <button type='button' onClick={() => handlePositionClick('flex', 'flex')}>FLEX: {players['flex']}</button>
                            <button type='button' onClick={() => handlePositionClick('captain', 'captain')}>CAPTAIN: {players['captain']}</button>
                        </div>
                        <div>
                            {showModal && (
                                <div class='modal' id='nfl-section-2'>
                                    <button onClick={() => setShowModal(false)}>X Close window</button>
                                    <div class='scrollable-container'>
                                        {positionData && Array.isArray(positionData) && positionData.map((player, index) => (
                                            <button
                                                style={{ display: 'block', marginBottom: '5px' }}
                                                type='button' 
                                                key={index} 
                                                onClick={() => handlePlayerClicked(player.slot, player.playerName)}
                                            >
                                                {player.position}: {player.playerName}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div> 
                        <button class='submit' type='submit'>Submit</button>
                    </form>
                </div>
            ) : (
                <p>The deadline to submit an entry has closed</p>
            )}
        </section>
    )
}

export default NflPlayoffsEntry;