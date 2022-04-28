import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useCarDetails from '../../../../Hooks/useCarDetails';
import './CarDetails.css'


const CarDetails = () => {
    const { carId } = useParams();
    const [carDetails] = useCarDetails(carId);

    return (
        <div>
            <h2 className='text-center mt-5'> Car details of {carDetails.name}</h2>

            <div className='w-50 mx-auto border d-flex align-items-center'>


                <div>
                    <img className='p-4 details-car-img' src={carDetails.img} alt="" />
                </div>

                <div>
                    <h3>{carDetails.name}</h3>
                    <h5>Brand: {carDetails.brand}</h5>
                    <Card className='details-listgroup mb-2'>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Price: RM {carDetails.price}</ListGroup.Item>
                            <ListGroup.Item>Quantity: {carDetails.quantity}</ListGroup.Item>
                            <ListGroup.Item>Brand: {carDetails.brand}</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <div className='d-flex justify-content-around'>
                        <button className="custom-btn details-btn">Add Quantity</button>
                        <button className="custom-btn details-btn"><span>Book</span></button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CarDetails;