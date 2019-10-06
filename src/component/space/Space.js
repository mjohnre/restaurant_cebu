import React from 'react';

const SpaceV = ({size}) => (
    size && (<div
        style={{
            marginTop: size
        }}/>)
);

export {SpaceV};