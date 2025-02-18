import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Button from 'components/Button';
import sinon from 'sinon';

describe("Button component", () => {
    let component;
    let actions;

    beforeEach(() => {

        actions = {
            onClick: sinon.spy(),
        }
        const props = {
            width: 100,
            height: 200,
            label: "test label"
        }

        component = shallow(<Button {...props} {...actions} />)
    })


    it("Button render components", () => {
        expect(component.find('button')).to.have.length(1);
    })

    it("Button render text", () => {
        expect(component.text()).equals('test label')
    })

    it("Button should call onClick button click", () => {
        let button = component.find('button')
        button.simulate('click')
        expect(actions.onClick.calledOnce).to.equal(true);
    })

})
