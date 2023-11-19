import React from 'react';
import TopMeny from './top-meny';
import SocialMedia from './social-media';
import Navigation from './navigation';
import LogginButton from './logginButton';
import LogoImage from './logoImage';
import '../../style/section1.css'
import Ingress from './ingress';

function Section1() {
    return (
        <div className="section-1">
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
            <div className='section-1-container-bottom'>
                 <Ingress />
            </div>
        </div>
    );
}

export default Section1;