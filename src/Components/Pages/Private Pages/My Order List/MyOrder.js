import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const MyOrder = () => {
    const [orders, serOrder] = useState([])
    const [user] = useAuthState(auth)
    const userEmail = user.email;

    const url = `http://localhost:5000/order?email=${userEmail}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => serOrder(data))
    }, [])

    return (
        <div>
            <h2 className='text-center mt-5'>YOUR ORDER LIST</h2>
            {
                orders.map(order =>
                    <div className='inventory-manage-container w-50 mx-auto mt-4 mb-4'
                        key={order._id}>

                        <div>
                            <div className="item">

                                {/* IMAGE */}
                                <div className="image">
                                    <img className='image' src={order.img} alt="" />
                                </div>

                                {/* TITLE  */}
                                <div className="description mt-2">
                                    <h5>{order.car}</h5>
                                </div>


                                {/* BUTTONS  */}

                                <div className='d-flex mt-3 '>
                                    <div>
                                        <p className='mt-3 me-5'>{order.brandName}</p>
                                    </div>
                                    <div>
                                        <button

                                            className="custom-btn update-btn ">
                                            Delete
                                        </button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                )}
        </div>
    );
};

export default MyOrder;