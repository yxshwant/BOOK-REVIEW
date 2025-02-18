import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from 'components/Book';
import * as actions from '../actions';

class BookList extends Component {

  componentWillMount() {
    this.props.fetchBooks();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reviewAdded) {
      this.props.fetchBooks();
    }
  }

  render() {
    return (
      <ul className="app-booklist list-group">
        {this.props.books.map(book => {
          return <Book
            key={book.book_id}
            item={book}
          />
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  books: state.book.books,
  reviewAdded: state.book.reviewAdded
})

export default connect(mapStateToProps, actions)(BookList)
