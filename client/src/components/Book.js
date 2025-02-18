import React, { Component } from 'react';
import BookReview from 'components/BookReview';
import BookAddReview from 'containers/BookAddReview';

class Book extends Component {

    getReviews(book) {
        let reviews = book.reviews.map(review => {
            return <BookReview key={review.review_id} review={review} />
        })

        if (reviews.length === 0) {
            reviews.push(
                <li key="noreviewKey">No review added</li>
            );
        }

        if (!this.props.noNewReview) {
            reviews.push(
                <BookAddReview key="newreviewKey" book={this.props.item} />
            );
        }

        return reviews;
    }

    render() {
        return (
            <li className="list-group-item">
                <div >
                    <h4 className="app-card-title">{this.props.item.book_title}</h4>
                    <p className="app-card-isbn">BOOK ISBN: {this.props.item.book_isbn}</p>
                    <p className="app-card-user">BOOK Owner Username: {this.props.item.user_name}</p>
                </div>
                <button type="button" data-toggle="collapse" data-target={"#" + this.props.item.book_id}>Reviews</button>
                <div id={this.props.item.book_id} className="collapse">
                    <ul>
                        {this.getReviews(this.props.item)}
                    </ul>
                </div>
            </li>
        );
    }

};

export default Book;







