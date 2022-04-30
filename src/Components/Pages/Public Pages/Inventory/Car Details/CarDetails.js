import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useCarDetails from '../../../../Hooks/useCarDetails';
import './CarDetails.css'


const CarDetails = () => {
    const { carId } = useParams();
    const [carDetails] = useCarDetails(carId);
    const navigate = useNavigate();


    const bookItem = (carId) => {
        navigate(`/checkout/${carId}`)
    };


    // NAVIGATE TO MANAGE ITEM PAGE TO UPDATE 
    const mangeNavigate = () => {
        navigate('/manageItems')
    }



    return (
        <div>
            <h2 className='text-center mt-5'> Car details of {carDetails.name}</h2>

            <div className='details-update-container mx-auto border border-dark d-flex align-items-center mt-4'>

                {/* CAR DETAILS  */}
                <div>
                    <img className='p-4 details-car-img' src={carDetails.img} alt="" />
                </div>


                <div className='p-2'>
                    <h3>{carDetails.name}</h3>
                    {/* <h5>Brand: {carDetails.brand}</h5> */}
                    <Card className='details-listgroup mb-2'>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Brand: {carDetails.brand}</ListGroup.Item>
                            <ListGroup.Item>Price: RM {carDetails.price}</ListGroup.Item>
                            <ListGroup.Item>Quantity: {carDetails.quantity}</ListGroup.Item>

                        </ListGroup>
                    </Card>


                    {/* UPDATE BUTTONS */}
                    <div className='d-flex justify-content-around'>

                        {/* Manage Button  */}
                        <button
                            onClick={() => mangeNavigate()}
                            className="custom-btn update-btn mr-3">
                            Manage
                        </button>

                        {/* Book Button */}
                        <button
                            className="custom-btn update-btn mx-3">
                            <span onClick={() => bookItem(carId, carDetails)}>Book</span>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CarDetails;