import React from 'react';
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import Authentication from 'containers/Authentication';
import TextField from 'components/TextField';
import Button from 'components/Button';
import sinon from 'sinon';
import configureStore from 'redux-mock-store'
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';
import { Redirect, BrowserRouter } from 'react-router-dom';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]
describe("Authentication container", () => {
    let component;
    let actions;
    const mockStore = configureStore(middlewares);
    let store, container, authenticatedContainer;
    const initialState = {
        user: {
            userName: ""
        }
    }

    beforeEach(() => {
        store = mockStore(initialState)
        container = mount(<Provider store={store}>
            <Authentication />
        </Provider>);


    })

    it('has length 1', () => {
        expect(container.length).equal(1)
    });

    it('render components', () => {
        expect(container.find(TextField)).to.have.length(1);
    });


    it('render components', () => {
        expect(container.find(Button)).to.have.length(1);
    });


    beforeEach(() => {
        const state = {
            user: {
                userName: "user"
            }
        }

        store = mockStore(state)
        authenticatedContainer = mount(<Provider store={store}>
            <BrowserRouter>
                <Authentication />
            </BrowserRouter>
        </Provider>);

    })

    it('render components', () => {
        expect(authenticatedContainer.find(Button)).to.have.length(0);
    });

    it('render components', () => {
        expect(authenticatedContainer.find(TextField)).to.have.length(0);
    });

    it('render components', () => {
        expect(authenticatedContainer.find(Redirect)).to.have.length(1);
    });
})


