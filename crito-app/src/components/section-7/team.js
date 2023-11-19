import React from 'react';
import kristina from '../../images/team/kristina.jpg';
import mark from '../../images/team/mark.jpg';
import kimberly from '../../images/team/kimberly.jpg'
import justin from '../../images/team/justin.jpg';

function Team() {
    return (
        <div className="team">
        <p className="paragraph-red">Meet Our Team</p>
        <div className="team-title-box">
            <h2>Experience Team Members</h2>
            <button className="button-animated team-title-box-button"><span>Browse Team </span></button>
        </div>
        <div className="team-img-container">
            <div className="team-img-box">
                <img src={kristina} alt="team-img" />
                <p><b>Kristine Palmer</b></p>
                <p>Chef Operation Officer</p>
            </div>
            <div className="team-img-box">
                <img src={mark} alt="team-img" />
                <p><b>Mark Aubri</b></p>
                <p>Senior Consultant</p>
            </div>
            <div className="team-img-box">
                <img src={kimberly} alt="team-img" />
                <p><b>Kimberly Hansen</b></p>
                <p>Senior Consultant</p>
            </div>
            <div className="team-img-box">
                <img src={justin} alt="team-img" />
                <p><b>Justin Willoman</b></p>
                <p>Senior Tech Consultant</p>
            </div>
        </div>
        <ul className="container-dots">
            <li className="link"><a href="#"></a></li>
            <li className="link"><a href="#"></a></li>
            <li className="link active"><a href="#"></a></li>
            <li className="link"><a href="#"></a></li>
            <li className="link"><a href="#"></a></li>
        </ul>
    </div>
    );
}

export default Team;