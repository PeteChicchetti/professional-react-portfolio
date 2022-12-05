import React from 'react';
import { Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="footer container-fluid">
        <Row className='container-fluid' style={{ margin:'0px', justifyContent: 'center', alignItems: 'center'}}>
            <Col md='4' className='copywright'>
                <h3>Developed by Pete Chicchetti</h3>
            </Col>
            <Col md='4' className='copywright'>
                <h3>Copyright © {year}</h3>
            </Col>
            <Col md='4'>
                <Col>
                    <span className='foot-logos'>
                        <a className='github' href="https://github.com/PeteChicchetti" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                    </span>
                    <span>
                        <a className='linkedin' href="https://www.linkedin.com/in/peter-chicchetti-268a39224/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    </span>
                </Col>
            </Col>
        </Row>
        </div>
    )
}

export default Footer;