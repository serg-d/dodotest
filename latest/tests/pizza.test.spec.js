const { test, expect } = require('@playwright/test');

test('DodoPizzaMoscowpageLoad', async ({ page }) => {
  await page.goto('https://dodopizza.ru/moscow');

  // Expect the URL to be "https://dodopizza.ru/moscow".
  await expect(page).toHaveURL(/https:\/\/dodopizza.ru\/moscow/);
});

test('PizzaSectionQuantity', async ({ page }) => {
  await page.goto('https://dodopizza.ru/moscow');
  
  // Wait for the selector to become available
  await page.waitForSelector('a[href^="/moscow/pizza/"]');
  
  // Count the number of pizzas on the page
  const pizzas = await page.evaluate(() => {
  return document.querySelectorAll('a[href^="/moscow/pizza/"]').length;
  });
  
  // Expect the number of pizzas to be 34
  await expect(pizzas).toBe(34);
});

test('RegionInHeader', async ({ page }) => {
  await page.goto('https://dodopizza.ru/moscow');

  // Expect the region in the header to be "Moscow".
  const region = await page.getByTestId('header__about-slogan-text_link');
  await page.getByTestId('header__about-slogan-text_link').click();
  await expect(await region.textContent()).toEqual('Москва');
  
});

module.exports = { test, expect };