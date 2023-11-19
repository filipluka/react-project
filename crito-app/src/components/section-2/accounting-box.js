import React from 'react';
import HandShake from '../../images/accounting/hand-shake.png'
import Idea from '../../images/accounting/idea.png'
import Graph from '../../images/accounting/financial-graph.png'
import Risk from '../../images/accounting/risk-study.png'

function AccountingBox() {
    return (
        <div className="accounting">
            <div className="accounting-text">
                <p className="paragraph-red">Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <button className="accounting-btn"><span>Learn More</span></button>
            </div>
            <div className="accounting-boxes">
                <div className="accounting-box">
                    <img className="accounting-img" src={HandShake} alt="hand-shake-img" />
                    <h3>Business Advice</h3>
                    <p className="paragraph-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="accounting-box">
                    <img className="accounting-img" src={Idea} alt="idea-img" />
                    <h3>Startup Business</h3>
                    <p className="paragraph-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="accounting-box">
                    <img className="accounting-img" src={Graph}
                        alt="financial-graph-img" />
                    <h3>Financial Advice</h3>
                    <p className="paragraph-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="accounting-box">
                    <img className="accounting-img" src={Risk} alt="risk-study-img" />
                    <h3>Risk Management</h3>
                    <p className="paragraph-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
    );
}

export default AccountingBox;

