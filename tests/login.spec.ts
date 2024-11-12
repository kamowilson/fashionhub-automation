import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { getBaseUrl } from '../utils.config/config';

test('User Login to FashionHub', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateTo({ url: getBaseUrl() + 'login.html' });

  await loginPage.login('demouser', 'fashion123');
  await page.getByRole('button', {name: "Login"}).click();
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible(); 
});


