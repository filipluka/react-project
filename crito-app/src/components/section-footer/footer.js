import React from 'react';
import logotype from '../../images/logotype-white.svg';

function Footer() {
    return (
        <div className="footer">
        <div className="foot-block">
            <div className="foot-block-item">
                <img src={logotype} alt="logo-img-white" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus urna, sodales id diam
                    in, ullamcorper pretium dolor. In arcu odio, interdum nec lobortis et.</p>
            </div>
            <div className="foot-block-item">
                <p><b>Company</b></p>
                <p className="p-margin-10">About</p>
                <p className="p-margin-10">Features</p>
                <p className="p-margin-10">Works</p>
                <p className="p-margin-10">Career</p>
            </div>
            <div className="foot-block-item">
                <p><b>Help</b></p>
                <p className="p-margin-10">Customer Support</p>
                <p className="p-margin-10">Delivery Details</p>
                <p className="p-margin-10">Teams & Conditions</p>
                <p className="p-margin-10">Privacy Policy</p>
            </div>
            <div className="foot-block-item">
                <p><b>Resources</b></p>
                <p className="p-margin-10">Free eBooks</p>
                <p className="p-margin-10">Development Tutorial</p>
                <p className="p-margin-10">How to - Blog</p>
                <p className="p-margin-10">Youtube Playlist</p>
            </div>
            <div className="foot-block-item">
                <p><b>Link</b></p>
                <p className="p-margin-10">Free eBooks</p>
                <p className="p-margin-10">Development Tutorial</p>
                <p className="p-margin-10">How to - Blog</p>
                <p className="p-margin-10">Youtube Playlist</p>
            </div>
        </div>
    </div>
    );
}

export default Footer;