# User API Test Automation with Playwright

[![Playwright](https://img.shields.io/badge/Playwright-JS-green?logo=playwright&logoColor=white)](https://playwright.dev/)
![Node.js version](https://img.shields.io/badge/Node.js->=18-blue)
[![Build Status](https://github.com/anandavii/user-api-tests-playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/anandavii/user-api-tests-playwright/actions/workflows/playwright.yml)
![Last commit](https://img.shields.io/github/last-commit/anandavii/user-api-tests-playwright)

## Overview

This is a Playwright-based API Test Automation Framework built using JavaScript. It is designed to validate REST API endpoints from the Reqres.in API, covering full CRUD operations and authentication workflows. The project demonstrates how to perform API testing using Playwright's request context and is suitable for both learning and showcasing in portfolios.

### Goals of this Framework

- Automate key API workflows using Playwright’s request fixture
- Validate HTTP methods: GET, POST, PUT, DELETE
- Cover positive and negative test validations
- Ensure readable, reusable and scalable test code
- Prepare a CI-ready, beginner-friendly automation project

## What’s Implemented So Far

- **GET Requests**  
  Validates user detail retrieval with status and field-level checks

- **POST Requests**  
  - Create new user  
  - Successful login  
  - Failed login (missing password)  
  - Successful registration

- **PUT Requests**  
  - Update user name and job, validate response and timestamp

- **DELETE Requests**  
  - Delete user and assert status code 204 (No Content)

## Usage

1. Install dependencies  
   `npm install`

2. Run all tests  
   `npx playwright test`

3. View the HTML report  
   `npx playwright show-report`

## Project Details

- Framework: Playwright (JavaScript)
- Test Type: API Testing (using request context)
- Base API: https://reqres.in
- Language: JavaScript (CommonJS)
- Runner: Playwright Test
- Reporting: Built-in HTML Reporter

## Next Steps

- Improve error handling and add edge case scenarios
- Introduce reusable API utility functions for cleaner code
- Add `.env` support for managing base URLs and tokens
- Integrate GitHub Actions for CI-based test execution
- Explore Allure Reporting for advanced test reports
- Add dynamic data validation and schema checks
- Create pre-test and post-test hooks using Playwright fixtures

