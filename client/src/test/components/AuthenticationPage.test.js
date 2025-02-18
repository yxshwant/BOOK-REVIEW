import React from 'react';
import AuthenticationPage from 'components/AuthenticationPage';
import Authentication from 'containers/Authentication';
import Error from 'containers/Error';
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Authentication component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AuthenticationPage />)
  })

  it('has div', () => {
    expect(wrapper.find('.app-authenticaion').exists()).to.equal(true);
  });

  it('has a Authentication', () => {
    expect(wrapper.find(Authentication)).to.have.length(1);
  });

  it('has a Error', () => {
    expect(wrapper.find(Error)).to.have.length(1);
  });

});
