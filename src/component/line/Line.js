import React from 'react';

const LineH = ({thick, color}) => (
    thick && (<div
        style={{
            color: color ? color : 'black',
            backgroundColor: color ? color : 'black',
            height: thick
        }}/>)
);

export {LineH};