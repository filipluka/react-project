import React from 'react';
import TopMeny from '../section-1/top-meny';
import SocialMedia from '../section-1/social-media';
import Navigation from '../section-1/navigation';
import LogginButton from '../section-1/logginButton';
import LogoImage from '../section-1/logoImage';
import '../../style/section1.css'

function Section1Top() {
    return (
        <div className="section-1-top">
            <div className='section-1-container-top'>
                <LogoImage />
                <div className='meny'>
                    <div className='top-meny'>
                        <TopMeny />
                        <SocialMedia />
                    </div>
                    <div className='navigation'>
                        <Navigation />
                        <LogginButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1Top;