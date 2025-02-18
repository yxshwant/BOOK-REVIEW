import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Header from 'components/Header';
import { Link } from 'react-router-dom';

describe("Header component", () => {
    let component;

    beforeEach(() => {
        component = shallow(<Header />)
    })

    it("Header render components", () => {
        expect(component.find('.app-header').exists()).to.eql(true)
    })

    it("Header render text", () => {
        expect(component.find(Link)).to.have.length(3);
    })
})
