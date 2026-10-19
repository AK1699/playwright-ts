// Generated from: tests/e2e/features/demo.feature
import { test } from "playwright-bdd";

test.describe('Demo', () => {

  test.describe('Login with valid "<username>" & "<password>"', () => {

    test('Login with valid "standard_user" & "secret_sauce"', async ({ Given, When, Then, And }) => { 
      await Given('login into saucedemo'); 
      await Then('fill the valid username "standard_user"'); 
      await And('fill the valid password "secret_sauce"'); 
      await When('the user clicks on the login button'); 
      await Then('the user is logged into saucedemo with valid session'); 
    });

    test('Login with valid "problem_user" & "secret_sauce"', async ({ Given, When, Then, And }) => { 
      await Given('login into saucedemo'); 
      await Then('fill the valid username "problem_user"'); 
      await And('fill the valid password "secret_sauce"'); 
      await When('the user clicks on the login button'); 
      await Then('the user is logged into saucedemo with valid session'); 
    });

    test('Login with valid "error_user" & "secret_sauce"', async ({ Given, When, Then, And }) => { 
      await Given('login into saucedemo'); 
      await Then('fill the valid username "error_user"'); 
      await And('fill the valid password "secret_sauce"'); 
      await When('the user clicks on the login button'); 
      await Then('the user is logged into saucedemo with valid session'); 
    });

    test('Login with valid "visual_user" & "secret_sauce"', async ({ Given, When, Then, And }) => { 
      await Given('login into saucedemo'); 
      await Then('fill the valid username "visual_user"'); 
      await And('fill the valid password "secret_sauce"'); 
      await When('the user clicks on the login button'); 
      await Then('the user is logged into saucedemo with valid session'); 
    });

  });

  test.describe('Login with In-valid "<username>" & "<password>"', () => {

    test('Login with In-valid "locked_out_user" & "secret_sauce"', async ({ Given, When, Then, And }) => { 
      await Given('login into saucedemo'); 
      await Then('fill the in-valid username "locked_out_user"'); 
      await And('fill the in-valid password "secret_sauce"'); 
      await When('the user clicks on the login button'); 
      await Then('the system should throw the error message as "Username and password do not match any user in this service"'); 
    });

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
  {"pwTestLine":8,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given login into saucedemo","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then fill the valid username \"standard_user\"","stepMatchArguments":[{"group":{"start":24,"value":"\"standard_user\"","children":[{"start":25,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And fill the valid password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":24,"value":"\"secret_sauce\"","children":[{"start":25,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the user is logged into saucedemo with valid session","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given login into saucedemo","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then fill the valid username \"problem_user\"","stepMatchArguments":[{"group":{"start":24,"value":"\"problem_user\"","children":[{"start":25,"value":"problem_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And fill the valid password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":24,"value":"\"secret_sauce\"","children":[{"start":25,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the user is logged into saucedemo with valid session","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given login into saucedemo","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then fill the valid username \"error_user\"","stepMatchArguments":[{"group":{"start":24,"value":"\"error_user\"","children":[{"start":25,"value":"error_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And fill the valid password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":24,"value":"\"secret_sauce\"","children":[{"start":25,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the user is logged into saucedemo with valid session","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given login into saucedemo","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then fill the valid username \"visual_user\"","stepMatchArguments":[{"group":{"start":24,"value":"\"visual_user\"","children":[{"start":25,"value":"visual_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And fill the valid password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":24,"value":"\"secret_sauce\"","children":[{"start":25,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the user is logged into saucedemo with valid session","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":45,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given login into saucedemo","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then fill the in-valid username \"locked_out_user\"","stepMatchArguments":[{"group":{"start":27,"value":"\"locked_out_user\"","children":[{"start":28,"value":"locked_out_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And fill the in-valid password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":27,"value":"\"secret_sauce\"","children":[{"start":28,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then the system should throw the error message as \"Username and password do not match any user in this service\"","stepMatchArguments":[]}]},
]; // bdd-data-end