import React from "react";
import { Row, Card } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";

const Resume = () => {
    return (
        <div id='resumeContainer'>
            <Row className='container-fluid'id='resumeCardContainer'>
                <Card id='resumeCard'style={{ textAlign:'center'}}>
                    <span id='btnPos'><a href="assets/pete-chicchetti-resume.pdf" download='pete-chicchetti-resume.pdf' id='downloadBtn' ><BsDownload /> Download</a></span>
                    <img id='resume' src='images/resume.png' alt='Resume of Pete Chicchetti' ></img>
                </Card>
            </Row>
        </div>
    );
};

export default Resume;