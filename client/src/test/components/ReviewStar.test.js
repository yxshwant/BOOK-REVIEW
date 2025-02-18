import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ReviewStar from 'components/ReviewStar';
import sinon from 'sinon';

describe("ReviewStar component", () => {
    let component;
    let actions;
    let starCount = 2;
    beforeEach(() => {

        actions = {
            onClick : sinon.spy()
        }
        const props = {
            star: starCount,
        }

        component = shallow(<ReviewStar {...props} {...actions} />)
    })



    it("ReviewStar render components", () => {
        expect(component.find('.app-reviewstar').exists()).to.eql(true);
    })

    it("ReviewStar render components", () => {
        expect(component.find('.fa-star')).to.have.length(5);
    })

    it("ReviewStar render components", () => {
        expect(component.find('.checked')).to.have.length(2);
    })

    it("ReviewStar should call onChange button click", () => {
        let button = component.find('#reviewstar' + starCount )
        button.simulate('click')
        expect(actions.onClick.calledOnce).to.equal(true);
    })

   
})
