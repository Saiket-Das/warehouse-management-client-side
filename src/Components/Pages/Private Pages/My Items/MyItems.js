import React, { useEffect, useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const [myItems, setMyItems] = useState([])
    const [user] = useAuthState(auth)
    const userEmail = user.email;

    const url = `https://salty-escarpment-87764.herokuapp.com/inventory?email=${userEmail}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [])

    return (
        <div className='my-items-container mx-auto' >
            <h2 className='mt-5 text-center'>MY ADDED {myItems.length} ITEMS</h2>


            <div className=" my-items-row mt-5">
                {
                    myItems.map(item =>
                        < div className="p-5"
                            key={item._id} >
                            <div>
                                <Card className='item-card' style={{ width: '18rem' }}>
                                    <Card.Img className='p-2' variant="top" src={item.img} />

                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <p>Brand: {item.brand}</p>
                                        <p>Price: RM {item.price}</p>

                                        <Nav.Link
                                            as={Link} to={`/Inventory/${item._id}`}
                                            className='nav-link text-black d-flex justify-content-center'>
                                            <button className="custom-btn details-btn"><span>See Details</span></button>
                                        </Nav.Link>
                                    </Card.Body>

                                </Card>

                            </div>

                        </div>



                    )}
            </div>

        </div >
    );
};

export default MyItems;

