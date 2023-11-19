import React from 'react';
import phoneIcon from '../../images/icons/phone.png';
import mailIcon from '../../images/icons/mail.png';
import locationIcon from '../../images/icons/location.png';

function TopMeny() {
    return (
        <div id="contact-container">
            <div className="contact-div"><img className="contact-icon" src={phoneIcon} alt="phone-icon" />
                +46 (8) 121 470 50
            </div>
            <div className="contact-div"><img className="contact-icon" src={mailIcon} alt="phone-icon" />
                info@crito.com</div>
            <div className="contact-div"><img className="contact-icon" src={locationIcon}
                alt="phone-icon" /> Sveavägen 31, 11
                34 STOCKHOLM</div>
        </div>
    );
}

export default TopMeny;