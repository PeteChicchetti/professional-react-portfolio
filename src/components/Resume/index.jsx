import React from "react";
import { Row, Card } from "react-bootstrap";

const Resume = () => {
    return (
        <div id='resumeContainer'>
            <Row className='container-fluid'id='resumeCardContainer'>
                <Card id='resumeCard'>
                    <button id='downloadBtn' >Download Resume</button>
                    <img id='resume' src='images/resume.png' alt='Resume of Pete Chicchetti' ></img>
                </Card>
            </Row>
        </div>
    );
};

export default Resume;