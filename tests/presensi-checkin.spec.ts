import { test, expect } from '@playwright/test';

test('Login Works', async ({ page }) => {

  await page.goto('https://dev-simpeg.waronhospital.com/#/login');

  await page.waitForSelector('input');

  const inputs = page.locator('input');

  await inputs.nth(0).fill('yogipratama@waronhospital.com');
  await inputs.nth(1).fill('PASSWORD_ASLI');

  // 🔥 ini kuncinya
  await page.keyboard.press('Enter');

  await page.waitForSelector('text=Presensi', { timeout: 10000 });

  await expect(page.getByText('Presensi')).toBeVisible();

});