import React, { useState } from 'react';

const AllHistoryCards = ({ index, allHistory }) => {

    const [filterSelected, setFilterSelected] = useState(allHistory);
    const [filterType, setFilterType] = useState(null);
    const [filterValue, setFilterValue] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        filterData();
    };
    
    const filterByUsername = () => {
        setFilterType('username');
    }

    const filterByPlace = () => {
        setFilterType('place');
    }

    const filterData = () => {
        let filteredData = [...allHistory];

        if (filterType === 'username' && filterValue) {
            filteredData = filteredData.filter((history) => 
                history.username.toLowerCase().includes(filterValue.toLowerCase())
            );
        }

        if (filterType === 'place' && filterValue) {
            filteredData = filteredData.filter((history) => 
                history.place.includes(filterValue)
            );
        }

        setFilterSelected(filteredData);
    };

    return (
        <section class="history-card-section">
            <h3>All SOVICsports Challenge HISTORY</h3>
            <div>
                <h4>Filter Results</h4>
                <form onSubmit={handleFormSubmit}>
                    <button type='button' onClick={filterByUsername}>Filter By Username</button>
                    {filterType === 'username' && (
                        <div>
                            <label>Enter Username</label>
                            <input
                                type='text'
                                placeholder='type username here'
                                value={filterValue}
                                onChange={(e) => setFilterValue(e.target.value)}
                            />
                            <button type='submit'>RUN RESULTS</button>
                        </div>
                    )}
                    <button type='button' onClick={filterByPlace}>Filter By Place</button>
                    {filterType === 'place' && (
                        <div>
                            <label>Enter what place you would like to filter by</label>
                            <input
                                type='text'
                                placeholder='type place here'
                                value={filterValue}
                                onChange={(e) => setFilterValue(e.target.value)}
                            />
                            <button type='submit'>RUN RESULTS</button>
                        </div>
                    )}
                </form>
            </div>
            <div class="history-cards-container">
                {filterSelected 
                && filterSelected.map((history, index) => (
                    <div key={index} class="history-card">
                        <h4>{history.username}</h4>
                        <p>{history.year} {history.challenge} Challenge</p>
                        <p>Placed {history.place} out of {history.totalpx}</p>
                        <p>Score: {history.score}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default AllHistoryCards;