import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <section className='container-fluid contactPage'>
            <Row id='contactContainer' style={{ margin: '0px'}}>
                <Col md='4' id='contactLeft' style={{ margin: '0px'}}>
                    <div className='leftContent'>
                        <strong className='contactTitle'>Contact Details</strong>
                        <p id='info'><strong>Email Me:</strong><br/>petechicchetti@gmail.com</p>
                        <a className='githubContact' href="https://github.com/PeteChicchetti" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                        <a className='linkedinContact' href="https://www.linkedin.com/in/peter-chicchetti-268a39224/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    </div>
                </Col>
                <Col md='4' id='contactright' style={{ margin: '0px'}}>
                    <div className='rightContent'>
                        <strong className='contactTitle'>Send Me A Message</strong>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Contact;