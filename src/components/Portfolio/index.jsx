import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";

const Portfolio = () => {
    return (
        <Container id='portContainer' style={{ margin: 'auto' }}>
            <Row className='container-fluid' id='cardContain'  sm='12'>
                <Card id='card' lg='4' md='6' sm='2'>
                    <img className="cardImg" src="images/VivoVirtuoso.png" alt="VivoVirtuoso homepage"></img>
                    <h4 className="cardTitle">VivoVirtuoso</h4>
                    <p className="cardPara">This is a single page front end application using two APIs to display an artist and their info as well as a similar artist.</p>
                    <div>
                        <button id="ghBtn"><AiFillGithub /> GitHub</button>
                        <button id="webBtn"><BsFileEarmarkText /> Preview</button>
                    </div>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/AutoAssistant.png" alt="AutoAssistant homepage"></img>
                    <h4 className="cardTitle">AutoAssistant</h4>
                    <p className="cardPara">This is a single page front end application using two APIs to display an artist and their info as well as a similar artist.</p>
                    <div>
                        <button id="ghBtn"><AiFillGithub /> GitHub</button>
                        <button id="webBtn"><BsFileEarmarkText /> Preview</button>
                    </div>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/VivoVirtuoso.png" alt="VivoVirtuoso homepage"></img>
                    <h4 className="cardTitle">VivoVirtuoso</h4>
                    <p className="cardPara">This is a single page front end application using two APIs to display an artist and their info as well as a similar artist.</p>
                    <div>
                        <button id="ghBtn"><AiFillGithub /> GitHub</button>
                        <button id="webBtn"><BsFileEarmarkText /> Preview</button>
                    </div>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/VivoVirtuoso.png" alt="VivoVirtuoso homepage"></img>
                    <h4 className="cardTitle">VivoVirtuoso</h4>
                    <p className="cardPara">This is a single page front end application using two APIs to display an artist and their info as well as a similar artist.</p>
                    <div>
                        <button id="ghBtn"><AiFillGithub /> GitHub</button>
                        <button id="webBtn"><BsFileEarmarkText /> Preview</button>
                    </div>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/VivoVirtuoso.png" alt="VivoVirtuoso homepage"></img>
                    <h4 className="cardTitle">VivoVirtuoso</h4>
                    <p className="cardPara">This is a single page front end application using two APIs to display an artist and their info as well as a similar artist.</p>
                    <div>
                        <button id="ghBtn"><AiFillGithub /> GitHub</button>
                        <button id="webBtn"><BsFileEarmarkText /> Preview</button>
                    </div>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/VivoVirtuoso.png" alt="VivoVirtuoso homepage"></img>
                    <h4 className="cardTitle">VivoVirtuoso</h4>
                    <p className="cardPara">This is a single page front end application using two APIs to display an artist and their info as well as a similar artist.</p>
                    <div>
                        <button id="ghBtn"><AiFillGithub /> GitHub</button>
                        <button id="webBtn"><BsFileEarmarkText /> Preview</button>
                    </div>
                </Card>
            </Row>
        </Container>
    );
};

export default Portfolio;