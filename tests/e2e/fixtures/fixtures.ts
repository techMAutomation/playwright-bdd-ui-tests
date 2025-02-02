// Fixtures are used to manage the PageObjects
import { test as base } from 'playwright-bdd';
import { CommonPage } from '../pages/common.page';

export const test = base.extend<{ commonPage: CommonPage }>({
    commonPage: async ({ page }, use) => {
      const commonPage = new CommonPage(page);
      await use(commonPage);
    },

});

