import React, { useState } from 'react';
import NavBar from '../../Navbar';

// Data Import
import { NflPlayoffsPlayers } from '../../../data/NflPlayoffs';

// Component Imports

const NflPlayoffsEntry = () => {

    const entryOpen = true;

    const navbarChoices = [];

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
        console.log('form submmtied');
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
                    <p>Entry open</p>
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
                            <button onClick={() => handlePositionClick('qb', 'qb')}>QB: {players['qb']}</button>
                            <button onClick={() => handlePositionClick('rb1', 'rb')}>RB: {players['rb1']}</button>
                            <button onClick={() => handlePositionClick('rb2', 'rb')}>RB: {players['rb2']}</button>
                            <button onClick={() => handlePositionClick('wr1', 'wr')}>WR: {players['wr1']}</button>
                            <button onClick={() => handlePositionClick('wr2', 'wr')}>WR: {players['wr2']}</button>
                            <button onClick={() => handlePositionClick('te', 'te')}>TE: {players['te']}</button>
                            <button onClick={() => handlePositionClick('flex', 'flex')}>FLEX: {players['flex']}</button>
                            <button onClick={() => handlePositionClick('captain', 'captain')}>CAPTAIN: {players['captain']}</button>
                        </div>
                        <div>
                            {showModal && (
                                <div class='modal' id='nfl-section-2'>
                                    <button onClick={() => setShowModal(false)}>X</button>
                                    <div class='scrollable-container'>
                                        {positionData && Array.isArray(positionData) && positionData.map((player, index) => (
                                            <button 
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
                    </form>
                </div>
            ) : (
                <p>The deadline to submit an entry has closed</p>
            )}
        </section>
    )
}

export default NflPlayoffsEntry;