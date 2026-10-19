import { BasePage } from "../base/BasePage";
import { ordersLocators } from "../../locators/orders/ordersLocators";

export class OrdersPage extends BasePage {
  filters = ordersLocators.filters;
  columns = ordersLocators.columns;

  public async open() {
    await super.open("orders");
  }

  public async openFilters() {
    await this.filterButton().click();
  }
}