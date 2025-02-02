import { expect, Locator, type Page } from '@playwright/test';

export class CommonPage {
    page: Page;
 
    constructor(page: Page) {
        this.page = page;
    }

    async clickLink(text: string) {
        const element = this.page.getByRole('link', { name: text }).first();
        await element.click();
    }

    async clickButton(text: string) {
        const element = this.page.getByRole('button', { name: text }).first();
        await element.click();
    }

    async clickAndVerifyURL(element: Locator, expectedURL: string) {
        // Wait for the URL to change
        await Promise.all([
            await element.click(),
            await this.page.waitForURL((url) => url.toString().includes(expectedURL)),
        ]);
        const currentURL = this.page.url();
        expect(currentURL).toContain(expectedURL);
    }
}
