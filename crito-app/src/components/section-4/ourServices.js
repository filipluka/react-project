import React from 'react';
import Subscract from '../../images/icons/substract.png'
import RightBlack from '../../images/icons/right-black.png'
import Right from '../../images/icons/right.png'

function OurServices() {
    return (
        <div className='services'>
            <p className="paragraph-red">Our Services</p>
            <h2 className="h2-60-percent">We Provide The Best Service For Consulting</h2>
            <div className="service-boxes">
                <div className="service-box">
                    <img className="accounting-img" src={Subscract} alt="hand-shake-img" />
                    <h3 className="no-wrap-h3">Business Advice</h3>
                    <p className="paragraph-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor.</p>
                    <div className="service-img-container">
                        <a href="#"><img className="accounting-img-arrow" src={RightBlack}
                            alt="risk-study-img" /></a>
                    </div>
                </div>
                <div className="service-box service-box-orange">
                    <img className="accounting-img" src={Subscract} alt="idea-img" />
                    <h3 className="no-wrap-h3">Startup Business</h3>
                    <p className="paragraph-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor.</p>
                    <div className="service-img-container">
                        <a href="#"><img className="accounting-img-arrow" src={Right}
                            alt="risk-study-img" /></a>
                    </div>
                </div>
                <div className="service-box">
                    <img className="accounting-img" src={Subscract} alt="financial-graph-img" />
                    <h3 className="no-wrap-h3">Financial Advice</h3>
                    <p className="paragraph-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor.</p>
                    <div className="service-img-container">
                        <a href="#"><img className="accounting-img-arrow" src={RightBlack}
                            alt="risk-study-img" /></a>
                    </div>
                </div>
                <div className="service-box">
                    <img className="accounting-img" src={Subscract} alt="risk-study-img" />
                    <h3 className="no-wrap-h3">Risk Management</h3>
                    <p className="paragraph-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor.</p>
                    <div className="service-img-container">
                        <a href="#"><img className="accounting-img-arrow" src={RightBlack}
                            alt="risk-study-img" /></a>
                    </div>
                </div>
            </div>
            <div className="service-button-container">
                <button className="button-animated button-50 button-transparent"><span>Browse Services</span></button>
            </div>
        </div>
    );
}

export default OurServices;

