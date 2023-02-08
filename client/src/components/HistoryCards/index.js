import React from 'react';

const AllHistoryCards = ({ allHistory }) => {
    if (!allHistory.length) {
        return <h3>THERE IS NO HISTORY</h3>;
    }

    return (
        <section class="history-card-section">
            <h3>HISTORY</h3>
            <div class="history-cards-container">
                {allHistory 
                && allHistory.map(history=> (
                    <div key={history.username} class="history-card">
                        <h4>{history.username}</h4>
                        <p>Year: {history.year}</p>
                        <p>Challenge: {history.challenge}</p>
                        <p>Score: {history.score}</p>
                        <p>Place: {history.place}</p>
                        <p>Total Participants: {history.totalpx}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default AllHistoryCards;