import React from 'react';

import './style.css';

import { Link } from 'react-router-dom';

const MobileMenu = ({ menuState, toggleMenu }) => {
    return (
        <div className={menuState ? 'mobile-menu active' : 'mobile-menu'}>
            <nav>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/store" onClick={toggleMenu}>Store</Link></li>
                    <li><Link to="/contacts" onClick={toggleMenu}>Contact Us</Link></li>
                    <li><Link to="/myorders" onClick={toggleMenu}>My Orders <span className='orders-counter'>0</span></Link></li>
                </ul>
            </nav>
            <div className='social-media'>
                <label>Follow Us :</label>
                <div className='options'>
                    <a href="https://facebook.com" target="_blank">Facebook</a>
                    <a href="https://instagram.com" target="_blank">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
