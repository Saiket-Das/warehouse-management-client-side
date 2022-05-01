import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark '>
            <div className='container'>
                <footer className="footer  mx-auto bg-dark">
                    {/* <div className="footer__addr">
                        <h1 className="footer__logo">Something</h1>

                        <h2>Contact</h2>

                    </div> */}

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
                            <h2 className="nav__title">Technology</h2>
                            <ul className="nav__ul ">
                                <li>Hardware accessories</li>
                                <li>Software accessories</li>
                                <li>Digital strategy</li>
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