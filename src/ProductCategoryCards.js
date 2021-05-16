import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';
import { Link } from "react-router-dom"
import App from './App'

function ProductCategoryCards() {
    return (
        <Container>
            <Row>
                <Col md={3}> <Link to="/silicones"> <App id={0} /> </Link> </Col>
                <Col md={3}> <Link to="/paints"> <App id={1} /> </Link> </Col>
                <Col md={3}> <Link to="/silver_ion_technology"> <App id={2} /> </Link> </Col>
                <Col md={3}> <Link to="/leather_chemicals"> <App id={3} /> </Link> </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={3}> <Link to="/api"> <App id={4} /> </Link> </Col>
                <Col md={3}> <Link to="/renewable_energy_products"> <App id={5} /> </Link> </Col>
                <Col md={3}> <Link to="/water_treatment_chemicals"> <App id={6} /> </Link> </Col>
                <Col md={3}> <Link to="/construction_chemicals"> <App id={7} /> </Link> </Col>
            </Row>
        </Container>
    )
}

export default ProductCategoryCards;
