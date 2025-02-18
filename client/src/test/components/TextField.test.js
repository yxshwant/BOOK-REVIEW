import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TextField from 'components/TextField';
import sinon from 'sinon';

describe("TextField component", () => {
    let component;
    let actions;

    beforeEach(() => {

        actions = {
            onChange : sinon.spy()
        }
        const props = {
            width: 100,
            height: 200,
            value: "test label",
            placeholder: "placeholder",
        }

        component = shallow(<TextField {...props} {...actions} />)
    })


    it("TextField render components", () => {
        expect(component.find('label').exists()).to.eql(true);
        
    })

    it("TextField render components", () => {
        expect(component.find('input').exists()).to.eql(true);
    })

    it("TextField has text", () => {
        expect(component.find('input').get(0).props.value).to.equal('test label')
    })


    it("TextField should call onChange button click", () => {
        let button = component.find('input')
        button.simulate('change')
        expect(actions.onChange.calledOnce).to.equal(true);
    })

   
})
