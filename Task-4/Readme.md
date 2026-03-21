# Task-4 Backend(Flask)

## Introduction
In this Task, I built a backend using Flask that provides RESTful APIs for authentication, fetching books, searching books, and managing bookmarks.

The backend works with Google Books API to provide active book data.

## Backend technical stack
* Python
* Flask
* Flask-JWT-Extended
* Flask-CORS
* Requests

## Setup instructions
1)Install dependencies:
```
pip install flask flask-cors flask-jwt-extended requests
```
2) run sever
 ```
 python3 app.py
 ```
3) Server runs with:
```
http://127.0.0.1:5000
```

## Features Implemented
* In __Authentication__(/login),This is the login API of the backend. It checks user credentials (username and password).If credentials are correct, it generates a JWT token and sends it to the frontend for authentication.
* In __Books__(for home page),This route fetches books from the Google Books API and sends filtered data (title, author, thumbnail, preview) to the frontend.
* In __search__(for search page),This route takes the search query from the frontend and fetches matching results using the Google Books API, then returns them actively.
* In __bookmark__(for bookmark page),This is a protected route (JWT required).Users can add books to bookmarks, and the backend stores it securely.
* In __Flask_Core__,Flask-CORS is used to allow communication between both frontend (Next.js) and backend (Flask).

## key decisions
* Used JWT for secure authentication
* Used Google Books API
* Used in-memory storage for bookmarks
 

 ## Conclusion
 Finally, 
 * In this task i learned Flask(backend development)
 * API working,
 *  Authentication 











