import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByPlaceholder('Hasło', { exact: true }).click();
  await page.getByPlaceholder('Hasło', { exact: true }).fill('q');
  await expect(page.getByText('Hasło musi zawierać: co najmniej 8 znaków, dużą literę, liczbę, znak specjalny!')).toBeVisible();
  await page.getByPlaceholder('Hasło', { exact: true }).click();
  await page.getByPlaceholder('Hasło', { exact: true }).fill('qweA');
  await expect(page.getByText('Hasło musi zawierać: co najmniej 8 znaków, liczbę, znak specjalny!')).toBeVisible();
  await page.getByPlaceholder('Hasło', { exact: true }).click();
  await page.getByPlaceholder('Hasło', { exact: true }).fill('qweA!');
  await expect(page.getByText('Hasło musi zawierać: co najmniej 8 znaków, liczbę!')).toBeVisible();
  await page.getByPlaceholder('Hasło', { exact: true }).click();
  await page.getByPlaceholder('Hasło', { exact: true }).fill('qweA!1');
  await expect(page.getByText('Hasło musi zawierać: co najmniej 8 znaków!')).toBeVisible();
  await page.getByPlaceholder('Hasło', { exact: true }).click();
  await page.getByPlaceholder('Hasło', { exact: true }).fill('qweA!1aa');
});