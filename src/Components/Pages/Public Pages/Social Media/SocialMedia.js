import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialMedia.css'

const SocialMedia = () => {
    return (
        <div className='pt-5 mb-5'>
            <div className='container border '>
                <div className='text-center p-4'>
                    <h2>Follow us on social media</h2>
                    <p>All the latest news for you</p>
                </div>

                <div className='d-flex '>
                    <ul className="wrapper mx-auto">

                        {/* --------------- FACEBOOK --------------- */}
                        <a href="https://www.facebook.com/ahan.bryan.96/" target="_blank" rel="noopener noreferrer">
                            <li className="icon facebook">
                                <span className="tooltip">Facebook</span>
                                <span>  <FontAwesomeIcon icon={faFacebookF} /></span>
                            </li>
                        </a>

                        {/* --------------- TWITTER --------------- */}
                        <a href="https://twitter.com/twitter" target="_blank" rel="noopener noreferrer">
                            <li className="icon twitter">
                                <span className="tooltip">Twitter</span>
                                <span><FontAwesomeIcon icon={faTwitter} /></span>
                            </li>
                        </a>

                        {/* --------------- INSTAGRAM --------------- */}
                        <a href="https://www.instagram.com/ahan_bryan/" target="_blank" rel="noopener noreferrer">
                            <li className="icon instagram">
                                <span className="tooltip">Instagram</span>
                                <span><FontAwesomeIcon icon={faInstagram} /></span>
                            </li>
                        </a>

                        {/* --------------- GITHUB --------------- */}
                        <a href="https://github.com/Saiket-Das" target="_blank" rel="noopener noreferrer">
                            <li className="icon github">
                                <span className="tooltip">Github</span>
                                <span><FontAwesomeIcon icon={faGithub} /></span>
                            </li>
                        </a>

                        {/* --------------- YOUTUBE --------------- */}
                        <a href="https://www.youtube.com/channel/UCC4x3A5-5YYgtslyNXZe_xw" target="_blank" rel="noopener noreferrer">
                            <li className="icon youtube">
                                <span className="tooltip">Youtube</span>
                                <span><FontAwesomeIcon icon={faYoutube} /></span>
                            </li>
                        </a>
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default SocialMedia;