DROP DATABASE IF EXISTS bookdatabase;
CREATE DATABASE bookdatabase;

\c bookdatabase;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR,
  CONSTRAINT user_name_unique UNIQUE (user_name)
);


CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  book_isbn VARCHAR,
  book_title VARCHAR,
  bookowner_id integer NOT NULL,
  CONSTRAINT fk_bookowner_id FOREIGN KEY (bookowner_id) REFERENCES users(user_id),
  CONSTRAINT book_isbn_unique UNIQUE (book_isbn)
);

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  review_sentence VARCHAR,
  review_star integer,
  reviewowner_id integer NOT NULL,
  reviewbook_id integer NOT NULL,
  CONSTRAINT fk_reviewowner_id FOREIGN KEY (reviewowner_id) REFERENCES users(user_id),
  CONSTRAINT fk_reviewbook_id FOREIGN KEY (reviewbook_id) REFERENCES books(book_id)
);


INSERT INTO users (user_name) VALUES ('user1');
INSERT INTO users (user_name) VALUES ( 'user2');
INSERT INTO users (user_name) VALUES ('user3');
INSERT INTO users (user_name) VALUES ('user4');

INSERT INTO books (book_isbn, book_title, bookowner_id) VALUES ( '978-3-16-148410-0', 'book 1', 1 );
INSERT INTO books (book_isbn, book_title, bookowner_id) VALUES ( '978-3-16-148410-1', 'book 2', 1 );
INSERT INTO books (book_isbn, book_title, bookowner_id) VALUES ( '978-3-16-148410-2', 'book 3', 2 );
INSERT INTO books (book_isbn, book_title, bookowner_id) VALUES ( '978-3-16-148410-3', 'book 4', 3 );
INSERT INTO books (book_isbn, book_title, bookowner_id) VALUES ( '978-3-16-148410-4', 'book 5', 3 );



INSERT INTO reviews (review_sentence, review_star, reviewowner_id, reviewbook_id)  VALUES ( 'good book', 2, 2, 1 );
INSERT INTO reviews (review_sentence, review_star, reviewowner_id, reviewbook_id)  VALUES ( 'very good book', 5, 4, 1 );
INSERT INTO reviews (review_sentence, review_star, reviewowner_id, reviewbook_id)  VALUES ( 'not good book', 1, 3, 1 );

INSERT INTO reviews (review_sentence, review_star, reviewowner_id, reviewbook_id)  VALUES ( 'very very good book', 2, 1, 2 );
INSERT INTO reviews (review_sentence, review_star, reviewowner_id, reviewbook_id)  VALUES ( 'bad book', 5, 3, 2 );
INSERT INTO reviews (review_sentence, review_star, reviewowner_id, reviewbook_id)  VALUES ( 'very bad book', 1, 4, 2 );

INSERT INTO reviews (review_sentence, review_star, reviewowner_id, reviewbook_id)  VALUES ( 'simple book', 2, 1, 3 );
INSERT INTO reviews (review_sentence, review_star, reviewowner_id, reviewbook_id)  VALUES ( 'amazing book', 5, 2, 3 );
INSERT INTO reviews (review_sentence, review_star, reviewowner_id, reviewbook_id)  VALUES ( 'complicated book', 3, 4, 3 );

INSERT INTO reviews (review_sentence, review_star, reviewowner_id, reviewbook_id)  VALUES ( 'disturbing book', 2, 1, 5 );

SELECT b1.book_id, b1.book_isbn, b1.book_title, u1.user_id, u1.user_name,
r1.review_sentence, r1.review_star, u2.user_name as review_user_name, u2.user_id as review_user_id
FROM books b1
INNER JOIN reviews r1 ON b1.book_id = r1.reviewbook_id 
INNER JOIN users u1 ON u1.user_id = b1.bookowner_id 
INNER JOIN users u2 ON u2.user_id = r1.reviewowner_id ;

SELECT * FROM users;

 