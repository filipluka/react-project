import React from 'react';
import '../../style/contact.css'
import contactVisit from '../../images/contact/vision.png';
import phonecall from '../../images/contact/phone-call.png';
import email from '../../images/contact/email.png';

function ContactBoxes() {
    return (
        <div className="contactBoxes">
            <div className='contactBox'>
                <div className='contactBox-left'>
                    <img className="contact-img" src={contactVisit} alt="logo-img" />
                </div>
                <div className='contactBox-right'>
                    <h3>Visit us</h3>
                    <p>Sveavägen 31</p>
                    <p>111 34 Stockholm</p>
                </div>
            </div>
            <div className='contactBox'>
                <div className='contactBox-left'>
                    <img className="contact-img" src={phonecall} alt="logo-img" />
                </div>
                <div className='contactBox-right'>
                    <h3>Call us</h3>
                    <p>+46 (8) 121 470 50</p>
                    <p>+46 (8) 121 470 51</p>
                </div>
            </div>
            <div className='contactBox'>
                <div className='contactBox-left'>
                    <img className="contact-img" src={email} alt="logo-img" />
                </div>
                <div className='contactBox-right'>
                    <h3>Email us</h3>
                    <p>info@crito.com</p>
                    <p>support@crito.com</p>
                </div>
            </div>
        </div>
    );
}

export default ContactBoxes;

