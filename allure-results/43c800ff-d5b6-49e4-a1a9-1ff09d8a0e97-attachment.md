# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/e2e/features/demo.feature.spec.js >> Demo >> Login with Valid Credential
- Location: .features-gen/tests/e2e/features/demo.feature.spec.js:6:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://opensource-demo.orangehrmlive.com/dashboard"
Received: "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - locator resolved to <html>…</html>
    - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    11 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Dashboard" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - button ""
- text: 
- paragraph: Time at Work
- separator
- img "profile picture"
- paragraph: Punched Out
- paragraph: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
- text: 0h 0m Today
- button ""
- separator
- paragraph: This Week
- paragraph: Oct 12 - Oct 18
- text: 
- paragraph: 0h 0m
- text: 
- paragraph: My Actions
- separator
- button
- paragraph: (3) Leave Requests to Approve
- button
- paragraph: (1) Pending Self Review
- button
- paragraph: (1) Candidate to Interview
- text: 
- paragraph: Quick Launch
- separator
- button "Assign Leave"
- paragraph: Assign Leave
- button "Leave List"
- paragraph: Leave List
- button "Timesheets"
- paragraph: Timesheets
- button "Apply Leave"
- paragraph: Apply Leave
- button "My Leave"
- paragraph: My Leave
- button "My Timesheet"
- paragraph: My Timesheet
- text: 
- paragraph: Buzz Latest Posts
- separator
- img "profile picture"
- paragraph: manda akhil user
- paragraph: 2020-08-10 09:08 AM
- separator
- paragraph: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
- img "profile picture"
- paragraph: Sania Shaheen
- paragraph: 2020-08-10 09:08 AM
- separator
- paragraph: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
- img "profile picture"
- paragraph: Rebecca Harmony
- paragraph: 2020-08-10 09:04 AM
- separator
- paragraph: Throwback Thursdays!!
- img
- img "profile picture"
- paragraph: Russel Hamilton
- paragraph: 2020-08-10 09:03 AM
- separator
- paragraph: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
- paragraph: Employees on Leave Today
- text: 
- separator
- img "No Content"
- paragraph: No Employees are on Leave Today
- text: 
- paragraph: Employee Distribution by Sub Unit
- separator
- list:
  - listitem: Engineering
  - listitem: Human Resources
  - listitem: Administration
  - listitem: Client Services
  - listitem: Unassigned
- text: 
- paragraph: Employee Distribution by Location
- separator
- list:
  - listitem: Texas R&D
  - listitem: New York Sales Office
  - listitem: Unassigned
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
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
  8  |     await pageFixture.page.goto('/')
  9  | });
  10 | 
  11 | Then('fill the valid username {string}', async ({ }, username) => {
  12 |     await pageFixture.page.getByPlaceholder('Username').fill(username);
  13 | });
  14 | 
  15 | Then('fill the valid password {string}', async ({ }, password) => {
  16 |     await pageFixture.page.getByPlaceholder('Password').fill(password);
  17 | });
  18 | 
  19 | Then('the user clicks on the login button', async () => {
  20 |     await pageFixture.page.locator('[type="submit"]').click();
  21 | });
  22 | 
  23 | Then('the user is logged into OrangeHM with valid session', async () => {
  24 |     // await pageFixture.page.waitForTimeout(3000);
> 25 |     await expect(pageFixture.page).toHaveURL('/dashboard');
     |                                    ^ Error: expect(page).toHaveURL(expected) failed
  26 | });
  27 | 
```