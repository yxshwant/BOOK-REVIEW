import React from 'react';
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import BookList from 'containers/BookList';
import Book from 'components/Book';
import sinon from 'sinon';
import configureStore from 'redux-mock-store'
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]
describe("BookList container", () => {
    let component;
    let actions;
    const mockStore = configureStore(middlewares);
    let store, container;
    const initialState = {
        book: {

            books: [{
                book_title: "title test",
                book_isbn: "isbn test",
                user_name: "user test",
                book_id: 5,
                reviews: [{
                    review_id: 1,
                    review: {}
                }],
            }]
        }
    }

    beforeEach(() => {
        store = mockStore(initialState)
        container = mount(<Provider store={store}>
            <BookList />
        </Provider>);
        
    })

    it('has length 1', () => {
        expect(container.length).equal(1)
    });

    it('render components', () => {
        expect(container.find(Book).exists()).to.eql(true);
    });

    it('render components', () => {
        expect(container.find('.app-booklist')).to.have.length(1);
    });

})


