import { BasePage } from "../base/BasePage";
import { paymentsLocators } from "../../locators/payments/paymentsLocators";

export class PaymentsPage extends BasePage {
  filters = paymentsLocators.filters;
  columns = paymentsLocators.columns;

  public async open() {
    await super.open("payments");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}