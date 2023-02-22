import React, { useState } from 'react';
import { useMutation } from "@apollo/client";

import NbaPlayoffsNavbar from '../../Navbar/nbaPlayoffsNavbar';
import { MUTATION_NBA_PLAYOFFS } from '../../../utils/mutations';

const NbaPlayoffsEntry = () => {
    const [formState, setFormState] = useState({
        entryName: "",
        starterOne: "",
    });

    const [addNbaPlayoffs] = useMutation(MUTATION_NBA_PLAYOFFS);

    const handleChange = event => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const submitHandler = async event => {
        event.preventDefault();

        try {
            await addNbaPlayoffs({
                variables: {
                    entryName: formState.entryName,
                    starterOne: formState.starterOne
                },
            });

            setFormState('');

        } catch (event) {
            console.error(event)
        }
      };

    return(
        <section class="page" id="nbaplayoffs-create-entry">
            <div>
                < NbaPlayoffsNavbar />
            </div>
            <h1>NBA PLAYOFFS CREATE ENTRY</h1>
            <div class="form-div">
                <form onSubmit={submitHandler}>
                    <label>Entry By:</label>
                    <input
                        placeholder='Entry Name'
                        name="entryName"
                        onChange={handleChange}
                    />
                    <label>Starter One:</label>
                    <input
                        placeholder='Starter One'
                        name="starterOne"
                        onChange={handleChange}
                    />
                    <input type="submit" value="SUBMIT ENTRY" />
                </form>
            </div>
        </section>
    )
};

export default NbaPlayoffsEntry;