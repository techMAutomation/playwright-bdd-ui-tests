**playwright-bdd-ui-tests**

-----

Welcome to the Playwright BDD framework! This project helps you understand and execute tests then generates reports using Allure.

### Getting Started

1. Connect to [GitHub](https://github.com/techMAutomation)
2. Open your terminal
3. Clone the repository
    ```bash
    git clone https://github.com/techMAutomation/playwright-bdd-ui-tests.git
    ```
4. Install dependencies:
    ```bash
    npm install 
    ```

### Run Tests

**Run the tests locally**
  Use the following command to run all tests locally:
  ```bash
  npm run e2e:tests:headed
  ```

**Run specific tests using Custom tags**
  Run a subset of tests filtered by custom tags using the command below:
  ```bash
  npm run e2e:smoke:tests
  ```  

### Allure Report

**Generate Allure Report**
  Use the following command to generate the allure report:
  ```bash
  npm run generate:allure:report
  ```
