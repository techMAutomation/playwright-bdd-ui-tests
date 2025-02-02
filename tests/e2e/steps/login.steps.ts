import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { COOKIES_PATH } from '../../utils/constants';
import fs from 'fs';

const { Given, When, Then } = createBdd(test); // Constructor

Given('I navigate to the User account', async({ page }) => {
    // Add cookies to the browser context
    const data = fs.readFileSync(COOKIES_PATH, 'utf-8');
    const cookiesData = JSON.parse(data);
    await page.context().addCookies(cookiesData.cookies);

    // Navigate to the Website
    await page.goto('/');
    await expect(page.getByRole('link').filter({ hasText:'Welcome' })).toBeVisible();
});

When('user signout', async({ commonPage }) => {
    await commonPage.clickLink('Log out');
});

Then('user should be on the Home page', async({ page }) => {
    await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
});

When('user clicks on Login link', async({ commonPage }) => {
    await commonPage.clickLink('Log in');
});

Then('user should see the login popup', async({ page }) => {
    await expect(page.getByRole('heading', { name: 'Log in'})).toBeVisible();
});

Then('user closes login popup', async({commonPage}) => {
    await commonPage.clickButton('Close');
});
