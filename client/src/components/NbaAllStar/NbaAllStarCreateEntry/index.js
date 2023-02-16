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
            NBA ALL STAR CREATE ENTRY
            <form onSubmit={submitHandler}>
                <div>
                    <input
                        placeholder="What is your entry name"
                        value={entryName}
                        onChange={(e) => setEntry(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter starter One"
                        value={starterOne}
                        onChange={(e) => setStarterOne(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter starter Two"
                        value={starterTwo}
                        onChange={(e) => setStarterTwo(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter starter Three"
                        value={starterThree}
                        onChange={(e) => setStarterThree(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter starter Four"
                        value={starterFour}
                        onChange={(e) => setStarterFour(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter bench One"
                        value={benchOne}
                        onChange={(e) => setBenchOne(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter bench two"
                        value={benchTwo}
                        onChange={(e) => setBenchTwo(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter bench three"
                        value={benchThree}
                        onChange={(e) => setBenchThree(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter bench four"
                        value={benchFour}
                        onChange={(e) => setBenchFour(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter skills champ"
                        value={skillsChamp}
                        onChange={(e) => setSkills(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter Three champ"
                        value={threeChamp}
                        onChange={(e) => setThree(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter dunk champ"
                        value={dunkChamp}
                        onChange={(e) => setDunk(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input
                        placeholder="Enter captain"
                        value={challengeCaptain}
                        onChange={(e) => setCaptain(e.target.value)}
                        >
                    </input >
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </section>
    )
};

export default NbaEntry;