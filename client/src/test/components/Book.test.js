import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Book from 'components/Book';
import BookReview from 'components/BookReview';
import BookAddReview from 'containers/BookAddReview';


describe("Book component", () => {
    let component;
    let actions;
    beforeEach(() => {

        const props = {
            item: {
                book_title: "title test",
                book_isbn: "isbn test",
                user_name: "user test",
                book_id:  1,
                reviews: [{
                    review_id : 1,
                    review: {}
                }],
                noNewReview: false
            }
        }

        component = shallow(<Book {...props} />)
    })


    it("Book render components", () => {
        expect(component.find('.list-group-item')).to.exist;
    })

    it("Book render components", () => {
        expect(component.find('li')).to.exist;
    })

    it("Book render components", () => {
        expect(component.find('div')).to.have.length(2);
    })

    it("Book render components", () => {
        expect(component.find(BookReview)).to.have.length(1);
    })

    it("Book render components", () => {
        expect(component.find(BookAddReview)).to.have.length(1);
    })

    it("Book render components", () => {
        expect(component.find('.app-card-isbn').text()).to.eql('BOOK ISBN: isbn test')
    })

    it("Book render components", () => {
        expect(component.find('.app-card-title').text()).to.eql('title test')
    })


    it("Book render components", () => {
        expect(component.find('.app-card-user').text()).to.eql('BOOK Owner Username: user test')
    })

    

})
