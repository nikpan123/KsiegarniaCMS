import { BasePage } from "../base/BasePage";
import { productOptionsLocators } from "../../locators/productOptions/productOptionsLocators";

export class ProductOptionsPage extends BasePage {
  filters = productOptionsLocators.filters;
  columns = productOptionsLocators.columns;

  public async open() {
    await super.open("product-options");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}