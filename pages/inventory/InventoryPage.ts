import { BasePage } from "../base/BasePage";
import { inventoryLocators } from "../../locators/inventory/inventoryLocators";

export class InventoryPage extends BasePage {
  filters = inventoryLocators.filters;
  columns = inventoryLocators.columns;

  public async open() {
    await super.open("inventory");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}