import React from 'react';
import Book from 'components/Book';

const BookReviewListBooks = ({ books }) => {
    return (
        <div id="showbooks" className="collapse in show">
            <h3>My Books:</h3>
            <ul className="app-bookreview-book list-group">
                {books.length === 0 ?
                    <li>No book added</li>
                    : books.map(book => {
                        return <Book
                            key={book.book_id}
                            item={book} noNewReview
                        />
                    })}
            </ul>
        </div>
    );
};

export default BookReviewListBooks;





