import React from 'react';
import IngressImg from '../../images/Image.png'

function Ingress() {
    return (
        <div className="ingress">
            <div className="ingress-left">
                <h1>We Provide The Best Business Solutions</h1>
                <p className="paragraph-grey">Establish your vision and value proposition and turn them into
                    testable prototypes.</p>
                <div className="ingress-buttons">
                    <button className="button-animated consulting-button"><span>Get Consulting</span></button>
                    <button className="button-animated learn-button"><span>Learn More</span></button>
                </div>
            </div>

            <div className="ingress-right">
                <img className="ingress-img" src={IngressImg} alt="ingress-img" />
            </div>
        </div>
    );
}

export default Ingress;

