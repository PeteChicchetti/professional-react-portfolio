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
            <h2 className="techTitles">Technologies</h2>
             <Row className='container-fluid' id='techRow1' style={{ margin: '0px'}}>
                <Col lg='2' md='4' sm='6' style={{ textAlign: 'center'}}>
                    <Col className='icon'>
                        <img src="images/html5.png" alt="HTML Logo"></img>
                    </Col>
                </Col>
                <Col lg='2' md='4' sm='6'>
                    <Col className='icon'>
                        <img src="images/css3.png" alt="CSS Logo" style={{ paddingLeft: '10px', paddingRight: '10px'}}></img>
                    </Col>
                </Col>
                <Col lg='2' md='4' sm ='6' >
                    <Col className='icon'>
                        <img src="images/javascript.png" alt="JavaScript Logo" style={{ paddingLeft: '9px', paddingRight: '10px'}}></img>
                    </Col>
                </Col>
                <Col lg='2' md='4' sm ='6'>
                    <Col className='icon'>
                    <img src="images/react.png" alt="React Logo"></img>
                    </Col>
                </Col>
                <Col lg='2' md='4' sm ='6'>
                    <Col className='icon'>
                        <img src="images/git.png" alt="Git Logo"></img>
                    </Col>
                </Col>
                <Col lg='2' md='4' sm ='6'>
                    <Col className='icon'>
                        <img src="images/nodejs.png" alt="Node.js Logo" style={{ padding: '0px'}}></img>
                    </Col>
                </Col>
            </Row>
             <Row  className='container-fluid' id='techRow2' style={{ margin: '0px'}}>
             <Col lg='2' md='4' sm='6'>
                    <Col className='icon'>
                        <img src="images/bootstrap.png" alt="Bootstrap Logo"></img>
                    </Col>
                </Col>
                <Col lg='2' md='4' sm='6'>
                    <Col className='icon'>
                        <img src="images/jquery.png" alt="Jquery Logo"></img>
                    </Col>
                </Col>
                <Col lg='2' md='4' sm='6'>
                    <Col className='icon'>
                        <img src="images/npm.png" alt="NPM Logo"></img>
                    </Col>
                </Col>
                <Col lg='2' md='4' sm='6'>
                    <Col className='icon'>
                        <img src="images/mysql.png" alt="MySQL Logo"></img>
                    </Col>
                </Col>
                <Col lg='2' md='4' sm='6'>
                    <Col className='icon'>
                        <img src="images/mongodbleaf.png" alt="MongoDb Logo" style={{ paddingLeft: '25px', paddingRight: '20px'}}></img>
                    </Col>
                </Col>
            </Row>
            <h2 className="techTitles">Tools</h2>
            <Row m='12' className='container-fluid' id='techRow2' style={{ margin: '0px'}}>
             <Col md='3' sm='5'>
                    <Col className='icon'>
                        <img src="images/vscode.png" alt="VsCode Logo"></img>
                    </Col>
                </Col>
                <Col md='3' sm='5'>
                    <Col className='icon'>
                        <img src="images/github.png" alt="GitHub Logo"></img>
                    </Col>
                </Col>
                <Col md='3' sm='5'>
                    <Col className='icon'>
                        <img src="images/postman.png" alt="Postman Logo"></img>
                    </Col>
                </Col>
                <Col md='3' sm='5'>
                    <Col className='icon'>
                        <img src="images/heroku.png" alt="Heroku Logo"></img>
                    </Col>
                </Col>
            </Row>
        </div>
        </div>
    );
};

export default About;