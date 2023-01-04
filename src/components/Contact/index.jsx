import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_isrh6jw', 'template_jb1ene6', form.current, 'mkUg8-oSgTRMJkb62')
      .then((result) => {
          console.log(result.text);
          alert('Success! Email sent!')
      }, (error) => {
          console.log(error.text);
      });
  };
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
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="name" id='name' className="nameTitle">Name:</label>
                            <input type="text" id='fullName' name='from_name' size="34" placeholder="Contact Name" required></input>
                            <label htmlFor='email' id='email' className="emailTitle">Email Address:</label>
                            <input type="text" name='email_id' size="34" placeholder="Contact Email" required></input>
                            <label htmlFor='message' id='messageTitle' className="messageTitle">Message:</label>
                            <textarea type="text" id='message' name="message" rows='8' cols='37' placeholder="Message Text" required style={{ resize: 'none'}}></textarea>
                            <input type="submit" id='submit' value="Send" />
                        </form>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Contact;