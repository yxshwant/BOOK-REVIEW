const express = require('express');
const dbMiddleware = require('../middlewares/dbMiddleware')
const validationMiddleware = require('../middlewares/validationMiddleware');
const validate = require('express-validation');
const router = express.Router();

module.exports = app => {
    app.post('/api/review/add', validate(validationMiddleware.addReview), dbMiddleware.addReview, (req, res) => {
        res.send(req.result);
    });
}

