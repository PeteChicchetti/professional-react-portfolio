import React from "react";
import { Row, Col } from "react-bootstrap";

const Contact = () => {
    return (
        <section className='container-fluid contactPage'>
            <Row id='contactContainer' style={{ margin: '0px'}}>
                <Col md='4' id='contactLeft' style={{ margin: '0px'}}>
                    <div className='leftContent'>
                        <strong className='contactTitle'>Contact Details</strong>
                        <p><strong>Email Me:</strong><br/>petechicchetti@gmail.com</p>
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