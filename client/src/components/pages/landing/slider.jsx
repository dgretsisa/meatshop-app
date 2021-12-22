import React from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const LandingSlider = ({ prevSlide, nextSlide }) => {
    return (
        <div className='slider'>
            <ChevronLeftIcon className='arrow' onClick={prevSlide}/>
            <ChevronRightIcon className='arrow' onClick={nextSlide} />
        </div>
    )
}

export default LandingSlider
