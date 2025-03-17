const {test, expect} = require('@playwright/test');

test('has title', async ({page}) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  
});


test('get started link', async ({page}) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.click('text=Get started');

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveSelector('text=Installation');
});