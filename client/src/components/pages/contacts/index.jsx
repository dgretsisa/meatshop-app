import React, { useState } from 'react';

import './style.css';

import Headers from '../common/header/header';
import { ClockIcon, LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';

const ContactsIndex = () => {
    const [menuState, setMenuState] = useState(false);

    const toggleMenu = () => {
        setMenuState(!menuState);
    }

    return (
        <div className='contacts'>
            <Headers
                toggleMenu={toggleMenu}
                menuState={menuState}
            />
            <div className="content">
                <div className="items-container">
                    <div className="item">
                        <span><LocationMarkerIcon className='icons'/></span>
                        <h5>Location</h5>
                        <p>Bliss, Culo, Molave, Zamboanga del Sur, 7023</p>
                    </div>
                    <div className="item">
                        <span><PhoneIcon className='icons'/></span>
                        <h5>Phones</h5>
                        <div>
                            <p>0(800) 890-90-609</p>
                            <p>0(800) 890-90-620</p>
                        </div>
                    </div>
                    <div className="item">
                        <span><MailIcon className='icons'/></span>
                        <h5>Email</h5>
                        <div>
                            <p>meatshop@gmail.com</p>
                            <p>administrator@meatshop.com</p>
                        </div>
                    </div>
                    <div className="item">
                        <span><ClockIcon className='icons'/></span>
                        <h5>Working hours</h5>
                        <div>
                            <p>Monday - Saturday</p>
                            <p>7:00 AM - 7:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <img src={process.env.PUBLIC_URL +`/images/contact-bg.jpg`} alt="" />
                    <div className="social-media">
                        <h5>Follow Us</h5>
                        <ul className='social-links'>
                            <li><a href="https://facebook.com" target="_blank">facebook</a></li>
                            <li><a href="https://instagram.com" target="_blank">instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsIndex
