import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByPlaceholder('Imię').click();
  await page.getByPlaceholder('Imię').fill('Natalia');
  await page.getByPlaceholder('Imię').press('Tab');
  await page.getByPlaceholder('Nazwisko').fill('Pawlak');
  await page.getByPlaceholder('Twój adres e-mail').click();
  await page.getByPlaceholder('Twój adres e-mail').fill('test@o2.pl');
  await page.getByPlaceholder('Hasło', { exact: true }).click();
  await page.getByPlaceholder('Hasło', { exact: true }).fill('12qwAS!@');
  await page.getByPlaceholder('Powtórz hasło').click();
  await page.getByPlaceholder('Powtórz hasło').fill('12qwAS!@');
  await page.getByPlaceholder('Data urodzenia').click();
  await page.getByText('17', { exact: true }).click();
  await page.getByPlaceholder('Data urodzenia').click();
  await page.locator('button:nth-child(2)').first().click();
  await page.locator('button:nth-child(2)').first().click();
  await page.getByText('13', { exact: true }).click();
  await page.getByLabel('JęzykWybierz język afar').selectOption('bg');
  await page.getByPlaceholder('Numer telefonu').click();
  await page.getByPlaceholder('Numer telefonu').fill('123456789');
  await page.locator('form div').filter({ hasText: 'Akceptuję regulamin oraz' }).locator('div').click();
  await page.getByRole('button', { name: 'Zarejestruj' }).click();
  await expect(page.getByRole('heading', { name: 'Natalia, dziękujemy za' })).toBeVisible();
  await expect(page.getByText('Na Twój adres email test@o2.')).toBeVisible();
});