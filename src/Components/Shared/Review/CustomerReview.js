import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useReviews from '../../Hooks/useReviews';
import './CustomerReview.css'
import Review from './Review/Review';


const CustomerReview = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleAddComment = event => {
        event.preventDefault();
        console.log(user)
        const userEmail = user.email;
        console.log(userEmail);


        const comment = event.target.comment.value;
        const name = event.target.name.value;
        const star = event.target.star.value;


        const data = { userEmail, comment, name, star }

        const idURL = 'http://localhost:5000/review';
        fetch(idURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Successful', data);
                navigate('/home')
                event.target.reset();
            })

    }

    return (

        <div className='mt-5'>
            <h2 className='text-center pt-4'>ALL REVIEWS</h2>

            <div className='container mb-5 mt-5 border  p-5'>
                <div className='customer-review-row'>

                    {
                        reviews.map(review =>
                            <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                    }

                </div>

            </div>

            <div className='mt-5'>
                <h3 className='text-center'>WRITE YOUR COMMENT ABOUT US </h3>



                <div>
                    <h2 className='text-center'>UPDATE CAR DETAILS</h2>

                    <div className='w-50 mx-auto'>


                        <form className='text-center mt-3 border p-4' onSubmit={handleAddComment}>

                            <textarea
                                className='w-75 p-3' type="text" name="comment" id="" placeholder='Write your comment' required
                                cols="30" rows="4"></textarea>

                            <input className='w-75' type="name" name="name" id="" placeholder='Your name' required /><br /><br />

                            <input className='w-75' type="number" name="star" id="" placeholder='Rating us between 1-5' step='any' required /><br /><br />

                            <input
                                className='w-75' type="submit" value="Submit" />
                        </form>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default CustomerReview;