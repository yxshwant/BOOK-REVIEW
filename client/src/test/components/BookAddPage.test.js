import React from 'react';
import BookAddPage from 'components/BookAddPage';
import Header from 'components/Header';
import Error from 'containers/Error';
import BookAdd from 'containers/BookAdd';
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('BookAddPage component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BookAddPage />)
  })

  it('has div', () => {
    expect(wrapper.find('.app-bookadd').exists()).to.equal(true);
  });

  it('has a Header', () => {
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('has a BookList', () => {
    expect(wrapper.find(BookAdd)).to.have.length(1);
  });

  it('has a Error', () => {
    expect(wrapper.find(Error)).to.have.length(1);
  });

});
