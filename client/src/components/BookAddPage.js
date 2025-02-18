import React, { Component } from 'react';
import Header from 'components/Header'
import BookAdd from 'containers/BookAdd'
import Error from 'containers/Error'

export default class BookAddPage extends Component {
  render() {
    return (
      <div className="app-bookadd" >
        <Header />
        <BookAdd />
        <Error />
      </div>
    );
  }
}

