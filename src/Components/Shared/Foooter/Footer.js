import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark '>
            <div className='container'>
                <footer className="footer  mx-auto bg-dark">


                    <ul className="footer__nav mx-auto text-center">
                        <li className="nav__item">
                            <h2 className="nav__title">Contact</h2>

                            <ul className="nav__ul">
                                <li>Gulshan, Dhaka 1212, Bangladesh</li>
                                <li>+8801223334444</li>
                                <li>contact@car-trader.com</li>
                            </ul>
                        </li>

                        <li className="nav__item ">
                            <h2 className="nav__title">Services</h2>
                            <ul className="nav__ul ">
                                <li>Car Resell</li>
                                <li>Accessories Sell</li>
                                <li>Financial Support</li>
                            </ul>
                        </li>

                        <li className="nav__item">
                            <h2 className="nav__title">Legal</h2>
                            <ul className="nav__ul">
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                            </ul>
                        </li>
                    </ul>

                    <p className='mt-2 text-center text-white'>Car Trader &copy; 2022. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;