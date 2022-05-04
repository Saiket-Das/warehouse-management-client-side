import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import './Review.css'
library.add(fasFaStar, faStarHalfAlt)


const Review = (props) => {
    const { name, email, star, comment } = props.review;
    const rating = parseFloat(star)

    let starReview;

    if (rating === 3) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
        </span>
    }
    else if (rating === 3.5) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
        </span>
    }
    else if (rating === 4) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
        </span>
    }
    else if (rating === 4.5) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
        </span>
    }
    else if (rating === 5) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
        </span>
    }



    return (
        <div className='container-center'>
            <Card className='rating-card-style' style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                    <Card.Text>
                        {comment}
                    </Card.Text>

                    <Card.Text >
                        Rating: <span className='star-icon'>{starReview}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;