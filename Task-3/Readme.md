# TASK 3: Frontend Development 
## Open Reads(Book finder web application)

## Introduction
This is a frontend web application built using Next.js(react)
It allows users to:
* Login securely
* View books
* Search books
* Bookmark books

The frontend connects with a Flask backend API to fetch dynamic data.

## Frontend Technical Stack
* Next.js (React Framework)
*  JavaScript
* CSS
* Fetch API

## Setup instructions

1)To Setup Next.js:
``` 
npx create-next-app@latest
 ```

2)To run the development server:
```
npm run dev
```

3)Using localhost access the website
```
http://localhost:3000
```
## Features Implemented

* In __login.jsx__ (login page),it is base page of website need credentials to login into home page and used JWT token stored in localStorage
* In __Home.jsx__ (Home page),Here fetching books from backend and displays actively using components
* In __search.jsx__ (search page) ,the search bar available in navbar ,we can search for results and using backend it fetches the search page
* In __Bookmark.jsx__(boomark page), we can check our bookmarks in this page


## Key Decisions
* Used component-based architecture
* Used Fetch API for simplicity
* Used localStorage for token storage

## Challenges Faced
* In css, Tailwind.css is not working in next.js, onl showing html structure of website. So I used css modules to implement it
* Understand the api integration
* handling jwt authentication integration
## Conclusion
Finally, In this task i learned Next.js setup,routing and components, usage of API in frontend, Authentication integration(user safety) and understand the frontend architecture

















