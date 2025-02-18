import React from 'react';
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import BookReviewList from 'containers/BookReviewList';
import TextField from 'components/TextField';
import Button from 'components/Button';
import sinon from 'sinon';
import configureStore from 'redux-mock-store'
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';
import { Redirect, BrowserRouter } from 'react-router-dom';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]
describe("BookReviewList container", () => {
    let component;
    const mockStore = configureStore(middlewares);
    let store, container;
    const initialState = {
        book: {
            books: [{
                book_id: 1,
                book: ""
            }],
            reviews: [{
                review_id: 1,
                review: ""
            }]
        }
    }

    const actions = {
        fetchMyPage: sinon.spy(),
    }

    const fetchMyPage = jest.fn();

    beforeEach(() => {
        store = mockStore(initialState)
        container = shallow(<BookReviewList {...actions} store={store} />);
    })

    it('has length 1', () => {
        expect(container.length).equal(1)
    });

})


