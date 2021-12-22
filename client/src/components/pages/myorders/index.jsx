import React, { useState } from 'react';

import './style.css';

import Headers from '../common/header/header';
import MyOrdersContent from './content';

const MyOrdersIndex = () => {
    const [menuState, setMenuState] = useState(false);

    const toggleMenu = () => {
        setMenuState(!menuState);
    }

    return (
        <div className='myorders'>
            <Headers 
                toggleMenu={toggleMenu}
                menuState={menuState}
            />
            <MyOrdersContent/>
        </div>
    )
}

export default MyOrdersIndex
