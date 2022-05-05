import React from 'react';
import { Card, ListGroup, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Car.css';


const Car = (props) => {
    const { _id, name, brand, price, img, quantity, description } = props.car


    return (
        <div className='car-card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='p-2' variant="top" src={img} />

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Brand: {brand}</p>
                    <p>Price: RM {price}</p>

                    <ListGroup horizontal >
                        <ListGroup.Item>Quantity: {quantity}</ListGroup.Item>
                        <ListGroup.Item>{description}</ListGroup.Item>
                    </ListGroup>


                    <Nav.Link
                        as={Link} to={`/Inventory/${_id}`}
                        className='nav-link text-black d-flex justify-content-center'>
                        <button className="custom-btn details-btn">
                            <span>Read more</span>
                        </button>
                    </Nav.Link>


                </Card.Body>

            </Card>

        </div>
    );
};

export default Car;