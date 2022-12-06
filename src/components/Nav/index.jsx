import React from "react";
import { Row, Col } from "react-bootstrap";

const Nav = ({showAbout, showPortfolio, showContact, showResume}) => {
    return (
        <div className='container-fluid' id='headerBg' >
            <Row  className='container-fluid'style={{ alignItems: 'center', margin: '0px', padding: '0px'}}>
                <Col md='6' id='title'>
                    <div className='nameContainer'>
                        <h1 id='title'>Pete Chicchetti</h1>
                    </div>
                </Col>
                <Col md='6' id='navlist'>
                <ul className='nav'>
                    <li className="nav-link nav-link-ltr" id='navNames' style={{ marginLeft: "0px", padding: '8px 0px'}} onClick={showAbout}>About</li>
                    <li className="nav-link nav-link-ltr" id='navNames' style={{ marginLeft: "8px", padding: '8px 0px' }} onClick={showContact}>Contact</li>
                    <li className="nav-link nav-link-ltr" id='navNames' style={{ marginLeft: "8px", padding: '8px 0px' }} onClick={showPortfolio}>Portfolio</li>
                    <li className="nav-link nav-link-ltr" id='navNames' style={{ marginLeft: "8px", padding: '8px 0px' }} onClick={showResume}>Resume</li>
                </ul>
                </Col>
            </Row>
        </div>
    );
};

export default Nav;