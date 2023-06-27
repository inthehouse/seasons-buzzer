import React, { useEffect, useState } from 'react';
import './StyleFile.css';


const ReactionTest = () => {
    const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
    const colors = ['#93C700', '#FFC801', '#FF530D', '#0E99DA'];

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

    const renderQuarters = () => {
        return seasons.map((season, index) => {
            const quarterStyle = {
                backgroundColor: currentSeason === season ? colors[index] : '#f2f2f2',
            };
            return (
                <div
                    key={season}
                    className="quarter"
                    style={quarterStyle}
                    onClick={() => handleClick(season)}
                ></div>
            );
        });
    };

    return (
        <div className="reaction-test">
            <div className={`indicator ${correct ? 'correct' : 'incorrect'}`}>
                {correct ? 'Correct' : 'Incorrect'}
            </div>
            <div className="container">{renderQuarters()}</div>
            <div className="timer">
                {clicked ? `${(endTime - startTime) / 1000}s` : ''}
            </div>
        </div>
    );
};

export default ReactionTest;
