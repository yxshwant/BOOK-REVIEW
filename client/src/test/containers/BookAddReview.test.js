import React from 'react';
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import BookAddReview from 'containers/BookAddReview';
import TextField from 'components/TextField';
import Button from 'components/Button';
import BookReview from 'components/BookReview';
import sinon from 'sinon';
import configureStore from 'redux-mock-store'
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';
import { Redirect, BrowserRouter } from 'react-router-dom';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]
describe("BookAddReview container", () => {
    let component;
    let actions;
    const mockStore = configureStore(middlewares);
    let store, container, authenticatedContainer;
    const initialState = {
        book: {
            reviewAdded: false
        }
    }

    beforeEach(() => {
        store = mockStore(initialState)
        container = mount(<Provider store={store}>
            <BookAddReview />
        </Provider>);

    })

    it('has length 1', () => {
        expect(container.length).equal(1)
    });

})


