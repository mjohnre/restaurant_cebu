import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import {SpaceV} from "../space/Space";

const styleText = {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'top',
    width: '100%',
    height: '100%'
};

const InfoWindow = (props) => {

    const {restaurant, cbToggleInfo, cbDirection} = props;
    const infoWindowStyle = {
        position: 'relative',
        bottom: 128,
        left: '-45px',
        width: 480,
        backgroundColor: 'white',
        boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
        fontSize: 14,
        zIndex: 100,
    };

    const dataBar = React.useRef();

    React.useEffect(() => {
        dataBar.current = [
            {
                name: 'Sun', visit: Math.floor((Math.random() * 100) + 1),
            },
            {
                name: 'Mon', visit: Math.floor((Math.random() * 100) + 1),
            },
            {
                name: 'Tue', visit: Math.floor((Math.random() * 100) + 1),
            },
            {
                name: 'Wed', visit: Math.floor((Math.random() * 100) + 1),
            },
            {
                name: 'Thu', visit: Math.floor((Math.random() * 100) + 1),
            },
            {
                name: 'Fri', visit: Math.floor((Math.random() * 100) + 1),
            },
            {
                name: 'Sat', visit: Math.floor((Math.random() * 100) + 1),
            }
        ];
    }, []);

    return (
        <Card style={infoWindowStyle}>
            <Card.Header>
                <Row>
                    <Col sm="auto">
                        <img src={restaurant.photoUrl} alt={restaurant.name} height={64}/>
                    </Col>
                    <Col sm="auto" className="justify-content-start"><h3>{restaurant.name}</h3></Col>
                    <Col><Button variant="secondary" className="float-right"
                                 onClick={() => cbToggleInfo && cbToggleInfo(restaurant.id)}>Close</Button></Col>
                </Row>
                <Row>
                    <Col><span>{restaurant.address}</span></Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col sm="auto"><span style={styleText}><strong>Specialty:</strong></span></Col>
                    <Col>
                        <span style={styleText}>
                        {restaurant.specialty.join(', ')}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col><SpaceV size={16}/></Col>
                </Row>
                <Row>
                    <Col>Customer Visits</Col>
                </Row>
                <Row>
                    <Col>
                        <BarChart
                            width={320}
                            height={120}
                            data={dataBar.current}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="visit" fill="#82ca9d"/>
                        </BarChart>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Button variant="info" onClick={() => cbDirection(restaurant.id)}>Direction</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
};

export default InfoWindow;