import React, { useState } from 'react';

import './style.css';

import Headers from '../common/header/header';
import StoreSidebar from './sidebar';
import StoreContent from './content';

const StoreIndex = () => {

    const [menuState, setMenuState] = useState(false);

    const toggleMenu = () => {
        setMenuState(!menuState);
    }

    return (
        <div className='store'>
            <Headers
                toggleMenu={toggleMenu}
                menuState={menuState}
            />
            <StoreSidebar/>
            <StoreContent/>
        </div>
    )
}

export default StoreIndex
