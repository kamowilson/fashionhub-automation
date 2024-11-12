// tests/statusCode.spec.ts
import { test, expect } from '@playwright/test';
import { getBaseUrl } from '../utils.config/config';
import exp from 'constants';

test('Verify page status codes', async ({ page }) => {
  await page.goto(getBaseUrl());
  const links = await page.$$eval('a', (anchors) => anchors.map(a => a.href));

  for (const link of links) {
    const response = await page.goto(link);

    expect(response).not.toBeNull();
    if (response !== null && response.status() >= 200 && response.status() < 400) {
      expect(response.status()).toBeGreaterThanOrEqual(200); 
      expect(response.status()).toBeLessThanOrEqual(399)
    }
  }
});
