import React from "react";
import { Container, Row, Card } from "react-bootstrap";

const Portfolio = () => {
    return (
        <Container id='portContainer' style={{ margin: 'auto' }}>
            <Row id='cardContain'  sm='12'>
                <Card id='card' lg='4' md='6' sm='12'>
                    <img className="cardImg" src="images/VivoVirtuoso.png" alt="VivoVirtuoso homepage"></img>
                    <h4>VivoVirtuoso</h4>
                    <p>This is a single page front end application using two APIs to display an artist and their info as well as a similar artist.</p>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/VivoVirtuoso.png" alt="VivoVirtuoso homepage"></img>
                    <h4>Project Name</h4>
                    <p>Description</p>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/VivoVirtuoso.png" alt="VivoVirtuoso homepage"></img>
                    <h4>Project Name</h4>
                    <p>Description</p>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/VivoVirtuoso.png" alt="VivoVirtuoso homepage"></img>
                    <h4>Project Name</h4>
                    <p>Description</p>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/VivoVirtuoso.png" alt="VivoVirtuoso homepage"></img>
                    <h4>Project Name</h4>
                    <p>Description</p>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/VivoVirtuoso.png" alt="VivoVirtuoso homepage"></img>
                    <h4>Project Name</h4>
                    <p>Description</p>
                </Card>
            </Row>
        </Container>
    );
};

export default Portfolio;