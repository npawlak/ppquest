import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('button', { name: 'Zarejestruj' }).click();
  await expect(page.getByText('Pole Imię jest wymagane')).toBeVisible();
  await page.getByText('Pole Nazwisko jest wymagane').click();
  await expect(page.getByText('Pole E-mail jest wymagane')).toBeVisible();
  await expect(page.getByText('Pole Powtórz hasło jest')).toBeVisible();
  await expect(page.getByText('Pole Data urodzenia jest')).toBeVisible();
  await expect(page.getByText('To pole jest wymagane')).toBeVisible();
});