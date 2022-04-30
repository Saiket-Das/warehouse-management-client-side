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
                        <li className="icon facebook">
                            <span className="tooltip">Facebook</span>
                            <span> <FontAwesomeIcon icon={faFacebookF} /></span>
                        </li>
                        <li className="icon twitter">
                            <span className="tooltip">Twitter</span>
                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                        </li>
                        <li className="icon instagram">
                            <span className="tooltip">Instagram</span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                        </li>
                        <li className="icon github">
                            <span className="tooltip">Github</span>
                            <span><FontAwesomeIcon icon={faGithub} /></span>
                        </li>
                        <li className="icon youtube">
                            <span className="tooltip">Youtube</span>
                            <span><FontAwesomeIcon icon={faYoutube} /></span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SocialMedia;