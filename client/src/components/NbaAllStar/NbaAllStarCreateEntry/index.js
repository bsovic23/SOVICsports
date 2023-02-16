import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { MUTATION_NBA_ALLSTAR } from "../../../utils/mutations";

import NbaNavbar from '../../Navbar/nbaNavbar';

function NbaEntry() {
    const [entryName, setEntry] = useState('');
    const [starterOne, setStarterOne] = useState('');
    const [starterTwo, setStarterTwo] = useState('');
    const [starterThree, setStarterThree] = useState('');
    const [starterFour, setStarterFour] = useState('');
    const [benchOne, setBenchOne] = useState('');
    const [benchTwo, setBenchTwo] = useState('');
    const [benchThree, setBenchThree] = useState('');
    const [benchFour, setBenchFour] = useState('');
    const [skillsChamp, setSkills] = useState('');
    const [threeChamp, setThree] = useState('');
    const [dunkChamp, setDunk] = useState('');
    const [challengeCaptain, setCaptain] = useState('');

    const [addNbaAllStar] = useMutation(MUTATION_NBA_ALLSTAR);
    
    const submitHandler = async event => {
            event.preventDefault();
            
            try {
                await addNbaAllStar({
                    variables: {
                        entryName, 
                        starterOne, 
                        starterTwo,
                        starterThree,
                        starterFour,
                        benchOne,
                        benchTwo,
                        benchThree,
                        benchFour,
                        skillsChamp,
                        threeChamp,
                        dunkChamp,
                        challengeCaptain,
                    },
            });   

            setEntry('');
            setStarterOne('');
            setStarterTwo('');
            setStarterThree('');
            setStarterFour('');
            setBenchOne('');
            setBenchTwo('');
            setBenchThree('');
            setBenchFour('');
            setSkills('');
            setDunk('');
            setThree('');
            setCaptain('');

            } catch (e) {
                console.error(e);
            }
        }

    return(
        <section class="form-section">
            <div>
                <NbaNavbar />
            </div>
            <h1>NBA ALL STAR CREATE ENTRY</h1>
            <div class="form-div">
                <form onSubmit={submitHandler}>
                    <p>Enter your entry name below:</p>
                    <div class="form-input">
                        <input
                            placeholder="Entry Name"
                            value={entryName}
                            onChange={(e) => setEntry(e.target.value)}
                            >
                        </input >
                    </div>
                    <p>Enter your four Starting All Star Players:</p>
                    <div class="form-input">
                        <input
                            placeholder="Starter One"
                            value={starterOne}
                            onChange={(e) => setStarterOne(e.target.value)}
                            >
                        </input >
                    </div>
                    <div class="form-input">
                        <input
                            placeholder="Starter Two"
                            value={starterTwo}
                            onChange={(e) => setStarterTwo(e.target.value)}
                            >
                        </input >
                    </div>
                    <div class="form-input">
                        <input
                            id="Starter-Three"
                            placeholder="Starter Three"
                            value={starterThree}
                            onChange={(e) => setStarterThree(e.target.value)}
                            >
                        </input >
                    </div>
                    <div class="form-input">
                        <input
                            placeholder="Starter Four"
                            value={starterFour}
                            onChange={(e) => setStarterFour(e.target.value)}
                            >
                        </input >
                    </div>
                    <p>Enter your four Bench All Star Players:</p>
                    <div class="form-input">
                        <input
                            placeholder="Bench One"
                            value={benchOne}
                            onChange={(e) => setBenchOne(e.target.value)}
                            >
                        </input >
                    </div>
                    <div class="form-input">
                        <input
                            placeholder="Bench Two"
                            value={benchTwo}
                            onChange={(e) => setBenchTwo(e.target.value)}
                            >
                        </input >
                    </div>
                    <div class="form-input">
                        <input
                            placeholder="Bench Three"
                            value={benchThree}
                            onChange={(e) => setBenchThree(e.target.value)}
                            >
                        </input >
                    </div>
                    <div class="form-input">
                        <input
                            placeholder="Bench Four"
                            value={benchFour}
                            onChange={(e) => setBenchFour(e.target.value)}
                            >
                        </input >
                    </div>
                    <p>Enter your Skills Contest Champion:</p>
                    <div class="form-input">
                        <input
                            placeholder="Skills Champ"
                            value={skillsChamp}
                            onChange={(e) => setSkills(e.target.value)}
                            >
                        </input >
                    </div>
                    <p>Enter your Three Point Contest Champion:</p>
                    <div class="form-input">
                        <input
                            placeholder="Three Pointer Champ"
                            value={threeChamp}
                            onChange={(e) => setThree(e.target.value)}
                            >
                        </input >
                    </div>
                    <p>Enter your Dunk Contest Champion:</p>
                    <div class="form-input">
                        <input
                            placeholder="Dunk Contest Champ"
                            value={dunkChamp}
                            onChange={(e) => setDunk(e.target.value)}
                            >
                        </input >
                    </div>
                    <p>Who is your Captain from all players you selected above:</p>
                    <div class="form-input">
                        <input
                            placeholder="Team Captain"
                            value={challengeCaptain}
                            onChange={(e) => setCaptain(e.target.value)}
                            >
                        </input >
                    </div>
                    <div class="form-submit-button">
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default NbaEntry;