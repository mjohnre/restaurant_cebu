import React from 'react';
import './Panel.css';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp, faBars} from "@fortawesome/free-solid-svg-icons";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import {DropdownButton, Dropdown} from "react-bootstrap";
import {SpaceV} from "../space/Space";
import {LineH} from "../line/Line";

const Panel = ({restaurantData, filterBySpecialty, cbFilterBySpecialty, cbClearDirection, cbShowAnalyticsVisit, cbShowAnalyticsRevenue, cbShowDrawingTool, countInsideOverlay}) => {

    const [openPanel, setOpenPanel] = React.useState(false);
    const [listSpecialty, setListSpecialty] = React.useState([]);
    const [dropdownTitleSpecialty, setDropdownTitleSpecialty] = React.useState(filterBySpecialty ? filterBySpecialty : 'Select specialty');
    const [btnTitleDrawingTool, setBtnTitleDrawingTool] = React.useState('Show Drawing Tool');
    const [btnTitleVisit, setBtnTitleVisit] = React.useState('Show Visit');
    const [btnTitleRevenue, setBtnTitleRevenue] = React.useState('Show Revenue');

    React.useEffect(() => {
        const populateListSpecialty = [];
        restaurantData.list.map((value) => {
            value.specialty.filter(specialty => {
                if (!populateListSpecialty.includes(specialty)) {
                    populateListSpecialty.push(specialty)
                }
                return specialty;
            });
            return value;
        });
        setListSpecialty(populateListSpecialty);

    }, []);

    return (
        <div className="panel">
            <Button variant="light" size="lg"
                    onClick={() => setOpenPanel(!openPanel)}
                    aria-controls="collapse-panel"
                    aria-expanded={openPanel}>
                <Row>
                    <Col>Menu</Col>
                    <Col><FontAwesomeIcon icon={openPanel ? faAngleUp : faBars}/></Col>
                </Row>
            </Button>
            <Collapse in={openPanel}>
                <Card id="collapse-panel">
                    <Card.Header>Restaurants in Cebu</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col sm="auto">Filter by Specialty:</Col>
                            <Col>
                                <DropdownButton id="dropdown-specialty" title={dropdownTitleSpecialty} variant="light"
                                                disabled={btnTitleDrawingTool.includes('Hide')
                                                || btnTitleVisit.includes('Hide')
                                                || btnTitleRevenue.includes('Hide')}>
                                    <Dropdown.Item onClick={() => {
                                        setDropdownTitleSpecialty('All');
                                        cbFilterBySpecialty('All')
                                    }}>All</Dropdown.Item>
                                    {
                                        listSpecialty.map((value, index) => (
                                            <Dropdown.Item key={index}
                                                           onClick={() => {
                                                               setDropdownTitleSpecialty(value);
                                                               cbFilterBySpecialty(value)
                                                           }}>{value}</Dropdown.Item>
                                        ))
                                    }
                                </DropdownButton>
                            </Col>
                        </Row>
                        <Row>
                            <Col><SpaceV size={16}/></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="danger" onClick={() => cbClearDirection()}>Clear Directions</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <SpaceV size={8}/>
                                <LineH thick={2} color={'DimGray'}/>
                                <SpaceV size={8}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col><h5>Draw then count</h5></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="warning"
                                        disabled={btnTitleVisit.includes('Hide')
                                        || btnTitleRevenue.includes('Hide')}
                                        onClick={() => {
                                            setBtnTitleDrawingTool(btnTitleDrawingTool.includes('Show') ? 'Hide Drawing Tool' : 'Show Drawing Tool');
                                            cbShowDrawingTool();
                                        }}>{btnTitleDrawingTool}</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>Count: {countInsideOverlay}</Col>
                        </Row>
                        <Row>
                            <Col>
                                <SpaceV size={8}/>
                                <LineH thick={2} color={'DimGray'}/>
                                <SpaceV size={8}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col><h5>Analytics</h5></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="success"
                                        disabled={btnTitleRevenue.includes('Hide')}
                                        onClick={() => {
                                            setBtnTitleVisit(btnTitleVisit.includes('Show') ? 'Hide Visit' : 'Show Visit');
                                            cbShowAnalyticsVisit();
                                        }}>{btnTitleVisit}</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col><SpaceV size={16}/></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="success"
                                        disabled={btnTitleVisit.includes('Hide')}
                                        onClick={() => {
                                            setBtnTitleRevenue(btnTitleRevenue.includes('Show') ? 'Hide Revenue' : 'Show Revenue');
                                            cbShowAnalyticsRevenue();
                                        }}>{btnTitleRevenue}</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Collapse>
        </div>
    );
};

export default Panel;