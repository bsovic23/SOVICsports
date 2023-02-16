import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { MUTATION_NBA_ALLSTAR } from "../../../utils/mutations";

import NbaNavbar from '../../Navbar/nbaNavbar';

const NbaEntry = () => {
    const [[starterOne, starterTwo], emptyForm] = useState('');

    const [addNbaAllStar] = useMutation(MUTATION_NBA_ALLSTAR);

    const handleChange = event => {
            emptyForm(event.target.value);
      };
    
    const submitHandler = async event => {
            event.preventDefault();
            
            try {
                await addNbaAllStar({
                    variables: { starterOne, starterTwo },
            });   

            emptyForm('');

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
                    placeholder="Enter starter One"
                    value={starterOne}
                    onChange={handleChange}
                    >
                </input >
                <input
                    placeholder="Enter starter Two"
                    value={starterTwo}
                    onChange={handleChange}
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