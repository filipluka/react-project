import React from 'react';

function NewsUpdates() {
    return (
        <div className="news-updates">
            <div className="sign-up-container">
                <h2>Get News Updates By Signup</h2>
                <div className='sign-up-right-side'>
                    <div className="sign-up-buttons">
                        <input className="mail-input" placeholder="username@domain.com" />
                        <button className="button-animated button-subscribe"><span>Subscribe</span></button>
                    </div>
                    <div className='news-update-right'></div>
                </div>
            </div>
        </div>
    );
}

export default NewsUpdates;