import React from 'react';

import { MinusIcon, PlusIcon, TrashIcon, XIcon } from '@heroicons/react/solid';

const MyOrdersContent = () => {

    const orders = [
        { name: 'Veal Tenderloin', image: 'meat1.jpg', price: 200, total: '200.00', quantity: 1},
        { name: 'Beef Steak', image: 'meat6.jpg', price: 250, total: '750.00', quantity: 3},
        { name: 'Chicken Breast', image: 'meat5.jpg', price: 180, total: '180.00', quantity: 1}
    ];

    return (
        <div className='content'>
            <div className="summary">
                <h4 className='summary-header'>My Orders</h4>

                {orders.map((order, index) => {
                    return (<div key={index} className="item">
                        <div className="left-section">
                            <XIcon className='icons' />
                            <img src={process.env.PUBLIC_URL +`/uploads/${order.image}`} alt="" />
                            <div>
                                <p>{order.name}</p>
                                <p className='price'>₱ {order.price} / kg</p>
                            </div>
                        </div>
                        
                        <div className="right-section">
                            <p>₱ {order.total}</p>
                            <div className='action'><MinusIcon className='icons'/>{order.quantity} kg<PlusIcon className='icons'/></div>
                        </div>
                    </div>)
                })}
                
                <div className="total">
                    <h4>Total Amount</h4>
                    <h4>₱ 1,130.00</h4>
                </div>
            </div>
            <div className="info">
                <form>
                    <h4>Billing Information</h4>
                    <div className='input-holder'>
                        <label>Customer's Name</label>
                        <input type="text" placeholder='Full Name'/>
                    </div>
                    <div className='input-holder'>
                        <label>Phone Number</label>
                        <input type="text" placeholder='Phone #'/>
                    </div>
                    <div className='input-holder'>
                        <label>Home Address</label>
                        <textarea rows="4" cols="50" placeholder='Home Address'></textarea>
                    </div>
                    <div className='input-holder'>
                        <span></span>
                        <button type='submit' className='submit-btn'>Check Out</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MyOrdersContent
