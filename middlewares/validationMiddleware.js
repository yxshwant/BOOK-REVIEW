const Joi = require('joi');

module.exports = {
    addUser: {
        body: {
            user_name: Joi.string().regex(/^[a-zA-Z0-9]+$/).required()
                .label('User name can only contain letters or numbers'),
        }
    },
    addBook: {
        body: {
            book_title: Joi.string().required().label('A valid book title is required'),
            book_isbn: Joi.string().regex(/\x20*(?=.{17}$)97(?:8|9)([ -])\d{1,5}\1\d{1,7}\1\d{1,6}\1\d$/).required()
                .label('Valid 13 digit or 10 digit book ISBN required'),
            user_id: Joi.number().required(),
        }
    },
    addReview: {
        body: {
            review_sentence: Joi.string().required().label('A valid review sentence is required'),
            review_star: Joi.number(),
            reviewowner_id: Joi.number().required().label('A valid review owner id is required'),
            reviewbook_id: Joi.number().required().label('A valid review book id is required'),
        }
    }
};
