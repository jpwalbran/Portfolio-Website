import {test, expect, Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200'); // Adjust the URL to your Angular app's URL
});

test.describe("Project Cards", () => {
  test("It Should have a title.", async ({ page }) => {
    //Find the title element.
  })
});
