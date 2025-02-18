
import { createStore, applyMiddleware } from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import rootReducer from 'reducers';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore() {
    
    const persistedState = localStorage.getItem('book-redux-user')
    ? JSON.parse(localStorage.getItem('book-redux-user'))
    : {}
    
    const store = createStoreWithMiddleware(rootReducer, persistedState);

    store.subscribe(() => {
        const persistedState = {
            user: {
                userName: store.getState().user.userName,
                userId: store.getState().user.userId,
            }
        }
        localStorage.setItem('book-redux-user', JSON.stringify(persistedState))
    })

    return store;
}