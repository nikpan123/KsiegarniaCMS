import { BasePage } from "../base/BasePage";
import { paymentMethodsLocators } from "../../locators/paymentMethods/paymentMethodsLocators";

export class PaymentMethodsPage extends BasePage {
  menu = paymentMethodsLocators.menu;
  filters = paymentMethodsLocators.filters;
  columns = paymentMethodsLocators.columns;
  specificButtons = paymentMethodsLocators.specificButtons;

  public async open() {
    await super.open("payment-methods");
  }

  public async clickCreateButton() {
    await this.createButton().click();
  }

  public async openFilters() {
    await this.filterButton().click();
  }

  public async waitForMenuVisible() {
    await this.page.locator(this.menu.href1).waitFor({ state: "visible", timeout: 10000 });
  }
}