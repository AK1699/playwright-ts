import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { pageFixture } from "../fixtures/pageFixture";

const { Given, When, Then } = createBdd();

Given('login into saucedemo', async () => {
    await pageFixture.page.goto('/')
});

Then('fill the valid username {string}', async ({ }, username) => {
    await pageFixture.page.getByPlaceholder('Username').fill(username);
});

Then('fill the valid password {string}', async ({ }, password) => {
    await pageFixture.page.getByPlaceholder('Password').fill(password);
});
Then('fill the in-valid username {string}', async ({ }, username) => {
    await pageFixture.page.getByPlaceholder('Username').fill(username);
});

Then('fill the in-valid password {string}', async ({ }, password) => {
    await pageFixture.page.getByPlaceholder('Password').fill(password);
});

When('the user clicks on the login button', async () => {
    await pageFixture.page.locator('[type="submit"]').click();
});

Then('the user is logged into saucedemo with valid session', async () => {
    // await pageFixture.page.waitForTimeout(3000);
    await expect(pageFixture.page).toHaveURL(/inventory/);
});

Then('the system should throw the error message as "Username and password do not match any user in this service"', async () => {
    // await pageFixture.page.waitForTimeout(3000);
    const errorMessage = pageFixture.page.locator('[data-test="error"]');
    await expect(errorMessage).toContainText('Sorry, this user has been locked out.')
});
