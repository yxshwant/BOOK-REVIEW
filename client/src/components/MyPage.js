import React, { Component } from 'react';
import Header from 'components/Header'
import BookReviewList from 'containers/BookReviewList'
import Error from 'containers/Error'

export default class MyPage extends Component {
  render() {
    return (
      <div className="app-mypage">
        <Header />      
        <BookReviewList />
        <Error />
        
      </div>
    );
  }
}

