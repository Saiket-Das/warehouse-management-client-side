import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init';
import googleImg from '../../../../../images/social/google.png'
import Loading from '../../../../Shared/Loading/Loading';
import './SocialLogin.css'


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {

    }

    if (loading) {
        <Loading></Loading>
    }

    let erroMsg;
    if (error) {
        erroMsg = <p className='text-center text-danger'>{error.message.slice(22, -2)}</p>
    }

    return (
        <div>
            {erroMsg}
            <button
                onClick={() => signInWithGoogle()}
                className='btn google-signin-btn w-100 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={googleImg} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>

        </div>
    );
};

export default SocialLogin;