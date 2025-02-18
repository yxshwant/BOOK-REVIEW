import { connect } from 'react-redux';
import React, { Component } from 'react';
import TextField from 'components/TextField';
import ReviewStar from 'components/ReviewStar';
import Button from 'components/Button';
import * as actions from '../actions';

class BookAddReview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            review_sentence: "",
            review_star: 0,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.reviewAdded) {
            this.setState({ review_sentence: "", review_star: 0 })
        }
    }

    addReview() {
        if (this.state.review_sentence) {
            this.props.addReview({
                review_sentence: this.state.review_sentence,
                review_star: this.state.review_star,
                reviewbook_id: this.props.book.book_id
            });
        }
    }
    render() {
        return (
            <li >
                <h5 >
                    <TextField
                        placeholder="Enter review"
                        width="200"
                        height="30"
                        value={this.state.review_sentence}
                        onChange={(e) => this.setState({ review_sentence: e.target.value })}
                    />
                    <ReviewStar star={this.state.review_star} onClick={(e) => this.setState({ review_star: e })} />
                    <Button
                        onClick={this.addReview.bind(this)}
                        width="200"
                        height="30"
                        label="Add review" />
                </h5>
            </li>
        );
    }

};


const mapStateToProps = state => ({
    reviewAdded: state.book.reviewAdded
})

export default connect(mapStateToProps, actions)(BookAddReview)
