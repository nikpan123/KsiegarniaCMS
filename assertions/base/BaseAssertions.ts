import {type Page, type Locator, expect, test} from "@playwright/test";

type LabeledElement = {selector: string | Locator; label: string};

export class BaseAssertions {
  constructor(protected page: Page) {}

  protected async assertElementsVisible(elements: LabeledElement[]) {
    for(const {selector,label} of elements) {
      await test.step(label, async () => {
        const locator = typeof selector === "string" ? this.page.locator(selector) : selector;
        await expect(locator, label).toBeVisible();
      });
    }
  }
}
