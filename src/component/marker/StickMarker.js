import React from 'react';

const MARKER_CIRCLE_SIZE = 50;
const MARKER_STICK_SIZE = 10;
const MARKER_STICK_WIDTH = 3;

const markerStyle = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: MARKER_CIRCLE_SIZE,
    height: MARKER_CIRCLE_SIZE + MARKER_STICK_SIZE,
    left: -MARKER_CIRCLE_SIZE / 2,
    top: -(MARKER_CIRCLE_SIZE + MARKER_STICK_SIZE)
};

const circleStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: MARKER_CIRCLE_SIZE,
    height: MARKER_CIRCLE_SIZE,
    border: '3px solid #f44336',
    borderRadius: MARKER_CIRCLE_SIZE,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 0,
    cursor: 'pointer',
    boxShadow: '0 0 0 1px white',
    alignContent: 'center'
};

const stickStyle = {
    position: 'absolute',
    left: MARKER_CIRCLE_SIZE / 2 - MARKER_STICK_WIDTH / 2,
    top: MARKER_CIRCLE_SIZE,
    width: MARKER_STICK_WIDTH,
    height: MARKER_STICK_SIZE,
    backgroundColor: '#f44336'
};

const textStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
};

const StickMarker = ({text}) => (
    <div style={markerStyle}>
        <div style={circleStyle}>
            <span style={textStyle}>
                {text}
            </span>
        </div>
        <div style={stickStyle}/>
    </div>
);

export default StickMarker;