import InfoWindow from "./InfoWindow";
import React, {Fragment} from "react";
import Marker from "../marker/Marker";

const MarkerInfoWindow = (props) => {

    const {restaurant, cbToggleInfo, cbDirection} = props;

    return (
        <Fragment>
            <Marker
                text={restaurant.name}
                color="white"
                background={restaurant.background}/>
            {
                restaurant.showInfo &&
                <InfoWindow restaurant={restaurant} cbToggleInfo={cbToggleInfo} cbDirection={cbDirection}/>
            }
        </Fragment>
    );
};

export default MarkerInfoWindow;