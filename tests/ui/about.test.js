const { test, expect } = require('@playwright/test');

test('Check about page', async ({ page }) => {
  await page.goto('http://localhost:8090/About');
  const heading = await page.$('body > h1');
  const text = await heading.textContent();
  expect(text).toBe('About');
});

test('Check about page test', async ({ page }) => {
  await page.goto('http://localhost:8090/about');
  const heading = await page.$('body > p');
  const text = await heading.textContent();
  expect(text).toBe('This is the Regular exam for Software Engineering and DevOps course @ SoftUni');
});
