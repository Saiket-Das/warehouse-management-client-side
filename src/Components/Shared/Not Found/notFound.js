import React from 'react';
import notFoundImg from '../../../images/other/not-found.png'

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <img style={{ width: "12rem" }} s src={notFoundImg} alt="" />
            <h2 style={{ fontSize: "4rem" }} className='mt-4 text-danger'>Not Found !!!</h2>
        </div>
    );
};

export default NotFound;