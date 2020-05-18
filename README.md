# PoC Cypress && Webdriver-io

<!-- Blockquote -->
> This is a simple project of automated UI tests to compare [Cypress](https://www.cypress.io/) and [Webdriver IO](https://webdriver.io/)

APP used to create tests- [TodoMVC App](http://todomvc-app-for-testing.surge.sh/)

### Depedencies

* Cypress
* Webdriver IO

### Setup

```bash
  git clone https:https://github.com/fredmoreira/poc-cypress-webdriver-io.git
  
  npm install
```

### Run tests

```bash
  npm run cypress - open cypress console to run tests manually.

  npm test - run cypress tests in headless mode using electron browser

  npm run wdio - run webdriver io tests using chrome browser
```

### Configurations

```bash
The file cypress.json you can to configure somethings like disable recording 
and re-run automatically your tests when you update test files.

The file wdio.config you can to congigure several things like browsers capabilities,
 log levels, global timeout, and etc.
```

<!-- Task List -->
### Tasks

* [x] ~~Create cypress tests~~
* [x] ~~Create webdriver io tests~~
* [ ] Create page object model with cypress
* [ ] Create page object model with webdriver io
* [ ] Create taks to run tests in paralel mode
* [ ] Create guide to run tests in pipeline
