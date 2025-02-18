const express = require('express');
const dbMiddleware = require('../middlewares/dbMiddleware')
const validationMiddleware = require('../middlewares/validationMiddleware');
const validate = require('express-validation');
const router = express.Router();

module.exports = app => {
    app.get('/api/book/get', dbMiddleware.getBooks, (req, res) => {
        res.send(req.books);
    }); 
    
    app.post('/api/book/add', validate(validationMiddleware.addBook), dbMiddleware.addBook, (req, res) => {
        console.log(req.books);
        res.send(req.result);
    });   
    
}
