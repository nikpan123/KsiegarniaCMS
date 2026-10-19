import { BasePage } from "../base/BasePage";
import { customersLocators } from "../../locators/customers/customersLocators";

export class CustomersPage extends BasePage {
  filters = customersLocators.filters;
  columns = customersLocators.columns;

  public async open() {
    await super.open("customers");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}