import React from 'react';

const MarkerRound = ({background, opacity, size}) => (
    <div style={{
        background: background,
        opacity: opacity,
        width: size,
        height: size,
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}/>
);

export default MarkerRound;