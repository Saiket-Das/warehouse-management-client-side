import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../../Hooks/useInventory';
import Banner from '../Banner/Banner';
import Car from '../Inventory/Car/Car';
import Services from '../Services/Services';
import SocialMedia from '../Social Media/SocialMedia';
import './Home.css'


const Home = () => {
    const [cars] = useInventory();

    return (
        <div className='mt-4'>

            <Banner></Banner>

            <hr />
            <div className='inventory-container'>
                <h2 className='text-center'>OUR INVENTORY</h2>
                <div className=" container mt-5">
                    <div className="row">
                        {
                            cars.slice(0, 4).map(car => <Car key={car._id} car={car}></Car>)
                        }
                    </div>
                </div>
            </div>

            {/* SEE MORE BUTTON (NAV LINK) */}
            <Nav.Link
                as={Link} to='/inventory'
                className='nav-link text-black d-flex justify-content-center bg-light w-25 mx-auto mb-5'>

                <button style={{ width: '15rem' }} className="custom-btn p-2">
                    <span >See More Car</span>
                </button>
            </Nav.Link>

            <hr />
            <Services></Services>

            <hr />
            <SocialMedia></SocialMedia>

        </div >
    );
};

export default Home;