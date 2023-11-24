import React from 'react';

const AllHistoryCards = ({ index, allHistory }) => {
    if (!allHistory.length) {
        return <h3>THERE IS NO HISTORY</h3>;
    }

    return (
        <section class="history-card-section">
            <h3>All SOVICsports Challenge HISTORY</h3>
            <div class="history-cards-container">
                {allHistory 
                && allHistory.map(history=> (
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