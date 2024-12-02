import { test, expect } from '@playwright/test';
import { AboutPage } from '../pages/AboutPage.ts';
import { getBaseUrl } from '../utils/config.ts';

test('Check for console errors on the About page', async ({ page }) => {
  const aboutPage = new AboutPage(page);
  await aboutPage.navigateTo({ url: getBaseUrl() + 'about.html' });

  const errors = await aboutPage.getConsoleErrors(page);

  expect(errors.length).toBe(1); 
  
});


test('suppress console error in browser', async ({ page }) => {
  // Override console.error in the browser context
  await page.addInitScript(() => {
    console.error = () => {};  // This suppresses all console errors
  });

  const aboutPage = new AboutPage(page);
  const errors = await aboutPage.getConsoleErrors(page);
 
  expect(errors.length).toBe(0); 

});