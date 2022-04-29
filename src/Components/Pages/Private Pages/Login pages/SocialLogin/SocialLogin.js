import React from 'react';
import googleImg from '../../../../../images/social/google.png'
import './SocialLogin.css'


const SocialLogin = () => {
    const handleSocialLogin = () => {
    }
    return (
        <div>
            <button
                onClick={() => handleSocialLogin()}
                className='btn google-signin-btn w-100 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={googleImg} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>

        </div>
    );
};

export default SocialLogin;