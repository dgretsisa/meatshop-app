import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import { MenuIcon, XIcon } from '@heroicons/react/solid';
import MobileMenu from '../mobileMenu/mobileMenu';

const Headers = ({ menuState, toggleMenu }) => {
    return (
        <nav className='header-common'>
            <ul className='left-option'>
                <li><Link to="/" className="logo">MeatShop</Link></li>
            </ul>
            <ul className='right-option'>
                <li className='option'><Link to="/">Home</Link></li>
                <li className='option'><Link to="/store">Store</Link></li>
                <li className='option'><Link to="/contacts">Contact Us</Link></li>
                <li className='option'><Link to="/myorders">My Orders <span className='orders-counter'>0</span></Link></li>
                <li>
                    {menuState ?
                        <XIcon 
                            onClick={toggleMenu}
                            className='menu-icon'
                        /> :
                        <MenuIcon
                            onClick={toggleMenu}
                            className='menu-icon'
                        />
                    }
                </li>
            </ul>
            <MobileMenu
                toggleMenu={toggleMenu} 
                menuState={menuState}
            />
        </nav>
    )
}

export default Headers
