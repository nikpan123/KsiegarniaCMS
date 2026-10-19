import { Page } from "@playwright/test";
import { BasePage } from "../../pages/base/BasePage";
import { shippingCategoriesLocators } from "../../locators/shippingCategories/shippingCategoriesLocators";
import { commonLocators } from "../../locators/commonLocators";

export class ShippingCategoriesPage extends BasePage {
  filters = shippingCategoriesLocators.filters;
  columns = shippingCategoriesLocators.columns;
  buttons = commonLocators.buttons;

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open("shipping-categories");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}
