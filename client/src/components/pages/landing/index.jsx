import React, { useState, useEffect } from 'react';

import './style.css';

import LandingHeader from './header';
import LandingMenu from './menu';
import LandingContent from './content';
import LandingSlider from './slider';

const LandingIndex = () => {

    const images = ['home1.jpg', 'home2.jpg', 'home3.jpg'];
    const texts = [
        { title: 'online orders', subtitle: 'Free Delivery'},
        { title: 'organic products', subtitle: 'Raw Meat Farm'},
        { title: 'best offers', subtitle: 'For Restaurants'}
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [menuState, setMenuState] = useState(false);

    const nextSlide = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    }

    const toggleMenu = () => {
        setMenuState(!menuState);
    }

    useEffect(() => {
        const clearTime = setTimeout(() => {
            nextSlide();
        }, 10000);

        return () => {
            clearTimeout(clearTime);
        }
    }, [currentIndex])

    return (
        <div className='home'>
            <LandingHeader 
                toggleMenu={toggleMenu}
                menuState={menuState} 
            />
            <LandingContent 
                images={images} 
                texts={texts} 
                currentIndex={currentIndex}
            />
            <LandingSlider 
                prevSlide={prevSlide} 
                nextSlide={nextSlide} 
            />
            <LandingMenu/>
        </div>
    )
}

export default LandingIndex
