# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/e2e/features/demo.feature.spec.js >> Demo >> Login with Valid Credential
- Location: .features-gen/tests/e2e/features/demo.feature.spec.js:6:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Username')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Not Found" [level=1] [ref=e2]
  - paragraph [ref=e3]: The requested URL was not found on this server.
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import { createBdd } from "playwright-bdd";
  3  | import { pageFixture } from "../fixtures/pageFixture";
  4  | 
  5  | const { Given, When, Then } = createBdd();
  6  | 
  7  | Given('login into OrangeHM', async () => {
  8  |     await pageFixture.page.goto('/auth/login')
  9  | });
  10 | 
  11 | Then('fill the valid username {string}', async ({ }, username) => {
> 12 |     await pageFixture.page.getByPlaceholder('Username').fill(username);
     |                                                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  13 | });
  14 | 
  15 | Then('fill the valid password {string}', async ({ }, password) => {
  16 |     await pageFixture.page.getByPlaceholder('Password').fill(password);
  17 | });
  18 | 
  19 | Then('the user is logged into OrangeHM with valid session', async () => {
  20 |     await expect(pageFixture.page).toHaveURL('/dashboard');
  21 | });
  22 | 
```