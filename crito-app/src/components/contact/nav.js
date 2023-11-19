import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='nav'>
            <div className='item-link'>
                <Link to="/">Home</Link>
            </div>
            <div className='item-link'>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Nav;