import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import BookReview from 'components/BookReview';
import ReviewStar from 'components/ReviewStar';

describe("BookReview component", () => {
    let component;
    let actions;
    beforeEach(() => {

        const props = {
            review: {
                review_user_name: "usertest",
                book_title: "book test",
                review_star: 1,
                review_sentence: "review test"
            }
        }

        component = shallow(<BookReview {...props} />)
    })


    it("BookReview render components", () => {
        expect(component.find('.app-bookreview')).to.have.length(1);
    })

    it("BookReview render components", () => {
        expect(component.find('h5')).to.have.length(2);
    })

    it("BookReview render components", () => {
        expect(component.find(ReviewStar)).to.have.length(1);
    })

    it("BookReview render components", () => {
        expect(component.find('.app-bookreview')).to.have.length(1);
    })
    
    it("BookReview render components", () => {
        expect(component.find('label').text()).to.eql('review test');
    })

})
