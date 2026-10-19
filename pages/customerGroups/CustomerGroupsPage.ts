import { BasePage } from "../base/BasePage";
import { customerGroupsLocators } from "../../locators/customerGroups/customerGroupsLocators";

export class CustomerGroupsPage extends BasePage {
  filters = customerGroupsLocators.filters;
  columns = customerGroupsLocators.columns;

  public async open() {
    await super.open("customer-groups");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}