import React from 'react';
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import Error from 'containers/Error';
import sinon from 'sinon';
import configureStore from 'redux-mock-store'
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]

describe("Error container", () => {
    let component;
    let actions;
    const mockStore = configureStore(middlewares);
    let store, container, containerWithStore;
    const initialState = {
        error: {
            error: {
                error: "error test",
                detail: "detail test",
            }
        }
    }

    beforeEach(() => {
        store = mockStore(initialState)
        // container = shallow(<Error />);
        containerWithStore = mount(<Provider store={store}>
            <Error />
        </Provider>);
    })

    it('has length 1', () => {
        expect(containerWithStore.length).equal(1)
    });

    it('render components', () => {
        expect(containerWithStore.find('.alert-danger').exists()).to.eql(true);
    });

    it('render components', () => {
        expect(containerWithStore.find('strong').exists()).to.eql(true);
    });

    
    it('render components', () => {
        expect(containerWithStore.find('strong').text()).to.eql('error test');
    });

    it('render components', () => {
        expect(containerWithStore.find('label').exists()).to.eql(true);
    });

    it('render components', () => {
        expect(containerWithStore.find('label').text()).to.eql('detail test');
    });
 

})


