import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import useCarDetails from '../../../../Hooks/useCarDetails';

const EditDetails = () => {
    const { carId } = useParams();
    const [carDetails] = useCarDetails(carId);
    const navigate = useNavigate()

    const handleEditDetails = event => {
        event.preventDefault()

        const Quantity = event.target.quantity.value;
        console.log(Quantity);
        const Description = event.target.description.value;
        console.log(Description);

        const updateData = { Quantity, Description };
        console.log(updateData)

        const idURL = `https://salty-escarpment-87764.herokuapp.com/inventory/${carId}`;
        fetch(idURL, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Successful', data);
                navigate(`/inventory/${carId}`)
                event.target.reset();
            })

    }

    return (
        <div>
            <h2 className='text-center'>UPDATE CAR DETAILS</h2>

            <div className='w-50 mx-auto'>


                <form className='text-center mt-3 border p-4' onSubmit={handleEditDetails}>

                    <input className='w-75' value={carDetails?.name} type="name" name="name" id="" placeholder='Your Email' required readOnly disabled /><br /><br />


                    <input className='w-75' type="text" value={carDetails.brand} name="brand" id="" placeholder='The Car you choose' required readOnly disabled /><br /><br />

                    <input className='w-75' type="number" name="price" id="" placeholder='Car Price' value={carDetails?.price} readOnly disabled /><br /><br />

                    <input className='w-75' type="number" name="quantity" id="" placeholder='Car Quantity' required /><br /><br />

                    <input className='w-75' type="text" name="description" id="" placeholder='Car Description' required /><br /><br />

                    <input
                        className='w-75' type="submit" value="Update" />
                </form>
            </div>


        </div>
    );
};

export default EditDetails;