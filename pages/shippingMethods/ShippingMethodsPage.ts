import { Page } from "@playwright/test";
import { BasePage } from "../../pages/base/BasePage";
import { shippingMethodsLocators } from "../../locators/shippingMethods/shippingMethodsLocators";
import { commonLocators } from "../../locators/commonLocators";

export class ShippingMethodsPage extends BasePage {
  filters = shippingMethodsLocators.filters;
  columns = shippingMethodsLocators.columns;
  buttons = commonLocators.buttons;

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open("shipping-methods");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}
