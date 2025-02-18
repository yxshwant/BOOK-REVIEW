import book from 'reducers/bookReducer'
import * as actions from 'constants/actionTypes'

describe('reducers', () => {
    describe('error', () => {

        const books = [
            {
                "book_id": 1,
                "book_isbn": "978-3-16-148410-0",
                "book_title": "book 1",
                "user_id": 1,
                "user_name": "user1",
                "review_sentence": "good book",
                "review_star": 2,
                "review_id": 1,
                "review_user_name": "user2",
                "review_user_id": 2
            },
            {
                "book_id": 1,
                "book_isbn": "978-3-16-148410-0",
                "book_title": "book 1",
                "user_id": 1,
                "user_name": "user1",
                "review_sentence": "very good book",
                "review_star": 5,
                "review_id": 2,
                "review_user_name": "user4",
                "review_user_id": 4
            }
        ]

        const INITIAL_STATE = {
            books: [],
            reviewAdded: false,
            bookAdded: false,
            reviews: [],
            errorMessage: ""
        }

        const FETCHBOOK_STATE = {
            books: books,
            reviewAdded: false,
            bookAdded: false,
            reviews: [],
            errorMessage: ""
        }

        const ADDBOOK_STATE = {
            books: books,
            reviewAdded: false,
            bookAdded: true,
            reviews: [],
            errorMessage: ""
        }

        const ADDREVIEW_STATE = {
            books: books,
            reviewAdded: true,
            bookAdded: false,
            reviews: [],
            errorMessage: ""
        }

        it('provide the initial state', () => {
            expect(book(undefined, {})).toEqual(INITIAL_STATE)
        })

        it('handle FETCH_BOOKS action', () => {
            expect(book(INITIAL_STATE, {
                type: actions.FETCH_BOOKS, payload: books
            })).toEqual(FETCHBOOK_STATE)
        })

        
        it('handle ADD_BOOK action', () => {
            expect(book(FETCHBOOK_STATE, {
                type: actions.ADD_BOOK
            })).toEqual(ADDBOOK_STATE)
        })


        it('handle ADD_REVIEW action', () => {
            expect(book(FETCHBOOK_STATE, {
                type: actions.ADD_REVIEW
            })).toEqual(ADDREVIEW_STATE)
        })


        it('handle ADD_BOOK action', () => {
            expect(book(FETCHBOOK_STATE, {
                type: actions.ADD_REVIEW
            })).toEqual(ADDREVIEW_STATE)
        })


    })
})

