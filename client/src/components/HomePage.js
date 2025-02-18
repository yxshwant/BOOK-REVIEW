import React, { Component } from 'react';
import Header from 'components/Header'
import BookList from 'containers/BookList'
import Error from 'containers/Error'

export default class HomePage extends Component {
  render() {
    return (
      <div className="app-home">
        <Header />
        <BookList />
        <Error />
        
      </div>
    );
  }
}

