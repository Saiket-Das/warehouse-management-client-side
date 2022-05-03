import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import auth from '../../../../../firebase.init';
import './AddNewCar.css'

const AddNewCar = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const addNewCar = data => {
        const url = 'http://localhost:5000/inventory';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json)
            .then(result => { navigate('/inventory') })
    };

    return (
        <div className='mt-5'>
            <h3 className='text-center'>ADD NEW CAR TO INVENTORY </h3>

            <div className='add-car-container mt-4'>
                <form className='d-flex flex-column p-5' onSubmit={handleSubmit(addNewCar)}>
                    <input className='mt-3' type='email' placeholder='Your Email' readOnly disabled {...register('email', { value: `${user.email}` }, { maxLength: 20 })} />

                    <input className='mt-3' type='name' placeholder='Car name' {...register('name', { required: true, maxLength: 20 })} />

                    <input className='mt-3' type='name' placeholder='Brand name' {...register('brand', { required: true, maxLength: 20 })} />

                    <input className='mt-3' placeholder='Price' type='number' {...register('price')} />

                    <input className='mt-3' placeholder='Available Quantity' type='number' {...register('quantity')} />

                    <input className='mt-3' placeholder='Photo URL' type="text" {...register('img')} />

                    <textarea className='mt-3 p-3' type='description' placeholder='description' {...register('description')} />

                    <input className='btn-link text-decoration-none text-black mt-3' type='submit' value="Add New Car" />
                </form>
            </div>
        </div>
    );
};

export default AddNewCar;