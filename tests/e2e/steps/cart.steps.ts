import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { When, Then } = createBdd(test); // Constructor

When('user clicks on Cart link', async({ page, commonPage }) => {
    const element = page.getByRole('link', { name: 'Cart'})
    await commonPage.clickAndVerifyURL(element, 'cart.html');
});

Then('user clicks on Place Order button', async({ commonPage }) => {
    await commonPage.clickButton('Place Order');
});

Then('user closes Place Order popup', async({ commonPage }) => {
    await commonPage.clickButton('Close');
});
