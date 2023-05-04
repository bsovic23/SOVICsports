import React from "react";
import { useMutation } from "@apollo/client";
import { MUTATION_NBA_ALLSTAR } from "../../../utils/mutations";

import NavBar from '../../../components/Navbar';
import EntryForm from "../../EntryForm";

const NbaEntry = () => {
    const [addNbaAllStar] = useMutation(MUTATION_NBA_ALLSTAR);

    const nbaAllStarFields = [
        { name: 'entryName', type: 'text', placeholder: 'Entry Name'},
        { name: 'starterOne', type: 'text', placeholder: 'Starter One'},
        { name: 'starterTwo', type: 'text', placeholder: 'Starter Two'},
        { name: 'starterThree', type: 'text', placeholder: 'Starter Three'},
        { name: 'starterFour', type: 'text', placeholder: 'Starter Four'},
        { name: 'benchOne', type: 'text', placeholder: 'Bench One'},
        { name: 'benchTwo', type: 'text', placeholder: 'Bench Two'},
        { name: 'benchThree', type: 'text', placeholder: 'Bench Three'},
        { name: 'benchFour', type: 'text', placeholder: 'Bench Four'},
        { name: 'skillsChamp', type: 'text', placeholder: 'Skills Champ'},
        { name: 'threeChamp', type: 'text', placeholder: 'Three Champ'},
        { name: 'dunkChamp', type: 'text', placeholder: 'Dunk Champ'},
        { name: 'challengeCaptain', type: 'text', placeholder: 'Challenge Captain'}
    ];

    const navbarChoices = [
        {text: "CHALLENGE INSTRUCTIONS", link: "/nbaAllStar"},
        {text: "CREATE ENTRY", link: "/nbaEntry"},
        {text: "ALL ENTRIES", link: "/nbaEntries"},
        {text: "STANDINGS", link: "/nbaAllStar"}
    ];

    return(
        <section class='form-section'>
            <div>
                < NavBar navElements={navbarChoices} />
            </div>
            <h1>NBA ALL STAR CREATE ENTRY</h1>
            <div class='form-div'>
                <EntryForm mutation={addNbaAllStar} fields={nbaAllStarFields}/>
            </div>
        </section>
        
    )
};

export default NbaEntry;