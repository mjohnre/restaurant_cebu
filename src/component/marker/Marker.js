import React from 'react';

const Marker = ({text, color, background}) => (
    <div style={{
        color: color,
        background: background,
        padding: '8px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

export default Marker;