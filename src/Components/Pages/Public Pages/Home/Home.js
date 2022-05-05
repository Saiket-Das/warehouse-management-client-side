import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../../Hooks/useInventory';
import useReviews from '../../../Hooks/useReviews';
import Footer from '../../../Shared/Foooter/Footer';
import Review from '../../../Shared/Review/Review/Review';
import Banner from '../Banner/Banner';
import Car from '../Inventory/Car/Car';
import Services from '../Services/Services';
import SocialMedia from '../Social Media/SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCar as fasFaCar } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
library.add(fasFaCar)



const Home = () => {
    const [cars] = useInventory();
    const [reviews] = useReviews()

    return (
        <div className='mt-4'>

            <Banner></Banner>

            {/*  w-75 */}
            <hr />
            <div className='container'>
                <h2 className='text-center pt-4'>OUR INVENTORY</h2>
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
                className='nav-link text-black d-flex justify-content-center w-25 mx-auto mb-5'>

                <button style={{ width: '15rem' }} className="custom-btn p-2">
                    <span className='pe-2'>See More Car</span>
                    <FontAwesomeIcon icon={fasFaCar} />
                </button>
            </Nav.Link>

            <hr />
            <Services></Services>

            <hr />



            <div className='container mt-5'>

                <h2 className='text-center  pt-4'>CUSTOMER REVIEW</h2>
                <div className=" container border p-5 mt-5 mb-5">
                    <div className="customer-review-row">
                        {
                            reviews.slice(0, 3).map(review =>
                                <Review key={review._id} review={review}> </Review>)
                        }
                    </div>
                </div>


                <Nav.Link
                    as={Link} to='/review'
                    className='nav-link text-black d-flex justify-content-center w-25 mx-auto mb-5'>

                    <button style={{ width: '15rem' }} className="custom-btn p-2">
                        <span >See All</span>
                    </button>
                </Nav.Link>

            </div>
            <hr />
            <SocialMedia></SocialMedia>

            <Footer></Footer>

        </div >
    );
};

export default Home;