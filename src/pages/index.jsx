import React, { useState, useEffect } from 'react';

import Corner from './corner';
import './StyleFile.css';

/*TODO: 
when the project is run the buzzer is always incorrect. 
the styling isnt the best. would definitely have wanted to work on that more
*/
const ReactionTest = () => {
    const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];

    const [currentSeason, setCurrentSeason] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [clicked, setClicked] = useState(false);
    const [correct, setCorrect] = useState(false);

    const getRandomSeason = () => {
        const randomIndex = Math.floor(Math.random() * seasons.length);
        return seasons[randomIndex];
    };

    const handleClick = (season) => {
        if (!clicked) {
            setClicked(true);
            setEndTime(Date.now());
            if (season === currentSeason) {
                setCorrect(true);
                setTimeout(() => {
                    setCorrect(false);
                    setCurrentSeason(getRandomSeason());
                    setClicked(false);
                    setStartTime(Date.now());
                }, 1000);
            } else {
                setCorrect(false);
                setTimeout(() => {
                    setCurrentSeason(getRandomSeason());
                    setClicked(false);
                    setStartTime(Date.now());
                }, 1000);
            }
        }
    };

    useEffect(() => {
        setCurrentSeason(getRandomSeason());
        setStartTime(Date.now());
    }, []);

    return (
        <div className="reaction-test">
            <div className={`indicator ${correct ? 'correct' : 'incorrect'}`}>
                {correct ? 'Correct' : 'Incorrect'}
            </div>
            <div className="container">
                {seasons.map((season) => (
                    <Corner
                        key={season}
                        season={season}
                        isActive={currentSeason === season}
                        onClick={() => handleClick(season)}
                    />
                ))}
            </div>
            <div className="timer">{clicked ? `${(endTime - startTime) / 1000}s` : ''}</div>
        </div>
    );
};

export default ReactionTest;