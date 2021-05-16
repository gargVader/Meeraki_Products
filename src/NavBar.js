import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';
import { Link } from "react-router-dom"

function NavBar() {
    return (

        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/About">About</Link> </li>
            <li> <Link to="/Projects">Projects</Link> </li>
            <li> <Link to="/Contact">Contact</Link> </li>
        </ul>

        // <Container>
        //     <Row>
        //         <Col md={3}> <Link to="/"> <App id={0} /> </Link> </Col>
        //         <Col md={3}> <Link to="/"> <App id={1} /> </Link> </Col>
        //         <Col md={3}> <Link to="/"> <App id={2} /> </Link> </Col>
        //         <Col md={3}> <Link to="/"> <App id={3} /> </Link> </Col>
        //     </Row>

        //     <Row className="justify-content-center">
        //         <Col md={3}> <Link to="/"> <App id={4} /> </Link> </Col>
        //         <Col md={3}> <Link to="/"> <App id={5} /> </Link> </Col>
        //         <Col md={3}> <Link to="/"> <App id={6} /> </Link> </Col>
        //         <Col md={3}> <Link to="/"> <App id={7} /> </Link> </Col>
        //     </Row>
        // </Container>
    )
}

export default NavBar;
