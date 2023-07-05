import React from 'react';

const Corner = ({ season, isActive, onClick }) => {
    const colors = {
        Spring: '#93C700',
        Summer: '#FFC801',
        Autumn: '#FF530D',
        Winter: '#0E99DA',
    };

    return (
        <div
            className={`corner ${isActive ? 'active' : 'inactive'}`}
            style={{ backgroundColor: isActive ? colors[season] : '#929292' }}
            onClick={onClick}
        ></div>
    );
};

export default Corner;