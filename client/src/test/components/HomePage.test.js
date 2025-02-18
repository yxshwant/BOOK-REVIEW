import React from 'react';
import HomePage from 'components/HomePage';
import Header from 'components/Header';
import Error from 'containers/Error';
import BookList from 'containers/BookList';
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('HomePage component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />)
  })

  it('has div', () => {
    expect(wrapper.find('.app-home').exists()).to.equal(true);
  });

  it('has a Header', () => {
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('has a BookList', () => {
    expect(wrapper.find(BookList)).to.have.length(1);
  });

  it('has a Error', () => {
    expect(wrapper.find(Error)).to.have.length(1);
  });

});
