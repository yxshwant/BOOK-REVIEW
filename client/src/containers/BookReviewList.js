import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from 'components/Book';
import BookReview from 'components/BookReview';
import BookReviewListBooks from 'components/BookReviewListBooks';
import BookReviewListReviews from 'components/BookReviewListReviews';

import Button from 'components/Button';
import * as actions from '../actions';

class BookReviewList extends Component {

    componentWillMount() {
        this.props.fetchMyPage();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.reviewAdded) {
            this.props.fetchMyPage();
        }
    }

    render() {
        return (
            <div style={{ marginLeft: 25 }}>
                <Button
                    width="200" height="30"
                    label="Books" data-toggle="collapse" data-target="#showbooks" />
                <Button
                    width="200" height="30"
                    label="Reviews" data-toggle="collapse" data-target="#showreviews" />
                <BookReviewListBooks
                    books={this.props.books} />
                <BookReviewListReviews
                    reviews={this.props.reviews} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    books: state.book.books,
    reviews: state.book.reviews,
})

export default connect(mapStateToProps, actions)(BookReviewList)
