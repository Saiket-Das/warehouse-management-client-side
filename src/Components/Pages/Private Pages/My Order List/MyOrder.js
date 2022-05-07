
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash as fasFaTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../API/axiosPrivate';
library.add(fasFaTrash)



const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    useEffect(() => {
        const myOrders = async () => {
            const userEmail = user.email;
            const url = `https://salty-escarpment-87764.herokuapp.com/order?email=${userEmail}`;
            try {
                const { data } = await axiosPrivate.get(url, {
                })
                setOrders(data)
            }

            catch (error) {
                console.log(error.message);
                const errorMsg = error.message;
                if (error.response.status === 401 || error.response.status === 403) {
                    toast(errorMsg)
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        myOrders()

    }, [user])

    const deleteItem = (id) => {
        const URL = `https://salty-escarpment-87764.herokuapp.com/order/${id}`;

        const areYouSure = window.confirm('Are you sure?')
        if (areYouSure) {
            fetch(URL, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders)
                })
        }
    }


    return (
        <div>
            <h2 className='text-center mt-5'>YOUR ORDER LIST</h2>
            {
                orders.map(order =>
                    <div className='inventory-manage-container w-50 mx-auto mt-4 mb-4'
                        key={order._id}>

                        <div>
                            <div className="item">

                                {/* IMAGE */}
                                <div className="image">
                                    <img className='image' src={order.img} alt="" />
                                </div>

                                {/* TITLE  */}
                                <div className="description mt-2">
                                    <h5>{order.car}</h5>
                                </div>


                                {/* BUTTONS  */}

                                <div className='d-flex mt-3 '>
                                    <div>
                                        <p className='mt-3 me-5'>{order.brandName}</p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => deleteItem(order._id)}
                                            className="custom-btn update-btn ">
                                            Delete
                                            <FontAwesomeIcon className='ps-2' icon={fasFaTrash} />
                                        </button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                )}
        </div>
    );
};

export default MyOrder;