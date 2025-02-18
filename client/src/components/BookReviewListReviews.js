import React from 'react';
import BookReview from 'components/BookReview';

const BookReviewListReviews = ({ reviews }) => {
    return (
        <div id="showreviews" className="collapse">
            <h3>My Reviews:</h3>
            <ul className="app-bookreview-review list-group">
                {reviews.length === 0 ?
                    <li>No review added</li>
                    : reviews.map(review => {
                        return <BookReview key={review.review_id} review={review} />
                    })}
            </ul>
        </div>
    );
};

export default BookReviewListReviews;





