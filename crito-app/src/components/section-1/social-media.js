import React from 'react';
import facebook from '../../images/social_media/icons8-facebook-24.png';
import twitter from '../../images/social_media/icons8-twitter-24.png';
import instagram from '../../images/social_media/icons8-instagram-24.png';
import linkedin from '../../images/social_media/icons8-linkedin-24.png';

function SocialMedia() {
    return (
        <div className="social-media-icons">
            <a href="#"><span><img src={facebook} alt="fb-icon" /></span></a>
            <a href="#"><span><img src={twitter} alt="twitter-icon" /></span></a>
            <a href="#"><span><img src={instagram} alt="instagram-icon" /></span></a>
            <a href="#"><span><img src={linkedin} alt="linkedin-icon" /></span></a>
        </div>
    );
}

export default SocialMedia;