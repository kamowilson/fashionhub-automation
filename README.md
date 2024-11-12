## About Project
This project is a technical challenge for a web app. The goal is to create an automation test suite using Playwright framework. The website is hosted at different environments, including local, staging, and production.
The test suite covers the following requirements:

- Cross-Browser and Cross-Environment Testing: The tests to runs on different browsers [Chromium, Firefox, Webkit] and against different environments, including local, staging, and production.
- Handling Environment Options: The environment options (e.g., base URL, environment) can be able to be passed either from the command line or from a configuration file. The system automatically detects the preferred option and uses the other one if the primary option is not present.
- Structured and Maintainable Code: The code should be well-structured to support future maintenance, evolution, and scalability [POM approach]. 

## TEST CASES: The following test cases are implemented:

- Test Case 1: Verify that there are no console errors when visiting the production website.
- Test Case 2: Verify that all links on the production website return the expected status codes (200 or 30x).
- Test Case 3: Verify that a user can log in to the website using the provided credentials.
- Test Case 4: Fetch the number of open pull requests for a given product (e.g., Appwrite) and output the results in CSV format.

## Prerequisites
1. Node.js (v16 or higher)
2. npm or yarn
3. Docker (for local environment)

### Installation
1. Clone repository
1. npm init -y
2. npm install -D @playwright/test typescript
3. npx playwright install


### Running Tests
- To run all tests
npx playwright test

# Run tests for specific environment
you can specify the environment to run tests from the .env file
eg: CURRENT_ENV='local'

# Run specific test file
npx playwright test login.spec.ts

# Run in specific browser
npx playwright test --project=Chromium

