const { test, expect } = require('@playwright/test');

test('DodoPizzaMoscowpageLoad', async ({ page }) => {
  await page.goto('https://dodopizza.ru/moscow');

  // Expect the URL to be "https://dodopizza.ru/moscow".
  await expect(page).toHaveURL(/https:\/\/dodopizza.ru\/moscow/);
});

test('PizzaSectionQuantity', async ({ page }) => {
  await page.goto('https://dodopizza.ru/moscow');

  // Expect the number of items in the "Pizza" section to be 34.
  const pizzaSection = await page.getByTestId('pizza-section');
  const pizzaItems = await pizzaSection.findAllByTestId('pizza-item');
  await expect(pizzaItems).toHaveLength(34);
});

test('RegionInHeader', async ({ page }) => {
  await page.goto('https://dodopizza.ru/moscow');

  // Expect the region in the header to be "Moscow".
  const region = await page.getByTestId('region-display');
  await expect(region).toHaveTextContent('Moscow');
});