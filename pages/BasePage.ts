import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async navigateTo({ url }: { url: string }): Promise<void> {
    await this.page.goto(url);
  }

 
async getConsoleErrors(page: Page): Promise<string[]> {
  const consoleErrors: string[] = [];

  // Listen for console error events and add errors to the array
  this.page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  await page.goto(page.url());

  // Return the captured errors
  return consoleErrors;
}
}

