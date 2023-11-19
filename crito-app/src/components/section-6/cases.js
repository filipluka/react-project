import React from 'react';
import tidningar from '../../images/project_cases/tidningar.jpg';
import dator from '../../images/project_cases/dator.jpg';
import glasogon from '../../images/project_cases/glasogon.jpg';
import notes from '../../images/project_cases/notes.jpg';

function Cases() {
    return (
        <div className="cases">
        <p className="paragraph-red">Projects And Case Studies</p>
        <h2>Let's Looks Our Global Projects</h2>
        <div className="global-projects-box-container">
            <div className="global-projects-box-container-top">
                <div className="global-projects-box">
                    <img src={tidningar} alt="news-img" />
                    <p><b>Grow your business</b></p>
                    <a href="#">Read More ↗</a>
                </div>
                <div className="global-projects-box">
                    <img src={glasogon} alt="news-img" />
                    <p><b>Why your client needs a responsive website</b></p>
                    <a href="#">Read More ↗</a>
                </div>
            </div>
            <div className="global-projects-box-container-bottom">
                <div className="global-projects-box">
                    <img src={notes} alt="news-img" />
                    <p><b>Educate your employees to get better results</b></p>
                    <a href="#">Read More ↗</a>
                </div>
                <div className="global-projects-box">
                    <img src={dator} alt="news-img" />
                    <p><b>Business Insights is a important piece of your business</b></p>
                    <a href="#">Read More ↗</a>
                </div>
            </div>
        </div>
        <button className="button-animated button-50 button-black"><span>All Recent Projects</span></button>
    </div>
    );
}

export default Cases;