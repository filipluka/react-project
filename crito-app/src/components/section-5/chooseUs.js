import React from 'react';
import management from '../../images/icons/management.png';
import growth from '../../images/icons/growth.png';
import ux from '../../images/icons/user-experience.png';
import ai from '../../images/icons/artificial-intelligence.png';
import chooseus from '../../images/choose-us.jpg';

function ChooseUs() {
    return (
        <div className="choose-us-container">
            <div className="choose-us-left">
                <p className="paragraph-red">Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                <div className="choose-us-text-container">
                    <div className="choose-us-img"><img src={management} alt="risk-study-img" />
                    </div>
                    <div className="choose-us-text">
                        <h3>Process Excellence</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="choose-us-text-container">
                    <div className="choose-us-img"><img src={growth} alt="risk-study-img" /></div>
                    <div className="choose-us-text">
                        <h3>Strategic Planning</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="choose-us-text-container">
                    <div className="choose-us-img"><img src={ux}
                        alt="risk-study-img" /></div>
                    <div className="choose-us-text">
                        <h3>Experience Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="choose-us-text-container">
                    <div className="choose-us-img"><img src={ai}
                        alt="risk-study-img" /></div>
                    <div className="choose-us-text">
                        <h3>Artificial Inteligence</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
            </div>
            <div className="choose-us-right">
                <img src={chooseus} allt="choose-us-img" />
            </div>
        </div>
    );
}

export default ChooseUs;