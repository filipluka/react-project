import React from 'react';
import companyLogo from '../../images/Logo.png';

function LogoImage() {
    return (
        <div className="logoType">
                <img className="logo-img" src={companyLogo} alt="logo-img" />
            </div>
    );
}

export default LogoImage;