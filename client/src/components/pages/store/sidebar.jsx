import React from 'react'

const StoreSidebar = () => {
    return (
        <div className='sidebar'>
            <div className="search">
                <input type="text" placeholder='Search...' />
            </div>
            <div className="filter">
                <label>Filter</label>
                <select name="" id="">
                    <option value="">What's new</option>
                </select>
                <select name="" id="">
                    <option value="">Price Range</option>
                    <option value="">Highest - Lowest</option>
                    <option value="">Lowest - Highest</option>
                </select>
            </div>
        </div>
    )
}

export default StoreSidebar
