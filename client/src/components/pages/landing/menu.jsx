import React from 'react';
import { Link } from 'react-router-dom';

const LandingMenu = () => {
    return (
        <nav className='menu'>
            <ul className='menu-list'>
                <li><Link to="/store" className='order'>Order Now</Link></li>
                <li><Link to="/contacts" className='contacts-link'>Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default LandingMenu
