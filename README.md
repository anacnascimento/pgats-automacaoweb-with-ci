🚀 Web Automation with Cypress & GitHub Actions
Introduction
This project aims to implement a robust Web Automation repository using Cypress for end-to-end testing, seamlessly integrated with Continuous Integration (CI) through GitHub Actions.

🎯 Project Purpose
This initiative serves as a practical project for the "Continuous Integration and Automated Testing" discipline, under the guidance of Professor Samuel. It demonstrates how to set up an automated testing pipeline, ensuring code quality and rapid feedback on changes.

✨ Key Technologies Used
Cypress.io: A fast, easy, and reliable testing tool for anything that runs in a browser. Ideal for modern web applications.

GitHub Actions: Automates, customizes, and executes your software development workflows directly in your repository. Used here to run tests automatically on every push.

Node.js: JavaScript runtime environment used to run Cypress and manage project dependencies.

npm / Yarn: Package managers for Node.js, used to install and manage project dependencies.

Allure Reporter for Cypress: A flexible and powerful test reporting tool that generates clear, interactive, and comprehensive reports for test results.

📂 Repository Structure
.
├── .github/workflows/
│   └── main.yml        # GitHub Actions workflow for CI
├── allure-report/      # Generated Allure HTML reports
├── allure-results/     # Raw Allure test data
├── cypress/
│   ├── e2e/            # Your Cypress test files (.cy.js, .spec.js)
│   ├── fixtures/       # Test data files
│   └── support/        # Custom commands, utilities, and global hooks
├── node_modules/       # Project dependencies
├── cypress.config.js   # Cypress configuration file
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Exact dependency versions (npm)
├── yarn.lock           # Exact dependency versions (Yarn)
└── README.md           # This file
🚀 Getting Started
Follow these steps to set up and run the project locally.

Prerequisites
Make sure you have Node.js installed on your machine (includes npm). You can also use Yarn.

Installation
Clone the repository:

Bash

git clone https://github.com/anacnascimento/pgats-automacaoweb-with-ci.git
cd pgats-automacaoweb-with-ci
Install dependencies:
Using npm:

Bash

npm install
Or using Yarn:

Bash

yarn install
🧪 Running Tests
Locally
You can run Cypress tests in two modes:

Open the Cypress Test Runner (Interactive Mode):
This command opens the Cypress desktop application, allowing you to select and watch tests run interactively in a browser.

Bash

npx cypress open
Run Tests Headlessly (Command Line):
This command runs all Cypress tests in a headless browser (without opening a browser GUI). This is typically used in CI environments.

Bash

npx cypress run
(You might want to add a specific script in package.json for easier execution, e.g., "test": "cypress run")

Continuous Integration (CI)
This project uses GitHub Actions to automate the test execution.

Any push to the main branch (or other configured branches) will trigger the CI workflow defined in .github/workflows/main.yml.

The workflow will install dependencies, run Cypress tests headlessly, and generate Allure reports.

You can view the CI status and detailed logs directly on your GitHub repository under the "Actions" tab.

📊 Allure Test Reporting
This project is configured to generate detailed and interactive test reports using Allure.

Generate & View Reports Locally
After running your Cypress tests (especially in headless mode), Allure generates raw test results in the allure-results/ directory. To convert these into an interactive HTML report:

Generate the Allure Report:
(Ensure you have the Allure Commandline tool installed globally or via npm install -g allure-commandline if you get a command not found error.)

Bash

allure generate allure-results --clean -o allure-report
This command processes the raw results and saves the HTML report in the allure-report/ directory. The --clean flag ensures that the allure-report directory is cleaned before generating new reports.

Open the Allure Report in your browser:

Bash

allure open allure-report
This will launch the generated HTML report in your default web browser, providing a comprehensive overview of your test runs, including passed, failed, and skipped tests, along with execution times and steps.
