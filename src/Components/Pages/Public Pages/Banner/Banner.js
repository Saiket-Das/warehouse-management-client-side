import React from 'react';
import { Carousel } from 'react-bootstrap';
import dealingImg from '../../../../images/Banner/Car-deal.jpg'
import serviceImg from '../../../../images/Banner/Car-service.jpg'
import accessoriesImg from '../../../../images/Banner/Car-accessories.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <h2 className='text-center'> WHAT WE
                <span className='text-secondary'> DO</span>
                <span> & OUR</span>
                <span className='text-secondary'> SERVICES</span>
            </h2>

            <div className='banner mt-5 mb-5'>
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-img"
                            src={dealingImg}
                            alt="First slide" />
                        <Carousel.Caption className='text-black'>
                            <h3 >Direct Car Deal</h3>
                            <p>Purchase your favourite and perfect car with best deals.</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item >
                        <img
                            className="d-block w-100 banner-img"
                            src={serviceImg}
                            alt="Second slide" />
                        <Carousel.Caption className='text-black'>
                            <h3>Our Services</h3>
                            <p>Oil chnage / Pre-technical check / Battery / Car wash / Breaks</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item >
                        <img
                            className="d-block w-100 banner-img"
                            src={accessoriesImg}
                            alt="Third slide" />
                        <Carousel.Caption className='text-black'>
                            <h3>Car Accessories</h3>
                            <p>Buy premium car parts/accessories with best price.</p>
                            <small>Tire / Dash covers / Seat covers / Mirrors / Fuel consumption meters / Window tint
                            </small>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;