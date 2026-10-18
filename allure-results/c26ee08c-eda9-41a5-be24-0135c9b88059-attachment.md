# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/e2e/features/demo.feature.spec.js >> Demo >> Login with Valid Credential
- Location: .features-gen/tests/e2e/features/demo.feature.spec.js:10:7

# Error details

```
Error: Missing step: Given navigate to the OrangeHM
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Not Found" [level=1] [ref=e2]
  - paragraph [ref=e3]: The requested URL was not found on this server.
```

# Test source

```ts
  1  | // Generated from: tests/e2e/features/demo.feature
  2  | import { test } from "playwright-bdd";
  3  | 
  4  | test.describe('Demo', () => {
  5  | 
  6  |   test.beforeEach('Background: Login into the application', async ({ Given }, testInfo) => { if (testInfo.error) return;
  7  |     await Given('login into OrangeHM'); 
  8  |   });
  9  |   
  10 |   test('Login with Valid Credential', async ({ Given, When, Then, And }) => { 
> 11 |     await Given('navigate to the OrangeHM'); 
     |           ^ Error: Missing step: Given navigate to the OrangeHM
  12 |     await When('fill the valid username "Admin"'); 
  13 |     await And('fill the valid password "admin123"'); 
  14 |     await Then('the user is logged into OrangeHM with valid session'); 
  15 |   });
  16 | 
  17 | });
  18 | 
  19 | // == technical section ==
  20 | 
  21 | test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
  22 | test.afterEach('AfterEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('after', {  }));
  23 | 
  24 | test.use({
  25 |   $test: [({}, use) => use(test), { scope: 'test', box: true }],
  26 |   $uri: [({}, use) => use('tests/e2e/features/demo.feature'), { scope: 'test', box: true }],
  27 |   $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
  28 | });
  29 | 
  30 | const bddFileData = [ // bdd-data-start
  31 |   {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given login into OrangeHM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given navigate to the OrangeHM","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When fill the valid username \"Admin\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Admin\"","children":[{"start":25,"value":"Admin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And fill the valid password \"admin123\"","stepMatchArguments":[{"group":{"start":24,"value":"\"admin123\"","children":[{"start":25,"value":"admin123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the user is logged into OrangeHM with valid session","stepMatchArguments":[]}]},
  32 | ]; // bdd-data-end
```