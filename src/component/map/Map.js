import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapData from '../../data/mapData';
import Panel from "../panel/Panel";
import StickMarker from "../marker/StickMarker";
import restaurantData from "../../data/restaurantData";
import MarkerInfoWindow from "../infoWindow/MarkerInfoWindow";
import gradient from "../../data/gradient";
import MarkerRound from "../marker/MarkerRound";

const Map = (props) => {

    const [windowWidth, setWindowWidth] = React.useState(0);
    const [windowHeight, setWindowHeight] = React.useState(0);
    const [listOpenMarker, setListOpenMarker] = React.useState([]);
    const filterBySpecialty = React.useRef('All');
    const [mapObject, setMapObject] = React.useState(null);
    const [mapsObject, setMapsObject] = React.useState(null);
    const directionsRenderer = React.useRef(null);
    const heatmapVisit = React.useRef(null);
    const [listMarkerRevenue, setListMarkerRevenue] = React.useState([]);
    const drawingManager = React.useRef(null);
    const [showDrawingManager, setShowDrawingManager] = React.useState(false);
    const [countInsideOverlay, setCountInsideOverlay] = React.useState(0);
    const [listShapeOverlay, setListShapeOverlay] = React.useState([]);

    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    const populateListOpenMaker = (filterBySpecialty) => {
        const listRestaurantData = [];
        restaurantData.list.map((value, index) => {
            value.id = index;
            value.showInfo = false;
            value.visit = Math.floor((Math.random() * 100) + 1);
            value.revenueRating = Math.floor((Math.random() * 3) + 1);

            if (filterBySpecialty === 'All' || value.specialty.includes(filterBySpecialty)) {
                listRestaurantData.push(value);
            }

            return value;
        });
        setListOpenMarker(listRestaurantData);
    };

    React.useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);

        populateListOpenMaker(filterBySpecialty.current);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    const toggleInfo = (id) => {
        if (showDrawingManager) {
            return;
        }
        setListOpenMarker(listOpenMarker.map((value) => {
            if (value.id === id) {
                value.showInfo = !value.showInfo;
            }
            return value;
        }));
    };

    const cbFilterBySpecialty = (specialty) => {
        filterBySpecialty.current = specialty.trim();
        populateListOpenMaker(filterBySpecialty.current);
    };

    const cbDirection = (id) => {

        let destPosition = null;
        listOpenMarker.map(value => {
            if (value.id === id) {
                destPosition = value.position;
            }
            return value;
        }, []);

        if (!destPosition) {
            return;
        }

        if (directionsRenderer.current) {
            directionsRenderer.current.setMap(null);
        }

        const directionsService = new mapsObject.DirectionsService();
        directionsRenderer.current = new mapsObject.DirectionsRenderer();
        directionsRenderer.current.setMap(mapObject);
        directionsService.route(
            {
                origin: {query: mapData.center.lat + ', ' + mapData.center.lng},
                destination: {query: destPosition.lat + ', ' + destPosition.lng},
                travelMode: 'DRIVING'
            },
            function (response, status) {
                if (status === 'OK') {
                    directionsRenderer.current.setDirections(response);
                    toggleInfo(id);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
    };

    const cbClearDirection = () => {
        if (directionsRenderer.current) {
            directionsRenderer.current.setMap(null);
        }
    };

    const cbShowAnalyticsVisit = () => {
        const listPoint = [];
        listOpenMarker.map(value => {
            for (let i = 0; i < value.visit; i++) {
                listPoint.push(new mapsObject.LatLng((value.position.lat + (Math.random() * 0.0002)), (value.position.lng + (Math.random() * 0.00001))));
            }
            return value;
        });
        if (heatmapVisit.current && heatmapVisit.current.getMap()) {
            heatmapVisit.current.setMap(null);
            populateListOpenMaker(filterBySpecialty.current);
            return;
        }
        heatmapVisit.current = new mapsObject.visualization.HeatmapLayer({
            data: listPoint,
            map: mapObject
        });
        heatmapVisit.current.set('gradient', heatmapVisit.current.get('gradient') ? null : gradient);
        heatmapVisit.current.set('radius', heatmapVisit.current.get('radius') ? null : 16);
        heatmapVisit.current.set('opacity', heatmapVisit.current.get('opacity') ? null : 0.5);
        setListOpenMarker([]);
    };

    const cbShowAnalyticsRevenue = () => {
        if (listMarkerRevenue && listMarkerRevenue.length > 0) {
            setListMarkerRevenue([]);
            populateListOpenMaker(filterBySpecialty.current);
            return;
        }

        listOpenMarker.map(value => {
            listMarkerRevenue.push(value);
            return value;
        });
        setListOpenMarker([]);
    };

    const cbShowDrawingTool = () => {

        if (!drawingManager.current) {
            drawingManager.current = new mapsObject.drawing.DrawingManager({
                drawingMode: mapsObject.drawing.OverlayType.MARKER,
                drawingControl: true,
                drawingControlOptions: {
                    position: mapsObject.ControlPosition.TOP_CENTER,
                    drawingModes: ['circle', 'rectangle']
                },
                // markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
                circleOptions: {
                    fillColor: '#ffff00',
                    fillOpacity: 0.5,
                    strokeWeight: 2,
                    clickable: true,
                    editable: false,
                    zIndex: 1
                },
                rectangleOptions: {
                    fillColor: '#ffff00',
                    fillOpacity: 0.5,
                    strokeWeight: 2,
                    clickable: true,
                    editable: false,
                    zIndex: 1
                }
            });
            drawingManager.current.setMap(mapObject);
        }

        mapsObject.event.addListener(drawingManager.current, 'circlecomplete', function (circle) {

            listShapeOverlay.map(shapeOverlay => {
                shapeOverlay.setMap(null);
                return shapeOverlay;
            });
            setListShapeOverlay([]);
            listShapeOverlay.push(circle);
            setListShapeOverlay(listShapeOverlay);

            let countInsideShape = 0;

            listOpenMarker.map(value => {
                const markerLatLng = new mapsObject.LatLng(value.position);
                if (
                    circle.getBounds().contains(markerLatLng)
                    && mapsObject.geometry.spherical.computeDistanceBetween(circle.getCenter(), markerLatLng) <= circle.getRadius()
                ) {
                    countInsideShape++;
                }
                return value;
            });

            setCountInsideOverlay(countInsideShape);

            mapsObject.event.addListener(circle, 'click', function (event) {
                circle.setMap(null);
            });
        });

        mapsObject.event.addListener(drawingManager.current, 'rectanglecomplete', (rectangle) => {
            listShapeOverlay.map(shapeOverlay => {
                shapeOverlay.setMap(null);
                return shapeOverlay;
            });
            setListShapeOverlay([]);
            listShapeOverlay.push(rectangle);
            setListShapeOverlay(listShapeOverlay);

            let countInsideShape = 0;

            listOpenMarker.map(value => {
                if (
                    rectangle.getBounds().contains(new mapsObject.LatLng(value.position))
                ) {
                    countInsideShape++;
                }
                return value;
            });

            setCountInsideOverlay(countInsideShape);

            mapsObject.event.addListener(rectangle, 'click', function (event) {
                rectangle.setMap(null);
            });
        });

        listShapeOverlay.map(shapeOverlay => {
            shapeOverlay.setMap(null);
            return shapeOverlay;
        });
        setListShapeOverlay([]);
        setCountInsideOverlay(0);

        if (drawingManager.current) {

            drawingManager.current.setDrawingMode(null);
            drawingManager.current.setOptions({
                drawingControl: !showDrawingManager
            });
        }

        setShowDrawingManager(!showDrawingManager);
    };

    const handleApiLoaded = (map, maps) => {
        console.log(`map:'${map}', maps:'${maps}'`);
        // use map and maps objects
        // map.setMapTypeId(maps.MapTypeId.ROADMAP);
        setMapObject(map);
        setMapsObject(maps);

        // Define the LatLng coordinates for the polygon's path.
        // const triangleCoords = [
        //     {lat: 10.330041, lng: 123.901150},
        //     {lat: 10.317538, lng: 123.887691},
        //     mapData.center,
        //     {lat: 10.330041, lng: 123.901150}
        // ];
        //
        // // Construct the polygon.
        // const triangle = new maps.Polygon({
        //     paths: triangleCoords,
        //     strokeColor: '#FF0000',
        //     strokeOpacity: 0.8,
        //     strokeWeight: 2,
        //     fillColor: '#FF0000',
        //     fillOpacity: 0.35
        // });
        //
        // triangle.setMap(map);
    };

    return <div style={{width: windowWidth, height: windowHeight}}>
        <GoogleMapReact
            bootstrapURLKeys={{
                key: 'AIzaSyAdXw8gydBM63DtYsbY7nTQNFu9byXZOkQ',
                libraries: ['visualization', 'drawing', 'geometry']
            }}
            defaultCenter={mapData.center}
            defaultZoom={mapData.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({map, maps}) => handleApiLoaded(map, maps)}
            onChildClick={(key) => toggleInfo(Number(key))}
        >
            <StickMarker
                lat={mapData.center.lat}
                lng={mapData.center.lng}
                text="Start"
            />

            {listOpenMarker.map((value, index) => {
                return (<MarkerInfoWindow
                    key={value.id}
                    lat={value.position.lat}
                    lng={value.position.lng}
                    restaurant={value}
                    cbToggleInfo={toggleInfo}
                    cbDirection={cbDirection}>
                </MarkerInfoWindow>)
            })}

            {listMarkerRevenue.map((value, index) => (
                <MarkerRound
                    key={index}
                    lat={value.position.lat}
                    lng={value.position.lng}
                    size={value.revenueRating === 3 ? 64 : value.revenueRating === 2 ? 32 : 16}
                    background={value.revenueRating === 3 ? 'Lime' : value.revenueRating === 2 ? 'YellowGreen' : 'Yellow'}
                    opacity={0.5}/>
            ))}

        </GoogleMapReact>
        <Panel restaurantData={restaurantData} filterBySpecialty={filterBySpecialty.current}
               cbFilterBySpecialty={cbFilterBySpecialty}
               cbClearDirection={cbClearDirection} cbShowAnalyticsVisit={cbShowAnalyticsVisit}
               cbShowAnalyticsRevenue={cbShowAnalyticsRevenue} cbShowDrawingTool={cbShowDrawingTool}
               countInsideOverlay={countInsideOverlay}/>
    </div>
};

export default Map;