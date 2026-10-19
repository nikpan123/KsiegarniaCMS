import { Page, Locator, expect } from '@playwright/test';

type LabeledElement = {
  selector: string | Locator;
  label: string;
};

export class BaseAssertions {
  constructor(protected page: Page) {}

  protected async assertElementsVisible(elements: LabeledElement[]) {
    const checks = elements.map(async ({ selector, label }) => {
      const locator = typeof selector === 'string' ? this.page.locator(selector) : selector;

      try {
        await expect(locator).toBeVisible({ timeout: 5000 });
        const msg = label === "Liczba wyników" ? "jest widoczna" : "jest widoczny";
        console.log(`✅ ${label} ${msg}.`);
      } catch (error) {
        console.error(`❌ Element "${label}" nie jest widoczny!`);
        throw error;
      }
    });

    await Promise.all(checks);
  }
}
