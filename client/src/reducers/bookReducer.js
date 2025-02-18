import * as actionTypes from 'constants/actionTypes';

const initialState = {
    books: [],
    reviewAdded: false,
    bookAdded: false,
    reviews: [],
    errorMessage: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_REVIEW:
            return { ...state, reviewAdded: true };
        case actionTypes.ADD_BOOK:
            return { ...state, bookAdded: true, errorMessage: "" };
        case actionTypes.FETCH_MYPAGE:
            return { ...state, books: action.payload.books, reviews: action.payload.reviews };
        case actionTypes.FETCH_BOOKS:
            return { ...state, books: action.payload, reviewAdded: false, bookAdded: false };
        default:
            return { ...state };
    }
}
