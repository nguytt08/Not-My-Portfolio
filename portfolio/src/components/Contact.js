import React, { Component } from 'react';
//components
//UI
import {FaEnvelope, FaFacebookSquare, FaLinkedinSquare, FaInstagram} from 'react-icons/lib/fa';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-info">
          <p className="about-title">Contact Me</p>
          <a href="https://www.linkedin.com/in/stephanie-singler-397948bb/" target="_blank">
            <FaLinkedinSquare size={50} style={{color: '0074B8'}}/> &nbsp; Connect on Linkedin
          </a><br /><br />
          <a href="mailto:singlerstephanie@gmail.com">
            <FaEnvelope size={45} style={{color: 'FF862B'}}/> &nbsp; &nbsp;
            Send me an Email!
          </a><br /><br />
          <a href="https://www.instagram.com/stephsingler/" target="_blank">
            <FaInstagram size={50} style={{color: 'ED007C'}}/> &nbsp; Follow me on Instagram
          </a><br /><br />
          <a href="https://www.facebook.com/stephanie.singler.1" target="_blank">
            <FaFacebookSquare size={50} style={{color: '425FB4'}}/> &nbsp; Like me on Facebook
          </a>
        </div>
        <img src={require("../images/contact2.jpg")} alt="" className="contact-img" />
      </div>
    );
  }
}

export default Contact;
