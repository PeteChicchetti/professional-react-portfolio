import React from "react";
import { Row, Col } from "react-bootstrap";

const About = () => {
    return (
        <div>
        <div id='bg' className='container-fluid'>
            <Row className='container-fluid'>
                <Col>
                About me information
                </Col>
                <Col>
                Logo
                </Col>
            </Row>
            <Row className='container-fluid'>
                <Col></Col>
            </Row>    
        </div>
        <div id='tech' className='container-fluid'>
             <Row>
                <Col>
                Technologies
                </Col>
                <Col>
                Technologies
                </Col>
            </Row>
        </div>
        </div>
    );
};

export default About;