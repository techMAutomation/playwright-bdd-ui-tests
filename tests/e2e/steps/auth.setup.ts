import { expect, test as setup} from '@playwright/test';
import { getUserAccount } from '../../utils/getUserAccount';
import { COOKIES_PATH } from '../../utils/constants';

const userAccount = getUserAccount();

setup.describe('Login @setup', () => {
    setup('Authentication', async({ page }) => {
        await setup.step('Enter username and password', async() => {
            await page.goto('/');
            // Clicks on Login link
            await page.getByRole('link', { name: 'Log in'}).click();
            // Enters Username
            await expect(page.getByLabel('Log in').getByText('Username:')).toBeVisible();
            await page.locator('#loginusername').click();
            await page.locator('#loginusername').fill(userAccount.username);
            // Enters Password
            await expect(page.getByLabel('Log in').getByText('Password:')).toBeVisible();
            await page.locator('#loginpassword').click();
            await page.locator('#loginpassword').fill(userAccount.password);
        });

        await setup.step('Sign in and Verify Dashboard page', async() => {
            await page.getByRole('button', { name: 'Log in'}).click();
            await expect(page.getByRole('link').filter({ hasText:'Welcome' })).toBeVisible();
        });

        await setup.step('Store Cookies and local storage snapshot of current context', async() => {
            await page.context().storageState({ path: COOKIES_PATH });
        });
    });
});
