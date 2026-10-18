// Generated from: tests/e2e/features/demo.feature
import { test } from "playwright-bdd";

test.describe('Demo', () => {

  test('Login with Valid Credential', async ({ Given, When, Then, And }) => { 
    await Given('login into OrangeHM'); 
    await When('fill the valid username "Admin"'); 
    await And('fill the valid password "admin123"'); 
    await When('the user clicks on the login button'); 
    await Then('the user is logged into OrangeHM with valid session'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('after', {  }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/e2e/features/demo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given login into OrangeHM","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When fill the valid username \"Admin\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Admin\"","children":[{"start":25,"value":"Admin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And fill the valid password \"admin123\"","stepMatchArguments":[{"group":{"start":24,"value":"\"admin123\"","children":[{"start":25,"value":"admin123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the user is logged into OrangeHM with valid session","stepMatchArguments":[]}]},
]; // bdd-data-end