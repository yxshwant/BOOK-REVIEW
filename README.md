 ## Book Review Web Application

A react and express web  project using PostgresSQL.

#   Getting Started


#   Installing:

Install the required packages with that command at project directory:

    npm run install-all 

Change db configuration at config/index.js for you local information. To create database run that command at project directory if you have already installed postgres. If not please install postgres first.

    npm run create-db

#   Start:

To start and debug project run that that command at project directory:

     npm run dev 

Builds project and runs api in development mode. Open http://localhost:3006 to view it in the browser. 

#   Test:

There are several test cases for components and reducers. To run server test cases, run that command at project directory:

    npm test

To run client test cases, run that command at project directory:

    cd client
    npm test

#   Deployment:

To prepare a deployment of project, run that command at project directory:

     npm run build

#   Code Overview

#   Dependencies:

- expressjs - The server for handling and routing HTTP requests
- express-validation - to validate post requests
- joi - to write validation rules 
- pg, pg-promise, bluebird-  For modeling and mapping postgres data 
- body-parser - to parse json requests
- babel * - to use es6 in node.js 
- mocha, chai, and sinon: packages that are used to write test cases                      

#   Features:

- Auth users to make some logic
- Add new book
- List all boooks
- Add reviews to books
- See own books and reviews

#   Application Structure:

- index.js -  this file defines our express server and  requires the routes we'll be using in the application. The entry point to our - application.
- config/ -  configuration variables for our server are contained in this folder
- routes/ -  the route definitions for our API are contained in this folder
- middleware/ - Middlewares that handle requests with data and validation rules for our post request are contained in this folder
- data/ -  the schema definitions for our postgres models are contained in this folder
- client/ - web client with reactjs framework is contained in this folder

#   API


## Get users  [GET] [/api/user/get]

+ Response 200 (application/json)
        
            [
                {
                    "user_id": 1,
                    "user_name": "user1"
                },
                {
                    "user_id": 2,
                    "user_name": "user2"
                }
                ...
            ]

## Add user  [POST] [/api/user/add]

+ Request (application/json)

        {
            "user_name" : "user"
        }

+ Response 200 (application/json)
        
            {
                "user_id": 1
            }


## Get books  [GET] [/api/book/get]

+ Response 200 (application/json)

        [
            {
                "book_id": 1,
                "book_isbn": "978-3-16-148410-0",
                "book_title": "book 1",
                "user_id": 1,
                "user_name": "user1",
                "review_sentence": "good book",
                "review_star": 2,
                "review_id": 1,
                "review_user_name": "user2",
                "review_user_id": 2
            }
            ..
        ]


## Add book  [POST] [/api/book/add]

+ Request (application/json)

        {
            "book_title": "aaa",
            "book_isbn": "978-3-16-148510-5",
            "user_id": "1"
        }

+ Response 200 (application/json)

        {
            "book_id": 18
        }


## Add book  [POST] [/api/book/add]

+ Request (application/json)

        {     
            "review_sentence": "33",
            "review_star": 2,
            "reviewowner_id": 1,
            "reviewbook_id": 1
        }

+ Response 200 (application/json)

        {
            "review_id": 18
        }

## Error Messages

+ Response 400 (application/json)
        
            {
                "error": "Validation error",
                "detail": "Valid book isbn required"
            }

+ Response 500 (application/json)
        
            {
                "error": "Error occured, could not add book",
                "detail": "(‎978-3-16-148410-2) already exists"
            }

+ Response 404 Bad Request
