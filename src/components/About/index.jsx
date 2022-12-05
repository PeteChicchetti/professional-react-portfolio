import React from "react";
import { Row, Col } from "react-bootstrap";

const About = () => {
    return (
        <div>
        <div id='bg' >
            <Row className='container-fluid' id='aboutContent' style={{textAlign: 'center', margin: '0px' }}>
                <Col md='8' id='aboutMe'>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Col>
                <Col md='4' style={{ padding: '1rem'}}>
                <Col id='logo'>
                    <Col id='pc' style={{ margin: '0px' }} >
                    
                    </Col>
                </Col>
                </Col>
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