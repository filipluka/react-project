import React from 'react';
import Company from '../../images/about_company_img.jpg'
import Play from '../../images/play.png'

function AboutCompany() {
    return (
        <div className="about-company">
        <div className="about-company-left">
            <img src={Company} alt="about-company-img" />
            <div className="overlay-text-box">
                <p><b>Samantha Brown, <span className="red-font">Founder</span></b></p>
                <p className="paragraph-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div className="about-company-right">
            <p className="paragraph-red">About Company</p>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
            <p className="paragraph-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="paragraph-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="about-company-buttons">
                <button className="button-animated button-50 button-black"><span>Learn More</span></button>
                <div className="video-button">
                    <img src={Play} />
                    <p className="paragraph-grey">Intro Video</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AboutCompany;