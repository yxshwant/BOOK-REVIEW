
var db = require('../services/postgres');


const internalServerErrorStatusText = "Interval Server Error"
const notFoundStatusText = "Not Found"

function getBooks(req, res, next) {

    var sql = `SELECT b1.book_id, b1.book_isbn, b1.book_title, u1.user_id, u1.user_name,
    r1.review_sentence, r1.review_star,r1.review_id, u2.user_name as review_user_name, u2.user_id as review_user_id
    FROM books b1
    INNER JOIN users u1 ON u1.user_id = b1.bookowner_id 
    LEFT OUTER  JOIN reviews r1 ON b1.book_id = r1.reviewbook_id 
    LEFT OUTER  JOIN users u2 ON u2.user_id = r1.reviewowner_id;`

    db.any(sql)
        .then((result) => {
            if (result.length === 0) {
                res.statusCode = 404;
                res.json({ error: 'No book found' });
            }
            else {
                req.books = result;
            }

            next();
        })
        .catch((err) => {
            res.statusCode = 500;
            res.json({ error: 'Error occured, could not retrieve books', detail: err.detail });
            next();
        });
}

function getUsers(req, res, next) {

    var sql = 'SELECT * FROM users;';

    db.any(sql)
        .then((result) => {
            if (result.length === 0) {
                res.statusCode = 404;
                res.json({ error: 'No user found' })
            }
            else {
                req.users = result;
            }

            next();
        })
        .catch((err) => {
            res.statusCode = 500;
            res.json({ error: 'Error occured, could not retrieve books', detail: err.detail });
            next();
        });
}


function addBook(req, res, next) {

    var sql = `INSERT INTO books (book_isbn, book_title, bookowner_id) VALUES ('${req.body.book_isbn}', '${req.body.book_title}', ${req.body.user_id}) RETURNING book_id;`;
    db.any(sql)
        .then((result) => {
            req.result = result[0];
            next();
        })
        .catch((err) => {
            res.statusCode = 500;
            if (err.detail.indexOf("already exists") !== -1) {
                err.detail = err.detail.split("=")[1];
            }

            res.json({ error: 'Error occured, could not add book', detail: err.detail });
            next();
        });
}

function addUser(req, res, next) {

    var sql = `INSERT INTO users (user_name) VALUES ('${req.body.user_name}')  RETURNING user_id, user_name  ;`;

    db.any(sql)
        .then((result) => {
            req.result = result[0];
            next();
        })
        .catch((err) => {
            res.statusCode = 500;
            if (err.detail.indexOf("already exists") !== -1) {
                err.detail = err.detail.split("=")[1];
            }
            res.json({ error: 'Error occured, could not add user', detail: err.detail });
            next();
        });
}


function addReview(req, res, next) {

    let sqlQuery = `INSERT INTO 
                        reviews (review_sentence, review_star, reviewowner_id, reviewbook_id)  
                        VALUES ( 
                        '${req.body.review_sentence}',
                        ${req.body.review_star},
                        ${req.body.reviewowner_id}, 
                        ${req.body.reviewbook_id} )
                        RETURNING review_id;`

    db.any(sqlQuery)
        .then((result) => {
            req.result = result[0];
            next();
        })
        .catch((err) => {
            res.statusCode = 500;
            res.json({ error: 'Error occured, could not add review', detail: err.detail });
            next();
        });

}

function getReview(req, res, next) {

    var sql = `SELECT * FROM reviews 
        INNER JOIN books ON books.book_id = reviews.reviewbook_id 
        INNER JOIN users ON users.user_id = reviews.reviewowner_id
        WHERE reviewbook_id = ${req.params.bookid}`;


    db.any(sql)
        .then((result) => {
            if (result.length === 0) {
                res.statusCode = 404;
                res.json({ error: 'No review found' });
            }
            else {
                req.books = result;
            }

            next();
        })
        .catch((err) => {
            res.statusCode = 500;
            res.json({ error: 'Error occured, could not retrieve reviews', detail: err.detail });
        });
}


module.exports = {
    getBooks,
    addUser,
    getUsers,
    addBook,
    addReview
}
