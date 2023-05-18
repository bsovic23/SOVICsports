// This component will not use the generic EntryForm since different format
import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
// import mutation from utils once added


const BowlChallengeEntry = () => {

    const bowlPicks = [
        { points: 1, teamOne: "Alabama", teamOneColor: "red", teamOneColor2: "white", teamTwo: "Georgia", teamTwoColor: "red", teamTwoColor2: "black"},
        { points: 2, teamOne: "OSU", teamOneColor: "red", teamOneColor2: "silver", teamTwo: "Penn State", teamTwoColor: "white", teamTwoColor2: "navy"},
        { points: 3, teamOne: "Auburn", teamOneColor: "orange", teamOneColor2: "blue", teamTwo: "Missouri", teamTwoColor: "yellow", teamTwoColor2: "black"},
        { points: 4, teamOne: "USC", teamOneColor: "red", teamOneColor2: "yellow", teamTwo: "Oregon", teamTwoColor: "yellow", teamTwoColor2: "green"},
    ];

    return(
        <section>
           <form>
                {bowlPicks.map(({index, points, teamOne, teamOneColor, teamOneColor2, teamTwo, teamTwoColor, teamTwoColor2}) => (
                    <div key={index}>
                        <p>{points} Point Game</p>
                        <button 
                            style={{ backgroundColor: teamOneColor, borderColor: teamOneColor2, borderWidth: "10px" }}
                        >{teamOne}
                        </button>
                        vs.
                        <button 
                            style={{ backgroundColor: teamTwoColor, borderColor: teamTwoColor2, borderWidth: "10px" }}
                        >{teamTwo}
                        </button>
                    </div>
                ))}
           </form>
        </section>
    )
};

export default BowlChallengeEntry;