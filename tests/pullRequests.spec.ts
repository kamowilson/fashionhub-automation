import { test, expect } from '@playwright/test';
import { GitHubPRPage } from '../pages/GitHubPRPage';
import { TEST_DATA } from '../pages/TestData';
import { writeToCsv } from '../utils/csvHelper';

test('Export pull requests to CSV file', async ({ page }) => {
    const githubPage = new GitHubPRPage(page);
    await githubPage.navigate(TEST_DATA.URLS.GITHUB_PRS);
    
    const pullRequests = await githubPage.getPullRequests();
    const csvFileName = "pull-requests-" + Date.now() + ".csv";
    await writeToCsv(pullRequests, csvFileName);
    
    // Add assertion to verify the pull requests were retrieved successfully
    expect(pullRequests.length).toBeGreaterThan(0);
});