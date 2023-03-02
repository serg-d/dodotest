Tests are in the /latest/tests folder with *.spec.js extension
Run the terminal from that folder to run the tests

Prerequisites
	•	Node.js installed on your machine
	•	Playwright installed on your machine

Installation
	1	Clone the repository to your local machine.

git clone https://github.com/[user-name]/[repository-name].git

	2	Navigate to the cloned repository.

cd [repository-name]

	3	Install the required dependencies.

npm install

To run the tests, use the following commands:
Running all tests:
	•   npx playwright test

	•	Running a single test file
    npx playwright test landing-page.spec.ts
	
	•	Run a set of test files
    npx playwright test tests/todo-page/ tests/landing-page/
	•
	•	Run files that have landing or login in the file name
    npx playwright test landing login
	
	•	Run the test with the title
    npx playwright test -g "add a todo item"
	
	•	Running tests in headed mode
    npx playwright test landing-page.spec.ts --headed
	
	•	Running tests on a specific project
    npx playwright test landing-page.ts --project=chromium


This commands will run the tests defined in the code and log the results in the terminal. If the tests pass, you will see the message "All tests passed." If any of the tests fail, you will see the error message and a detailed explanation of what went wrong.
Conclusion
By following the steps in the README.md file, you should be able to run the tests for the project and verify that it works as expected. If you encounter any issues or errors, you can consult the README.md file or reach out to the project maintainers for help.
