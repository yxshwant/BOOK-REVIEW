const express = require('express');
const dbMiddleware = require('../middlewares/dbMiddleware')
const validationMiddleware = require('../middlewares/validationMiddleware');
const validate = require('express-validation');
const router = express.Router();

module.exports = app => {
    app.post('/api/user/add', validate(validationMiddleware.addUser), dbMiddleware.addUser, (req, res) => {
        res.send(req.result);
    });

    app.get('/api/user/get', dbMiddleware.getUsers, (req, res) => {
        res.send(req.users);
    });
}

