import { Page } from '@playwright/test';
import { BasePage } from '../../pages/base/BasePage';
import { promotionsLocators } from '../../locators/promotions/promotionsLocators';

export class PromotionsPage extends BasePage {
  filters = promotionsLocators.filters;
  columns = promotionsLocators.columns;

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open('promotions');
  }

  public async openFilters() {
    await this.filterButton().click();
  }
}
