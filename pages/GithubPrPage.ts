import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class GitHubPRPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async getPullRequests(): Promise<Array<{name: string, createdDate: string, author: string}>> {
        return await this.page.$$eval('.Box-row', (rows) => {
            return rows.map(row => ({
                name: row.querySelector('.Link--primary')?.textContent?.trim() || '',
                createdDate: row.querySelector('relative-time')?.getAttribute('datetime') || '',
                author: row.querySelector('.opened-by')?.textContent?.trim().split(' ')[0] || ''
            }));
        });
    }
}