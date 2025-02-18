import * as actionTypes from 'constants/actionTypes'
import { manageReviews, manageBooks } from 'utils/index';
export const fetchMyPage = () => (dispatch, getState) => {

    if (getState().book.books.length === 0) {
        dispatch(fetchBooks(true));
    }
    else {
        let books = getState().book.books.filter(book => book.user_id === getState().user.userId);
        let reviews = manageReviews(getState().book.books, getState().user.userId);

        dispatch({
            type: actionTypes.FETCH_MYPAGE,
            payload: {
                books,
                reviews
            }
        });
    }
}

export const addBook = (book) => (dispatch, getState) => {

    fetch('/api/book/add', {
        method: 'POST',
        body: JSON.stringify({
            book_title: book.title,
            book_isbn: book.isbn,
            user_id: getState().user.userId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleError)
        .then((response) => response.json())
        .then((items) => {
            dispatch({
                type: actionTypes.ADD_BOOK,
                payload: true
            });
        })
        .catch(error => {
            dispatch(dispatchError(error))
        })
}

export const fetchBooks = (fetchMyPage) => (dispatch, getState) => {

    fetch('/api/book/get')
        .then(handleError)
        .then((response) => response.json())
        .then((items) => {
            if (fetchMyPage) {
                let books = manageBooks(items);
                let reviews = manageReviews(books, getState().user.userId);
                dispatch({
                    type: actionTypes.FETCH_MYPAGE,
                    payload: {
                        books: books.filter(book => book.user_id === getState().user.userId),
                        reviews
                    }
                });
            }
            else {
                dispatch({
                    type: actionTypes.FETCH_BOOKS,
                    payload: manageBooks(items)
                });
            }
        })
        .catch(error => {
            dispatch(dispatchError(error))
        })
}



export const addReview = (review) => (dispatch, getState) => {

    var request = JSON.stringify({
        review_sentence: review.review_sentence,
        review_star: review.review_star,
        reviewbook_id: review.reviewbook_id,
        reviewowner_id: getState().user.userId
    });
    console.log(request);
    fetch('/api/review/add', {
        method: 'POST',
        body: request,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleError)
        .then((response) => response.json())
        .then((items) => {
            console.log(items)
            dispatch({
                type: actionTypes.ADD_REVIEW,
                payload: items
            });
        })
        .catch(error => {
            dispatch(dispatchError(error))
        })
}

const handleError = (response) => {
    if (response.status === 500 || response.status === 400) {
        return response.json().then(err => { throw err; });
    }
    else if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}

const dispatchError = (error) => (dispatch) => {
    dispatch({
        type: actionTypes.ERROR_OCCURED,
        payload: error
    });
}
