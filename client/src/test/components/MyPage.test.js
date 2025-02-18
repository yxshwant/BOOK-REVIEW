import React from 'react';
import MyPage from 'components/MyPage';
import Header from 'components/Header';
import Error from 'containers/Error';
import BookReviewList from 'containers/BookReviewList';
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('MyPage component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MyPage />)
  })

  it('has div', () => {
    expect(wrapper.find('.app-mypage').exists()).to.equal(true);
  });

  it('has a Header', () => {
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('has a BookReviewList', () => {
    expect(wrapper.find(BookReviewList)).to.have.length(1);
  });

  it('has a Error', () => {
    expect(wrapper.find(Error)).to.have.length(1);
  });
});
