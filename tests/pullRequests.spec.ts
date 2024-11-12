import { test, expect } from '@playwright/test';
import { GitHubPRPage } from '../pages/GitHubPRPage';
import { TEST_DATA } from '../pages/TestData';
import { writeToCsv } from '../utils.config/csvHelper';

test('should export pull requests to CSV', async ({ page }) => {
    const githubPage = new GitHubPRPage(page);
    await githubPage.navigate(TEST_DATA.URLS.GITHUB_PRS);
    
    const pullRequests = await githubPage.getPullRequests();
    const csvFileName = "pull-requests-" + Date.now() + ".csv";
    await writeToCsv(pullRequests, csvFileName);
    
    // Add assertion to verify the pull requests were retrieved
    expect(pullRequests.length).toBeGreaterThan(0);
});