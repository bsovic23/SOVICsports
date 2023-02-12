import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { MUTATION_NBA_ALLSTAR } from "../../../utils/mutations";

import NbaNavbar from '../../Navbar/nbaNavbar';

function NbaEntry() {
    const [formState, setFormState] = useState({
        starterOne: "",
        starterTwo: "",
        starterThree: "",
        starterFour: "",
        benchOne: "",
        benchTwo: "",
        benchThree: "",
        benchFour: "",
        skillsChamp: "",
        threeChamp: "",
        dunkChamp: "",
        challengeCaptain: "",
    });
    const [nbaAllStar] = useMutation(MUTATION_NBA_ALLSTAR, {
        variables: {
            starterOne: formState.starterOne,
            starterTwo: formState.starterTwo,
            starterThree: formState.starterThree,
            starterFour: formState.starterThree,
            benchOne: formState.benchOne,
            benchTwo: formState.benchTwo,
            benchThree: formState.benchThree,
            benchFour: formState.benchFour,
            skillsChamp: formState.skillsChamp,
            threeChamp: formState.threeChamp,
            dunkChamp: formState.dunkChamp,
            challengeCaptain: formState.challengeCaptain,
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    const submitHandler = (e) => {
        e.preventDefault();
        NbaEntry();
    };

    return(
        <section class="form-section">
            <div>
                <NbaNavbar />
            </div>
            NBA ALL STAR CREATE ENTRY
            <form onSubmit={submitHandler}>
                <div>
                <label htmlFor="starterOne">Starter One:</label>
                <input
                    type="string"
                    name="starterOne"
                    id="starterOne"
                    onChange={handleChange}
                />
                </div>

                <div>
                    <input type="submit" value="Create Entry" />
                </div>
            </form>
        </section>
    )
};

export default NbaEntry;