
export const manageReviews = (books, userid) => {
    var reviews = [];
    books.forEach(book => {
        book.reviews.forEach(review => {
            if (review.review_user_id === userid) {
                reviews.push({
                    review_id: review.review_id,
                    review_sentence: review.review_sentence,
                    review_star: review.review_star,
                    book_title: book.book_title,
                    book_isbn: book.book_isbn,
                    user_name: book.book_user_name
                });
            }
        })
    })
    return reviews;
}

export const manageBooks = (books) => {
    let bookList = []
    books.forEach(item => {
        var book = bookList.find((ele) => {
            return ele.book_id === item.book_id;
        });

        if (!book) {
            book = {
                book_id: item.book_id,
                book_isbn: item.book_isbn,
                book_title: item.book_title,
                user_id: item.user_id,
                user_name: item.user_name,
                reviews: []
            }

            if (item.review_id) {
                book.reviews.push({
                    review_id: item.review_id,
                    review_sentence: item.review_sentence,
                    review_star: item.review_star,
                    review_user_name: item.review_user_name,
                    review_user_id: item.review_user_id,
                })
            }

            bookList.push(book)
        }
        else {
            if (item.review_id) {
                book.reviews.push({
                    review_id: item.review_id,
                    review_sentence: item.review_sentence,
                    review_star: item.review_star,
                    review_user_name: item.review_user_name,
                    review_user_id: item.review_user_id,
                })
            }
        }


    })

    return bookList;
}


