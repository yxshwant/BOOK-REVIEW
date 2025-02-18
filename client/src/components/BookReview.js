import React from 'react';
import ReviewStar from 'components/ReviewStar';

const BookReview = ({ review }) => {
    return (
        <li className="app-bookreview">
            {review.review_user_name &&
                <h5>
                    {review.review_user_name}
                </h5>
            }
            {review.book_title &&
                <h5>
                   Book Title: {review.book_title}
                </h5>
            }
            <label>{review.review_sentence}</label>
            
            <ReviewStar star={review.review_star} />
        </li>
    );
};

export default BookReview;





