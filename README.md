# User API Test Automation with Playwright

[![Playwright](https://img.shields.io/badge/Playwright-JS-green?logo=playwright&logoColor=white)](https://playwright.dev/)
![Node.js version](https://img.shields.io/badge/Node.js->=18-blue)
[![Build Status](https://github.com/anandavii/employeeMgmtAutoamtion/actions/workflows/playwright.yml/badge.svg)](https://github.com/anandavii/employeeMgmtAutoamtion/actions/workflows/playwright.yml)
![Last commit](https://img.shields.io/github/last-commit/anandavii/employeeMgmtAutoamtion)

## Overview

This is a Playwright-based API Test Automation Framework built using JavaScript. It is designed to validate REST API endpoints from the Reqres.in API, covering critical CRUD operations and authentication scenarios. The project aims to provide a strong foundation for learning API test automation using Playwright's request context.

### Goals of this Framework

- Automate key API workflows using Playwright’s request context
- Validate request-response status codes and response payloads
- Establish a base structure for scalable API test development
- Integrate basic positive and negative test validations

## What’s Implemented So Far

- **GET Requests**: Validates user detail retrieval with status and field assertions.
- **POST Requests**:
  - Create new user
  - Successful login
  - Failed login (missing password)
  - Registration attempt (under fix)

## Usage

1. Install dependencies  
   `npm install`

2. Run all tests  
   `npx playwright test`

3. View the HTML report  
   `npx playwright show-report`

## Project Details

- Framework: Playwright (JavaScript)
- Test Type: API Testing (using request fixture)
- Base API: https://reqres.in
- Language: JavaScript (CommonJS style)
- Test Runner: Playwright Test

<!-- ## GitHub Actions CI

This project uses GitHub Actions for automated test execution.

- The GitHub Actions workflow is configured to run on each code push and pull request.
- Supports manual triggering via GitHub’s Actions tab.
- Ensures continuous feedback loop on changes. -->

## Next Steps

- Fix registration endpoint issue and validate user creation.
- Add test cases for PUT and DELETE operations.
- Create a reusable request utility function for cleaner test code.
- Integrate `.env` support for API base URLs and tokens.
- Add Allure or HTML reporting for enhanced test visibility.
- Expand data-driven testing using JSON files or fixtures.

