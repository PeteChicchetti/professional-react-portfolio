import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <section className='container-fluid contactPage'>
            <Row id='contactContainer' style={{ margin: '0px'}}>
                <Col md='6' id='contactLeft' style={{ margin: '0px'}}>
                    <div className='leftContent'>
                        <img src="images/html-css-js.png" alt='logo' id="contactLogo"></img><br/>
                        <strong className='contactTitle'>Contact Details</strong>
                        <p id='info'><strong>Email Me:</strong><br/>petechicchetti@gmail.com</p>
                        <a className='githubContact' href="https://github.com/PeteChicchetti" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                        <a className='linkedinContact' href="https://www.linkedin.com/in/peter-chicchetti-268a39224/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    </div>
                </Col>
                <Col md='6' id='contactright' style={{ margin: '0px'}}>
                    <div className='rightContent'>
                        <strong className='contactTitle'>Send Me A Message</strong>
                        <form>
                            <label htmlFor="name" id='name' className="nameTitle">Name:</label>
                            <input type="text" name='name' size="34" placeholder="Contact Name" required></input>
                            <label htmlFor='email' id='email' className="emailTitle">Email Address:</label>
                            <input type="text" name='email' size="34" placeholder="Contact Email" required></input>
                            <label htmlFor='message' id='message' className="messageTitle">Message:</label>
                            <textarea type="text" rows='8' cols='37' placeholder="Message Text" required style={{ resize: 'none'}}></textarea>
                            <input type="submit" value="Submit" id='submit'></input>
                        </form>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Contact;