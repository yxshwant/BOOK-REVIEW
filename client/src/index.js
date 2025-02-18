import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from 'components/HomePage';
import RequireAuth from 'components/RequireAuth';
import AuthenticationPage from 'components/AuthenticationPage';
import configureStore from 'store/configureStore';
import BookAddPage from 'components/BookAddPage';
import MyPage from 'components/MyPage';
import 'assets/styles/index.css';


ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path='/' component={RequireAuth(HomePage)} />
                    <Route path='/mypage' component={RequireAuth(MyPage)} />
                    <Route path='/addbook' component={RequireAuth(BookAddPage)} />
                    <Route path='/authenticate' component={AuthenticationPage} />
                </Switch>
            </main>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));