import React from 'react';
import { Link } from 'react-router-dom';

import { MenuIcon, XIcon } from '@heroicons/react/solid';
import MobileMenu from '../common/mobileMenu/mobileMenu';

const LandingHeader = ({ toggleMenu, menuState }) => {
    return (
        <div className='header'>
            <nav>
                <ul className='left-option'>
                    <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                    <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
                </ul>
                <Link to="/" className="logo">MeatShop</Link>
                <ul className='right-option'>
                    <li><Link to="/myorders" className='option'>My Orders <span className='orders-counter'>0</span></Link></li>
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
            </nav>
            <MobileMenu
                toggleMenu={toggleMenu} 
                menuState={menuState}
            />
        </div>
    )
}

export default LandingHeader
