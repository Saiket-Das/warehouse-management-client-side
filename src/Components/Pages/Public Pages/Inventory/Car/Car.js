import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Car.css'


const Car = (props) => {
    const { _id, name, brand, price, img } = props.car

    return (
        <div className='car-card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='p-2' variant="top" src={img} />

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Brand: {brand}</p>
                    <p>Price: RM {price}</p>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}




                    <Nav.Link
                        as={Link} to={`/Inventory/${_id}`}
                        className='nav-link text-black d-flex justify-content-center'>
                        <button className="custom-btn details-btn"><span>See Details</span></button>
                    </Nav.Link>

                </Card.Body>

            </Card>
        </div>
    );
};

export default Car;