import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Portfolio = () => {
    return (
        <Container id='portContainer' style={{ margin: 'auto' }}>
            <Row id='cardContain'  sm='12'>
                <Card id='card' lg='4' md='6' sm='12'>
                    <img></img>
                    <h4>Project Name</h4>
                    <p>Description</p>
                </Card>
                <Card id='card'>
                    <img></img>
                    <h4>Project Name</h4>
                    <p>Description</p>
                </Card>
                <Card id='card'>
                    <img></img>
                    <h4>Project Name</h4>
                    <p>Description</p>
                </Card>
                <Card id='card'>
                    <img></img>
                    <h4>Project Name</h4>
                    <p>Description</p>
                </Card>
                <Card id='card'>
                    <img></img>
                    <h4>Project Name</h4>
                    <p>Description</p>
                </Card>
                <Card id='card'>
                    <img></img>
                    <h4>Project Name</h4>
                    <p>Description</p>
                </Card>
            </Row>
        </Container>
    );
};

export default Portfolio;