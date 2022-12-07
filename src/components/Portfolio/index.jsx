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
                    <p className="cardPara">This is a single page front end application using one input to simultaneosly search two APIs for an artists info and a similar artist.</p>
                    <div>
                        <a href='https://github.com/ThatBallinGuy/VivoVirtuoso' target="_blank" id="ghBtn"><AiFillGithub /> GitHub</a>
                        <a href='https://thatballinguy.github.io/VivoVirtuoso/' target="_blank" id="webBtn"><BsFileEarmarkText /> Preview</a>
                    </div>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/AutoAssistant.png" alt="AutoAssistant homepage"></img>
                    <h4 className="cardTitle">AutoAssistant</h4>
                    <p className="cardPara">AutoAssistant uses express, mysql and handlebars. The backend allows for a user to login and search for vehicles and save them to the user by session.</p>
                    <div>
                        <a href='https://github.com/BenjaminCottrell/auto-assistant' target="_blank" id="ghBtn"><AiFillGithub /> GitHub</a>
                        <a href='https://young-retreat-27760.herokuapp.com/' target="_blank" id="webBtn"><BsFileEarmarkText /> Preview</a>
                    </div>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/pwa-text-editor.png" alt="VivoVirtuoso homepage"></img>
                    <h4 className="cardTitle">J.A.T.E.</h4>
                    <p className="cardPara">Just Another Text Editor<br/>
                    This PWA is installable and allows for the user to save notes to an indexedDb for offline use. </p>
                    <div>
                        <a href='https://github.com/PeteChicchetti/pwa-text-editor' target="_blank"  id="ghBtn"><AiFillGithub /> GitHub</a>
                        <a href="https://afternoon-bastion-22644.herokuapp.com/" target="_blank" rel="noopener noreferrer" id="webBtn"><BsFileEarmarkText /> Preview</a>
                    </div>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/coming-soon.jpg" alt="VivoVirtuoso homepage"></img>
                    <h4 className="cardTitle">Coming Soon</h4>
                    <p className="cardPara"></p>
                    <div>
                        {/*-- change buttons to a tag when links are inserted --*/}
                        <button id="ghBtn"><AiFillGithub /> GitHub</button>
                        <button id="webBtn"><BsFileEarmarkText /> Preview</button>
                    </div>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/coming-soon.jpg" alt="VivoVirtuoso homepage"></img>
                    <h4 className="cardTitle">Coming Soon</h4>
                    <p className="cardPara"></p>
                    <div>
                        {/*-- change buttons to a tag when links are inserted --*/}
                        <button id="ghBtn"><AiFillGithub /> GitHub</button>
                        <button id="webBtn"><BsFileEarmarkText /> Preview</button>
                    </div>
                </Card>
                <Card id='card'>
                    <img className="cardImg" src="images/coming-soon.jpg" alt="VivoVirtuoso homepage"></img>
                    <h4 className="cardTitle">Coming Soon</h4>
                    <p className="cardPara"></p>
                    <div>
                        {/*-- change buttons to a tag when links are inserted --*/}
                        <button id="ghBtn"><AiFillGithub /> GitHub</button>
                        <button id="webBtn"><BsFileEarmarkText /> Preview</button>
                    </div>
                </Card>
            </Row>
        </Container>
    );
};

export default Portfolio;