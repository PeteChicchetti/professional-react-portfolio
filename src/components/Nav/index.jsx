import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Nav = ({showAbout, showPortfolio, showContact, showResume}) => {
    return (
        <Container className=''>
            <Row  className=''style={{ alignItems: 'center'}}>
                <Col md='6' id='title'>
                    <div className='nameContainer'>
                        <h1 id='name'>Pete Chicchetti</h1>
                    </div>
                </Col>
                <Col md='6' id=''>
                <ul className='nav'>
                    <li className="nav-list" style={{ marginLeft: "10px" }} onClick={showAbout}>About</li>
                    <li className="nav-list" style={{ marginLeft: "10px" }} onClick={showContact}>Contact</li>
                    <li className="nav-list" style={{ marginLeft: "10px" }} onClick={showPortfolio}>Portfolio</li>
                    <li className="nav-list" style={{ marginLeft: "10px" }} onClick={showResume}>Resume</li>
                </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Nav;