import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import useCarDetails from '../../../Hooks/useCarDetails';



const Checkout = () => {
    const { carId } = useParams()
    const [user] = useAuthState(auth);
    const [carDetails] = useCarDetails(carId);
    const navigate = useNavigate();

    const bookYourCar = event => {

        // --------------- ADD ITEM TO ORDER LIST -----------------
        event.preventDefault()
        const order = {
            img: carDetails.img,
            email: user.email,
            car: carDetails.name,
            brandName: carDetails.brand,
            carID: carDetails._id,
            name: event.target.name.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        const url = 'https://salty-escarpment-87764.herokuapp.com/order';
        axios.post(url, order)
            .then(respone => {
                const { data } = respone;
                if (data.insertedId) {
                    toast('Your order is booked')
                    event.target.reset();
                }
            })



        // --------------- UPDATE QUANTITY -----------------

        const quantity = carDetails.quantity;
        const updateQuantity = quantity - 1;

        const updateData = { updateQuantity };

        const idURL = `https://salty-escarpment-87764.herokuapp.com/inventory/${carId}`;
        fetch(idURL, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset();
                navigate(`/inventory/${carId}`)
            })

    }


    return (
        <div>
            <h2 className='text-center'>CHECK OUT YOUR ORDER</h2>

            <div className='w-50 mx-auto'>

                <form className='text-center mt-3 border p-4' onSubmit={bookYourCar}>
                    <input className='w-75' type="text" name="name" id="" placeholder='Your name' required /><br /><br />

                    <input className='w-75' value={user?.email} type="email" name="Email" id="" placeholder='Your Email' required readOnly disabled /><br /><br />

                    <input className='w-75' type="text" value={carDetails.name} name="car" id="" placeholder='The CAR you choose' required readOnly disabled /><br /><br />

                    <input className='w-75' type="text" name="address" id="" placeholder='Your Address' required autoComplete='off' /><br /><br />

                    <input className='w-75' type="text" name="phone" id="" placeholder='Your Phone number' required autoComplete='off' /><br /><br />

                    <input
                        // onClick={() => handleBookingQuantity(carDetails)}
                        className='w-75' type="submit" value="Place Order" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;