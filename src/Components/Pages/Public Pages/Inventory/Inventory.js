import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../../Hooks/useInventory';
import Car from './Car/Car';
import './Inventory.css'

const Inventory = () => {
    const [cars] = useInventory()
    return (
        <div>
            <h2 className='text-center mt-5'>OUR INVENTORY</h2>

            <Nav.Link
                as={Link} to={'/addCar'}
                className='nav-link text-black d-flex justify-content-center'>
                <button style={{ width: '20rem' }} className="custom-btn details-btn"><span>Add new car to the Inventory</span></button>
            </Nav.Link>

            <div className="container mt-4">
                <div className="row">
                    {
                        cars.map(car => <Car key={car._id} car={car}></Car>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Inventory;