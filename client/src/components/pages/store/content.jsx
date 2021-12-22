import React from 'react';

import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/solid';

const StoreContent = () => {
    const products = [
        { name: 'Veal Tenderloin', image: 'meat1.jpg', available: '25 kilograms', price: 200},
        { name: 'Beef Ribs', image: 'meat2.jpg', available: '10 kilograms', price: 190},
        { name: 'Pork Steak', image: 'meat3.jpg', available: '30 kilograms', price: 280},
        { name: 'Aged Pork Steak', image: 'meat4.jpg', available: '8 kilograms', price: 230},
        { name: 'Chicken Breast', image: 'meat5.jpg', available: '15 kilograms', price: 180},
        { name: 'Beef Steak', image: 'meat6.jpg', available: '16 kilograms', price: 250},
        { name: 'Beef with Mint', image: 'meat7.jpg', available: '6 kilograms', price: 200},
        { name: 'Beef Tongue', image: 'meat8.jpg', available: '12 kilograms', price: 290}
    ];

    const pages = [];

    for(let i = 1; i <= products.length; i++){
        pages.push(i);
    }

    return (
        <div className='content'>
            <div className="items-container">
                {products.map((product, index) => {
                    return (<div key={index} className="item">
                        <h4 className='item-name'>{product.name}</h4>
                        <div className="item-slide">
                            <img src={process.env.PUBLIC_URL +`/uploads/${product.image}`} alt="" />
                        </div>
                        <div className='item-details'>
                            <div className="available">
                                <p>Available</p>
                                <p>{product.available}</p>
                            </div>
                            <h4 className="price">₱ {product.price}</h4>
                        </div>
                        <div className="item-buttons">
                            <div><PlusIcon className='plus-icon'/></div>
                        </div>
                    </div>)
                })}
            </div>
            <div className="pagination">
                <ChevronLeftIcon className='prev-icon'/>
                {pages.map((page, index) => {
                    return (<div className={index === 0 ? 'buttons active' : 'buttons'} key={index}>{page}</div>)
                })}
                <ChevronRightIcon className='next-icon'/>
            </div>
        </div>
    )
}

export default StoreContent
