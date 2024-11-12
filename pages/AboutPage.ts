import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AboutPage extends BasePage {
  private readonly baseUrl = 'https://pocketaces2.github.io/fashionhub';

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigateTo({ url: `https://pocketaces2.github.io/fashionhub/about.html` });
  }
}
