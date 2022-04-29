import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init'
import './Login.css'
import Loading from '../../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';



const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleLoginForm = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/')
    }

    if (loading) {
        <Loading></Loading>
    }

    let erroMsg;
    if (error) {
        erroMsg = <p className='text-center'>{error.message.slice(22, -2)}</p>
    }


    return (
        <div className='login-container mt-5'>
            <h2 className='text-center m-4'>LOGIN HERE</h2>


            <div className='px-5 pt-3'>
                <form onSubmit={handleLoginForm}>
                    <label htmlFor="">Your Email</label>
                    <input type="email"
                        placeholder='Enter your email'
                        ref={emailRef}
                        required />

                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter password'
                        ref={passwordRef}
                        required />

                    <input type="submit" value="Login" />
                    <br />
                    {erroMsg}


                    <div className='d-flex justify-content-around'>
                        <span><button className=' btn btn-link btn-link pe-auto text-decoration-none'>Forget password</button></span>

                        <span><button className='btn btn-link pe-auto text-decoration-none'>Reset password</button></span>
                    </div>

                    <p className='mt-3'>New to Car Trader?
                        <Link to="/register"
                            className='text-primary text-decoration-none'> Please Register
                        </Link>
                    </p>

                    <SocialLogin></SocialLogin>
                </form>
            </div>



        </div>
    );
};

export default Login;