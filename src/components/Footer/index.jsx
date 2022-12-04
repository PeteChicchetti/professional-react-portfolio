import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container className=" footer">
        <Row className=''>
            <Col md='4' className='copywright'>
                <h3>Designed and Developed by Pete Chicchetti</h3>
            </Col>
            <Col md='4' className='copywright'>
                <h3>Copyright © {year}</h3>
            </Col>
            <Col md='4'>
                <Col>
                    <span className='foot-logos'>
                        <a className='logos' href="https://github.com/PeteChicchetti">GitHub</a>
                    </span>
                    <span>
                        <a className='logos' href="https://www.linkedin.com/in/peter-chicchetti-268a39224/">Linked In</a>
                    </span>
                </Col>
            </Col>
        </Row>
        </Container>
    )
}

export default Footer;