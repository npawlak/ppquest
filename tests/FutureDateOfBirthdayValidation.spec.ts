import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByPlaceholder('Data urodzenia').click();
  await page.getByPlaceholder('Data urodzenia').fill('2029-09-20');
  await page.getByPlaceholder('Data urodzenia').press('Enter');
  await expect(page.getByText('Data urodzenia jest nieprawidłowa')).toBeVisible();
});