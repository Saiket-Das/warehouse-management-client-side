import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import './CustomerReview.css'
import Review from './Review/Review';


const CustomerReview = () => {

    const [reviews] = useReviews();

    return (

        <div className='mt-5'>
            <h2 className='text-center pt-4'>CUSTOMERS REVIEW</h2>

            <div className='container mb-5 mt-5 border p-5'>
                <div className='customer-review-row'>

                    {
                        reviews.map(review =>
                            <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                    }

                </div>

                <Nav.Link
                    as={Link} to='/inventory'
                    className='nav-link text-black d-flex justify-content-center w-25 mx-auto mt-5'>

                    <button style={{ width: '15rem' }} className="custom-btn p-2">
                        <span >See More Car</span>
                    </button>
                </Nav.Link>

            </div>

        </div>
    );
};

export default CustomerReview;