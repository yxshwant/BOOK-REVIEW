let chai = require('chai');
let chaiHttp = require('chai-http');
let httpStatus = require('http-status');

let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



describe('/POST any', () => {
    it('it should fail on not found routes  because of not found route', (done) => {
        chai.request(server)
            .post('/api/xxxx')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});


describe('/GET get books', () => {
    it('it should successfully get books', (done) => {
        chai.request(server)
            .get('/api/book/get')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('/GET get users', () => {
    it('it should successfully get users', (done) => {
        chai.request(server)
            .get('/api/user/get')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('/POST add book', () => {
    it('it should fail on adding book because of validation', (done) => {
        chai.request(server)
            .post('/api/book/add')
            .send({
                "book_title": "111",
                "book_isbn": "1111",
                "user_id": "1"
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql("Validation error");
                res.body.should.have.property('detail').eql("Valid 13 digit or 10 digit book ISBN required");
                done();
            });
    });

    it('it should successfully add book', (done) => {
        chai.request(server)
            .post('/api/book/add')
            .send({
                "book_title": "book 333",
                "book_isbn": "‎978-3-" + getRandom(11, 99) +"-" + getRandom(111111, 999999) +"-9",
                "user_id": "1"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('book_id');
                done();
            });
    });


    it('it should fail on adding book because of same isbn', (done) => {
        chai.request(server)
            .post('/api/book/add')
            .send({
                "book_title": "book 333",
                "book_isbn": "‎978-3-16-148410-2",
                "user_id": "1"
            })
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.have.property('error').eql("Error occured, could not add book");
                res.body.should.have.property('detail').eql("(‎978-3-16-148410-2) already exists.");
                done();
            });
    });
});

describe('/POST add user', () => {
    it('it should fail on adding user because of validation', (done) => {
        chai.request(server)
            .post('/api/user/add')
            .send({
                "user_name": ".**"
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql("Validation error");
                res.body.should.have.property('detail').eql("User name can only contain letters or numbers");
                done();
            });
    });

    it('it should fail on adding user because of same user', (done) => {
        chai.request(server)
            .post('/api/user/add')
            .send({
                "user_name": "user1",
            })
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.have.property('error').eql("Error occured, could not add user");
                res.body.should.have.property('detail').eql("(user1) already exists.");
                done();
            });
    });

    it('it should successfully add user', (done) => {
        chai.request(server)
            .post('/api/user/add')
            .send({
                "user_name": "user" + getRandom(0, 10000),
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('user_id');
                done();
            });
    });

});

describe('/POST add review', () => {
    it('it should fail on adding review because of validation', (done) => {
        chai.request(server)
            .post('/api/review/add')
            .send({
                "review_star": 2,
                "reviewowner_id": 1,
                "reviewbook_id": 1,
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error').eql("Validation error");
                res.body.should.have.property('detail').eql("A valid review sentence is required");
                done();
            });
    });

    it('it should successfully add review', (done) => {
        chai.request(server)
            .post('/api/review/add')
            .send({
                "review_sentence": "asdsds",
                "review_star": 2,
                "reviewowner_id": 1,
                "reviewbook_id": 1,
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('review_id');
                done();
            });
    });


});
