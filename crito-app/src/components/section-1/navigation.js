import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navigation'>
            <div className='item-link'>
                <Link to="/">Home</Link>
            </div>
            <div className='item-link'>
                <Link to="/services">Services</Link>
            </div>
            <div className='item-link'>
                <Link to="/news">News</Link>
            </div>
            <div className='item-link'>
                <Link to="/contact">Contacts</Link>
            </div>
        </div>
    );
}

export default Navigation;