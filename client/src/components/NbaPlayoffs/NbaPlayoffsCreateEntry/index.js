import React, { useState } from 'react';
import { useMutation } from "@apollo/client";

import NavBar from '../../Navbar';
import { MUTATION_NBA_PLAYOFFS } from '../../../utils/mutations';

const NbaPlayoffsEntry = () => {
    
    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/nbaPlayoffs"},
        {text: "CREATE ENTRY", link: "/nbaPlayoffsEntry"},
        {text: "ALL ENTRIES", link: "/nbaPlayoffsEntries"},
        {text: "STANDINGS", link: "/nbaPlayoffsStandings"}
    ];

    const [entryName, setEntry] = useState('');
    const [starterOne, setStarterOne] = useState('');
    const [starterTwo, setStarterTwo] = useState('');
    const [starterThree, setStarterThree] = useState('');
    const [starterFour, setStarterFour] = useState('');
    const [starterFive, setStarterFive] = useState('');
    const [starterSix, setStarterSix] = useState('');
    const [starterSeven, setStarterSeven] = useState('');
    const [benchOne, setBenchOne] = useState('');
    const [benchTwo, setBenchTwo] = useState('');
    const [benchThree, setBenchThree] = useState('');

    const [addNbaPlayoffs] = useMutation(MUTATION_NBA_PLAYOFFS);

    const submitHandler = async event => {
        event.preventDefault();

        try {
            await addNbaPlayoffs({
                variables: {
                    entryName,
                    starterOne,
                    starterTwo,
                    starterThree,
                    starterFour,
                    starterFive,
                    starterSix,
                    starterSeven,
                    benchOne,
                    benchTwo,
                    benchThree,
                },
            });

            setEntry('');
            setStarterOne('');
            setStarterTwo('');
            setStarterThree('');
            setStarterFour('');
            setStarterFive('');
            setStarterSix('');
            setStarterSeven('');
            setBenchOne('');
            setBenchTwo('');
            setBenchThree('');

        } catch (e) {
            console.error(e)
        }
      };

    return(
        <section class="form-section" id="nbaplayoffs-create-entry">
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <h1>NBA PLAYOFFS CREATE ENTRY</h1>
            <div class="form-div">
                <form onSubmit={submitHandler}>
                    <div class="form-input">
                        <label>Entry By:</label>
                        <input
                            placeholder='Entry Name'
                            value={entryName}
                            onChange={(e) => setEntry(e.target.value)}
                        />
                    </div>
                    <p>Choose your 7 Playoff Starters:</p>
                    <div class="form-input">
                        <label>Starter One:</label>
                        <input
                            placeholder='Starter One'
                            value={starterOne}
                            onChange={(e) => setStarterOne(e.target.value)}
                        />
                    </div>
                    <div class="form-input">
                        <label>Starter Two:</label>
                        <input
                            placeholder='Starter Two'
                            value={starterTwo}
                            onChange={(e) => setStarterTwo(e.target.value)}
                        />
                    </div>
                    <div class="form-input">
                    <label>Starter Three:</label>
                        <input
                            placeholder='Starter Three'
                            value={starterThree}
                            onChange={(e) => setStarterThree(e.target.value)}
                        />
                    </div>
                    <div class="form-input">
                        <label>Starter Four:</label>
                        <input
                            placeholder='Starter Four'
                            value={starterFour}
                            onChange={(e) => setStarterFour(e.target.value)}
                        />
                    </div>
                    <div class="form-input">
                        <label>Starter Five:</label>
                        <input
                            placeholder='Starter Five'
                            value={starterFive}
                            onChange={(e) => setStarterFive(e.target.value)}
                        />
                    </div>
                    <div class="form-input">
                        <label>Starter Six:</label>
                        <input
                            placeholder='Starter Six'
                            value={starterSix}
                            onChange={(e) => setStarterSix(e.target.value)}
                        />
                    </div>
                    <div class="form-input">
                        <label>Starter Seven:</label>
                        <input
                            placeholder='Starter Seven'
                            value={starterSeven}
                            onChange={(e) => setStarterSeven(e.target.value)}
                        />
                    </div>
                    <p>Choose your 3 Playoff Bench Players:</p>
                    <div class="form-input">   
                        <label>Bench One:</label>
                        <input
                            placeholder='Bench One'
                            value={benchOne}
                            onChange={(e) => setBenchOne(e.target.value)}
                        />
                    </div>
                    <div class="form-input">
                        <label>Bench Two:</label>
                        <input
                            placeholder='Bench Two'
                            value={benchTwo}
                            onChange={(e) => setBenchTwo(e.target.value)}
                        />
                    </div>
                    <div class="form-input">
                        <label>Bench Three:</label>
                        <input
                            placeholder='Bench Three'
                            value={benchThree}
                            onChange={(e) => setBenchThree(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="SUBMIT ENTRY" />
                </form>
            </div>
        </section>
    )
};

export default NbaPlayoffsEntry;