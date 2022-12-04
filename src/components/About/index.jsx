import React from "react";
import { Row, Col } from "react-bootstrap";

const About = () => {
    return (
        <div>
        <div id='bg' className='container-fluid'>
            <Row className='container-fluid' id='aboutContent' style={{ margin: '0px'}}>
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
             <Row className='container-fluid' style={{ margin: '0px'}}>
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