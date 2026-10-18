import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { pageFixture } from "../fixtures/pageFixture";

const { Given, When, Then } = createBdd();

Given('login into OrangeHM', async () => {
    await pageFixture.page.goto('/')
});

Then('fill the valid username {string}', async ({ }, username) => {
    await pageFixture.page.getByPlaceholder('Username').fill(username);
});

Then('fill the valid password {string}', async ({ }, password) => {
    await pageFixture.page.getByPlaceholder('Password').fill(password);
});

Then('the user clicks on the login button', async () => {
    await pageFixture.page.locator('[type="submit"]').click();
});

Then('the user is logged into OrangeHM with valid session', async () => {
    // await pageFixture.page.waitForTimeout(3000);
    await expect(pageFixture.page).toHaveURL(/dashboard/);
});
