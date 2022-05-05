import { useRef } from 'react';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init'
import './Login.css'
import Loading from '../../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';



const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || '/';
    let errorMsg;


    // EMAIL & PASSWORD LOGIN 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // PASSWORD RESET 
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }


    if (error) {
        errorMsg = <p className='text-center text-danger'>{error?.message.slice(22, -2)}</p>
    }
    const handleLoginForm = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email })
        localStorage.setItem('token', data.token)
        navigate(from, { replace: true });

    }

    if (user) {
    }



    // PASSWORD RESET 
    const handlePassReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Email sent')
        }
        else {
            toast('Please enter your email')
        }
    }






    return (
        <div className='login-container mt-5'>
            <h2 className='text-center m-4'>LOGIN HERE</h2>

            <div className='px-5 pt-3'>

                {/* LOGIN FORM  */}
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
                </form>


                {errorMsg}

                {/* REGISTER LINK  */}
                <p className='mt-3'>New to Car Trader?
                    <Link to="/register"
                        className='text-primary text-decoration-none'> Please Register
                    </Link>
                </p>


                {/* FORGET & RESET PASSWORD  */}
                <div className='d-flex justify-content-around'>
                    <span>
                        <button
                            className=' btn btn-link btn-link pe-auto text-decoration-none'>
                            Forget password
                        </button>
                    </span>

                    <span>
                        <button
                            onClick={handlePassReset}
                            className='btn btn-link pe-auto text-decoration-none'>
                            Reset password
                        </button>
                    </span>
                </div>

                <SocialLogin></SocialLogin>

            </div>



        </div >
    );
};

export default Login;