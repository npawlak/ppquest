import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByPlaceholder('Twój adres e-mail').click();
  await page.getByPlaceholder('Twój adres e-mail').fill('a');
  await expect(page.getByText('Pole E-mail musi być poprawnym adresem email')).toBeVisible();
  await page.getByPlaceholder('Twój adres e-mail').click();
  await page.getByPlaceholder('Twój adres e-mail').fill('a@');
  await expect(page.getByText('Pole E-mail musi być poprawnym adresem email')).toBeVisible();
  await page.getByPlaceholder('Twój adres e-mail').click();
  await page.getByPlaceholder('Twój adres e-mail').fill('a@o2');
  await expect(page.getByText('Pole E-mail musi być poprawnym adresem email')).toBeVisible();
  await page.getByPlaceholder('Twój adres e-mail').click();
  await page.getByPlaceholder('Twój adres e-mail').fill('a@o2.pl');
});