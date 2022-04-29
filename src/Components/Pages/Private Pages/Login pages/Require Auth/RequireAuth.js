import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../../../firebase.init";
import { toast } from 'react-toastify';
import Loading from "../../../../Shared/Loading/Loading";
import verifyEMailImg from '../../../../../images/other/verify-email.png'
import './RequireAuth.css'

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (loading || sending) {
        <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return (
            <div className='text-center mt-5'>
                <img style={{ width: "8rem" }} src={verifyEMailImg} alt="" />
                <h3 className='text-danger'>Your Email is not verified!!</h3>

                <button
                    className='btn verify-btn'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    Send Verification Email Again
                </button>

            </div>
        );
    };

    return children;
}

export default RequireAuth;