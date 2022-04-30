import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../../firebase.init';
import Loading from '../../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'



const Register = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, error1] = useUpdateProfile(auth);


    if (user) {
        navigate('/')
    }
    if (loading) {
        <Loading></Loading>
    }

    let erroMsg;
    if (error || error1) {
        erroMsg = <p className='text-center text-danger'>{error.message.slice(22, -2)}</p>
    }


    const handleRegisterForm = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name }, console.log('Updated profile'));

    }

    return (
        <div className='register-container mt-5'>
            <h2 className='text-center mt-4'>REGISTER HERE</h2>


            {/* REGISTER FORM */}
            <div className='px-5 pt-2'>
                <form onSubmit={handleRegisterForm}>

                    <label htmlFor="">Your Name</label>
                    <input type="name"
                        placeholder='Enter your name'
                        ref={nameRef}
                        required />

                    <label htmlFor="">Your Email</label>
                    <input type="email"
                        placeholder='Enter your email'
                        ref={emailRef}
                        required />

                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter password'
                        ref={passwordRef}
                        required />

                    <input type="submit" value="Submit" />
                    <br />

                    {erroMsg}

                    <p className='mt-3'>Already have an account?
                        <Link to="/login"
                            className='text-primary text-decoration-none'> Login here
                        </Link>
                    </p>


                    <SocialLogin></SocialLogin>


                </form>
            </div>
        </div>
    );
};

export default Register;