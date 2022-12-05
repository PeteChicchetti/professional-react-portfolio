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
            <h2>Technologies</h2>
             <Row m='6' className='container-fluid' id='techRow1' style={{ margin: '0px'}}>
                <Col md='2' sm='4'>
                    <Col className='icon'>
                    <Col id='html5' style={{ margin: '0px' }} >
                    
                    </Col>
                    
                    </Col>
                </Col>
                <Col md='2' sm='4'>
                    <Col className='icon'>
                    <Col id='css3' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
                <Col md='2' sm ='4' >
                    <Col className='icon'>
                    <Col id='js' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
                <Col md='2' sm ='4'>
                    <Col className='icon'>
                    <Col id='react' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
                <Col md='2' sm ='4'>
                    <Col className='icon'>
                    <Col id='git' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
                <Col md='2' sm ='4'>
                    <Col className='icon'>
                    <Col id='node' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
            </Row>
             <Row m='6' className='container-fluid' id='techRow2' style={{ margin: '0px'}}>
             <Col md='2' sm='4'>
                    <Col className='icon'>
                    <Col id='npm' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
                <Col md='2' sm='4'>
                    <Col className='icon'>
                    <Col id='booty' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
                <Col md='2' sm='4'>
                    <Col className='icon'>
                    <Col id='jquery' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
                <Col md='2' sm='4'>
                    <Col className='icon'>
                    <Col id='mysql' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
                <Col md='2' sm='4'>
                    <Col className='icon'>
                    <Col id='mongo' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
            </Row>
            <h2>Tools</h2>
            <Row m='12' className='container-fluid' id='techRow2' style={{ margin: '0px'}}>
             <Col md='3' sm='5'>
                    <Col className='icon'>
                    <Col id='vscode' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
                <Col md='3' sm='5'>
                    <Col className='icon'>
                    <Col id='github' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
                <Col md='3' sm='5'>
                    <Col className='icon'>
                    <Col id='postman' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
                <Col md='3' sm='5'>
                    <Col className='icon'>
                    <Col id='heroku' style={{ margin: '0px' }} >
                    
                    </Col>
                    </Col>
                </Col>
            </Row>
        </div>
        </div>
    );
};

export default About;