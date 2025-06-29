# user-api-tests-playwright

This is a beginner-friendly API testing framework built using Playwright and JavaScript, designed to test REST APIs from Reqres.in. It demonstrates API automation for common HTTP methods like GET and POST, with proper status code and data validation using Playwright’s request context.

## Tech Stack

- Playwright for API testing
- JavaScript (ES6)
- Node.js
- Playwright Test Runner
- HTML Reporter (built-in)

## Folder Structure

user-api-tests-playwright/
├── tests/
│   ├── get_api_requests/
│   │   └── get_api_req.spec.js
│   └── post_api_requests/
│       └── post_api_requests.spec.js
├── playwright.config.js
├── package.json
└── README.md

## What is Covered

This project tests various API endpoints using Playwright's request fixture, including:

GET Requests
- Get user details with validations for id, name, email, and avatar

POST Requests
- Create new user
- Successful login
- Failed login (negative test)
- Successful registration

## How to Install and Run

1. Clone this repository

   git clone https://github.com/anandavii/user-api-tests-playwright.git
   cd user-api-tests-playwright

2. Install dependencies

   npm install

3. Run all tests

   npx playwright test

4. View HTML report

   npx playwright show-report

## Future Improvements

- Add PUT and DELETE test cases
- Add reusable request utility functions
- Integrate data-driven testing from JSON files
- Add environment config using dotenv
- Setup GitHub Actions for continuous integration

